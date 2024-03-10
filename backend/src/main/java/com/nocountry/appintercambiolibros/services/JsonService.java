package com.nocountry.appintercambiolibros.services;

public interface JsonService {

    /**
     * Toma un json en String y lo mapea al objeto pasado por parametro
     * @param <T> Tipo deseado para mapear
     * @param json String json
     * @param obj class literal de la clase para mapear
     * @return Objeto mapeado
     */
    <T> T fromJson(String json, Class<T> obj);
}
