function aboutAuther(){
$("#content").html( '<div class="auther_container">'+
						'<div class="auther_nav">'+
							'<ul class="auther_nav_list">'+
								'<li onclick="aboutAuther()">我的</li>'+
								'<li onclick="aboutMusic()">我的音乐收藏</li>'+
								'<li>关于篮球</li>'+
								'<li>好句收藏</li>'+
								'<li>美图收藏</li>'+
								'<span><i></i>音乐</span>'+
								'<span><i></i>运动</span>'+
								'<span><i></i>收集美句</span>'+
								'<span><i></i>图片</span>'+
								'<span><i></i>篮球</span>'+
								'<span><i></i>跑步</span>'+
							'</ul>'+
						'</div>'+
						'<div class="auther_content" id="auther_content">'+
							'<div class="auther_row">'+
								'<div class="auther_row_left">'+
									'<div class="auther_left_header">关注我的公众号</div>'+
									'<div class="auther_left_content">'+
										'<div class="auther_right_content_left">'+
											'<div class="auther_right_text_top">《程序员果果》</div>'+
											'<div class="auther_right_text_bottom">'+
												'<p>分享Java、SpringBoot、</p>'+
												'<p>SpringCloud、Docker、Golang、</p>'+
												'<p>Kubernetes 等知识与技巧</p>'+
											'</div>'+
										'</div>'+
										'<div class="auther_right_content_right">'+
											'<img src="../images/openSourceUrl.jpg" />'+
											'<div><i class="glyphicon glyphicon-triangle-top"></i>长按图片识别二维码关注</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
								'<div class="auther_row_right">'+
									'<div class="auther_row_right_header">关于我</div>'+
									'<div class="auther_row_right_text">'+
										'<p class="m-text">果果，一个独立开发者，折腾在 0 和 1 世界的大叔；一个终身学习者，誓将学习无限循环. 希望结识可以共同成长的小伙伴.</p>'+
										'<p class="m-text">热爱编程，喜欢折腾，正在探索高效学习编程技术的方法...</p>'+
									'</div>'+
									'<ul class="auther_row_left_label1">'+
										'<span><i></i>编程</span>'+
										'<span><i></i>写作</span>'+
										'<span><i></i>思考</span>'+
										'<span><i></i>看书</span>'+
									'</ul>'+
									'<ul class="auther_row_left_label2">'+
										'<span><i></i>Java</span>'+
										'<span><i></i>SpringBoot</span>'+
										'<span><i></i>SpringCloud</span>'+
										'<span><i></i>Docker</span>'+
										'<span><i></i>Kubernetes</span>'+
										'<span><i></i>...</span>'+
											'<!-- <span><i></i>Golang</span>'+
											'<span><i></i>Golang</span>'+
											'<span><i></i>Golang</span> -->'+
									'</ul>'+
									'<div class="auther_footer">'+
										'<div class="auther_img1"><img src="../images/zhiwu.png" alt=""></div>'+
										'<div class="auther_img2">'+
											'<img src="../images/weixin.png" alt="">'+
											'<div class="auther_qrCode"><i></i><img src="../images/openSourceUrl.jpg" alt=""></div>'+
										'</div>'+
										'<div class="auther_img3">'+
											'<img src="../images/QQ.png" alt="">'+
											'<div class="auther_qqNumber">'+
												'<i></i>'+
												'<p>18487437473</p>'+
											'</div>'+
										'</div>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>')
			}