$(document).ready(function(){
	
	$('.mob-mnu-ic, .mobilemenu li a').click(function(e) {
		$('.mobilemenu').slideToggle();
		$('.dl-trigger').toggleClass('dl-active');
	});
	
	$('.accordion').accordion({
		defaultOpen: 'hd-one',
		speed: 'slow'
	});

    $('.accordion-bnr').accordion({
		speed: 'slow'
	});
	
	$('.mainMenu').scroller();
	
	$('.read-more').click(function(e) {
        $('.hiddenLabel').slideDown();
		$(this).hide();
    });

    var cboxOptions = {
        width: '95%',
        height: '95%',
        maxWidth: '960px',
        maxHeight: '960px',
    };

    $('a.fancybox').click(function(e){
		e.preventDefault();
		var url=$(this).attr('href');
		$.colorbox({
			width: cboxOptions.width,
			  height: cboxOptions.height,
			  maxWidth: cboxOptions.maxWidth,
			  maxHeight: cboxOptions.maxHeight,
			href:url
        });
		return false;
    });
    
    $(document).scroll(function () {
	    $.colorbox.resize({
		width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
        height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
        });
    });
      
    $(window).resize(function(){
	  $.colorbox.resize({
		width: window.innerWidth > parseInt(cboxOptions.maxWidth) ? cboxOptions.maxWidth : cboxOptions.width,
		height: window.innerHeight > parseInt(cboxOptions.maxHeight) ? cboxOptions.maxHeight : cboxOptions.height
	  });
    });
    
    $(document).scroll(function() {
		
        if ($(this).scrollTop() > 110){
           $('.top-fix-bar').addClass('fixed-nav');
        }else{
            $('.top-fix-bar').removeClass('fixed-nav');
        }
        
        if ($(this).scrollTop() > 10){
           $('.mobilemenu').addClass('mobimenu-top');
        }else{
            $('.mobilemenu').removeClass('mobimenu-top');
        }
    
        var $elem = $('.footer');
        var $window = $(window);
    
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();
    
        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();
    
        if (elemTop >= (docViewBottom + 20) || (elemTop + $('#call-btn').height()) >= (docViewBottom + 134) ) {
            $('#call-btn').css('position', 'fixed');
        } else {
            $('#call-btn').css({'position' : 'relative'});
            
        }
        
    });
});