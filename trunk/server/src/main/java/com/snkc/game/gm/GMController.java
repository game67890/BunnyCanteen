package com.snkc.game.gm;

import com.snkc.data.DataManager;
import com.snkc.game.gm.requestbean.CGM;
import com.snkc.lock.UserLockService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.Shop;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

/**
 * gm命令
 */

@RestController
@CrossOrigin
@RequestMapping("/gm")
public class GMController {
    Logger logger = LoggerFactory.getLogger(GMController.class);

    @Autowired
    DataManager dataManager;
    @Autowired
    UserLockService userLockService;
    @Autowired
    LoginRepository loginRepo;

    /**
     * @return
     */

    @PostMapping("/carrotcoin")
    public CGM carrotcoin(@RequestAttribute("userID") String userID, @RequestBody CGM cGM) throws IOException {
        final Map<Integer, Shop> shoptMap = dataManager.getCfgFile(Shop.class);

        int num = Integer.parseInt(cGM.count());

        long uniqueKey = userLockService.tryLock(userID);
        try {

            User user = loginRepo.findUserById(userID);
            if (user == null) {
                return new CGM("-1");
            }

            if (uniqueKey > 0) {

                if (num > 0) {
                    user.addCarrotCoin(num);

                } else {
                    user.subCarrotCoin(num);
                }
                loginRepo.save(user);
            }

            return new CGM("-1");
        } finally {
            userLockService.release(userID, uniqueKey);

            return new CGM(cGM.count());
        }

    }

}
