function details(dataId) {
    console.log("This is msg")
    console.log(dataId);
    
   
    for (var i = 0; i < data.length; i++) {
        console.log("This is dataId"+data[i].id);
        if(dataId == data[i].id){
            $("#content").html(
                '<div class="row">'+
                    '<div class="col-md-10 col-md-offset-1">'+
                        '<div class="content">'+
                            '<div class="details_content_head">'+
                                '<ul>'+
                                    '<li><img src="'+ data[i].avatar +'" alt=""><span>'+ data[i].username +'</span></li>'+
                                    '<li><i class="glyphicon glyphicon-calendar"></i>'+ data[i].time +'</li>'+
                                    '<li><i class="glyphicon glyphicon-eye-open"></i>'+ data[i].num +'</li>'+
                                '</ul>'+
                            '</div>'+
                            '<div id="details_content">'+
                                '<div class="details_img">'+
                                    '<img src="../images/about.jpeg" alt="">'+
                                '</div>'+
                            '</div>'+
                            '<div class="details_box">'+
                                '<div class="details_text">'+
                                    '<h2>'+ data[i].title +'</h2>'+
                                    '<p>题目来源于 LeetCode 上第 1 号问题：两数之和。题目难度为 Easy，目前通过率为 45.8% 。</p>'+
                                    '<h3>题目描述</h3>'+
                                    '<p>'+ data[i].content +'</p>'+
                                    '<p>你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。</p>'+
                                    '<h3>示例：</h3>'+
                                    '<p>给定 nums = [2, 7, 11, 15], target = 9</p>'+
                                    '<p>因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]</p>'+
                                    '<h3>代码实现</h3>'+
                                    '<pre>'+
                                        '<code>'+
                                            'public class Test{'+
                                                'public static void main(String[] args){'+
                                                    'System.out.println("Hello World");'+
                                                '}'+
                                            '}'+
                                        '</code>'+
                                    '</pre>'+
                                    '<div class="details_tag" id="detals_tag">'+
                                        '<div><span></span>LeetCode</div>'+
                                        '<div><span></span>数据结构与算法</div>'+
                                    '</div>'+
                                    '<div class="details_reward"><button>赞赏</button></div>'+
                                        
                                '</div>'+
                                '<div class="details_author">'+
                                    '<ul>'+
                                        '<li>作者:&nbsp;&nbsp;<span>'+ data[i].username +'</span>&nbsp;&nbsp;(<a>联系作者</a>)</li>'+
                                        '<li>发表时间:&nbsp;&nbsp;<span>'+ data[i].time +'</span></li>'+
                                        '<li><img src="../images/wechat.jpg" alt=""></li>'+
                                    '</ul>'+
                                '</div>'+
                                '<form action="" method="get">'+
                                    '<div class="details_remark">'+
                                        '<div class="details_remark_head">评论</div>'+
                                        '<textarea placeholder="请输入评论信息"></textarea>'+
                                        '<div class="details_commit">'+
                                            '<div class="input_username">'+
                                                '<i class="glyphicon glyphicon-user"></i>'+
                                                '<input type="text" placeholder="姓名">'+
                                            '</div>'+
                                            '<div class="input_email">'+
                                                '<i class="glyphicon glyphicon-envelope"></i>'+
                                                '<input type="text" placeholder="邮箱">'+
                                            '</div>'+
                                            '<div class="commit_button" onclick="">'+
                                                '<i class="glyphicon glyphicon-pencil"></i>'+
                                                '<span>评论</span>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                '</form>'+
                            '</div>'+       
                        '</div>'+
                    '</div>'+
                '</div>'
            );
            break;
        }
        
    }
}