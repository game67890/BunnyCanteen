import {_decorator, Component, SpriteFrame, error, assetManager, Sprite, Texture2D, ImageAsset} from "cc";
import {ImageCache, Texture2DMap} from "../../../resources/libs/virtual_grid_list/image_cache";

const {ccclass, property} = _decorator;

@ccclass('RankImageCache')
export class RankImageCache extends ImageCache {

    public async loadSingleImage(uri: string, callback: Function, imgMap: Texture2DMap) :Promise<boolean> {
        if (uri) {
            assetManager.loadRemote<ImageAsset>(uri, (err, imageAsset) => {
                if (err) {
                    console.log("loadRemote err");
                    return;
                }
                console.log("loadRemote ok");
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                if (this._cacheImage) {
                    imgMap.set(uri, spriteFrame);
                }
                if (callback) {
                    callback(spriteFrame, uri);
                }
                return true;
     
            });
            return false;
        }
        return false;
    }
}
