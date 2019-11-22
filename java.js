/*
let index = 0;
let amount = 0;//amount of images
let currTransl = []
let translationComplete = true;

let transitionCompleted = function(){
    translationComplete = true;
}

document.addEventListener("DOMContentLoaded", function(event) 
{
    amount = document.getElementsByTagName('img').length;
    document.getElementsByTagName('span')[0].innerHTML = amount;
    for(let i = 0; i < amount; i++)
    {
        currTransl[i] = -779;
        document.getElementsByTagName('img')[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);                                                       
    }
    console.log("DOM fully loaded and parsed");
});

function right()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index--;
        if(index == -1)
        {
            index = amount-1;
        }
        let outerIndex = (index) % amount;
        document.getElementById('index').innerHTML = outerIndex === 0 ? 3 : outerIndex;
        for(let i = 0; i < amount; i++)
        {
            let img = document.getElementsByClassName("img")[i];    
            img.style.opacity = '1';    
            img.style.transform = 'translate('+(currTransl[i]+679)+'px)';
            img.className = 'img';
            img.className.replace( /(?:^|\s)animate(?!\S)/g , '' );
            currTransl[i] = currTransl[i]+200;
        }
        
        let outerImg = document.getElementsByClassName("img")[outerIndex];
        outerImg.style.transform = 'translate('+(currTransl[outerIndex]-679*(amount))+'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]-679*(amount);
    }
}

function left()
{
    if(translationComplete === true)
    {
        translationComplete = false;
        index++;
        let outerIndex = (index-1) % amount;
        document.getElementById('index').innerHTML = outerIndex+1;
        for(let i = 0; i < amount; i++)
        {
            let img = document.getElementsByClassName("img")[i];    
            img.style.opacity = '1';    
            img.style.transform = 'translate('+(currTransl[i]-679)+'px)';
            currTransl[i] = currTransl[i]-679;
        }
        let outerImg = document.getElementsByClassName("img")[outerIndex];
        outerImg.style.transform = 'translate('+(currTransl[outerIndex]+679*(amount))+'px)';
        outerImg.style.opacity = '0';
        currTransl[outerIndex] = currTransl[outerIndex]+679*(amount);
    }
}
*/
window.addEventListener('DOMContentLoaded', function() {

    let items = document.getElementsByClassName('carousel'),
        sliderWrap = document.getElementsByClassName('animate')[0],
        arrayHeight = [],
        prev = document.getElementsByClassName('prev-wrap')[0],
        next = document.getElementsByClassName('next-wrap')[0],
        cirklesWrap = document.getElementsByClassName('cirkles')[0],
        cirkles = document.getElementsByClassName('cirkle'),
        slideIndex = 1;
  
    function heightMax() {
        for (let i = 0; i < items.length; i++) {
            arrayHeight.push(items[i].offsetHeight);
        }
        sliderWrap.style.height = getMaxOfArray(arrayHeight) + 'px';
    }
        heightMax();
  
    window.addEventListener('resize', function() {
      heightMax();
    });
  
    function getMaxOfArray(numArray) {
        return Math.max.apply(null, numArray);
    }
  
  let move = new Array;
  arrayMove();
  function arrayMove() {
    for (let i = 0; i < items.length; i++) {
      move.push(i*100);
      items[i].style.left = move[i] + '%';
    }
  }
  
  
   function plusSlide(index) {
       if (index < 0) {
           for (let i = 0; i < items.length; i++) {
               move[i] += 100;
               items[i].style.left = move[i] + '%';
           }
       }	
       if (index > 0) {
           for (let i = 0; i < items.length; i++) {
               move[i] -= 100;
               items[i].style.left = move[i] + '%';
           }
       }
   }
  
  
  let a = 0;
   function cirkleActive(n) {
       a += n;
       for (let i = 0; i < cirkles.length; i++) {
           cirkles[i].classList.remove('cirkle-active');
       }
       if (a > cirkles.length - 1) {
           a = 0;
       }
       if (a < 0) {
           a = cirkles.length - 1;
       }
       if (a < cirkles.length && a >= 0) {
           cirkles[a].classList.add('cirkle-active');
       }
  
   }
  

   prev.addEventListener('click', () => {
       plusSlide(-1);
       cirkleActive(-1);
   });
  
   next.addEventListener('click', () => {
       plusSlide(1);
       cirkleActive(1);
   });
  
  
  
  });

