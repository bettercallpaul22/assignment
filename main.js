const card = document.querySelectorAll(".card__inner");


for (let index = 0; index < card.length; index++) {
 
  card[index].addEventListener("mouseover", function (e) {
    card[index].classList.toggle('is-flipped');
  });
  
}


