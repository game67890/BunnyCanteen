package com.snkc.data;

import com.google.gson.*;
import com.snkc.services.FBVerifyService;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.TreeMap;
import java.util.stream.Stream;

@Service
public class DataManager {

    private static final String CLASS_MODEL_PATH = "com.snkc.serverjsonbean";

    private final Logger logger = LoggerFactory.getLogger(FBVerifyService.class);

    private Map<Class<?>, TreeMap<Integer, ?>> cfgs = new java.util.concurrent.ConcurrentHashMap<>();

    public Gson gson = new GsonBuilder().enableComplexMapKeySerialization().registerTypeAdapter(HashMap.class, new JsonDeserializer<HashMap>() {
        @Override
        public HashMap<String, Object> deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
            HashMap<String, Object> resultMap = new HashMap<>();
            JsonObject jsonObject = json.getAsJsonObject();
            Set<Map.Entry<String, JsonElement>> entrySet = jsonObject.entrySet();
            for (Map.Entry<String, JsonElement> entry : entrySet) {
                resultMap.put(entry.getKey(), entry.getValue());
            }
            return resultMap;
        }
    }).create();

    @PostConstruct
    public void init() {
        Map<Class<?>, TreeMap<Integer, ?>> tempMap = new HashMap<>();
//        URL gamedata = this.getClass().getClassLoader().getResource("gamedata");
//        if (null == gamedata) {
//            logger.error("???????????????????????gamedata is not exist!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//            return;
//        }
        Path gamedatPath = Paths.get("gamedata");
        try (Stream<Path> files = Files.list(gamedatPath)) {
            files.parallel().filter(filePath -> filePath.getFileName().toString().endsWith(".json"))
                    .forEach(filePath -> loadJsonFile(filePath, tempMap));
        } catch (Exception e) {
            logger.error("init exception", e);
        }
        cfgs = tempMap;
    }

    public <T> TreeMap<Integer, T> getCfgFile(Class<T> t) throws IOException {
        TreeMap<Integer, ?> o = cfgs.get(t);
        if (null == o) {
            return null;
        }
        try {
            return (TreeMap<Integer, T>) o;
        } catch (ClassCastException e) {
            logger.warn("class {} cast error", t.getName());
            return null;
        }
    }

    private void loadJsonFile(Path filePath, Map<Class<?>, TreeMap<Integer, ?>> tempMap) {
        try {
            String className = CLASS_MODEL_PATH + "." + filePath.getFileName().toString().split("\\.")[0];
            Class<?> aClass = Class.forName(className);
            TreeMap<Integer, ?> treeMap = parseJsonFile(filePath, aClass);
            tempMap.put(aClass, treeMap);
            logger.info("register bean name={}", className);
        } catch (Exception e) {
            logger.error("载入{}失败", filePath.getFileName(), e);
        }
    }

    private <T> TreeMap<Integer, T> parseJsonFile(Path filePath, Class<T> t) {
        try (BufferedReader bufferedReader = Files.newBufferedReader(filePath)) {
            String line;
            StringBuilder stringBuilder = new StringBuilder();
            while ((line = bufferedReader.readLine()) != null) {
                stringBuilder.append(line);
            }

            String data = stringBuilder.toString();

            final TreeMap<Integer, T> resMap = new TreeMap<>();

            final HashMap<String, JsonObject> o = gson.fromJson(data, HashMap.class);
            for (String s : o.keySet()) {
                final T t1 = gson.fromJson(o.get(s).toString(), t);
                resMap.put(Integer.valueOf(s), t1);
            }
            return resMap;
        } catch (IOException e) {
            logger.error("parseJsonFile exception", e);
            return null;
        }
    }

}
