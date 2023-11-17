
// 메뉴 모바일
  $('#toggle_btn').click(function() {
    $('.mobile-menu-content').slideToggle('fast');
  });


// 햄버거 x 애니메이션
function myFunction(x) {
  x.classList.toggle("change");
}


/* 메뉴 hover시 뒷배경 블러 */
  let itemNames = $('.item__name');
  let itemNames2 = $('#dy-header .contents__menu .inner');
  let testBG = $('.testBG');

  itemNames.mouseenter(function () {
    testBG.css('display', 'block');
    testBG.get(0).offsetWidth;
    testBG.css('opacity', '1');
  });

  itemNames.mouseleave(function () {
    testBG.css('opacity', '0');
    testBG.css('transitionend', function () {
    testBG.css('display', 'none');
    
    });
  });

  itemNames2.mouseenter(function () {
    testBG.css('display', 'block');
    testBG.get(0).offsetWidth;
    testBG.css('opacity', '1');
  });

  itemNames2.mouseleave(function () {
    testBG.css('opacity', '0');
    testBG.css('transitionend', function () {
    testBG.css('display', 'none');
    
    });
  });



/* pc구간 메뉴 토글 */
  $('.item__name').mouseenter(function () {
    $('#dy-header .contents__menu .inner').stop().slideDown(400);
    $('#dy-header').css({
      'background-color': 'rgba(251, 251, 253, 1)'
    })
  });

  $('#dy-header .contents__menu').mouseleave(function () {
    $('#dy-header .contents__menu .inner').stop().slideUp(500);
    $('#dy-header').css({
      'background-color': '#FBFBFD'
    })
  });


/* 스크롤시 메뉴 배경 블러 */
$(window).scroll(function() {
  if ($(this).scrollTop() > 100 && $(window).width() > 830) {
    $('#dy-header').css({
      'background-color': 'rgba(251, 251, 253, 0.8)',
      'backdrop-filter': 'saturate(180%) blur(10px)',
      'box-shadow': '1px 1px 2px rgba(0, 0, 0, 0.1)'
    });
  } else {
    // Reset styles when not scrolled or on a smaller screen
    $('#dy-header').removeAttr('style');
  }
});



/* footer  */
$(function(){
    /* wd는 변수명 */
    let wd = $(window).width();
    /* 변수명 = true는 값이 나타나는것 */
    // const trueItem =true;
    if (wd<=1023) {
      $('.menu-title-plus').click(function(){
        
        /* .menu-title-plus의 (형제)다음 요소이니까 this.next  */
        $(this).next().stop().slideToggle();
        
        /* this의 자식요소 children 
        toggleClass는 addClass기능도 포함으로 변수를 만들면서 toggle된다! */
        $(this).children('.yj-btn').toggleClass('rotate');
        
        /* addClass는 클래스명을 스크립트에서 새롭게 부과 
        Class의 C는 대문자*/
      });
    }
    $(window).resize(function() {
      let wd = $(window).width();
      if(wd<=1023) {
        $('.menu-title-plus').click(function(){
          $(this).next().stop().slideToggle();
          $(this).children('.yj-btn').toggleClass('rotate');
  
        });
      }
    })
  });
  
  