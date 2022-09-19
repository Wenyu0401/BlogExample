function onSearch() {
    var contentBox = '<div class="row">'+
     '<div class="col-md-10 col-md-offset-1">'+
         '<div class="content">'+
             '<div class="content_head">'+
                 '<div><i class="glyphicon glyphicon-list"></i>搜索结果</div>'+
                 '<div>共<span id="total">&nbsp;0&nbsp;</span>篇</div>'+
             '</div>'+
             '<div id="contentList">'+
             '</div>'+
         '</div>'+
     '</div>'+
 '</div>';
        $("#content").html(contentBox);
        let $searchVal = $("#search").val();
        if($searchVal){
            console.log($searchVal);
            $("#contentList").html(search($searchVal));
        }else{
            alert("搜素框中请写入值");
        }
    }

function search(dataId) {
    var count = "0";
    var str = ""
    var reg = new RegExp(dataId)
    for (let i = 0; i < data.length; i++) {
        if(data[i].sign.match(reg) || data[i].id == dataId||data[i].title.match(reg)){
            var titleTag = "";
            for (let j = 0; j < data[i].tag.length; j++) {
                let dataTagValue = "'"+ data[i].tag[j] +"'"
                titleTag += 
                    '<li onclick="chooseTagPage('+dataTagValue+')">'+
                        '<div></div>'+
                        ''+ data[i].tag[j] +''+
                    '</li>'
            }
            count++;
            str += '<div class="content_list">'+
            '<div class="item">'+
                '<h3><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
                '<p><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
                '<div>'+
                    '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
                    '<div class="item_name">'+data[i].username+'</div>'+
                    '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
                    '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
                    '<div class="item_sign">'+data[i].sign+'</div>'+
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
            // '<div class="line"></div>'+
        '</div>';
        }
    }
    $("#total").html("&nbsp;"+count+"&nbsp;");
    return str;
}
// input回车事件
$("#search").keydown(
	function(e) {
	if (e.keyCode == 13) {
		$("#contentList").html(search($("#search").val()));
		}
});
