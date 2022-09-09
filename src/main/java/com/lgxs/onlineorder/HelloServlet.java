package com.lgxs.onlineorder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.lgxs.onlineorder.entity.Customer;
import org.apache.commons.io.IOUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

//name is just a notation
//必须是do开头的，否则tomcat无法识别
//Maven 自动保存压缩文件

//Receive request, Parse URL// http method, HelloServlet.doGet
@WebServlet(name = "helloServlet", value = "/hello-servlet")
public class HelloServlet extends HttpServlet {
    private String message;

    public void init() {
        message = "Hello World!";
    }

//    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        response.setContentType("text/html"); //data format, 数据返回的格式
//
//        String username = request.getParameter("username");
//
//        // Hello
//        PrintWriter out = response.getWriter(); // object that can print data into response body
//        out.println("<html><body>");
//        out.println("<h1>HELLO " + username + "</h1>");
//        out.println("</body></html>");
//    }

//    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
//        response.setContentType("application/json");
//
//
//        JSONObject customer = new JSONObject();
//        customer.put("email", "sun@laioffer.com");
//        customer.put("first_name", "rick");
//        customer.put("last_name", "sun");
//        customer.put("age", 50);
//
//        JSONObject customer2 = new JSONObject();
//        customer2.put("email", "wan@laioffer.com");
//        customer2.put("first_name", "Kaining");
//        customer2.put("last_name", "Wan");
//        customer2.put("age", 100);
//        //response.getWriter().print(customer);
//
//        JSONArray array = new JSONArray();
//        array.put(customer);
//        array.put(customer2);
//
//        response.getWriter().print(array);
//    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json");
        ObjectMapper mapper = new ObjectMapper();

        Customer customer= new Customer();
        customer.setEmail("sun@laioffer.com");
        customer.setPassword("123456");
        customer.setFirstName("rick");
        customer.setLastName("sun");
        customer.setEnabled(true);

        Customer customer2= new Customer();
        customer2.setEmail("sun@laioffer.com");
        customer2.setPassword("123456");
        customer2.setFirstName("wan");
        customer2.setLastName("sun");
        customer2.setEnabled(true);

        JSONArray array = new JSONArray();
        array.put(customer);
        array.put(customer2);

        //response.getWriter().print(array);
        response.getWriter().print(mapper.writeValueAsString(array.get(1)));
        //response.getWriter().print(mapper.writeValueAsString(customer));
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Read customer information from request body
        JSONObject jsonRequest = new JSONObject(IOUtils.toString(request.getReader()));
        String email = jsonRequest.getString("email");
        String firstName = jsonRequest.getString("first_name");
        String lastName = jsonRequest.getString("last_name");
        int age = jsonRequest.getInt("age");
        // Print customer information to IDE console
        System.out.println("Email is: " + email);
        System.out.println("First name is: " + firstName);
        System.out.println("Last name is: " + lastName);
        System.out.println("Age is: " + age);
        // Return status = ok as response body to the client
        response.setContentType("application/json");
        JSONObject jsonResponse = new JSONObject();
        jsonResponse.put("status", "ok");
        response.getWriter().print(jsonResponse);
    }



    public void destroy() {
    }
}