function aboutMusic(){
	var music = ""
	for(var i=0;i<autherData.length;i++){
		music +='<div class="music_row">'+
					'<div class="col-md-8 col-md-offset-1" style="margin-top: 30px; border: 1px solid gray; border-radius: 10px;">'+
						'<div class="music_content">'+
							'<div class="music_content_head">'+
								'<div class="music_head_left">'+autherData[i].song+'</div>'+
								'<!-- <div class="head_right">共<span id="total"> 5 </span>个</div> -->'+
							'</div>'+
							'<div id="music_content_box">'+
								'<div class="music_content_list">'+
									'<div class="music_item">'+
										'<h3><a href="">'+autherData[i].title+'</a></h3>'+
										'<p><a href="">'+autherData[i].content+'</a></p>'+
										'<div class="music_list">'+
											'<div class="music_item_img"><img src="'+autherData[i].avatar+'" alt=""></div>'+
											'<div class="music_item_name">'+autherData[i].singer+'</div>'+
											'<div class="music_item_time"><i class="glyphicon glyphicon-calendar"></i>'+autherData[i].time+'</div>'+
											'<div class="music_item_num"><i class="glyphicon glyphicon-eye-open"></i>'+autherData[i].num+'</div>'+
											'<div class="music_item_signs"><a href="https://y.qq.com/">'+autherData[i].listen+'</a></div>'+
										'</div>'+
									'</div>'+
									'<div class="music_img"><img src="'+autherData[i].img+'" alt=""></div>'+
									'<div class="music_item_line"></div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'
		}
		$("#auther_content").html(music)
}