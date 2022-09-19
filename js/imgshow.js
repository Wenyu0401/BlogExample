var index = 0;
//获取事件
var $imgs = $(".img_box img");
var $lis= $(".li-cotainer li");
//图片轮播的实现
function changeImg(){
	//设置index，index为要显示的图片的下标
	index++
	//当index的值要超出图片个数时，重置index
	if(index==$imgs.length){
		index=0
	}
	//将所有的图片和圆点颜色先隐藏
	for(var i = 0 ;i<$imgs.length;i++){
		$imgs[i].className='hiddenImg'
		$lis[i].className=''
	}
	// 根据index显示图片和圆点
	$imgs[index].className='showImg'
	$lis[index].className='ls'
}
// 圆点图片关联执行
	for(var j=0;j<$lis.length;j++){
		$lis[j].index=j
		// 当鼠标移动上去时调用圆点图片关联方法
		$lis[j].onmouseover=lim;
	}
// 圆点图片关联方法
	function lim(){
		//将其他图片设置隐藏
		for(var k=0;k<$imgs.length;k++){
			$imgs[k].className="hiddenImg";
			$lis[k].className="";
		}
		// 显示根据圆点选中的图片
		$imgs[this.index].className="showImg";
		$lis[this.index].className="ls";
	}
setInterval(changeImg,3000)