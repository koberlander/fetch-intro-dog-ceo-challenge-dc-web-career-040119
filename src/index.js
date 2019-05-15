document.addEventListener('DOMContentLoaded', function(){
  fetchDogs()
})

function fetchDogs(){
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(res => res.json())
  .then(dogStatusMsg => {
    dogStatusMsg.message.forEach(image => displayDogsImgs(image))
  }
)}

function displayDogsImgs(image){

  // find display area on DOM
  let dogImageContainer = document.getElementById('dog-image-container')

  //set each image to variable and create element
  let singleDogImage = document.createElement('img')

  singleDogImage.src = image

  //append image to display area
  dogImageContainer.appendChild(singleDogImage)

}

document.addEventListener('DOMContentLoaded', function(){
  loadDogBreeds()
})

function loadDogBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(breedObj => {
    let breedArray = Object.keys(breedObj.message)
    breedArray.forEach(breed => printDogBreed(breed))
    // breedObj.message.forEach(dog => printDogBreed(dog))
  })
}

function printDogBreed(breed){
  // console.log('sup')

  //find ul element
  let dogBreedUl = document.getElementById('dog-breeds')

  let dogLi = document.createElement('li')
  dogLi.innerText = breed
  // adding code to access li upon click (to change color)
  dogLi.addEventListener("click", () => changeColor(event))
  //display breed name
  dogBreedUl.append(dogLi)

  //on <li> click, make post (?) fetch, and change color of <li>

  // had to move original function titled changeColor into this printDogBreed function to gain access to dogLi (previously could was out of scope)
  function changeColor(event) {
    dogLi.style.color = "red"
  }
}
