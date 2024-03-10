package com.nocountry.appintercambiolibros.openapi;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
@SecurityScheme(
        name = "bearerAuth",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer")
@Configuration
public class SpringOpenApiConfig {

    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("demo-paginas-compartidas")
                .pathsToMatch("v1", "/api/v1/libros/**", "/api/v1/imagenes/**", "/api/v1/usuarios/**", "/api/v1/auth/**")
                .packagesToScan("com.nocountry.appintercambiolibros.controllers")
                .build();
    }

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("Demo Paginas Compartidas")
                        .description("WebApp para intercambiar libros")
                        .version("v1")
                        .license(new License().name("Paginas Compartidas 1.0").url("http://paginascompartidas")))
                .externalDocs(new ExternalDocumentation()
                        .description("Paginas Compartidas API Documentación")
                        .url("https://nosequeponer"));
    }
}
