package com.snkc.filter;

import com.google.api.client.http.HttpMethods;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.web.util.ContentCachingRequestWrapper;
import org.springframework.web.util.ContentCachingResponseWrapper;

import java.io.IOException;

public class RequestLogFilter extends HttpFilter {

    static final Logger log = LoggerFactory.getLogger(RequestLogFilter.class);

    /**
     *
     */
    private static final long serialVersionUID = 8991118181953196532L;


    @Override
    protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        // Wrapper 封装 Request 和 Response
        ContentCachingRequestWrapper cachingRequest = new ContentCachingRequestWrapper(request);
        ContentCachingResponseWrapper cachingResponse = new ContentCachingResponseWrapper(response);

        // 继续执行请求链
        chain.doFilter(cachingRequest, cachingResponse);

        if (needOutputLog(request)) {
            /**
             * 在请求完成后记录请求、响应日志
             */
            // 请求方法
            String method = request.getMethod();
            // URI
            String uri = request.getRequestURI();
            // 请求ip
            String ipAddress = getIpAddress(request);
            // 请求授权码
            Object userID = request.getAttribute("userID");
            if (userID == null) {
                userID = request.getHeader(HttpHeaders.AUTHORIZATION);
            }
            // 请求体
            byte[] requestContent = cachingRequest.getContentAsByteArray();

            log.info("[{}][{}][{}] Request => {} {}", userID, ipAddress, method, uri, new String(requestContent));

            // 响应状态
            int status = response.getStatus();
            // 响应体
            byte[] responseContent = cachingResponse.getContentAsByteArray();

            log.info("[{}] Response <= {} {}", userID, status, new String(responseContent));
        }

        /**
         * 把缓存的响应数据，响应给客户端
         */
        cachingResponse.copyBodyToResponse();
    }

    private boolean needOutputLog(HttpServletRequest request) {
        if (HttpMethods.OPTIONS.equals(request.getMethod())) {
            return false;
        }
        return true;
    }

    private String getIpAddress(HttpServletRequest request) {
        String ipAddress = request.getHeader("X-Forwarded-For");
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.isEmpty() || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
        }
        return ipAddress;
    }
}
