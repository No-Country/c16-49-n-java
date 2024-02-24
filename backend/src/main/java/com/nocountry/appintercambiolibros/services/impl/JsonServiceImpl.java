package com.nocountry.appintercambiolibros.services.impl;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.appintercambiolibros.services.JsonService;

@Service
public class JsonServiceImpl implements JsonService {

    @Override
    public <T> T fromJson(String json, Class<T> obj){
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, obj);
        } catch (Exception e) {
            return null;
        }

    }

}
