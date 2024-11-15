package com.snkc.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Created by gaosong
 * 2024/10/30
 */
@Configuration
public class HeadImgConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/getheadimg/**").addResourceLocations("file:headimagefilepath/");
    }
}
