// 将数据循环输出到页面中
var limitCount = 3;
var nowCount =0;
var limit = 3;
let map = new Map();
function loadIndex(){
	var str = "";
	var tagStr = "";
	var title = "";
	// 增加条件
	
	for (var i = nowCount; i < limitCount; i++) {
	    var titleTag = "";
	    for (let j = 0; j < data[i].tag.length; j++) {
	        let dataTagValue = "'"+ data[i].tag[j] +"'"
	        titleTag += 
	            '<li onclick="chooseIndexTagPage('+dataTagValue+')">'+
	                '<div></div>'+
	                ''+ data[i].tag[j] +''+
	            '</li>'
	
	        // 获取标签的map
	        if(map.has(data[i].tag[j])){
	            map.set(data[i].tag[j],map.get(data[i].tag[j])+1);
	        }else{
	            map.set(data[i].tag[j],1);
	            // console.log(map.get(data[i].sign));
	        }
	    }
	
	    str += '<div class="content_list">'+
	            '<div class="item">'+
	                '<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
	                '<p class="blog_list_content"><a onclick="details('+data[i].id+')" >'+data[i].content+'</a></p>'+
	                '<div class="blog_list_massage">'+
	                    '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
	                    '<div class="item_name">'+data[i].username+'</div>'+
	                    '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
	                    '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
	                    '<div class="item_sign" onclick = "classifyPage(),choseOne(\''+data[i].sign+'\',null)" >'+data[i].sign+'</div>'+
	                    '<div class="item_tag">'+
	                        '<ul>'+
	                            titleTag +
	                        '</ul>'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+
	            '<div class="imgAbout">'+
	                '<img src="'+data[i].img+'" alt="">'+
	            '</div>'+
	        '</div>';
	    title += '<li>'+ data[i].title +'</li>';
	}
	$("#contentList").html(str);
	$("#total").html("&nbsp;"+data.length+"&nbsp;");
	$("#content_list_ul").html(title);
}

loadIndex();

var nowPage =1;
var sumPage = 0;
function getPageNum(){
	if(data.length%limitCount!==0){
		sumPage = data.length/limitCount +1;
		
	}else{
		sumPage = data.length/limitCount;
	}
	$("#pageID").text(nowPage);
	$("#sumPageID").text(sumPage);
}
getPageNum();


function next(){
	if(nowPage<sumPage){
		nowCount = nowCount + limit;
		limitCount = limitCount + limit;
		nowPage++;
		$("#pageID").text(nowPage);
		console.log(nowCount)
		console.log(limitCount)
		loadIndex();
	}
}

function previous(){
	if(nowPage>1){
		nowCount = nowCount - limit;
		limitCount = limitCount - limit;
		nowPage--;
		$("#pageID").text(nowPage);
		console.log(nowCount)
		console.log(limitCount)
		loadIndex();
	}
}

// 打印博客标签
var tagString = "";
map.forEach(function (key,value) {
    var mapValue = "'"+value+"'";
    // tagString += '<li onclick="chooseTagPage('+mapValue+')"><div class="tag_list_angle"></div><a>'+value+'<span>'+ key +'</span></a></li>';
    tagString += 
        '<li onclick="tagPage(),chooseTagPage('+ mapValue +')"><span><div class="horn"></div>'+ value +'</span></li> '
})

$("#content_tag_list").html(tagString);

// 选中菜单样式调整
function changeMenuState(id) {
    idStr = "#"+id;
    $(idStr).addClass("chooseMenu");
    $(idStr).siblings("li").removeClass("chooseMenu");
}

function showClaasify(){
	var classifyType="";
	for(var i = 0;i<data.length;i++){
		var count = 1;
		for(var j =i+1;j<data.length;j++){
			if (data[i].sign == data[j].sign){
				count++;
			}
		}
		var num=0;
		for(var k =0;k <=i ;k++){
			if(data[i].sign == data[k].sign){
				num++;
			}
		}
		// <li>教程<span><div class="horn"></div>5</span></li>
		if(num==1){
			classifyType+='<li id="classifyType'+i+'" onclick="classifyPage(),choseOne(\''+data[i].sign+'\',null)">'+data[i].sign+
			'<span><div class="horn"></div>'+ count +'篇</span></li>'
		}
	}
	$("#classify_index").html(classifyType)
}
showClaasify();
