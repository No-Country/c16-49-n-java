package com.nocountry.appintercambiolibros;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

/*@EnableAutoConfiguration( exclude = {
	DataSourceAutoConfiguration.class,
	HibernateJpaAutoConfiguration.class,
	SecurityAutoConfiguration.class
})*/
@SpringBootApplication
public class PaginasCompartidasApplication {

	public static void main(String[] args) {
		SpringApplication.run(PaginasCompartidasApplication.class, args);
	}

}
