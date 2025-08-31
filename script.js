let form = document.querySelector('form')
let searchterm = document.querySelector('#searchTerm')

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
   console.log( searchterm.value)
   getData(searchterm.value)
   searchterm.value = ""
})
async function getData(searchTerm) {
    let res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    let data = await res.json()
   makeContainers(data)
} 

let section = document.createElement('section')
let body = document.body;
section.classList.add('container')
body.appendChild(section)


function makeContainers(data){
    section.innerHTML = "";
   
 data.forEach((el)=>{
    let card = document.createElement('div')
    card.classList.add('card')
    section.appendChild(card)
    let {genres , image , language , name , rating } = el.show;
    let img = document.createElement('img')
    img.src = image.medium
    console.log(image.medium)
    let h3 = document.createElement('h3');
    h3.innerText = name.slice(0,15)
    let ratings = document.
    
    
    createElement('span')
    ratings.innerText = rating.average || "No Rating";
    let lang = document.createElement('span');
    lang.innerText = language
    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(ratings)
    card.appendChild(lang)
 })
}