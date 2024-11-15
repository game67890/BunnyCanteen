package com.snkc.game.rank.modlel;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 玩家兔子币的数据
 * 做排行榜用的
 */
@Document("RankData")
public class RankData {
    @Id
    private String id;
    private String string;

    public RankData(String id, String string) {
        this.id = id;
        this.string = string;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getString() {
        return string;
    }

    public void setString(String string) {
        this.string = string;
    }
}
