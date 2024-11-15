package com.snkc.game.weishi;

import com.snkc.data.DataManager;
import com.snkc.game.rabbitmall.requestbean.CBuy;
import com.snkc.game.rabbitmall.responsebean.SBuy;
import com.snkc.game.weishi.requestbean.CWeishi;
import com.snkc.lock.UserLockService;
import com.snkc.model.User;
import com.snkc.repository.LoginRepository;
import com.snkc.serverjsonbean.Accelerate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Map;

/**
 * 喂食
 */

@RestController @CrossOrigin @RequestMapping("/weishi") public class WeiShiController {
	Logger logger = LoggerFactory.getLogger(WeiShiController.class);

	@Autowired DataManager dataManager;
	@Autowired UserLockService userLockService;
	@Autowired LoginRepository loginRepo;

	/**
	 * @return
	 */

	@PostMapping("/cweishi") public CWeishi cbuy(@RequestAttribute("userID") String userID, @RequestBody CWeishi cBuy) throws IOException {

		int price = Integer.parseInt(cBuy.count());

		long uniqueKey = userLockService.tryLock(userID);
		try {
			if (uniqueKey > 0) {

				//扣胡萝卜币
				User user = loginRepo.findUserById(userID);
				if (user == null) {
					return new CWeishi("0","0");
				}
				final int carrotCoin = user.getCarrotCoin();
				if (carrotCoin < price) {
					return new CWeishi("0","0");
				}
				user.subCarrotCoin(price);
				loginRepo.save(user);
			}
		} finally {
			userLockService.release(userID, uniqueKey);
		}

		return cBuy;

	}

}
