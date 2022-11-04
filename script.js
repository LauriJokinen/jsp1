
  //sivun ladattua otetaan local storagesta edelliset artikkelit

window.onload = (event) => {

for ( var i = 0, len = localStorage.length; i < len; ++i ) {

  const varasto = document.createElement("li")
  varasto.textContent =  localStorage.key(i);
  document.querySelector("#ostokset").appendChild(varasto);

}
}

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  console.log( localStorage.key(i ) );
}


document.querySelector("#kirjoita").addEventListener("keydown",(event)=> {
   if (event.key == "Enter" ){
      addItem();
      }
    });

  //lisää listalle artikkelin

document.querySelector("#lisää").addEventListener("click", (event) => {
    addItem();
})

 //poistaa kaikki artikkelit listalta

document.querySelector("#poista").addEventListener("click", (event) => {
  document.querySelector("#ostokset").textContent ="";
  localStorage.clear();
});

  //addItem funktio lisää tekstin sivulle, tyhjentää tekstikentän ja mahdollistaa
  //ostosten yliviivauksen tai sen poiston

addItem = () => {

  const item = document.createElement("li")
  item.textContent = document.querySelector("#kirjoita").value;


  //Klikkaamalla värinvaihto ja yliviivaus, toisella klikkauksella palaa takaisin alkupetäiseen.

  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through" && item.style.color !="grey"){
      item.style.textDecoration = "line-through";

        item.style.color ="grey";}
    else {
      item.style.textDecoration = "none";
        item.style.color ="black";
    }
  })

  //Ostosten tulostus, liian vähistä merkeistä hälyttää

  if(item.textContent.length >= 3) {
  document.querySelector("#ostokset").appendChild(item);


    localStorage.setItem(item.textContent, "ostos");



  document.querySelector("#kirjoita").value = null;
}
    else if (item.textContent.length < 3) {
      alert("Liian lyhyt teksti  :c \nMinimipituus 3 merkkiä! ");

    }

  console.log(item.textContent.length);

}
