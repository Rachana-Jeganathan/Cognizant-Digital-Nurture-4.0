package com.cognizant.spring_learn.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String sayHello()
    {
        System.out.println("START: sayHello()");
        String s = "Hello World!";
        System.out.println("END: sayHello()");
        return s;
    }
}
