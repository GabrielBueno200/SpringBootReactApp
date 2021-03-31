package com.veterinary.configurations;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
	    httpSecurity.cors().configurationSource(request -> {
	      var cors = new CorsConfiguration();
	      cors.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
	      cors.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
	      cors.setAllowedHeaders(Arrays.asList("*"));
	      cors.setAllowCredentials(false);
	      return cors;
	    }).and().csrf().disable();;
	}
}