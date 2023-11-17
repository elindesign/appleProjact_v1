
// 모든 섹션 <a> 태그를 선택.
const allLinks = document.querySelectorAll('section a');

// 각 링크에 대한 클릭 이벤트를 제어.
allLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
  });
});




/* Top 배너   */
$(document).ready(function() {
  const bannerWrap = $(".bannerWrap");
  const topBanner = $(".topBanner");
  const linkText = $('.topBanner span')

  setTimeout(function() {
    bannerWrap.css({
      marginTop: "44px",
      backgroundColor: "#0073e6", 
    });

    setTimeout(function() {
      bannerWrap.css({
        backgroundColor: "transparent",
       
      });

    topBanner.css({
        marginTop: "44px",
        color: "#333",    
    });

    linkText.css({
      color: "#0073e6",
    });
  

    }, 1200); // 1.5초(1500ms) 후에 배경색을 투명으로 변경
  }, 200); // 2초(2000ms) 후에 배경색을 원래 파란색으로 변경
});




/*  iphone15Pro 색상 클릭시 이미지변경 */
window.addEventListener('DOMContentLoaded', () => {
  const colorSpans = document.querySelectorAll('.color-group.test span');
  
  const sections = [
    {
      img: document.querySelector('#iphone-left figure img'),
      imagePaths: [
        './images/iphone/iphone_main_back_02.png',
        './images/iphone/iphone_main_back_01.png',
        './images/iphone/iphone_main_back_04.png',
        './images/iphone/iphone_main_back_03.png'
      ]
    }
    
  ];

  function changeImage(sectionIndex, imageIndex) {
    const section = sections[sectionIndex];
    section.img.src = section.imagePaths[imageIndex];
    
 
  // 이미지 설정
  section.img.style.width = '30%';
  section.img.style.height = '100%';
  section.img.style.margin = '0 auto';
  section.img.style.objectFit = 'cover';
}
  
  colorSpans.forEach((span, index) => {
    span.addEventListener('click', () => {
      const sectionIndex = span.closest('.contents').id === 'iphone-left' ? 0 : 1;
      changeImage(sectionIndex, index);
    });
  });


});




