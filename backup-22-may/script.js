const toggle = document.getElementById('toggle');
const sidebar = document.getElementById('sidebar');

document.onclick = function(e) {
    if (e.target.id !== 'sidebar'  &&  e.target.id !== 'toggle') {
        toggle.classList.remove('active');
        sidebar.classList.remove('active');
    }
}

toggle.onclick = function() {
    toggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}

let carousel = document.querySelector('.carousel');

let carouselInner = document.querySelector('.carousel-inner');

let prev = document.querySelector('.carousel-controls .prev');

let next = document.querySelector('.carousel-controls .next');

let slides =  document.querySelectorAll('.carousel-inner .carousel-item');

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 2000;

let time;



//Init carousel
carouselInner.style.minWidth = (totalSlides * 100) + '%';
loadIndicators();
loop(true);


//Carousel events

next.addEventListener('click',()=>{
    slideToNext();
});

prev.addEventListener('click',()=>{
    slideToPrev();
});

carouselInner.addEventListener('transitionend',()=>{
    if(direction === -1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide++;
                carouselInner.append(carouselInner.firstElementChild);
            }
        }else{
            activeSlide++;
            carouselInner.append(carouselInner.firstElementChild);
        }
    }else if(direction === 1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide--;
                carouselInner.prepend(carouselInner.lastElementChild);
            }
        }else{
            activeSlide--;
            carouselInner.prepend(carouselInner.lastElementChild);
        }
    };

    carouselInner.style.transition = 'none';
    carouselInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump = 1;
        carouselInner.style.transition = 'all ease .5s';
    });
    updateIndicators();
});

document.querySelectorAll('.carousel-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators = document.querySelectorAll('.carousel-indicators span');

        indicators.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator = index
            }
        })

        if(slideTo - activeIndicator > 1){
            jump = slideTo - activeIndicator;
            step = jump * step;
            slideToNext();
        }else if(slideTo - activeIndicator === 1){
            slideToNext();
        }else if(slideTo - activeIndicator < 0){

            if(Math.abs(slideTo - activeIndicator) > 1){
                jump = Math.abs(slideTo - activeIndicator);
                step = jump * step;
                slideToPrev();
            }
                slideToPrev();
        }
        step = 100 / totalSlides; 
    })
});

carousel.addEventListener('mouseover',()=>{
    loop(false);
})

carousel.addEventListener('mouseout',()=>{
    loop(true);
})

//Carousel functions

function loadIndicators(){
    slides.forEach((slide,index)=>{
        if(index === 0){
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators(){
    if(activeSlide > (totalSlides - 1)){
        activeSlide = 0;
    }else if(activeSlide < 0){
        activeSlide = (totalSlides - 1);
    }
    document.querySelector('.carousel-indicators span.active').classList.remove('active');
    document.querySelectorAll('.carousel-indicators span')[activeSlide].classList.add('active');
};

function slideToNext(){
    if(direction === 1){
        direction = -1;
        carouselInner.prepend(carouselInner.lastElementChild);
    };
    
    carousel.style.justifyContent = 'flex-start';
    carouselInner.style.transform = `translateX(-${step}%)`;
};

function slideToPrev(){
    if(direction === -1){
        direction = 1;
        carouselInner.append(carouselInner.firstElementChild);
    };
    carousel.style.justifyContent = 'flex-end'
    carouselInner.style.transform = `translateX(${step}%)`;
};

function loop(status){
    if(status === true){
        time = setInterval(()=>{
            slideToNext();
        },interval);
    }else{
        clearInterval(time);
    }
}


let carouselB = document.querySelector('.carouselB');

let carouselBInner = document.querySelector('.carouselB-inner');

let prevB = document.querySelector('.carouselB-controls .prevB');

let nextB = document.querySelector('.carouselB-controls .nextB');

let slidesB =  document.querySelectorAll('.carouselB-inner .carouselB-item');

let totalslidesB = slidesB.length;

let stepB = 100 / totalslidesB;

let activeSlideB = 0;

let activeIndicatorB = 0;

let directionB = -1;

let jumpB = 1;

let intervalB = 2000;

let timeB;



//Init carouselB
carouselBInner.style.minWidth = (totalslidesB * 100) + '%';
loadIndicatorsB();
loopB(true);


//carouselB events

nextB.addEventListener('click',()=>{
    slideToBnextB();
});

prevB.addEventListener('click',()=>{
    slideToBprevB();
});

carouselBInner.addEventListener('transitionend',()=>{
    if(directionB === -1){
        if(jumpB > 1){
            for(let i = 0; i < jumpB; i++){
                activeSlideB++;
                carouselBInner.append(carouselBInner.firstElementChild);
            }
        }else{
            activeSlideB++;
            carouselBInner.append(carouselBInner.firstElementChild);
        }
    }else if(directionB === 1){
        if(jumpB > 1){
            for(let i = 0; i < jumpB; i++){
                activeSlideB--;
                carouselBInner.prepend(carouselBInner.lastElementChild);
            }
        }else{
            activeSlideB--;
            carouselBInner.prepend(carouselBInner.lastElementChild);
        }
    };

    carouselBInner.style.transition = 'none';
    carouselBInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jumpB = 1;
        carouselBInner.style.transition = 'all ease .5s';
    });
    updateIndicatorsB();
});

document.querySelectorAll('.carouselB-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideToB = parseInt(e.target.dataset.slideToB);
        
        let indicatorsB = document.querySelectorAll('.carouselB-indicators span');

        indicatorsB.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicatorB = index
            }
        })

        if(slideToB - activeIndicatorB > 1){
            jumpB = slideToB - activeIndicatorB;
            stepB = jumpB * stepB;
            slideToBnextB();
        }else if(slideToB - activeIndicatorB === 1){
            slideToBnextB();
        }else if(slideToB - activeIndicatorB < 0){

            if(Math.abs(slideToB - activeIndicatorB) > 1){
                jumpB = Math.abs(slideToB - activeIndicatorB);
                stepB = jumpB * stepB;
                slideToBprevB();
            }
                slideToBprevB();
        }
        stepB = 100 / totalslidesB; 
    })
});

carouselB.addEventListener('mouseover',()=>{
    loopB(false);
})

carouselB.addEventListener('mouseout',()=>{
    loopB(true);
})

//carouselB functions

function loadIndicatorsB(){
    slidesB.forEach((slide,index)=>{
        if(index === 0){
            document.querySelector('.carouselB-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.carouselB-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicatorsB(){
    if(activeSlideB > (totalslidesB - 1)){
        activeSlideB = 0;
    }else if(activeSlideB < 0){
        activeSlideB = (totalslidesB - 1);
    }
    document.querySelector('.carouselB-indicators span.active').classList.remove('active');
    document.querySelectorAll('.carouselB-indicators span')[activeSlideB].classList.add('active');
};

function slideToBnextB(){
    if(directionB === 1){
        directionB = -1;
        carouselBInner.prepend(carouselBInner.lastElementChild);
    };
    
    carouselB.style.justifyContent = 'flex-start';
    carouselBInner.style.transform = `translateX(-${stepB}%)`;
};

function slideToBprevB(){
    if(directionB === -1){
        directionB = 1;
        carouselBInner.append(carouselBInner.firstElementChild);
    };
    carouselB.style.justifyContent = 'flex-end'
    carouselBInner.style.transform = `translateX(${stepB}%)`;
};

function loopB(status){
    if(status === true){
        timeB = setInterval(()=>{
            slideToBnextB();
        },intervalB);
    }else{
        clearInterval(timeB);
    }
}