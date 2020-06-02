// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scene:cc.SceneAsset,  //定义场景资源
    },

    // LIFE-CYCLE CALLBACKS:

    // loadScene:function(){
    //     cc.director.loadScene(this.scene.name);
    // },

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            cc.director.loadScene(this.scene.name);
        },this);
    },

    start () {

    },

    // update (dt) {},
});
