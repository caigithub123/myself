/*背景轮播*/
var current=0;
function lunbo(){
 	var lunbo=document.getElementsByClassName("lunbo")[0];
 	var imgs=lunbo.getElementsByTagName("img");
 	setInterval(function(){
 		imgs[current].className="";
 		current=current+1>imgs.length-1?0:current+1;
 		imgs[current].className="bg";
 	},2000);

	
}
/*photo旋转*/
function photo(){
	var index=0;
	var picsPath=[
		'images/1.png',
		'images/2.png',
		'images/3.png',
		'images/4.png',
		'images/5.png',
		'images/6.png',
		'images/7.png',
		'images/b.png',
		'images/4.png'
	];
	function showImg(){
		//拼接html显示图片
		var htmlImgs='',rotate=360/picsPath.length;
		for(var i=0;i<picsPath.length;i++){
			// document.createElement('img');或：
			htmlImgs+='<img src=\"'+picsPath[i]+'\">';
		}

		var container=document.getElementById('container');			
		container.innerHTML=htmlImgs;
		//让图片成为旋转木马布局
		var transZ=(container.offsetWidth/2)/Math.tan((rotate/2/180)*Math.PI);
		var imgs=Array.prototype.slice.call(container.getElementsByTagName('img'),0);
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.transform='rotateY('+i*rotate+'deg) translateZ('+(transZ+30)+'px)' ;
		}
		container.onmouseover=function(){
			 // 顺时针转						
			this.style.transform='rotateY('+(-1*rotate*++index)+'deg)';

		};
	}
	setInterval(showImg(),40);
}

/*skill选项卡*/
function skillTab(){
	var lis=null,contents=null;
	function initTab(){		
		var tab=document.getElementById('tab');
		lis=Array.prototype.slice.call(
			tab.getElementsByTagName('li'),0);
		var tab_content=document.getElementById('tab_content');
		contents=Array.prototype.slice.call(
			tab_content.getElementsByTagName('div'),0);
		tab_content.style.height=contents[0].offsetHeight+"px";
	}
	initTab();
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;//给li设置index属性
		lis[i].onclick=function(){
			if(this.className=='cur') return;
			for(var i=0;i<lis.length;i++){
				if(lis[i].className=="cur")
					contents[lis[i].index].className="content disapper";
				lis[i].className="";
			}
			this.className="cur";
			contents[this.index].className="content show";
			document.getElementById("tab_content").style.height=contents[this.index].offsetHeight+'px';
		};
	}
}

window.onload=function(){
	lunbo()
	photo();
	skillTab();	
};
