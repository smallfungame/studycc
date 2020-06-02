// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //注册TOUCHE_MOVE事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.moveforever, this);
    },
    moveforever:function(touchEvent){
        //获取当前点击的坐标
        let location = touchEvent.getLocation();
        //将新的坐标赋予，需要通过父节点来转换
        this.node.position = this.node.parent.convertToNodeSpaceAR(location);
    },

    start () {

    },

    // update (dt) {},
});
