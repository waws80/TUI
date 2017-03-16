/**
 * Created by lxf52 on 2017/3/16.
 * 布局控制器
 */
/*屏幕的高度*/
var divcerHeight;
window.onload=function () {
    console.log("我加载了");
    divcerHeight=screen.height;
    console.log(divcerHeight);
    var initRLH=divcerHeight+"px";
    $(".RelativeLayout").css("height",initRLH);
    var childrenArr=document.getElementsByClassName("RelativeLayout")[0].getElementsByTagName("div");
    for (var i=0;i<childrenArr.length;i++){
       // console.log(childrenArr[i]);
        //判断当前控件为 rl-tv
        if (childrenArr[i].getAttribute("class")=="rl-tv"){
            var h=$('.rl-tv').attr("height");
            var w=$('.rl-tv').attr("width");
            var textColor=$('.rl-tv').attr('textColor');
            var background=$('.rl-tv').attr('background');
            var l= $('.rl-tv').html().length;
            var font_size=$('.rl-tv').css('font-size').split("p")[0];
            $('.rl-tv').css('height',h);
            if (w.split("p")[0]>0){
                $('.rl-tv').css('width',w);
            }else {
                $('.rl-tv').css('width',(l*font_size+20)+"px");
            }
            $('.rl-tv').css('color',textColor);
            $('.rl-tv').css('background',background);
            $('.rl-tv').css('text-align',"center");
            $('.rl-tv').css('line-height',h);

            console.log(l*font_size);
        }
    }
};
