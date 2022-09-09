package com.lgxs.onlineorder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;

import javax.sql.DataSource;

//https://docs.spring.io/spring-security/site/docs/5.5.5/reference/html5/

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;
    //判断访问的URL需要的权限当前的用户有没有
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                //跨域请求伪造 token base可以解决csrf attack。 这里没有解决attack的问题
                .csrf().disable()
                .formLogin()
                //.successForwardUrl("/login?error=false")
                .failureForwardUrl("/login?error=true");
        http
                .authorizeRequests()
                .antMatchers("/order/*", "/cart", "/checkout").hasAuthority("ROLE_USER")
                //可以这么写来区分权限
                //.antMatchers("/admin").hasAuthority("ROLE_ADMIN")
                .anyRequest().permitAll();
    }


    //获得information，有filter专门去做match
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {

        auth
                .jdbcAuthentication()
                //访问datasource
                .dataSource(dataSource)
                //把数据取回来，根据发送过来的请求replace这里的？来查找
                .usersByUsernameQuery("SELECT email, password, enabled FROM customers WHERE email=?")
                .authoritiesByUsernameQuery("SELECT email, authorities FROM authorities WHERE email=?");

    }

    @SuppressWarnings("deprecation")
    @Bean
    public static NoOpPasswordEncoder passwordEncoder() {
        return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
    }
}
