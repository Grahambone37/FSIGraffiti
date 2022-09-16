
// Select some elements...

// Header styling
let header = document.querySelector("#page-header")  //<div><h2>Doggos</h2></div>
header.style.backgroundColor = "lightblue"
//header.style.textAlign = "left"

//Image Styling
let doggoImages = document.querySelectorAll(".dog-image") //array of html elements
for (let i = 0; i < doggoImages.length; i++){
    doggoImages[i].style.borderRadius = '100px'
}

//Font of Names
let doggoNames = document.querySelectorAll(".dog-name")
for (let i = 0; i < doggoNames.length; i++){
    doggoNames[i].style.fontFamily = "Courier New"
}

//Borders around Pictures
let doggoNamePip = document.querySelector("#doggo-name-pip")
doggoNamePip.style.border = "10px solid teal"
let doggoNameTess = document.querySelector("#doggo-name-tess")
doggoNameTess.style.border = "10px dotted red"
let doggoNameRizzo = document.querySelector("#doggo-name-rizzo")
doggoNameRizzo.style.border = "10px double yellow"
//Background Color
let site = document.body
site.style.backgroundColor = "lightblue"