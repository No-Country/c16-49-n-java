package com.nocountry.appintercambiolibros.openapi;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringOpenApiConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Paginas Compartidas")
                        .description("WebApp para intercambiar libros")
                        .version("v1")
                        .license(new License().name("Paginas Compartidas 2.0").url("http://paginascompartidas")))
                .externalDocs(new ExternalDocumentation()
                        .description("Paginas Compartidas API Documentación")
                        .url("https://nosequeponer"));
    }
}
