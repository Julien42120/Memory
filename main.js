
// TABLEAU D'IMAGES //

let imgArray = [
    { name: "disney", img: "Images/disney.png", },
    { name: "disney", img: "Images/disney.png", },
    { name: "facebook", img: "Images/facebook.png", },
    { name: "facebook", img: "Images/facebook.png", },
    { name: "insta", img: "Images/insta.png", },
    { name: "insta", img: "Images/insta.png", },
    { name: "netflix", img: "Images/netflix.png", },
    { name: "netflix", img: "Images/netflix.png", },
    { name: "tiktok", img: "Images/tiktok.png", },
    { name: "tiktok", img: "Images/tiktok.png", },
    { name: "twitter", img: "Images/twitter.png", },
    { name: "twitter", img: "Images/twitter.png", },
    { name: "whatsapp", img: "Images/whatsapp.png", },
    { name: "whatsapp", img: "Images/whatsapp.png", },
    { name: "youtube", img: "Images/youtube.png", },
    { name: "youtube", img: "Images/youtube.png", },
];


// AFFICHER UNE IMAGE RANDOM DANS CHAQUE BALISE IMG // 


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  

  shuffle(imgArray);


let AllImg = document.querySelectorAll('.gameImg')

if (AllImg.length == imgArray.length) {
    for (let i = 0; i < AllImg.length; i++) {
        AllImg[i].setAttribute('src', imgArray[i].img )
    }
}



let tab = [];
let countClick = 0; // VERIF 2 CLICK //
let countClick2 = 0; // COMPTEUR DE CLICK EN TOUT //
let ImagesCount = 0; // COMPTEUR GAGNANT //

// CACHER IMG //

AllImg.forEach(singleImg => {
    singleImg.addEventListener('click', function(e){
        e.target.style.opacity = 1;
        countClick ++ ;
        countClick2 ++ ;
        count.innerHTML = countClick2 + " Coups Joués";
        tab.push(e.target);

        if (countClick == 2){

            if (tab[0].currentSrc == tab[1].currentSrc) {

                e.target.style.opacity = 1;
                tab=[]
                countClick = 0
                ImagesCount ++
                 console.log(ImagesCount)
               
                    if (ImagesCount == 8){
                        modal.style.display = 'block'
                        modal.style.color = 'black'
                        modal.classList.add('show')
                        modalBody.innerHTML =  ' Vous avez gagné'
                    }

            } else {
                setTimeout(() => {
                    tab[0].style.opacity = 0;
                    tab[1].style.opacity = 0; 
                    tab=[]
                }, 200 )
                    countClick = 0
                    
            }
            
            } 
        });
})

let count = document.querySelector('.count');

let modal = document.querySelector('.modal')
let modalBody = document.querySelector('.modal-body')

// SI TOUTE LES CASES ONT ÉTÉ DÉCOUVERTES //








