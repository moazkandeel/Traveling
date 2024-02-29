/*Show Menu*/ 
$(document).ready(function(){
    $('.nav_toggle').click(function(){
        $('.nav_menu').addClass('active');
    });
    $('.nav_close').click(function(){
    $('.nav_menu').removeClass('active');
});

    let navLink = $(".nav_link");
    let navMenu = $('#nav_menu');

    navLink.click(function(){
    navMenu.removeClass('active')
    });
});


$(document).ready(function(){
  $(window).scroll(function(){
    var Wscroll = $(window).scrollTop();
    if(Wscroll > 100){
      $(".header").css("backgroundColor","#fff");
      $(".nav_logo, .nav_toggle").css("color", "#11414b")
    }else{
      $(".header").css("backgroundColor","transparent");
      $(".nav_logo, .nav_toggle").css("color", "#fff")
    }
  });
});
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
  const header = document.getElementById('header')
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/




var swiper = new Swiper(".discover_container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 32,
  breakpoints: {
    0: {
        slidesPerView: 2,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 2.5,
    },
    },
  coverflowEffect: {
    rotate: 0,
  },
});
/*=================================    Video   ==================================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){
  if(videoFile.paused){
    // play Video
    videoFile.play()

    videoIcon.classList.add("ri-pause-line")
    videoIcon.classList.remove("ri-play-line")
  }else{
    videoFile.pause()

    videoIcon.classList.remove("ri-pause-line")
    videoIcon.classList.add("ri-play-line")
  }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add("ri-play-line")
}
videoFile.addEventListener('ended', finalVideo)
// end 

$(document).ready(function(){
  $('button.top').click(function(){
    $('body,html').animate({
      scrollTop: 0
    },1000)
  })

$(window).scroll(function(){
  if($(this).scrollTop() > 300){
      $('button.top').fadeIn()
  }else{
    $('button.top').fadeOut()
  }
})
})

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})




const sr = ScrollReveal({
  distance: '70px',
  duration: 2800,
  reset: true,
})
sr.reveal('.home_data, .home_social-link,.home_info,.discover_container,.experience_data, .experience_overlay, .place_card, .sponsor_content, .footer_data, .footer_rights',{
  origin: 'top',
  interval: 100,
})

sr.reveal('.about_data, .video_description, .subscribe_description',{
  origin: 'left',
})
sr.reveal('.about_img-overly, .video_content, .subscribe_form',{
  origin: 'right',
  interval: 100,
})