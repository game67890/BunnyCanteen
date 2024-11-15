package com.snkc.rest.charge;

import com.google.gson.stream.JsonReader;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Component;

import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;

@Component
public class ShopConfigProvider {

    private HashMap<Integer,ChargeGood> shopGoods = new HashMap<>();

    public ShopConfigProvider() {
    }

    @PostConstruct
    public void init() throws IOException {
        JsonReader jsonReader = new JsonReader(new FileReader("gamedata/Pay.json"));
        jsonReader.beginObject();
        while (jsonReader.hasNext()){
            int goodID = Integer.parseInt(jsonReader.nextName());
            jsonReader.beginObject();
            String name = null;
            ChargeGood chargeGood = new ChargeGood();
            while (jsonReader.hasNext()){
                name = jsonReader.nextName();
                switch (name){
                    case "price":
                        chargeGood.setPrice(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "carrotcoin":
                        chargeGood.setCarrotcoin(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "gift":
                        chargeGood.setGift(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "strength":
                        chargeGood.setStrength(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "refresh":
                        chargeGood.setRefresh(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "refreshnum":
                        chargeGood.setRefreshnum(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "paytype":
                        chargeGood.setPaytype(Integer.parseInt(jsonReader.nextString()));
                        break;
                    case "name":
                        chargeGood.setName(jsonReader.nextString());
                        break;
                    default:
                        //其他则跳过
                        jsonReader.nextString();
                        break;
                }
            }
            jsonReader.endObject();
            chargeGood.setId(goodID);
            shopGoods.put(goodID,chargeGood);
        }
        jsonReader.endObject();
    }


    public ChargeGood getChargeGoodByID(int goodID){
        if (this.shopGoods.containsKey(goodID)){
            return this.shopGoods.get(goodID);
        }
        return null;
    }

    public LinkedList<ChargeGood> getAllChargeGood(){
        return new LinkedList<>(this.shopGoods.values());
    }
}
