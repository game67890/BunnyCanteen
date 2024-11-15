package com.snkc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("FbAccountBind")
public record FbAccountBind(@Id String fbUserID, String gameUserID) {
}
