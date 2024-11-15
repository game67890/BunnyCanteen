package com.snkc.event.publisher;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationEvent;
import org.springframework.stereotype.Component;

@Component
public class EventPublisher {

    Logger logger = LoggerFactory.getLogger(EventPublisher.class);

    @Autowired
    private ApplicationContext applicationContext;

    public void publish(ApplicationEvent applicationEvent){
        applicationContext.publishEvent(applicationEvent);
        logger.debug("新事件发布 "+applicationEvent.toString());
    }
}
