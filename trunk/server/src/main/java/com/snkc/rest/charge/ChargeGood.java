package com.snkc.rest.charge;

public class ChargeGood{

    private int id;
    private String name;
    private int price;
    private int carrotcoin;
    private int gift;
    private int strength;
    private int refresh;
    private int refreshnum;
    private int paytype;

    public ChargeGood(String name, int price, int carrotcoin, int gift, int strength, int refresh, int refreshnum, int paytype) {
        this.name = name;
        this.price = price;
        this.carrotcoin = carrotcoin;
        this.gift = gift;
        this.strength = strength;
        this.refresh = refresh;
        this.refreshnum = refreshnum;
        this.paytype = paytype;
    }

    public ChargeGood() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getCarrotcoin() {
        return carrotcoin;
    }

    public void setCarrotcoin(int carrotcoin) {
        this.carrotcoin = carrotcoin;
    }

    public int getGift() {
        return gift;
    }

    public void setGift(int gift) {
        this.gift = gift;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getRefresh() {
        return refresh;
    }

    public void setRefresh(int refresh) {
        this.refresh = refresh;
    }

    public int getRefreshnum() {
        return refreshnum;
    }

    public void setRefreshnum(int refreshnum) {
        this.refreshnum = refreshnum;
    }

    public int getPaytype() {
        return paytype;
    }

    public void setPaytype(int paytype) {
        this.paytype = paytype;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
