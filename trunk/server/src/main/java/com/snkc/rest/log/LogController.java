package com.snkc.rest.log;

import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class LogController {
    private Logger logger = LoggerFactory.getLogger(LogController.class);

    private String getClientIp(HttpServletRequest request) {
        String clientIp = request.getHeader("X-Forwarded-For");
        if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = request.getHeader("Proxy-Client-IP");
        }
        if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = request.getHeader("WL-Proxy-Client-IP");
        }
        if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = request.getHeader("HTTP_CLIENT_IP");
        }
        if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (clientIp == null || clientIp.isEmpty() || "unknown".equalsIgnoreCase(clientIp)) {
            clientIp = request.getRemoteAddr();
        }
        return clientIp;
    }
    // rolelogin  serverid userid username level cup ip platform totalcash diamond lv1highscore
    private List<String> loginFields = new ArrayList<>() {
        {
            //add("rolelogin");
            add("serverid");
            add("userid");
            add("username");
            add("level");
            add("cup");
            add("ip");
            add("platform");
            add("totalcash");
            add("diamond");
            add("lv1highscore");
        }
    };

    private void doLoginLog(Map<String, String> logParameters)
    {
        String logString = "login";
        for (String filed : loginFields)
        {
            String val = logParameters.getOrDefault(filed, "");
            logString += "|" + val;
        }
        logger.info(logString);
    }

    @PostMapping("/log")
    public void doLog(@RequestBody Log log, @RequestAttribute("userID") String userID, HttpServletRequest request)
    {
        Map<String, String> logParameters = log.parameters();
        String ip = getClientIp(request);
        logParameters.put("ip", ip);
        logParameters.put("serverid", "0");
        logParameters.put("userid", userID);
        if (log.logType().equals("login"))
        {
            doLoginLog(logParameters);
        }
    }
}
