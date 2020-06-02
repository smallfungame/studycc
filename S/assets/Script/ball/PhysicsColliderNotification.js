// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    //依赖刚体组件
    editor: CC_EDITOR && {
        requireComponent: cc.RigidBody,
    },
    extends: cc.Component,

    properties: {
        notificationName:'',
        _p0:null,
        _p1:null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        let rigidBody = this.getComponent(cc.RigidBody);
        rigidBody.enabledContactListener = true;
    },

    onBeginContact(contact, selfCollider, otherCollider){
        this._p0 = otherCollider.node.position;
    },

    onEndContact: function(contact, selfCollider,otherCollider){
        this._p1 = otherCollider.node.position;
        if(this.notificationName){
            //cc.director.emit(this.notificationName, contact, this._p0, this._p1);
            cc.director.emit(this.notificationName);
        }
    },

    // update (dt) {},
});
