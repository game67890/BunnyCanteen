package com.snkc.mbean;

import ch.qos.logback.classic.Level;
import ch.qos.logback.classic.LoggerContext;
import com.snkc.BunnyCanteenApplication;
import com.snkc.data.DataManager;
import io.micrometer.common.util.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ServerMXBeanService implements ServerMXBean {

    private final Logger log = LoggerFactory.getLogger(ServerMXBeanService.class);

    @Override
    public String state() {
        return "";
    }

    @Override
    public void reloadLog(String rootLevel, String singleLevel, String singlePath) {
        LoggerContext loggerContext = (LoggerContext) LoggerFactory.getILoggerFactory();
        log.warn("set log rootLevel:{},singleLevel:{},singlePath:{}", rootLevel, singleLevel,
                singlePath);
        if (!StringUtils.isEmpty(rootLevel)) {
            // 设置全局日志级别
            ch.qos.logback.classic.Logger logger = loggerContext.getLogger("root");
            logger.setLevel(Level.toLevel(rootLevel));
        }

        if (!StringUtils.isEmpty(singleLevel)) {
            // 设置某个类日志级别-可以实现定向日志级别调整
            ch.qos.logback.classic.Logger vLogger = loggerContext.getLogger(singlePath);
            if (vLogger != null) {
                vLogger.setLevel(Level.toLevel(singleLevel));
            }
        }
    }

    @Override
    public String reloadCfg() {
        log.info("Reload Start");
        log.info("Start to reload Json");
        BunnyCanteenApplication.getClass(DataManager.class).init();
        log.info("End to reload Json");
        log.info("Reload End");
        return "Reload Success";
    }

    @Override
    public String printOnlineUser(int number) {
        return "";
    }
}
