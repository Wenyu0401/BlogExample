function tagPage() {
    var str = "";
    
    $("#content").html(
        '<div class="row">'+
            '<div class="col-md-10 col-md-offset-1">'+
                '<div class="tag_content">'+
                    '<div class="tag_head">'+
                        '<div class="content_head">'+
                            '<div class="blog_list">标签</div>'+
                            '<div class="blog_num">共<span id="tag_total_num">&nbsp;0&nbsp;</span>个</div>'+
                        '</div>'+
                        '<div class="tag_list">'+
                            '<ul id="tag_list_ul">'+
                                // '<li><div></div><a>1<span>0</span></a></li>'+
                            //     '<li><div></div><a>2<span>0</span></a></li>'+
                            //     '<li><div></div><a>3<span>0</span></a></li>'+
                            //     '<li><div></div><a>4<span>0</span></a></li>'+
                            //     '<li><div></div><a>5<span>0</span></a></li>'+
                            //     '<li><div></div><a>6<span>0</span></a></li>'+
                            //     '<li><div></div><a>7<span>0</span></a></li>'+
                            //     '<li><div></div><a>8<span>0</span></a></li>'+
                            //     '<li><div></div><a>9<span>0</span></a></li>'+
                            //     '<li><div></div>10<span>0</span></li>'+
                            '</ul>'+
                        '</div>'+
                    '</div>'+
                    '<div id="tag_entry">'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>'
    );

    // 标签，使用map，hasMap()可以判断该键是否存在
    var map = new Map();
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
        // $("#item_tag").html(titleTag);
        // 使用map，存储标签名和具有该标签的文章数量
        for (let j = 0; j < data[i].tag.length; j++) {
            if(map.has(data[i].tag[j])){
                map.set(data[i].tag[j],map.get(data[i].tag[j])+1);
            }else{
                map.set(data[i].tag[j],1);
                // console.log(map.get(data[i].sign));
            }
        }
        
        str += 
                '<div class="content_list">'+
                    '<div class="item">'+
                        '<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
                        '<p class="blog_list_content"><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
                        '<div class="blog_list_massage">'+
                            '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
                            '<div class="item_name">'+data[i].username+'</div>'+
                            '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
                            '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
                            '<div class="item_sign">'+data[i].sign+'</div>'+
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
        // 向标签页面的每个文章简介里添加标签
        
        
    }
    $("#tag_entry").html(str);
    $("#tag_total_num").html(map.size);

    


    // 获取博客分类，这里应该是获取博客标签
    // var sortString = "";
    // map.forEach(function (key,value) {
    //     var mapValue = "'"+value+"'";
    //     sortString += '<li onclick="chooseTagPage('+mapValue+')"><div></div><a>'+value+'<span>'+ key +'</span></a></li>';
    // })
    // $("#tag_list_ul").html(sortString);

    // 获取博客分类，
    var tagString = "";
    // 基于标签的id，要递增
    var countId = 0;
    map.forEach(function (key,value) {
        var mapValue = "'"+value+"'";
        countId++;
        // tagString += '<li onclick="chooseTagPage('+mapValue+')"><div class="tag_list_angle"></div><a>'+value+'<span>'+ key +'</span></a></li>';
        tagString += 
            '<li onclick="chooseTagPage('+mapValue+',\''+'#tag'+countId +'\')" id="tag'+ countId +'">'+
                    '<div></div>'+
                    '<a>'+value+'<span>'+ key +'篇</span></a>'+
            '</li>'
    })
    $("#tag_list_ul").html(tagString);
    // console.log(map);

    
}

function changeState(id) {
    // 添加类名，使其颜色符合符合选中条件
    $(id).addClass("selected_tag");
    $(id).siblings("li").removeClass("selected_tag");
}

// 根据博客标签查询具有该标签的文章
function chooseTagPage(tag,id) {
    console.log("chooseTagPage"+tag);
    changeState(id);
    var chooseTagPageString = "";
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].tag.length; j++) {
        
            // console.log(data[i].tag[j]);
            if(tag == data[i].tag[j]){
                let titleTag = "";
                for (let k = 0; k < data[i].tag.length; k++) {
                    let dataTagValue = "'"+ data[i].tag[k] +"'"
                    titleTag +=
                        '<li onclick="chooseTagPage('+dataTagValue+')">'+
                            '<div></div>'+
                            ''+ data[i].tag[k] +''+
                        '</li>'
                }
                console.log(titleTag);
                chooseTagPageString += 
                    '<div class="content_list">'+
                        '<div class="item">'+
                            '<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
                            '<p class="blog_list_content"><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
                            '<div class="blog_list_massage">'+
                                '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
                                '<div class="item_name">'+data[i].username+'</div>'+
                                '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
                                '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
                                '<div class="item_sign">'+data[i].sign+'</div>'+
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
        }
    }
    $("#tag_entry").html(chooseTagPageString);
    $("#classify_entry").html(chooseTagPageString);
}

function chooseIndexTagPage(tag) {
    console.log(tag);
    var chooseTagPageString = "";
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].tag.length; j++) {
        
            // console.log(data[i].tag[j]);
            if(tag == data[i].tag[j]){
                let titleTag = "";
                for (let k = 0; k < data[i].tag.length; k++) {
                    let dataTagValue = "'"+ data[i].tag[k] +"'"
                    titleTag +=
                        '<li onclick="chooseIndexTagPage('+dataTagValue+')">'+
                            '<div></div>'+
                            ''+ data[i].tag[k] +''+
                        '</li>'
                }
                console.log(titleTag);
                chooseTagPageString += 
                    '<div class="content_list">'+
                        '<div class="item">'+
                            '<h3 class="blog_list_title"><a onclick="details('+data[i].id+')">'+data[i].title+'</a></h3>'+
                            '<p class="blog_list_content"><a onclick="details('+data[i].id+')">'+data[i].content+'</a></p>'+
                            '<div class="blog_list_massage">'+
                                '<div class="item_img"><img src="'+data[i].avatar+'" alt=""></div>'+
                                '<div class="item_name">'+data[i].username+'</div>'+
                                '<div class="item_time"><i class="glyphicon glyphicon-calendar"></i>'+data[i].time+'</div>'+
                                '<div class="item_num"><i class="glyphicon glyphicon-eye-open"></i>'+data[i].num+'</div>'+
                                '<div class="item_sign">'+data[i].sign+'</div>'+
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
        }
    }
    $("#contentList").html(chooseTagPageString);
}