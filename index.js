const files = ['./vie_img/365MC001.jpg','./vie_img/365MC002.jpg','./vie_img/365MC003.jpg','./vie_img/365MC004.jpg','./vie_img/365MC005.jpg','./vie_img/Bluenight001.jpg','./vie_img/Bluenight002.jpg','./vie_img/kyongbokUniv_new_media001.jpg','./vie_img/kyongbokUniv_new_media002.png','./vie_img/kyongbokUniv_new_media003.jpg','./vie_img/kyongbokUniv_new_media004.png','./vie_img/Myworkspace.jpg','./vie_img/Pariscroissant001.jpg','./vie_img/Pariscroissant002.jpg','./vie_img/Pariscroissant003.jpg','./vie_img/Schneider001.jpg','./vie_img/Schneider002.jpg','./vie_img/SK_battery.jpg','./vie_img/SK_honors_lounge001.jpg','./vie_img/SK_honors_lounge002.jpg','./vie_img/SK_kindergarten001.jpg','./vie_img/SK_kindergarten002.jpg'  ]

// const button = document.querySelector('#img_list');
// const images = document.querySelector('#images');

// function showImages(e){
//     e.preventDefault();
    
//     files.forEach(e => 
//             images.innerHTML += `<li><img src = "${e}" > </li>`
//     )
// }

// button.addEventListener('click', showImages)

const slides = document.querySelector('.slides');

async function getSlides(){
    files.forEach(e=> {
        slides.innerHTML += `<li class="slide"><img src = "${e}" > </li>`
    })

    const slide = await slides.querySelectorAll(".slide");
    console.log(slide);

    var currentSlide = 0;
    var windowWidth = window.innerWidth;

    await setInterval(()=>{
        var from = -(windowWidth * currentSlide);
        var to = from - windowWidth;
        slides.animate({
            marginLeft:[from + "px", to +"px"]
        }, {
            duration : 1000,
            easing: "ease",
            iterations : 1,
            fill: "both"
    
        });
        currentSlide++
        if (currentSlide === (slide.length-1)){
            currentSlide = 0;
        }
    }, 2000 );
};

getSlides();