// 分类功能模块JavaScript
function classifyPage(){
	
	// 分页的基本框架 
	/*
	@id="classify_total_num" 总分类的数量   
	@id="classify_list_ul"分类内容列表 
	*/
	
	$("#content").html(
	    '<div class="row">'+
	        '<div class="col-md-10 col-md-offset-1">'+
	            '<div class="classify_content">'+
	                '<div class="classify_head">'+
	                    '<div class="content_head">'+
	                        '<div class="blog_list">分类</div>'+
	                        '<div class="blog_num">共<span id="classify_total_num">&nbsp;0&nbsp;</span>篇</div>'+
	                    '</div>'+
	                    '<div class="classify_list">'+
	                        '<ul id="classify_list_ul">'+
	                          
	                        '</ul>'+
	                    '</div>'+
	                '</div>'+
					'<div id="classify_entry">'+
					
					'</div>'+
	            '</div>'+
	        '</div>'+
	    '</div>'
	);
	
	$("#classify_total_num").text(data.length);
	countNumClassify();
	showClassifyInfo();

}
// 记录分类名及其数量
function  countNumClassify(){
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
		if(num==1){
			classifyType+='<li id="classifyType'+i+'" onclick="choseOne(\''+data[i].sign+'\',\''+"#classifyType"+i+'\')">'+
			        '<div></div>'+
			        '<a>'+data[i].sign+'<span>'+ count +'篇</span></a>'+
			'</li>'			
		}
	}
	$("#classify_list_ul").html(classifyType)
}

//显示所有类别的博客
function showClassifyInfo(){
	let newStr = "";
	for (let i = 0; i < data.length; i++) {
	    let titleTag = "";
	    for (let j = 0; j < data[i].tag.length; j++) {
	        let dataTagValue = "'"+ data[i].tag[j] +"'"
	        titleTag += 
	            '<li onclick="chooseTagPage('+dataTagValue+')">'+
	                '<div></div>'+
	                ''+ data[i].tag[j] +''+
	            '</li>'
	    }
	    newStr += 
	            '<div class="content_list">'+
	                '<div class="item">'+
	                    '<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
	                    '<p class="blog_list_content"><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
	                    '<div class="blog_list_massage">'+
	                        '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
	                        '<div class="item_name">'+data[i].username+'</div>'+
	                        '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
	                        '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
	                        '<div class="item_sign" onclick = "choseOne(\''+data[i].sign+'\',null)">'+data[i].sign+'</div>'+
	                        '<div class="item_tag" id="item_tag">'+
	                            '<ul>'+
	                                titleTag +
	                            '</ul>'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="imgAbout">'+
	                    '<img src="../images/about.jpeg" alt="">'+
	                '</div>'+
	            '</div>'  
	}
	$("#classify_entry").html(newStr);
}

function changeClassifyState(id) {
	if(id!=null){
		// 添加类名，使其颜色符合符合选中条件
		$(id).addClass("selected_classify");
		$(id).siblings("li").removeClass("selected_classify");
	}
    
}

//显示一个类别的博客
function choseOne(sign,id){
	changeClassifyState(id);
	console.log(sign)
	let newStr = "";
	for (let i = 0; i < data.length; i++) {
		if(sign == data[i].sign){
			let titleTag = "";
			for (let j = 0; j < data[i].tag.length; j++) {
				let dataTagValue = "'"+ data[i].tag[j] +"'"
				titleTag += 
					'<li onclick="chooseTagPage('+ dataTagValue +')">'+
						'<div></div>'+
						''+ data[i].tag[j] +''+
					'</li>'
				}
			newStr +=
				'<div class="content_list">'+
					'<div class="item">'+
						'<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
						'<p class="blog_list_content"><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
						'<div class="blog_list_massage">'+
							'<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
							'<div class="item_name">'+data[i].username+'</div>'+
							'<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
							'<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
							'<div class="item_sign" onclick = "choseOne(\''+data[i].sign+'\',null)">'+data[i].sign+'</div>'+
							'<div class="item_tag" id="item_tag">'+
								'<ul>'+
									titleTag+
								'</ul>'+
							'</div>'+
						'</div>'+
					'</div>'+
					'<div class="imgAbout">'+
						'<img src="../images/about.jpeg" alt="">'+
					'</div>'+
				'</div>'
		}
	}
	$("#classify_entry").html(newStr);
}
	
