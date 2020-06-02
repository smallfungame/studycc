cc.Class({
    extends: cc.Component,
   
    properties: {
        notificationName:'',
        btn:{
            default:null,
            type:cc.Node,
        },
        scorelabel:cc.Label,
        score:{
            type:cc.Integer,
            default:0,
            notify(){
                this.scorelabel.string = this.score.toString();
            },
        },

    },
    
    onLoad: function () {
        // if(this.notificationName){
        //     this.btn.on(this.notificationName, function(msg){
        //         console.log(msg);
        //     },this);
        // }

        if(this.notificationName){
            this.node.on(this.notificationName, this.doAction, this);
        }



        if(this.notificationName){
            this.btn.on('mouseup',function(){        //如果我们被点击
                this.node.emit(this.notificationName,{msg:this.btn.name});//发送事件，并附带当前节点名称
            },this);
        }
    },

    doAction:function(){
        console.log("接收到了？");
        this.score -=1;
        this.scorelabel.string = this.score.toString();
    },    

    start: function () {
    },
});  