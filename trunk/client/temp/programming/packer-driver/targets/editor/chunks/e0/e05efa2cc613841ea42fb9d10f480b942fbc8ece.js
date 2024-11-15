System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, oops, resources, SpriteAtlas, assetManager, SpriteFrame, Sprite, Texture2D, UITransform, StringUtil, TonGameMgr, TelegramWebApp, TableSoundEffects, AcceleratedBuffMgr, Animation, AnimationClip, UtilManager, _crd, UtilMgr;

  function _reportPossibleCrUseOfoops(extras) {
    _reporterNs.report("oops", "../../../../extensions/oops-plugin-framework/assets/core/Oops", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStringUtil(extras) {
    _reporterNs.report("StringUtil", "../../../../extensions/oops-plugin-framework/assets/core/utils/StringUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTonGameMgr(extras) {
    _reporterNs.report("TonGameMgr", "./TonGameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTelegramWebApp(extras) {
    _reporterNs.report("TelegramWebApp", "../../../cocos-telegram-miniapps/scripts/telegram-web", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableSoundEffects(extras) {
    _reporterNs.report("TableSoundEffects", "../../framework/common/table/TableSoundEffects", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcceleratedBuffMgr(extras) {
    _reporterNs.report("AcceleratedBuffMgr", "../acceleratedbuff/AcceleratedBuffManager", _context.meta, extras);
  }

  _export("UtilManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      Texture2D = _cc.Texture2D;
      UITransform = _cc.UITransform;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
    }, function (_unresolved_2) {
      oops = _unresolved_2.oops;
    }, function (_unresolved_3) {
      StringUtil = _unresolved_3.StringUtil;
    }, function (_unresolved_4) {
      TonGameMgr = _unresolved_4.TonGameMgr;
    }, function (_unresolved_5) {
      TelegramWebApp = _unresolved_5.TelegramWebApp;
    }, function (_unresolved_6) {
      TableSoundEffects = _unresolved_6.TableSoundEffects;
    }, function (_unresolved_7) {
      AcceleratedBuffMgr = _unresolved_7.AcceleratedBuffMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2838fQrJP1MMqK2sjYZISMl", "UtilManager", undefined);

      __checkObsolete__(['resources', 'SpriteAtlas', 'assetManager', 'SpriteFrame', 'Sprite', 'Texture2D', 'ImageAsset', 'UITransform']);

      __checkObsolete__(['Node']);

      __checkObsolete__(['Animation']);

      //import { createHash } from 'crypto';
      __checkObsolete__(['AnimationClip']);

      _export("UtilManager", UtilManager = class UtilManager {
        constructor() {
          this.TableRecord = new (_crd && TableSoundEffects === void 0 ? (_reportPossibleCrUseOfTableSoundEffects({
            error: Error()
          }), TableSoundEffects) : TableSoundEffects)();
          //打开拔萝卜界面需要顶掉的音效
          this.SoundEffects = [3, 4, 5, 6, 7];
        }

        //随机获取数组中的一个数
        getRandomNumber(numbers) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          return numbers[randomIndex];
        } //把秒数转换为xx天xx时xx分xx秒


        convertSeconds(seconds) {
          const days = Math.floor(seconds / (24 * 3600));
          seconds %= 24 * 3600;
          const hours = Math.floor(seconds / 3600);
          seconds %= 3600;
          const minutes = Math.floor(seconds / 60);
          const secs = seconds % 60;
          let result = '';

          if (days > 0) {
            result += `${days}`;
            result += (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_019") + " "; //天
          }

          if (hours > 0 || days > 0) {
            // 如果有天数或者小时数大于0，则显示小时
            result += `${hours}`;
            result += (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_016") + " "; //时
          }

          if (minutes > 0 || hours > 0 || days > 0) {
            result += `${minutes}`;
            result += (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).language.getLangByID("stringres_017") + " "; //分
          }

          result += `${secs}`;
          result += (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).language.getLangByID("stringres_018"); //秒

          return result.trim(); // 去掉末尾多余的空格
        } //生成签名


        async generateSignature(params, secret) {
          // Step 1: Collect all parameters into an array excluding the 'sign' parameter
          const filteredParams = Object.entries(params).filter(([key]) => key !== 'sign'); // Step 2: Sort the array alphabetically by parameter names (keys) in ascending ASCII order

          const sortedParams = filteredParams.sort(([keyA], [keyB]) => keyA.localeCompare(keyB)); // Step 3: Concatenate parameters in the format parameter_name=parameter_value and join them with '&'

          const paramString = sortedParams.map(([key, value]) => `${key}=${value}`).join('&'); // Step 4: Append the secret key to the concatenated string

          const stringToSign = `${paramString}&key=${secret}`; // Step 5: Generate the SHA-512 hash of the string using Web Crypto API

          const encoder = new TextEncoder();
          const data = encoder.encode(stringToSign);
          const hashBuffer = await crypto.subtle.digest('SHA-512', data); // Step 6: Convert hash to hex string and uppercase it

          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
          return hashHex;
          /*
              // Step 5: Generate the SHA-512 hash of the string and convert it to uppercase
              const hash = createHash('sha512').update(stringToSign).digest('hex').toUpperCase();
          
              return hash;
              */
        }

        SetImage(ImageWnd, ImageString) {
          let strarray = (_crd && StringUtil === void 0 ? (_reportPossibleCrUseOfStringUtil({
            error: Error()
          }), StringUtil) : StringUtil).stringToArray4(ImageString);
          resources.load(strarray[0], SpriteAtlas, (err, atlas) => {
            if (err) {
              console.error("加载 SpriteAtlas 失败：", err);
              return;
            }

            const spriteFrame = atlas == null ? void 0 : atlas.getSpriteFrame(strarray[1]);

            if (spriteFrame && ImageWnd && ImageWnd.isValid) {
              const sprite = ImageWnd.getComponent(Sprite);

              if (sprite) {
                sprite.spriteFrame = spriteFrame;
              }
            } else {
              console.error("未找到对应的 SpriteFrame 或 Sprite 组件未绑定");
            }
          });
        } //分享 text(文本消息)


        share(text) {
          const gameUrl = "https://t.me/BunnyCanteenBot/BunnyCanteen?referrer=" + (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;

          if ((_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance) {
            const shareUrl = 'https://t.me/share/url?url=' + gameUrl + '&' + new URLSearchParams({
              text: text || ''
            }).toString();
            (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
              error: Error()
            }), TelegramWebApp) : TelegramWebApp).Instance.openTelegramLink(shareUrl);
          }
        } // 复制链接到剪贴板


        copyLinkToClipboard() {
          let link = "https://t.me/BunnyCanteenBot/BunnyCanteen?referrer=" + (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).UserId;

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(link).then(() => {
              console.log("链接已复制到剪贴板: " + link); // 这里可以添加一个提示，告诉用户链接已复制
            }).catch(error => {
              console.error("复制链接时出错:", error); // 可以显示一个错误提示
            });
          } else {
            console.warn("当前环境不支持剪贴板操作"); // 处理不支持剪贴板 API 的情况
          }
        } //加入频道


        joinChannel() {
          const telegramChannelUrl = "https://t.me/BunnyCanteen";
          (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.openTelegramLink(telegramChannelUrl);
        } //打开官方Bot


        openBot() {
          const botUrl = "https://t.me/BunnyCanteenBot"; // 应用内打开

          (_crd && TelegramWebApp === void 0 ? (_reportPossibleCrUseOfTelegramWebApp({
            error: Error()
          }), TelegramWebApp) : TelegramWebApp).Instance.openTelegramLink(botUrl);
        } // 播放背景音乐


        PlayBgMusic(effectid) {
          if (this.TableRecord) {
            this.TableRecord.init(effectid);

            if (this.TableRecord) {
              (_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
                error: Error()
              }), TonGameMgr) : TonGameMgr).CurBGM = effectid;

              if (this.TableRecord.loop == 1) {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.playMusicLoop(this.TableRecord.soundpath);
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.volumeMusic = this.TableRecord.volume;
              } else {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.playMusic(this.TableRecord.soundpath);
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.volumeMusic = this.TableRecord.volume;
              }
            }
          }
        }
        /** 音频加载完成事件 */


        onAudioCompleteCallback() {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurBGM == 0) {
            if ((_crd && AcceleratedBuffMgr === void 0 ? (_reportPossibleCrUseOfAcceleratedBuffMgr({
              error: Error()
            }), AcceleratedBuffMgr) : AcceleratedBuffMgr).isAccelerating()) {
              UtilMgr.PlayBgMusic(23);
            } else {
              UtilMgr.PlayBgMusic(22);
            }
          }
        }

        StopBgMusic() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.stopMusic();
        } // 播放音效


        PlaySoundEffect(effectid) {
          if ((_crd && TonGameMgr === void 0 ? (_reportPossibleCrUseOfTonGameMgr({
            error: Error()
          }), TonGameMgr) : TonGameMgr).CurBGM == 24) {
            // 拔萝卜界面打开时需要屏蔽播放一些音效
            for (let i = 0; i < this.SoundEffects.length; i++) {
              if (this.SoundEffects[i] == effectid) {
                return;
              }
            }
          }

          if (this.TableRecord) {
            this.TableRecord.init(effectid);

            if (this.TableRecord) {
              if (this.TableRecord.loop == 1) {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.playEffectLoop(this.TableRecord.soundpath, this.TableRecord.volume); // oops.audio.volumeEffect = this.TableRecord.volume;
              } else {
                (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
                  error: Error()
                }), oops) : oops).audio.playEffect(this.TableRecord.soundpath, this.TableRecord.volume); // oops.audio.volumeEffect = this.TableRecord.volume;
              }
            }
          }
        }

        StopSoundEffect() {
          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).audio.stopEffect();
        }

        ShowUserHead(userId, headImage) {
          let url = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).http.server + "getheadimg/" + userId + ".jpg";
          assetManager.loadRemote(url, (err, imageAsset) => {
            if (err) {
              console.log("loadRemote err");
              return;
            }

            console.log("loadRemote ok");
            const spriteFrame = new SpriteFrame();
            const texture = new Texture2D();
            texture.image = imageAsset;
            spriteFrame.texture = texture;
            const nodeWidth = headImage.node.getComponent(UITransform).width; // 获取节点的宽度

            const nodeHeight = headImage.node.getComponent(UITransform).height; // 获取节点的高度

            headImage.spriteFrame = spriteFrame; // 获取图片的原始宽高

            const originalWidth = texture.width;
            const originalHeight = texture.height; // 计算缩放比例

            const scaleX = nodeWidth / originalWidth;
            const scaleY = nodeHeight / originalHeight; // 统一缩放比例以保持纵横比

            const scale = Math.min(scaleX, scaleY); // 设置Sprite的缩放
            //headImage.node.setScale(scale, scale);
          });
        }

        parseMapString(mapString) {
          // 检查是否为空的 Map 字符串
          if (mapString.trim() === "{}") {
            return {}; // 返回空对象
          } // 去掉大括号


          mapString = mapString.slice(1, -1); // 按逗号分割字符串，得到键值对数组

          const pairs = mapString.split(", "); // 创建一个对象来存储解析后的键值对

          const result = {}; // 遍历每个键值对

          for (const pair of pairs) {
            // 按等号分割键值对
            const [key, value] = pair.split("="); // 将键值对添加到结果对象中

            result[key.trim()] = parseInt(value.trim(), 10); // 转换值为整数
          }

          return result;
        }
        /**
        * 添加节点动画
        * @param path              资源路径
        * @param node              目标节点
        * @param onlyOne           是否唯一
        * @param isDefaultClip     是否播放默认动画剪辑
        */


        addNodeAnimation(path, node, onlyOne = true, isDefaultClip = false, callback) {
          if (!node || !node.isValid) {
            return;
          }

          let anim = node.getComponent(Animation);

          if (anim == null) {
            anim = node.addComponent(Animation);
          }

          var onCompleteCallback = () => {
            if (!node || !node.isValid) {
              return;
            }

            const clip = (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
              error: Error()
            }), oops) : oops).res.get(path, AnimationClip);

            if (!clip) {
              return;
            }

            if (onlyOne && anim.getState(clip.name) && anim.getState(clip.name).isPlaying) {
              return;
            }

            anim.stop();

            if (isDefaultClip) {
              anim.defaultClip = clip;
              anim.play();
              return;
            } // 播放完成后恢复播放默认动画


            anim.once(Animation.EventType.FINISHED, () => {
              if (callback) {
                callback();
              }

              if (isDefaultClip) {
                if (anim.defaultClip) {
                  anim.play();
                }
              }
            }, this);

            if (anim.getState(clip.name)) {
              anim.play(clip.name);
              return;
            }

            anim.createState(clip, clip.name);
            anim.play(clip.name);
          };

          (_crd && oops === void 0 ? (_reportPossibleCrUseOfoops({
            error: Error()
          }), oops) : oops).res.loadDir(path, onCompleteCallback);
        } // 判断给定 URL 是否是 HTTPS


        isHttps(url) {
          try {
            const parsedUrl = new URL(url); // 使用 URL 对象解析 URL

            return parsedUrl.protocol === 'https:'; // 检查协议
          } catch (error) {
            return false; // 如果 URL 无效，返回 false
          }
        }

        formatNumber(value) {
          const units = ["", "K", "M", "B", "T", "Q", "aa"];
          const alphabet = "abcdefghijklmnopqrstuvwxyz"; // 若数字小于等于 6 位，直接返回原数字

          if (value < 1000000n) {
            return value.toString();
          }

          let unitIndex = 0;
          let displayValue = value; // 每增加 10^3，切换一个单位

          while (displayValue >= 1000n && unitIndex < units.length - 1) {
            displayValue /= 1000n;
            unitIndex++;
          } // 处理大于等于 10^18 的情况，开始使用两位字母组合


          if (displayValue >= 1000n) {
            let valueLength = displayValue.toString().length;
            let remainder = Math.floor(Number(valueLength) / 3);
            let firstIndex = Math.floor(remainder / 26);
            let secondIndex = remainder % 26;

            while (displayValue >= 1000n) {
              displayValue /= 1000n;
            }

            displayValue = displayValue * 1000n;

            if (secondIndex == 0) {
              secondIndex = 25;
              firstIndex -= 1;
            } else {
              secondIndex -= 1;
            }

            return `${displayValue}${alphabet[firstIndex]}${alphabet[secondIndex]}`;
          }

          displayValue = displayValue * 1000n;
          return `${displayValue}${units[unitIndex - 1]}`;
        }

        async keepScreenAwake() {
          try {
            // 检查是否支持 wakeLock API
            if ("wakeLock" in navigator) {
              const wakeLock = await navigator.wakeLock.request("screen");
              console.log("屏幕常亮模式已激活"); //oops.gui.toast("屏幕常亮模式已激活", true);
              // 监听设备的可见性变化（处理页面被切出或返回时的 wakeLock 释放问题）

              document.addEventListener("visibilitychange", async () => {
                if (document.visibilityState === "visible") {
                  await navigator.wakeLock.request("screen");
                }
              });
            } else {
              console.warn("当前环境不支持 wakeLock API"); //oops.gui.toast("当前环境不支持 wakeLock API", true);
            }
          } catch (err) {
            console.error("保持屏幕常亮失败:", err); //oops.gui.toast("保持屏幕常亮失败", true);
          }
        }

      });

      _export("UtilMgr", UtilMgr = new UtilManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e05efa2cc613841ea42fb9d10f480b942fbc8ece.js.map