window.onload=function(){
	var aPic=document.getElementById('picList').getElementsByTagName('li')
	var aBtn=document.getElementById('btn').getElementsByTagName('li')
	var oWrap=document.getElementById('wrap')
    var num=0;
    var timer=null;

    //初始化
   // aPic[num].className='show'
   // aBtn[num].className='active'
    showPic()
    function showPic(){
    	if(num>=aPic.length){
    		num=0
    	}
    	for(var i=0; i<aPic.length; i++){
    		aPic[i].className=''
    		aBtn[i].className=''
    	}
    	aPic[num].className='show'
    	aBtn[num].className='active'
        num++
    }

    function autoPlay(){
    	timer=setInterval(function(){
    	showPic()
    },1000)
	}
	
	autoPlay()
    oWrap.onmouseover=function(){
    	clearInterval(timer)
    }

    oWrap.onmouseout=autoPlay

    for(var i=0; i<aBtn.length; i++){
        aBtn[i].index=i;
        aBtn[i].onmouseover=function(){
            num=this.index;
            showPic()
        }
    }
}
