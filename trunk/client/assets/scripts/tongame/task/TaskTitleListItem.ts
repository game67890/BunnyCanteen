import {_decorator, Label, Sprite, math, SpriteFrame, Node} from 'cc';
import {IVirtualGridListItem} from "../../../resources/libs/virtual_grid_list/interface";
import { oops } from "../../../../extensions/oops-plugin-framework/assets/core/Oops";

const {ccclass, property} = _decorator;

@ccclass('TaskTitleListItem')
export class TaskTitleListItem extends IVirtualGridListItem {
    @property(Label)
    taskTitle: Label = null;

    onDataChanged() {
        const data = this.data;
        if (data.TitleId == 1)
        {//基础任务
            this.taskTitle.string = oops.language.getLangByID("stringres_079");
        }
        else if (data.TitleId == 2)
        {//日常任务
            this.taskTitle.string = oops.language.getLangByID("stringres_080");
        }
    }

    onDestroy() {
        super.onDestroy();
    }
}
