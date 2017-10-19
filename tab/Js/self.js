window.onload = function() 
{
    var oUl1 = document.getElementById("title");/////////////////////标题的class
    var aLi = oUl1.getElementsByTagName("li");
//  var ali = document.getElementById("ul1").getElementsByTagName("li");等同于以上两句
    var oDiv = document.getElementById("whole");///////////////大盒子的class
    var aDiv = oDiv.getElementsByTagName("div");
    var timer=null;
    for(var i = 0; i < aLi.length; i++) 
    {
        aLi[i].index = i; //索引index
        aLi[i].onmousedown =function(){ //////////////////onmouseover是当鼠标滑过,添加定时器规定一定时间内自动切换
		      var that=this;
// 如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时才开始执行
//		      if(timer){
//		        clearTimeout(timer);
//		        timer=null;
//		      }
//        timer=window.setTimeout(function(){
          	for(var i = 0; i < aLi.length; i++)
            {
                aLi[i].className = "";
            }
            that.className = "active";
            for(var j =0; j < aDiv.length; j++) 
            {
                aDiv[j].className = "hide";
            }
            aDiv[that.index].className = "show";
     //   },500);  
        }
    }
 };