


document.querySelector("#kirjoita").addEventListener("keydown",(event)=> {



   if (event.key == "Enter" ){
      addItem();

  }

});


  //addItem funktio lisää tekstin sivulle, tyhjentää tekstikentän ja mahdollistaa
  //ostosten yliviivauksen tai sen poiston

addItem = () => {

  const item = document.createElement("h2")
  item.textContent = document.querySelector("#kirjoita").value;


  item.addEventListener("click", () => {
    if(item.style.textDecoration != "line-through" && item.style.color !="grey"){
      item.style.textDecoration = "line-through";

        item.style.color ="grey";}
    else {
      item.style.textDecoration = "none";
        item.style.color ="black";
    }
  })

  if(item.textContent.length >= 3) {
  document.querySelector("#ostokset").appendChild(item);
  document.querySelector("#kirjoita").value = null;
}
    else if (item.textContent.length < 3) {
      alert("Liian lyhyt teksti  :c \nMinimipituus 3 merkkiä! ");

    }

  console.log(item.textContent.length);

}
