import photolioComponent from "./Components/photolioComponent.js";
import { activatePage, scrollToTop } from "./utilityFunctions.js";


const form = document.getElementById('form'),
    searchInp = document.getElementById('search'),
    resultHeading = document.getElementById('result-heading'),
    photolio = document.getElementById('photolio'),
    pageList = document.getElementById('pages-list'),
    homeBtn = document.getElementById('home');



// Global varibles
let searchedPhoto = '';
let inPage = 1;


// Fetch and add photos to dom
async function fetchAndShowPhotos(search, page) {
    if(!search) search = 'nature';
    try {
        const response = await fetch(`https://api.pexels.com/v1/search?page=${page}&query=${search}`, {
            headers: {
                Authorization: '563492ad6f91700001000001a5a77f143864499c9f06a62f751445eb',
            }
        })
        const data = await response.json();
        if(data.total_results == 0) {
            resultHeading.innerText = `No results by search: "${search}"`;
            return;
        }
        photolio.innerHTML = photolioComponent.render(data.photos);
        resultHeading.innerText = `Search results for: "${search}"`

    } catch(err) {
        resultHeading.innerText = 'Sorry the response not found... Try later'
        console.log(err);
    }
}



// search pictures
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInp.value.trim() != '') {
        searchedPhoto = searchInp.value;
        inPage = 1;
        activatePage(1)
        fetchAndShowPhotos(searchedPhoto, inPage);
        searchInp.value = '';
    }
})


// listener to like button

photolio.addEventListener('click', (e) => {
    if(e.target.classList.contains('like')) {
        e.target.style.color = 'red';
    }
})


homeBtn.addEventListener('click', () => {
    searchedPhoto = '';
    inPage = 1;
    fetchAndShowPhotos(searchedPhoto, inPage);
})






// List the page
pageList.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        if(e.target.innerText != inPage) {
        inPage = e.target.innerText;
        fetchAndShowPhotos(searchedPhoto, inPage)
        activatePage(e.target.innerText);
        scrollToTop();
        
        }
        
    }
})



document.addEventListener('DOMContentLoaded', () => {
    fetchAndShowPhotos(searchedPhoto, inPage)
})





































