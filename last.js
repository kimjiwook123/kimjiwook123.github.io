/* document.addEventListener('scroll', function() {
    // 스크롤 위치에 따라 투명도를 조절
    let scrollPosition = window.scrollY;
    let opacityValue = 1 - (scrollPosition / 1300); // 500은 투명도가 0이 되는 스크롤 위치
  
    // 최소 투명도를 0으로 설정
    if (opacityValue < 0) {
      opacityValue = 0;
    }
  
    // 스크롤에 따라 투명도 조절
    document.querySelector('.e1_2').style.opacity = opacityValue;
  });
  