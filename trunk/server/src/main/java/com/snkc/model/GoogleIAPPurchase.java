package com.snkc.model;

import org.springframework.data.annotation.Id;

public record GoogleIAPPurchase(@Id String purchaseToken, String userID, int status) {
}
