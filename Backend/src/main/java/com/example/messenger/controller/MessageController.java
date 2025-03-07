package com.example.messenger.controller;

import com.example.messenger.model.Message;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "rest/messages", produces = "application/json")
public class MessageController {
    @GetMapping(path = "/list")
    public List<Message> getMessages() {
        List<Message> response = Arrays.asList(
                new Message("Exciting news! There's a new line of [type of product] that you're gonna love! Check it out here: [Link]"),
                new Message("Don't forget! The budget meeting is TODAY at 1pm. Please don't be late!"),
                new Message("Welcome to [business name]’s VIP Text Club. You’ll receive VIP deals no one else gets! Reply 'stop' to opt out")
        );

        return response;
    }
}
