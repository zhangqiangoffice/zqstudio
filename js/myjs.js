window.onload=function(){
  var oMenus=document.getElementById('menus');
  var aSpan=oMenus.getElementsByTagName('span');    //菜单树打开收起功能
  var test=aSpan.length;
  for(var i=0;i<aSpan.length;i++){
     aSpan[i].onclick=function(){
	    var aUl=this.parentNode.getElementsByTagName('ul');
		var oStyle=aUl[0].style.display;
		if (oStyle!="none"){
	    aUl[0].style.display="none";
		} else {
		aUl[0].style.display="block";}
  }
  }
}