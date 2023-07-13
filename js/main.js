$(document).ready(function(){
    $('.right').click(function(){
        $('.popup').show()
    })
    $('.popup .profile').click(function(){
        $('.popup').hide()
    })

    $(window).scroll(function(){
      if($(this).scrollTop() >=8500){
          // gotop 버튼 보여줘
          $('.go-top').fadeIn();
      } else {
          // gotop 버튼 숨어줘
          $('.go-top').fadeOut();
          
      }
      behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
  })
})

document.addEventListener('DOMContentLoaded', function() {
  var aElements = document.getElementsByClassName('left');
  
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click', function(event) {
      event.preventDefault(); // 클릭된 링크의 기본 동작을 막습니다.
      
      // 여기에 이동할 스크롤 위치를 지정합니다.
      var scrollPosition = 1100; // 예시로 500px로 지정했습니다.
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
      });
    });
  }

  var aElements = document.getElementsByClassName('go-top');
  
  for (var i = 0; i < aElements.length; i++) {
    aElements[i].addEventListener('click', function(event) {
      event.preventDefault(); // 클릭된 링크의 기본 동작을 막습니다.
      
      // 여기에 이동할 스크롤 위치를 지정합니다.
      var scrollPosition = 0; // 예시로 500px로 지정했습니다.
      
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
      });
    });
  }

  
});