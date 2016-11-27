$(document).ready(function(){

var $pages=$('#viewport .pages');

var height=$('#viewport').height();
var width=$('#viewport').width();

$pages.hide();
$('#page1').show();


var first_page=$pages.get(0);
var last_page=$pages.get($pages.length-1); //数字表示一共页数的长度-1

$pages.swipeUp(function(){
	$(this).addClass('up_fade_out');	
    if ($(this).get(0)==last_page) {
    	$(first_page).addClass('up_top').show().addClass('up_fade_in');
	}else{
        $(this).next().addClass('up_top').show().addClass('up_fade_in');
	}
    var $that=$(this);
	setTimeout(function(){
        
		$that.removeClass('up_fade_out');
        $pages.hide();
		if ($that.get(0)==last_page) {
	       $(first_page).removeClass('up_top').removeClass('up_fade_in').show();
		}else{
		   $that.next().removeClass('up_top').removeClass('up_fade_in').show();	
		}
	},400)
	
})


$pages.swipeDown(function(){
	$(this).addClass('down_fade_out');	
	if ($(this).get(0)==first_page) {
    	$(last_page).addClass('down_top').show().addClass('down_fade_in');
	}else{
        $(this).prev().addClass('down_top').show().addClass('down_fade_in');
	}
    var $that=$(this);
	setTimeout(function(){
		$that.removeClass('down_fade_out');
        $pages.hide();
		if ($that.get(0)==first_page) {
	       $(last_page).removeClass('down_top').removeClass('down_fade_in').show();
		}else{
		   $that.prev().removeClass('down_top').removeClass('down_fade_in').show();
		}
	},400)

})





// $('body').get(0).addEventListener('touchmove', function(event) {
//     if (!pages.contains(event.target)) {
//         event.preventDefault();
//     }
// })
document.querySelector('body').addEventListener('touchmove', function(e) {
    if (!document.querySelector('.bottom').contains(e.target)) {
        e.preventDefault();
    }
})


















// var $body=$('body').get(0);
// var ts;
// $body.addEventListener("touchstart", function(event) {       
//                 ts = event.touches[0].clientY;
// },false);

// $body.addEventListener("touchmove", function(event) {

//   var i = "11";

//   if (this.scrollTop===0){

//        i = this.offsetHeight === this.scrollHeight ? "00" : "01"; // 如果说没有滚动条的情况，i = "00"; 有滚动条的情况为“01”。
//   }                                  
           
//   else if (this.scrollTop + this.offsetHeight >= this.scrollHeight){  //有滚动条，滚动到最底部的情况。

//        i = "10";  
//   }


//  if (i !== "11") {

//        //01是向上滑动或者滑不动，10是向下滑动。

//        var m = event.touches[0].clientY - ts > 0 ? "10" : "01";

//        if (!(parseInt(i, 2) & parseInt(m, 2))){

// 　　      　event.stopPropagation();
// 　　　　　　event.preventDefault();
//        }
                      
// 　　　

//  }









//   },false);



// var n=$('body').get(0);



// var f;
// n.addEventListener("touchstart", function(e) {         //n为h5页面的body
//                 f = e.touches[0].clientY;

// },!1),
// n.addEventListener("touchmove", function(t) {
 //  var i = "11"
 //  , n = this;
 //  if (0 === n.scrollTop)                                  //滚动条最顶部的情况。
 //       // 如果说没有滚动条的情况，i = "00"; 有滚动条的情况为“01”。
 //       i = n.offsetHeight === n.scrollHeight ? "00" : "01";     
 //  else if (n.scrollTop + n.offsetHeight >= n.scrollHeight)//有滚动条，滚动到最底部的情况。
 //       i = "10";                 
 // if ("11" !== i) {
 //       //01是向上滑动或者滑不动，10是向下滑动。
 //       var r = t.touches[0].clientY - f > 0 ? "10" : "01";
 //       if (!(parseInt(i, 2) & parseInt(r, 2)))
 //                        //e(t)
   // alert(n.scrollTop)
//           if(n.scrollTop!=0){
//           　t.stopPropagation();
// 　　　　　　t.preventDefault();
// }
     // }
//   },!1);




















})
