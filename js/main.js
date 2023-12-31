(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

function myFunction() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
    
    // Add the "show" class to DIV
    x.className = "show";
    
    // After 4 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
    }

    $(document).ready(function() {
    
    // Fakes the loading setting a timeout
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 750);
    
    });

$(document).ready(function() {
    $('#play-btn').click(function() {
        $('#video-modal').modal('show');
        $('#my-video').get(0).play();
    });
    
    $('#video-modal').on('hidden.bs.modal', function () {
        $('#my-video').get(0).pause();
    });
    });






// best but bug
    // const ghostContainer = document.querySelector('.ghost-container');
    // const body = document.body;
    
    // ghostContainer.addEventListener('mouseenter', () => {
    // body.style.filter = 'grayscale(100%)'; // Set body to grayscale on hover
    // });
    
    // ghostContainer.addEventListener('mouseleave', () => {
    // body.style.filter = 'grayscale(0)'; // Reset body to color when mouse leaves ghost
    // });


//solution! but too quick

    // const ghostContainer = document.querySelector('.ghost-container');
    // const elementsToFilter = document.querySelectorAll('.element-to-filter');
    
    // ghostContainer.addEventListener('mouseenter', () => {
    //   elementsToFilter.forEach(element => {
    //     if (!element.classList.contains('navbar')) {
    //       element.style.filter = 'grayscale(100%)'; // Apply grayscale filter to specific elements except navbar
    //     }
    //   });
    // });
    
    // ghostContainer.addEventListener('mouseleave', () => {
    //   elementsToFilter.forEach(element => {
    //     element.style.filter = 'grayscale(0)'; // Reset grayscale filter on mouse leave
    //   });
    // });





const ghostContainer = document.querySelector('.ghost-container');
const elementsToFilter = document.querySelectorAll('.element-to-filter');
const filterIncrement = 2; // Increase this value for slower transition

ghostContainer.addEventListener('mouseenter', () => {
  let currentFilterValue = 0; // Initial grayscale value

  const filterInterval = setInterval(() => {
    currentFilterValue += filterIncrement;
    if (currentFilterValue <= 100) {
      elementsToFilter.forEach(element => {
        if (!element.classList.contains('navbar')) {
          element.style.filter = `grayscale(${currentFilterValue}%)`;
        }
      });
    } else {
      clearInterval(filterInterval);
    }
  }, 20); // Interval time for smooth transition
});

ghostContainer.addEventListener('mouseleave', () => {
  elementsToFilter.forEach(element => {
    element.style.filter = 'grayscale(0)'; // Reset grayscale filter on mouse leave
  });
});

    




// const cookieBox = document.querySelector(".wrapper"),
// buttons = document.querySelectorAll(".button");

// const executeCodes = () => {
//     //if cookie contains codinglab it will be returned and below of this code will not run
//     if(document.cookie.includes("iamjayandhan")) return;
//     cookieBox.classList.add("show");

//     // buttons.forEach(button => {
//     //     button.addEventListener("click", () => {
//     //         cookieBox.classList.remove("show");

//     //         //if button has acceptBtn id
//     //         if (button.id == "acceptBtn") {
//     //         //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
//     //         document.cookie = "cookieBy= iamjayandhan; max-age=" + 60 * 60 * 24 * 30;
//     //         }
//     //     });
//     // });


//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             cookieBox.classList.remove("show");
    
//             if (button.id == "acceptBtn") {
//                 document.cookie = "cookieBy=iamjayandhan; max-age=" + 60 * 60 * 24 * 30;
//             }
//         });
//     });
// };
// //executeCodes function will be called on webpage load
// window.addEventListener("load", executeCodes);




const cookieBox = document.querySelector(".wrapper");
const buttons = document.querySelectorAll(".button");

const executeCodes = () => {
    if (document.cookie.includes("cookieBy=iamjayandhan")) return;

    // Delay the display of the popup to allow the animation to work
    setTimeout(() => {
        cookieBox.classList.add("show");
    }, 1000); // Adjust the delay as needed

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (button.id == "acceptBtn") {
                document.cookie = "cookieBy=iamjayandhan; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};

window.addEventListener("load", executeCodes);








var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

