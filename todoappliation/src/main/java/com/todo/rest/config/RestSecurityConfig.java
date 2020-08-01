//package com.todo.rest.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//
//@Configuration
//@EnableWebSecurity
////@CrossOrigin(origins = "http://localhost:4200")
//public class RestSecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
//
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//		auth.inMemoryAuthentication().withUser("user98").password("{noop}dummy").roles("USER");
//	}
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.cors();
//		http.csrf().disable();
//		  http.authorizeRequests().antMatchers("/**").fullyAuthenticated().and
//		 ().httpBasic();
//	}
//
////	@Bean
////	public static NoOpPasswordEncoder passwordEncoder() {
////		return (NoOpPasswordEncoder) NoOpPasswordEncoder.getInstance();
////	}
//
////		@Override
////	    public void addCorsMappings(CorsRegistry registry) {
////	        registry.addMapping("/**")
////	                .allowedOrigins("http://localhost:4200")
////	                .allowedMethods("GET", "POST", "DELETE", "PUT");
////	    }	
//
//}
