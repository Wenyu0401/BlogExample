// var data=[
// 	{id:1,title:"LeetCode-001 两数之和",content:"给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"学习笔记",img:"./images/about.jpeg"},
// 	{id:2,title:"关于MySQL面试100个常见问题",content:"本文主要受众为开发人员,所以不涉及到MySQL的服务部署等操作",avatar:"./images/avatar.jpg",username:"小灰",time:"2021-02-20",num:"1550",sign:"面试整理",img:"./images/about.jpeg"},
// 	{id:3,title:"Linux系统使用Yum命令安装Java环境",content:"Linux上安装软件，可以用yum非常方便，不需要下载解压，也不需要配置环境变量,一个指令就能完成",avatar:"./images/avatar.jpg",username:"小马",time:"2019-09-18",num:"163",sign:"教程",img:"./images/about.jpeg"},
// 	{id:4,title:"SpringBoot项目部署云服务器详细步骤",content:"此篇文章将详细介绍如何将自己的SpringBoot项目部署到各大互联网公司提供的在线云解决方案,并且能从外网直接访问",avatar:"./images/avatar.jpg",username:"小马",time:"2020-05-22",num:"59",sign:"教程",img:"./images/about.jpeg"},
// 	{id:5,title:"Git以及Github使用指南",content:"GitHub于2008年4月10日正式上线，除了Git代码仓库托管及基本的Web管理界面以外，还提供了订阅、讨论组、文本渲染、在线文件编辑器、协作图谱（报表）、代码片段分享（Gist）等功能",avatar:"./images/avatar.jpg",username:"小马",time:"2022-05-22",num:"59",sign:"教程",img:"./images/about.jpeg"}
// ]
function archiveByDate(){
$("#content").html('<div class="row">'+
	'<div class="col-md-10 col-md-offset-1">'+
		'<div class="archive_box">'+
			'<div class="archive_head">'+
				'<div class="archive_title" onclick="archiveByDate()">'+
					'归档'+
				'</div>'+
				'<div class="archive_count">'+
					'共<span id="archive_num">0</span>篇博客'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
'</div>')
	let years = new Set()
	var count = 0;
	for(var i = 0;i < data.length;i++){
		count++;
		var tempDate =data[i].time;
		//根据时间的-切割时间，以便拿出年份
		datearr = tempDate.split("-");
		years.add(datearr[0]);
	}
	//将时间按照从大到小排序
	//set转为数组
	let arr = Array.from(years);
	arr.sort();
	//数组转为set
	years=new Set(arr);
	for(let year of years) {
		var h3Id = "yeartitle"+year
		var divId = "year"+year
		var $h3 =  $("<h3 id="+h3Id+">"+year+"</h3>");
		var $div = $("<div class='archive_time' id="+divId+">"+"</div>")
	    $(".archive_head").after($h3);
		$("#"+h3Id).after($div);
		for(var j = 0; j < data.length ; j++){
			var tempDate = data[j].time;
			datearr = tempDate.split("-");
			var datas = ""
			if(datearr[0]==year){
				$("#"+divId).append('<a onclick="details('+data[j].id+')"><i></i>'+data[j].title+'<div class="archive_timetag_big"><div class="archive_timetag_sml"></div>'+datearr[1]+'月'+datearr[2]+'日'+'</div>'+
							'<div class="archive_originaltag_big"><div class="archive_originaltag_sml"></div>原创</div></a>')
			}
		}
	}
	$("#archive_num").html(" "+count+" ")
}