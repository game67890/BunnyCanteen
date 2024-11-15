package com.snkc.mbean;

public interface ServerMXBean {
    String state();
    void reloadLog(String rootLevel, String singleLevel, String singlePath);
    String reloadCfg();
    String printOnlineUser(int number);

}
