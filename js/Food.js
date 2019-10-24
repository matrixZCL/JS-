function Food(options){
    options=options || {};
    this.x=options.x||0;
    this.y=options.y||0;
    this.width=options.width||20;
    this.height=options.height||20;
    this.color=options.color||'green';
}

var position='absolute';
Food.prototype.render=function(map){
    //动态创建食物div
    var div=document.createElement('div');
    map.appendChild(div);
    div.style.position=position;
    div.style.left=this.x+'px';
    div.style.top=this.y+'px';
    div.style.width=this.width+'px';
    div.style.height=this.height+'px';
    div.style.backgroundColor=this.color;
}

//test
var map=document.getElementById('map');
var food=new Food();
food.render(map);

