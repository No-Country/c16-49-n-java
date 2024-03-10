package com.nocountry.appintercambiolibros;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class PaginasCompartidasApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaginasCompartidasApplication.class, args);
	}

	/*@Bean
	public CommandLineRunner createPasswordCommand(PasswordEncoder passwordEncoder){
		return args -> {
			System.out.println(passwordEncoder.encode("clave123")); PABLO
			System.out.println(passwordEncoder.encode("clave456")); YORMARIS
			System.out.println(passwordEncoder.encode("clave789")); MATÍAS
			System.out.println(passwordEncoder.encode("clave101")); MARIANA
		};
	}*/


}
