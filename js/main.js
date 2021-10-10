const play = document.querySelector('#play')
//let video = document.querySelector('.video')
let select = "https://www.youtube.com/embed/8QnMmpfKWvo" 
var windowWidth = window.screen.width;


function onPlay(){
    document.querySelector('.video').innerHTML= `<iframe width="100%" height="100%" src=${select} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    
    document.querySelector('.video').style.display='block';
    

    if(windowWidth < 1000){
        document.querySelector('.description').style.display='none';        
    }

    if(windowWidth < 600){
        document.querySelector('.button').style.display='none'
    }
}

function setCard(card, filme, title, description){
    document.querySelector('.main-film').style.backgroundImage=`url(${card})`;
    document.querySelector('.video').style.display='none';
    document.querySelector('.title').innerHTML=title;
    document.querySelector('.description').innerHTML=description;
    document.querySelector('.description').style.display='block';
    document.querySelector('.button').style.display='block'
    select=filme
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  