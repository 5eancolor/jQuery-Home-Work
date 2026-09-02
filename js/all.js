$(document).ready(function () {

//下拉式選單
    $(".menu>ul>li").hover(function(){
        $(this).find(".dropdown-open").stop().slideToggle();
        $(this).find("dropdown").toggleClass("active");
    });

//banner swiper
   const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
    autoplay: {
        delay: 3000,
    },
  // If we need pagination
  //pagination: {
    //el: '.swiper-pagination',
  //},

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//scrolltop

    $(".arrow a").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });

});