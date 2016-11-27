$(document).ready(function(){

var $pages=$('#viewport .pages');
var $viewport=$('#viewport');

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


document.ontouchmove=function(e){
	return false;
	 //var e=event;
	 // e.stopPropagation();
     //    e.preventDefault();
}



})
