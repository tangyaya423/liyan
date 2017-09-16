window.onload=function(){
	var oBtn=document.getElementById("City");
	oBtn.onclick=function(){
		OpenNew();
	}
	
	function OpenNew(){
		
		var sHeight=document.documentElement.scrollHeight;
		var sWidth=document.documentElement.scrollWidth;
		alert(sWidth);
	
		
		var wHeight = document.documentElement.clientHeight;
		var d = document.documentElement.offsetWidth(); 
					
		
		var oMask=document.createElement("div");
		oMask.id="mask";
		oMask.style.height=sHeight+"px";
		oMask.style.width=sWidth+"px";
		document.body.appendChild(oMask);
		
		var oLogin=document.createElement("div");
		oLogin.id="login";
		oLogin.innerHTML="<div id='login'><div class='loginCon'><div id='close'></div></div></div>";
		document.body.appendChild(oLogin);
		
		var dHeight=oLogin.offsetHeight;
		var dWidth=oLogin.offsetWidth;
		
		
		oLogin.style.left=sWidth/2-dWidth/2+"px";
		oLogin.style.top=wHeight/2-dHeight/2+"px";
		
		var oClose=document.getElementById("close");
		
		oMask.onclick=oClose.onclick=function(){
			document.body.removeChild(oMask);
			document.body.removeChild(oLogin);
		}
		
	}
}


	
		window.onload=tab;
		
		function tab(){
		 
		  var index=0;
		  var timer=null;
		  
		  function $(id){
			return typeof id==='string'?document.getElementById(id):id;
		}
		  var lis=$('notice-tit').getElementsByTagName('span');
		  var divs=$('notice-con').getElementsByTagName('li');
		  var pics=$('notice-tit').getElementsByTagName('img');
		 
		 	 for(var i=0;i<lis.length;i++){
		 		lis[i].id=i;
		 		lis[i].onmousemove=function(){
		 			clearInterval(timer);
		 			  changeOption(this.id);
				    }
				    lis[i].onmouseout=function(){  
				      timer=setInterval(autoPlay,3000);    
				    }
				  }
		 			
		 			
		 		 if(timer){
				    clearInterval(timer);
				    timer=null;
				  } 
		 			
		 		 timer=setInterval(autoPlay,3000);
		 			
		 			
		 		function autoPlay(){
				      index++;
				      if(index>=lis.length){
				         index=0;
				      }
				      changeOption(index);
				  }
		 		
		 		 function changeOption(curIndex){
					    for(var j=0;j<lis.length;j++){
					       lis[j].className='';
					       divs[j].style.display='none';
					  		pics[j].style.display='none';
					    }
					    // ������ʾ��ǰҳǩ
					    lis[curIndex].className='select';
					    divs[curIndex].style.display='block';
					   	pics[curIndex].style.display='block';
					    index=curIndex;
					  }
					}
		 		
	window.onload=function(){
		 var more=document.getElementById('more');
		 var zhan=document.getElementById('zhan');
		 var ina=document.getElementById('ina');
		 var onmore=document.getElementById('onmore');
		 var end=document.getElementById('end');
		 
		 more.onclick=function(){
		 	if(ina.style.display=='none')
		 	{
		 		ina.style.display='block';
		 		onmore.style.display='block';
		 		zhan.style.display='none';
		 		end.style.marginTop='200px';
		 	}
		 	else{
		 		ina.style.display='none';
		 		onmore.style.display='none';
		 		zhan.style.display='block';
		 		end.style.marginTop='0px';
		 	}
		
	}
	
	}


/*	define("common/widgets/login_toolbar/main", ["require", "exports", "module"], function() {
	function a(o, n) {
		if(navigator.userAgent.indexOf("Firefox") > 0) $("#hh ." + o).html(n);
		else
			for(var a = $("#hh ." + o + " i"), c = String(n).length, i = 0; c > i; i++) {
				0 != i && c % 3 == i % 3 && c > 3 && $("#hh ." + o).append("<b></b>"), a.length <= i && $("#hh ." + o).append("<i></i>");
				var g = String(n).charAt(i),
					b = 30 * -parseInt(g),
					v = $("#hh ." + o + " i").eq(i);
				v.animate({
					backgroundPositionY: String(b) + "px"
				}, "3000", "swing", function() {})
			}
	}
	 function $(id){
			return typeof id==='string'?document.getElementById(id):id;
		}
	var c = $("#cc").val(),
		g = $("#cp").val();
	if(a("companycount", c), a("positioncount", g), $("#hh").size() > 0) {
		var b = function() {
			var a = $(window).scrollTop(),
				c = $(document).height(),
				g = $(window).height();
			if(a + g >= c - 68) {
				var b = 68 - (c - a - g);
				$("#hh").css("bottom", b);
				var v = 140 + b;
				$("#backtop").css("bottom", v);
				var w = 80 + b;
				$("#product-fk").css("bottom", w);
				var T = 80 + b;
				$("#feedback-con").css("bottom", T)
			} else $("#hh").css("bottom", 0), $("#backtop").css("bottom", 140), $("#product-fk").css("bottom", 80), $("#feedback-con").css("bottom", 80)
		};
		$(window).scroll(b), $(window).resize(b)
	}
	});
*/