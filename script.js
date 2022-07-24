let imgs = [
  "img/batu1.png",
  "img/kertas1.png",
  "img/gunting1.png"
]

const insertImgsPlayer = () => {
  for (let i = 0; i < imgs.length; i++){
    let className = "";
    if (imgs[i].includes("batu")) {
      className = "batu"
    }
    if (imgs[i].includes("gunting")) {
      className = "gunting"
    }
    if (imgs[i].includes("kertas")) {
      className = "kertas"
    }

    $("#image-player").append(`<img src=${imgs[i]} class="${className}">`)
  }
}
insertImgsPlayer()


const insertImgsCOM = () => {
  for(let i = 0; i<imgs.length; i++){
    $("#image-com").append(`<img src=${imgs[i]} class="img-play">`)
  }
}
insertImgsCOM()
 

$(document.getElementById("image-player")).on("click", function(event){
  pilihanUser = event.target.className;
  pilihanCom = generateComputerOption()

  console.log("pilihan user", pilihanUser)
  console.log("pilihan com", pilihanCom)
  
  if (pilihanUser == pilihanCom) {
    $(".vs").replaceWith(`<img src= "img/DRAW.png" class="vs">`)
  }
  
  if (
    pilihanUser == "batu" && pilihanCom == "gunting" || 
    pilihanUser == "gunting" && pilihanCom == "kertas" || 
    pilihanUser == "kertas" && pilihanCom == "batu"
  ) {
    $(".vs").replaceWith(`<img src= "img/player1win.png" class="vs">`)
  }

  if (
    pilihanUser == "batu" && pilihanCom == "kertas" || 
    pilihanUser == "gunting" && pilihanCom == "batu" || 
    pilihanUser == "kertas" && pilihanCom == "gunting"
  ) {
    $(".vs").replaceWith(`<img src= "img/COMWIN.png" class="vs">`)
  }

})


const generateComputerOption = () => {
  let optionList = [ "batu","gunting","kertas"]
  let number = Math.floor(Math.random() * 3) 
  pilihanCom = optionList[number]
  return pilihanCom
}
