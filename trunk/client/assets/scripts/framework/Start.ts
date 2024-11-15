import { _decorator, Component, Node, director,assetManager, AssetManager } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Start')
export class Start extends Component {
    start() {
        assetManager.loadBundle("game",(err, bundle:AssetManager.Bundle)=>{
            director.loadScene("game");
        });
    }

    update(deltaTime: number) {
        
    }
}


