document.addEventListener('DOMContentLoaded', function(){
  // fetchDogs()
  loadDogBreeds()
})

// function fetchDogs(){
//   fetch('https://dog.ceo/api/breeds/image/random/4')
//   .then(res => res.json())
//   .then(dogStatusMsg => {
//     dogStatusMsg.message.forEach(image => displayDogsImgs(image))
//   }
// )}
//
// function displayDogsImgs(image){
//   console.log('yo')
//
//   // find display area on DOM
//   let dogImageContainer = document.getElementById('dog-image-container')
//
//   //set each image to variable and create element
//   let singleDogImage = document.createElement('img')
//
//   singleDogImage.src = image
//
//   //append image to display area
//   dogImageContainer.appendChild(singleDogImage)
//
// }

function loadDogBreeds(){
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(res => res.json())
  .then(breedObj => {
    let breedArray = Object.keys(breedObj.message)
    breedArray.forEach(breed => printDogBreed(breed))
    debugger
    // breedObj.message.forEach(dog => printDogBreed(dog))
  })
}

function printDogBreed(breed){
  console.log('sup')

  //find ul element
  let dogBreedUl = document.getElementById('dog-breeds')

  let dogLi = document.createElement('li')
  dogLi.innerText = breed

  //display breed name
  dogBreedUl.append(dogLi)
}
