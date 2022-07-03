const div = document.getElementById("dog")
const ul = document.getElementById("dog-breeds")
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => {
 
 
  data.message.forEach((image) => {
    const img = document.createElement("img")
    img.src = image
    div.appendChild(img)
  })
})

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(data =>{
    console.log(data.message)
    data.message.forEach((breed) => {
      const li = document.createElement("li")
      li.textContent = breed
      ul.appendChild(li)
    })
  })

})
