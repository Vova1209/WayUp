




var isMobile ={Android:function(){return navigator.userAgent.match(/Android/i);},BlackBerry:function() {return navigator.userAgent(/BlackBerry/i);}};
if(isMobile.any()){}

if (location.hash){
  var hsh=location.hash.replace('#', '');
  if($('.popup-'+hsh).length>0){
    popupOpen(hsh);
  }else if ($('div.' +hsh).length>0){
    $('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
  }
}



  

//Клик вне области
$(document).on('click touchstart', function(e){
  if (!$(e.target).is(".select *")){
    $('.select').removeClass('active');
  };
});

//up
$(window).scroll(function(){
  var w=$(window).width();
  if($(window).scrollTop()>50){
    $('#up').fadeIn(300);
  }else{
    $('#up').fadeOut(300);
  }
});
$('#up').click(function(event){
  $('body,html').animate({scrollTop:0},300);
});


$('body').on('click','tab_navitem',function(event){
var eq=$(this).index();
if($(this).hasClass('parent')){
  var eq=$(this).parent().index();
}
if(!$(this).hasClass('active')){
  $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
  if($(this).closest('.tabs').find('.slick-slider').lenght>0){
    $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
  }
}
});
$.each($('.spoller.active'), function(index,val){
  $(this).next().show();
});
$('body').on('click','spoller', function(event){
  if ($(this).hasClass('mob') && !isMobile.any()){
    return false;
  }
  if ($(this).hasClass('closeall') && !$(this).hasClass('active')){
    $.each($(this).closest('.spollers').find('spoller'), function(index,val){
      $(this).removeClass('active');
      $(this).next().slideUp(300);
    });
  }
  $(this).toggleClass('active').next().slideToggle(300,function(index,val){
    if($(this).parent().find('slick-slider').lenght>0){
      $(this).parent().find('.slick-slider').slick('setPosition');

    }
  });
  return false;
});
function scrolloptions(){
  var scs=100;
  var mss=50;
  var bns=false;

  if(isMobile.any()){
    scs=10;
    mss=1;
    bns=true;
  }
  var opt={
    cursorcolor:"#fff",
    cursorwidth:"4px",
    background:"",
    autohidemode:true,
    cursoropacitymax: 0.4,
    bouncescroll:bns,
    cursorborderradius: "0px",
    scrollspeed:scs,
    mousescrollstep:mss,
    directionlockdeadzone:0,
    cursorborder: "0px solid #fff", 
  };
  return opt;
}
 function scroll(){
   $('.scroll-body').niceScroll('.scroll-list', scrolloptions());

 }
if(navigator.appVersion.indexOf("Mac")!=-1){
}else{
  if($('.scroll-body').length>0){scroll();}
}

function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }
  ibg();

$(window).resize(function(event)  {
    adaptive_function();
});
function adaptive_header(w,h) {
    var headerMenu=$('.header-menu');
    var headerLang=$('.header-top-lang');
    if(w<768){
        if(!headerLang.hasClass ('done')){
            headerLang.addClass('done').appendTo(headerMenu);
        }
    } else{
            if(headerLang.hasClass('done')){
                headerLang.removeClass('done').prependTo($('.header-top'));
            }
        }

        if(w<768){
            if(!$('.header-bottom-menu').hasClass ('done')){
                $('.header-bottom-menu').addClass('done').appendTo(headerMenu);
            }
        } else{
            $.each($('.header-bottom-menu'),function(index, vall){
               if($(this).hasClass('header-bottom-menu--right')){
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colum').eq(2));
                }
               }
               else{
                if($(this).hasClass('done')){
                    $(this).removeClass('done').prependTo($('.header-bottom__colum').eq(0));
                }
            }
            });
            }
    }
    

function adaptive_function(){
    var w=$(window).outerWidth();
    var h=$(window).outerHeight();
    adaptive_header(w,h);
}
adaptive_function();

//menu-burger
$('.header-menu__icon').click(function(event){
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if($(this).hasClass('active')){
        $('body').data('scroll',$(window).scrollTop());
    }
    $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('body').data('scroll')));

    }
});
