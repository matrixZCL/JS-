var position='absolute';
//记录上次创建的食物，为删除做准备
var elements=[];



function Food(options){
    options=options || {};
    this.x=options.x||0;
    this.y=options.y||0;
    this.width=options.width||20;
    this.height=options.height||20;
    this.color=options.color||'green';
}

Food.prototype.render=function(map){
    //删除之前创建的食物
    remove();
    //随机生成x,y
    this.x=Tools.getRandom(0,map.offsetWidth/this.width-1)*this.width;
    this.y=Tools.getRandom(0,map.offsetHeight/this.height-1)*this.height;
    //动态创建食物div
    var div=document.createElement('div');
    map.appendChild(div);
    elements.push(div);

    div.style.position=position;
    div.style.left=this.x+'px';
    div.style.top=this.y+'px';
    div.style.width=this.width+'px';
    div.style.height=this.height+'px';
    div.style.backgroundColor=this.color;
}

function remove(){
    for(var i=elements.length-1;i>=0;i--){
        //删除div
        elements[i].parentNode.removeChild(elements[i]);

        //删除数组中的元素
        //第一个参数：从哪个元素开始，第二个参数：删除几个元素
        elements.splice(i,1);
    }
}

//test
var map=document.getElementById('map');
var food=new Food();
food.render(map);

