// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        PREFAB:cc.Prefab,
        parent:cc.Node,
        autoLoad:false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(this.autoLoad){
            this.loadPrefab();
        }
    },

    loadPrefab:function(){
        let node = cc.instantiate(this.PREFAB);
        //不持久化到编辑器
        node._objFlags |= cc.Object.Flags.DontSave;
        node.parent = this.parent || this.node;
    },

    start () {

    },

    // update (dt) {},
});
