
  //sivun ladattua otetaan local storagesta edelliset artikkelit

window.onload = (event) => {

for ( var i = 0, len = localStorage.length; i < len; ++i ) {

  const varasto = document.createElement("li")
  varasto.textContent =  localStorage.key(i);
  document.querySelector("#ostokset").appendChild(varasto);

  //local storagen artikkelien yliviivaus ja poisto

  varasto.addEventListener("click", () => {

    if(varasto.style.textDecoration != "line-through" && varasto.style.color !="grey"){
      varasto.style.textDecoration = "line-through";
      varasto.style.color ="grey";}

    else {
      varasto.style.textDecoration = "none";
      varasto.style.color ="black";
      }
    })
  }
}

for ( var i = 0, len = localStorage.length; i < len; ++i ) {
  console.log( localStorage.key(i ) );
}

  //enteriä tai lisää nappia painamalla suoritetaan addItem funktio

document.querySelector("#kirjoita").addEventListener("keydown",(event)=> {
   if (event.key == "Enter" ){
      addItem();
      }
    });


document.querySelector("#lisää").addEventListener("click", (event) => {
    addItem();
})

 //poistaa kaikki artikkelit listalta

document.querySelector("#poista").addEventListener("click", (event) => {
  document.querySelector("#ostokset").textContent =null;
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

  //Ostosten tulostus, local storageen tallennus ja liian vähistä merkeistä hälyttää

  if(item.textContent.length >= 3) {
  document.querySelector("#ostokset").appendChild(item);

    localStorage.setItem(item.textContent, "ostos");

  document.querySelector("#kirjoita").value = null;
}
    else if (item.textContent.length < 3) {
      alert("Liian lyhyt teksti  :c \nMinimipituus 3 merkkiä! ");

    }



}
