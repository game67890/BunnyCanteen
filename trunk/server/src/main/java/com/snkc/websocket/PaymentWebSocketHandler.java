package com.snkc.websocket;

import com.alibaba.fastjson2.JSONObject;
import com.snkc.game.rank.RankController;
import com.snkc.log.LogUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class PaymentWebSocketHandler extends TextWebSocketHandler implements DisposableBean {
    private static Logger logger = LoggerFactory.getLogger(PaymentWebSocketHandler.class);

    // 存储用户和 WebSocket 会话的映射
    private static final Map<String, WebSocketSession> userSessions = new ConcurrentHashMap<>();
    // 储存用户未发送的信息
    private static final ConcurrentHashMap<String, LinkedList<String>> unNotifiedMessage = new ConcurrentHashMap<>();


    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        // 暂时不处理用户 ID，在收到消息后再保存
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        // 解析客户端发来的初始化消息
        String payload = message.getPayload();
        // 假设客户端发送了一个 JSON 格式的初始化消息
        if (payload.contains("\"type\":\"init\"")) {
            // 简单解析用户 ID（你可以使用更健壮的 JSON 解析方法）
            String userId = extractUserIdFromPayload(payload);
            if (userId != null) {
                final WebSocketSession old = userSessions.get(userId);
                if (old != null) {

                    JSONObject notifyJson = new JSONObject();
                    notifyJson.put("NotifyType","Kick");
                    notifyUserWithoutRecord(userId, notifyJson.toString());
                    old.close();
                    logger.info("User " + userId + " isKicked");
                }

                userSessions.put(userId, session);

                reNotifyUser(userId);

                logger.info("User " + userId + " connected. SessionID = " + session.getId());
            }
        }
    }

    public void notifyUser(String userId, String message) {
        WebSocketSession session = userSessions.get(userId);
        if (session != null && session.isOpen()) {
            try {
                session.sendMessage(new TextMessage(message));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }else {
            if (!unNotifiedMessage.containsKey(userId)){
                unNotifiedMessage.put(userId,new LinkedList<>());
            }
            unNotifiedMessage.get(userId).add(message);
            logger.error("WebSocket Not Found. Userid = "+userId+" Content = "+message);
        }
    }

    //发送失败不会暂存的通知
    public void notifyUserWithoutRecord(String userId, String message) {
        WebSocketSession session = userSessions.get(userId);
        if (session != null && session.isOpen()) {
            try {
                session.sendMessage(new TextMessage(message));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    public void reNotifyUser(String userID){
        if (!unNotifiedMessage.containsKey(userID)){
            return;
        }
        LinkedList<String> message = unNotifiedMessage.remove(userID);
        if (message == null || message.isEmpty()){
            return;
        }
        WebSocketSession session = userSessions.get(userID);
        logger.info("ReNotify UserID = "+userID+" Message");
        if (session != null && session.isOpen()) {
            try {
                for (String str : message){
                    session.sendMessage(new TextMessage(str));
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private String extractUserIdFromPayload(String payload) {
        // 简单提取用户 ID 的方法（推荐使用 JSON 解析库）
        String prefix = "\"userId\":\"";
        int start = payload.indexOf(prefix);
        if (start != -1) {
            int end = payload.indexOf("\"", start + prefix.length());
            return payload.substring(start + prefix.length(), end);
        }
        return null;
    }

    @Override
    public void destroy() throws Exception {
        LogUtil.doShutDownLog();
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        super.afterConnectionClosed(session, status);
        logger.info("WebSocket Closed. SessionID = "+session.getId()+" CloseStatus = "+status.toString());
    }
}
