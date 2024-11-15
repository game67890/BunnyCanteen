package com.snkc.propertiesbean;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.boot.logging.DeferredLog;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.core.Ordered;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.PropertiesPropertySource;
import org.springframework.core.env.PropertySource;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Properties;

/**
 * 自定义环境处理，在运行SpringApplication之前加载任意配置文件到Environment环境中
 */
public class PropertiesEnvironmentPostProcessor implements EnvironmentPostProcessor, ApplicationListener<ApplicationEvent>, Ordered {

    /**
     * 这个时候Log系统还没有初始化  使用DeferredLog来记录  并在onApplicationEvent进行回放
     * */
    private static final DeferredLog LOGGER = new DeferredLog();

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        //自定义配置文件
        String[] profiles = {
                "sys.properties",
        };

        //循环添加
        for (String profile : profiles) {
            //从classpath路径下面查找文件
            Path path = Paths.get("config", profile);
            //加载成PropertySource对象，并添加到Environment环境中
            environment.getPropertySources().addLast(loadProfiles(path));
            LOGGER.info(path.getFileName() + "load success");
        }
    }

    //加载单个配置文件
    private PropertySource<?> loadProfiles(Path path) {
//        if (!path.is()) {
//            throw new IllegalArgumentException("资源" + path + "不存在");
//        }
        try (BufferedReader bufferedReader = Files.newBufferedReader(path)) {

            //从输入流中加载一个Properties对象
            Properties properties = new Properties();
            properties.load(bufferedReader);
            String fileName = path.getFileName().toString().split("\\.")[0];
            return new PropertiesPropertySource(fileName, properties);
        } catch (IOException ex) {
            throw new IllegalStateException("加载配置文件失败" + path.getFileName(), ex);
        }
    }

    @Override
    public void onApplicationEvent(ApplicationEvent event) {
        LOGGER.replayTo(this.getClass());
    }

    @Override
    public int getOrder() {
        return 0;
    }
}