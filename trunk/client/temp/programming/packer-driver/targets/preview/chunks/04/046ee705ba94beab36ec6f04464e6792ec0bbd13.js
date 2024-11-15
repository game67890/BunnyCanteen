// import { Camera, Component, gfx, MeshRenderer, RenderTexture, view, _decorator } from 'cc';
// const { ccclass, property } = _decorator;
// /** 三维摄像机内容显示到模型上 */
// @ccclass('RtToModel')
// export class RtToModel extends Component {
//     @property(Camera)
//     camara: Camera = null!;
//     @property(MeshRenderer)
//     model: MeshRenderer = null!;
//     private rt: RenderTexture = new RenderTexture();
//     start() {
//         const size = view.getVisibleSize();
//         const colorAttachment = new gfx.ColorAttachment();
//         const depthStencilAttachment = new gfx.DepthStencilAttachment();
//         const pi = new gfx.RenderPassInfo([colorAttachment], depthStencilAttachment);
//         this.rt.reset({
//             width: size.width,
//             height: size.height,
//             passInfo: pi
//         });
//         this.camara.targetTexture = this.rt;
//         const mat = this.model.material!;
//         mat.setProperty('mainTexture', this.rt);
//     }
//     onDestroy() {
//         this.rt.destroy();
//     }
// }
System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbd7dMQYutDs7I7uj+3zIiU", "RtToModel", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=046ee705ba94beab36ec6f04464e6792ec0bbd13.js.map