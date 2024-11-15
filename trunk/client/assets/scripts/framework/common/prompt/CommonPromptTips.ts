import { Component, _decorator, Label } from "cc";
import { oops } from "../../../../../extensions/oops-plugin-framework/assets/core/Oops";
import { UIID } from "../config/GameUIConfig";


const { ccclass, property } = _decorator;

/** 公共提示窗口 */
@ccclass("CommonPrompt")
export class CommonPromptTips extends Component {
    @property(Label)
    title: Label = null;

    @property(Label)
    content: Label = null;

    @property(Label)
    okWord: Label = null;

    private config: any = {};

    /**
     * 
     * 
     * @param params 参数 
     * {
     *     title:      标题
     *     content:    内容
     *     okWord:     ok按钮上的文字
     *     okFunc:     确认时执行的方法
     *     needOk:     是否显示OK按钮
     * }
     */
    onAdded(params: any): boolean {
        this.config = params || {};
        this.setTitle();
        this.setContent();
        this.setBtnOkLabel();
        this.node.active = true;
        return true;
    }

    private setTitle() {
        this.title.string = this.config.title;
    }

    private setContent() {
        this.content.string = this.config.content;
    }

    private setBtnOkLabel() {
        this.okWord.string = this.config.okWord;
        this.okWord.node.parent.active = this.config.needOk || false
    }

    private onOk() {
        if (typeof this.config.okFunc == "function") {
            this.config.okFunc();
        }
        this.close();
    }

    private onClose() {
        if (typeof this.config.closeFunc == "function") {
            this.config.closeFunc();
        }
        this.close();
    }

    private close() {
        oops.gui.removeByNode(this.node);
    }

    onDestroy() {
        this.config = null;
    }
}