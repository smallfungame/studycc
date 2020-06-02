// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        notificationName:'',
        btn:{
            default:null,
            type:cc.Node,
        },        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(this.notificationName){
            this.btn.on('mouseup',function(){        //如果我们被点击
                cc.director.emit(this.notificationName,{msg:this.btn.name});//发送事件，并附带当前节点名称
            },this);
        }        
    },

    start () {

    },

    // update (dt) {},
});
