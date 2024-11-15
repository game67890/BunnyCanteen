package com.snkc;

import com.snkc.mbean.JMXServer;
import com.snkc.mbean.ServerMXBeanService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

import javax.management.MBeanServer;
import javax.management.ObjectName;
import java.io.IOException;
import java.util.concurrent.atomic.AtomicBoolean;

//@SpringBootApplication
@EnableMongoRepositories
@SpringBootApplication(exclude = {
        //org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class
}
)
@EnableScheduling
@EnableAsync
public class BunnyCanteenApplication {

    public static AtomicBoolean isShutDown = new AtomicBoolean(false);

    private static final Logger LOGGER = LoggerFactory.getLogger(BunnyCanteenApplication.class);
    private static final MBeanServer mbs = java.lang.management.ManagementFactory.getPlatformMBeanServer();
    //    @Value("${server.rmiport}")
    static int rmiPort = 1098;
    static JMXServer jmxServer;

    private static final Stopper stopper = new Stopper();
    private static final ServerMXBeanService serverMXBeanService = new ServerMXBeanService();
    private static ConfigurableApplicationContext applicationContext;

    public static void main(String[] args) {
        try {
            LOGGER.info("SERVER STARTING...");
            applicationContext = SpringApplication.run(BunnyCanteenApplication.class, args);
            // 初始化一些不在@PostConstruct中进行的内容
            initArgs(args);
            onStartup();

            stopper.doWait();

            // 不再接受任何的协议
            isShutDown.set(true);
            // 关闭一些不在@PreDestroy中销毁的内容
            onShutdown();
            LOGGER.info("SERVER SHUTDOWN...");
            applicationContext.close();

            LOGGER.info("SERVER IS CLOSED");
        } catch (Exception e) {
            LOGGER.error("start exception", e);
        } finally {
            System.exit(1);
        }
    }

    public static <T> T getClass(Class<T> clazz) {
        return applicationContext.getBean(clazz);
    }

    private static void initArgs(String[] args) {
        for (int i = 0; i < args.length; ++i) {
            if (args[i].equals("rmiport")) {
                rmiPort = Integer.parseInt(args[++i]);
            } else if (args[i].equals("zoneid")) {
//                zoneid = Integer.valueOf(args(args, ++i));
            } else if (args[i].equals("startport")) {
//                myStartPort = Integer.valueOf(args(args, ++i));
            }
        }
    }

    private static void onStartup() throws Exception {
        LOGGER.info("init something without postConstruct...");
        registerMBean();
        startJMXServer();
    }

    private static void onShutdown() {
        LOGGER.info("close something without postConstruct...");
        stopJMXServer();
    }

    private static void registerMBean() throws Exception {
        mbs.registerMBean(serverMXBeanService, new ObjectName("game:name=serverMXBeanService"));
        mbs.registerMBean(stopper, new ObjectName("game:name=stopper"));
    }

    private static void startJMXServer() throws IOException {
        LOGGER.info("start jmxServer in port {} ...", rmiPort);
        jmxServer = new JMXServer(rmiPort, rmiPort, null, null, null);
        jmxServer.start();
    }

    private static void stopJMXServer() {
        try {
            Stopper.shutdownCompletedLock.lockInterruptibly();
        } catch (final InterruptedException ex) {
            return;
        }
        Stopper.shutdownCompleted.signalAll();
        Stopper.shutdownCompletedLock.unlock();
        jmxServer.stop();
        LOGGER.info("JMX SERVER STOPED");
    }
}
