package com.example.newgs.DTOs.response;

import java.util.ArrayList;
import java.util.List;

class FieldProperty {
    public String field;
    public String message;
    
    public FieldProperty(String _f, String _m){
        field = _f;
        message = _m;
    }
};

public class SendFieldNotValidDTO {
    public final String type = "field";
    public List<FieldProperty> fields = new ArrayList<>();
    
    public static FieldProperty createFieldProperty(String field, String message){
        return new FieldProperty(field, message);
    }
}