import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import searchImagesByQuery from './js/pixabay-api';
import { createImages, clearImages } from './js/render-functions';


const form = document.querySelector('.gallery-form');
const input = document.querySelector('.input-for-gallery');
const loader = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.load-more-btn');

let currentPage = 1;
let wordForSearch = '';
const perPage = 15;

const handleSubmit = async event => {
  try {
    event.preventDefault();
    clearImages();
    loader.classList.remove('hidden');
    loadMoreEl.classList.add('hidden');
    wordForSearch = input.value.trim();
    currentPage = 1
    if (wordForSearch === '') {
      iziToast.error({
        position: 'topRight',
        message: 'Please fill the input',
      });
      loader.classList.add('hidden');
      return;
    }
    
    const response = await searchImagesByQuery(wordForSearch, currentPage, perPage);

        if (response.data.hits.length === 0) {
      iziToast.error({
        position: 'topRight',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
          loader.classList.add('hidden');
          
      return;
        }
    if (response.data.totalHits <= perPage) {
            createImages(response);
      iziToast.info({
      message: 'We`re sorry, but you`ve reached the end of search results.',
      position: 'bottomRight',
      });
      loader.classList.add('hidden');
      return;
    }
        else {
      loader.classList.add('hidden');
      createImages(response);
      loadMoreEl.classList.remove('hidden');
 smoothScroll();
      
          }
      } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'An error occurred. Please try again later.',
      position: 'bottomRight',
    });
  } finally {
    loader.classList.add('hidden');
    input.value = '';
  }

  }

form.addEventListener('submit', handleSubmit);

const onLoadBtnClick = async event => {
  try {
    currentPage++;
    loader.classList.remove('hidden');
    loadMoreEl.classList.add('hidden');
    const response = await searchImagesByQuery(wordForSearch, currentPage, perPage);
    
    const data = response.data; 

    if (Math.ceil(data.totalHits / perPage) === currentPage) {
      loadMoreEl.classList.add('hidden'); 
      loader.classList.add('hidden');
      iziToast.info({
      message: 'We`re sorry, but you`ve reached the end of search results.',
      position: 'bottomRight',
    });
      return;
    }

      createImages(response);
    loadMoreEl.classList.remove('hidden');
    loader.classList.add('hidden');
    smoothScroll();

  } catch (err) {
    console.log(err);
}
};

loadMoreEl.addEventListener('click', onLoadBtnClick);

function smoothScroll() {
    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}

