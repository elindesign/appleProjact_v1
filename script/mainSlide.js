

/* TopBanner 스와이퍼 */

var swiper06 = new Swiper(".bannerBigGroup", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 800,
  autoplay:{
    delay: 2000, 
        disableOnInteraction: false, 

},
 
});



/* Main 슬라이드 스크립트 */
var swiper01 = new Swiper("#ej-mainSwiper-wrap .mySwiper", {
  slidesPerView: 'auto',
  speed: 600,
/*   cssMode: true, */  /* 풀면 스와이퍼 안됨 */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay:{
    delay: 3000, 
        disableOnInteraction: false, // false-스와이프 후 자동 재생
  loop: true,

},
  pagination: {
    el: ".swiper-pagination.mainPG",
    clickable: true,
  },
  keyboard: true,
});





/* App store 스와이퍼 */
    var swiper02 = new Swiper("#appleStore-section .AppStore", {
      slidesPerView: 'auto',
      spaceBetween: 9,
      pagination: {
        el: ".swiper-pagination.ej-page",
        clickable: true,
      }/* ,
      mousewheel: true,
      speed : 200, */  /* 마우스휠 돌리면 넘어가게 */
    });




/* airPops 스와이퍼 */
    var swiper03 = new Swiper("#en-airPops-section .airPops-inner", {
      slidesPerView: 'auto',
      spaceBetween: 32,
      pagination: {
        el: ".swiper-pagination.airPops",
      /*   clickable: true, */
      },
  autoplay:{
    delay: 2000, // 시간 설정
        disableOnInteraction: false, // false-스와이프 후 자동 재생
  loop: true,

},
    });




/* AppleTV 스와이퍼 */

    var swiper04 = new Swiper(".appleTv", {
      slidesPerView: 1.5,
      spaceBetween: 20,
    /*   loopAdditionalSlides: 5, */
      centeredSlides: true,
      initialSlide:4, //index번호로 몇번째 슬라이드부터 시작할건지
     /*  loopedSlides: 0,     */
      speed: 400,
      pagination: {
        el: ".swiper-pagination.appleTvPage",
        clickable: true,
      },
      autoplay:{
        delay: 2000, // 시간 설정
            disableOnInteraction: false, // false-스와이프 후 자동 재생
      loop: true,
    
    },
    });



    
/* 애플와치  */
$(document).ready(function () {
  // Swiper 초기화 코드
  var yjSwiper = new Swiper(".yjSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.7,
      slideShadows: false,
    },
    rewind: true,
    navigation: {
      nextEl: ".swiper-button-next.yj",
      prevEl: ".swiper-button-prev.yj",
    },
    on: {
      slideChange: function () {
        // 현재 활성 슬라이드 인덱스 가져오기
        var activeIndex = this.activeIndex;
        // 모든 info-box 숨기기
        $(".information-wrapper .info-box").hide();
        // 현재 활성 슬라이드에 해당하는 info-box 표시
        $(".information-wrapper .info-box").eq(activeIndex).show();
      },
    },
  });

  // 초기 상태에서 첫 번째 정보 영역 보이기
  $('.information-wrapper > div').hide();
  $('.Series9, .Ultra2, .Nike').addClass('active');

  ['A-Series9', 'A-Ultra2', 'A-Nike'].forEach(function (className, index) {
    $('.' + className).click(function () {
      // 이미지 슬라이드
      yjSwiper.slideTo(index); // 'mySwiper'에서 'yjSwiper'로 변경

      // 정보 영역 표시
      $('.information-wrapper > div').hide();
      $('.information-wrapper > div').eq(index).show();

      // .active 클래스를 갖고 있는 탭을 갱신
      $('.watch-links a').removeClass('active');
      $('.' + className).addClass('active');
    });
  });

});



    
      


   

  