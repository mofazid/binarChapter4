let imgs = [
  "img/batu1.png",
  "img/kertas1.png",
  "img/gunting1.png"
]

let list = [
  "batu",
  "kertas",
  "gunting"
]

const insertImgsPlayer = () => {
  for (let i = 0; i < imgs.length; i++){

    $("#image-player").append(`<img src=${imgs[i]} class="${list[i]}">`)
  }
}
insertImgsPlayer()


const insertImgsCOM = () => {
  for(let i = 0; i<imgs.length; i++){
    $("#image-com").append(`<img src=${imgs[i]} class=${list[i]}>`)
  }
}

insertImgsCOM()
 

$("#image-player").click(function(event){

  pilihanUser = event.target.className;
  pilihanCom = generateComputerOption()

  if (pilihanUser == pilihanCom) {
    $(".vs").replaceWith(`<img src= "img/DRAW.png" class="vs">`)
    $(".vs").css({"background-color": "green"});
  }
  
  if (
    pilihanUser == "batu" && pilihanCom == "gunting" || 
    pilihanUser == "gunting" && pilihanCom == "kertas" || 
    pilihanUser == "kertas" && pilihanCom == "batu"
  ) {
    $(".vs").replaceWith(`<img src= "img/player1win.png" class="vs">`)
    $(".vs").css({"background-color": "green"});
  }

  if (
    pilihanUser == "batu" && pilihanCom == "kertas" || 
    pilihanUser == "gunting" && pilihanCom == "batu" || 
    pilihanUser == "kertas" && pilihanCom == "gunting"
  ) {
    $(".vs").replaceWith(`<img src= "img/COMWIN.png" class="vs">`)
    $(".vs").css({"background-color": "green"});
  }

  $(event.target).css({
    "background-color": "#C4C4C4",
    "border-radius": "30px"
  });  

  console.log(pilihanCom)

  $(event).off()
})


const generateComputerOption = () => {

  let number = Math.floor(Math.random() * 3) 
  pilihanCom = list[number]
  const collection = document.getElementById("image-com").children;
  collection[number].classList.add("picked")
  return pilihanCom
}


$(".refresh").on("click", function(event){
  let confirmResult = confirm("retry?")
  if (confirmResult){
    location.reload()
  }
})