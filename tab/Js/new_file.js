window.onload=function(){
	var tit = document.getElementById("title");
    var tli = tit.getElementsByTagName("li");
    var all = document.getElementById("whole");
    var aDiv = all.getElementsByTagName("div");
   
   for(i=0;i<tli.length;i++){
   	
   	tli[i].index=i;
   	
   	tli[i].onclick=function(){
   		
   		var that=this;
   		
   		for(var i = 0; i < tli.length; i++)
            {
                tli[i].className = "";
            }
            that.className = "active";
            
            for(var j =0; j < aDiv.length; j++) 
            {
                aDiv[j].className = "hide";
            }
            aDiv[that.index].className = "show";
        }
   }
};


