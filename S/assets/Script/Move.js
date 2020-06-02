// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        target:cc.Node,
    },


    // LIFE-CYCLE CALLBACKS:


    _onToucheMove:function(touchEvent){
        let location = touchEvent.getLocation();
        this.node.position = this.node.parent.convertToNodeSpaceAR(location);
    },

    _onToucheEnd:function(touchEvent){
        if(!this.target){
            return;
        }

        //获取target节点在父容器的包围盒，返回一个矩形对象
        let rect = this.target.getBoundingBox();
        console.log("目标盒子矩形数据："+rect)
        
        //获取targe容器转换触摸的坐标
        let location = touchEvent.getLocation();
        console.log("触摸点坐标:"+location)
        let point = this.target.parent.convertToNodeSpaceAR(location);
        console.log("触摸点转换成目标容器节点的坐标："+point)


        if(rect.contains(point)){
            points  = this.target.convertToNodeSpaceAR(location);
            console.log("第二次获取触摸点转换成目标容器节点的坐标："+points)
            this.node.position = points;
            this.node.parent = this.target;
            return;
        }

        this.node.position = this._oldPostion;

    },

    onLoad () {
        //缓存原始父节点
        this._oldPostion = this.node.position;

        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onToucheMove, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this._onToucheEnd, this);

        
    },


    start () {

    },

    // update (dt) {},
});
