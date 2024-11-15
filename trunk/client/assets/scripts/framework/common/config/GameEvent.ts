/** 游戏事件 */
export enum GameEvent {
    /** 游戏服务器连接成功 */
    GameServerConnected = "GameServerConnected",
    /** 登陆成功 */
    LoginSuccess = "LoginSuccess",

    /** 更新基础数值 */
    UpdateBaseData = "UpdateBaseData",

    /** 更新兔子币*/
    UpdateTuziCoin = "UpdateTuziCoin",

    /** 更新萝卜币*/
    UpdateCarrotCoin = "UpdateCarrotCoin",

    /** 更新棋盘格子 */
    UpdateBoardGrid = "UpdateBoardGrid",

    /** Save */
    Save = "Save",

    /** OnGridContract */
    OnGridContract = "OnGridContract",

    /** OnAutoHecheng */
    OnAutoHecheng = "OnAutoHecheng",

    /** OnMyRankChange */
    OnMyRankChange = "OnMyRankChange",

    /** OnShopListChange */
    OnShopListChange = "OnShopListChange",

    /** 切换兔子币和餐厅排行榜 */
    SwitchRank = "SwitchRank",

    /** 更新Auto按钮*/
    UpdateAutoBtn = "UpdateAutoBtn",

    /** 更新回收按钮*/
    UpdateHuishouBtn = "UpdateHuishouBtn",
}