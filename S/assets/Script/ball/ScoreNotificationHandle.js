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
        label:cc.Label,
        step:1,
        score:{
            type:cc.Integer,    //定义为整形
            default:0,
            notify(){
                this.label.string = this.score.toString();
            }
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.label.string = this.score.toString();  //将int转换为字符串
        if(this.notificationName){
            cc.director.on(this.notificationName, this.notificationHandle, this);
        }
    },

    notificationHandle(){
        this.score += this.step;
    },


    start () {

    },

    // update (dt) {},
});
