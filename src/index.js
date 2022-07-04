const div = document.getElementById("dog")
const ul = document.getElementById("dog-breeds")
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
 
 
  data.message.forEach((image) => {
    const img = document.createElement("img")
    img.src = image
    img.style.height = "200px"
    img.style.width = "200px"
    img.style.marginLeft ="10px"
    div.appendChild(img)
  })
})

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data =>{
    const breeds =Object.keys(data.message)
   
    breeds.forEach((breed) => {
      const li = document.createElement("li")
      li.textContent = breed
      ul.appendChild(li)
    })
  })

})
