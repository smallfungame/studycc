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
        scorelabel:cc.Label,
        score:{
            type:cc.Integer,
            default:0,
            notify(){
                this.scorelabel.string = this.score.toString();
            },
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
        //this.label.string = this.score.toString();

        if(this.notificationName){
            console.log("监听器被初始化了？")
            cc.director.on(this.notificationName, this.doAction,this)
        }
    },
    doAction:function(){
        console.log("接收到了？");
        this.score -=1;
        this.scorelabel.string = this.score.toString();
    },

    start () {

    },

    // update (dt) {},
});
