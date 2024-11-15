package com.snkc.log;

import com.pwrd.op.LogOp;
import com.pwrd.op.LogOpChannel;
import com.snkc.util.DateValidate;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class BiLogService {

    public static Logger logger = LoggerFactory.getLogger(BiLogService.class);

    @PostConstruct
    public void init() throws Exception {
        Path path = Paths.get("config", "operlog.properties");
        LogOp.init(Files.newInputStream(path));
        logger.info("BiLogService init success");
    }

    private static final String COST_LOG = "tongame_COST";
    private static final String LOGIN_LOG = "tongame_LOGIN";
    private static final String LOGOUT_LOG = "tongame_LOGOUT";
    private static final String REGISTER_LOG = "tongame_REGISTER";
    private static final String UPGRADE_LOG = "tongame_UPGRADE";
    private static final String RECHARGE_LOG = "tongame_RECHARGE";
    private static final String ONLINE_LOG = "tongame_ONLINE";
    private static final String GOLD_LOG = "tongame_GOLD";

    /**
     * 消费日志
     * @param roleId 角色id
     * @param consumeType 商品类型
     * @param itemId 商品ID（itemId）
     * @param itemName 商品名字
     * @param itemNum 购买数量
     * @param yuanbao 花费钻石
     * @param bindYuanbao 花费礼券
     * @param userId 账号ID
     * @param roleName 角色名
     * @param level 等级
     * @param serverId 服务器ID
     * @param channel 渠道
     */
    public void costLog(long roleId, int consumeType, int itemId, String itemName, int itemNum, long yuanbao, long bindYuanbao) {
//        long now = System.currentTimeMillis();
//        try {
//            log(LogOpChannel.COST,
//                    String.valueOf(roleId), // 角色id
//                    now,
//                    DateValidate.getTodayStr(now),
//                    consumeType,    //消费类型
//                    itemId,    //itemId
//                    itemName,    //itemName
//                    itemNum,//itemNum
//                    yuanbao,//钻石
//                    bindYuanbao,//绑钻
//                    userId,
//                    roleName,
//                    level,
//                    serverId,
//                    channel,
//                    COST_LOG
//            );
//        } catch (Exception e) {
//            e.printStackTrace();
//            xdb.Trace.error(e);
//        }
    }


    public void onlineLog() {
        try {
            String logName = ONLINE_LOG;
            long now = System.currentTimeMillis();
            log(LogOpChannel.ONLINE,
                    0,
                    "test",
                    now,
                    DateValidate.getTodayStr(now),
                    "test",
                    logName
            );

        } catch (Exception e) {
            logger.error("onlineLog exception", e);
        }
    }


    public void log(LogOpChannel op, final Object... params) {
        debug(op, params);
        LogOp.log(op, params);
    }

    public void log(String op, final Object... params) {
        LogOp.log(op, params);
    }

    private void debug(LogOpChannel op, final Object... params) {
        if (!logger.isDebugEnabled())
            return;

        StringBuilder sb = new StringBuilder();
        int length = params.length;
        for (int i = 0; i < length; i++) {
            Object p = params[i];
            if (i != length - 1)
                sb.append(p.toString()).append("|");
            else
                sb.append(p.toString());
        }
        logger.debug("BI type=" + op.toString() + "  log=" + sb.toString());
    }
}
