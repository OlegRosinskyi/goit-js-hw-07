import { galleryItems } from './gallery-items.js';
// Change code below this line
//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const lastInLiImageEl = galleryItems
  .map(({ preview, original, description }) =>
        `<a class="gallery__item" href="large-image.jpg">
         <img class="gallery__image" src="${original}" alt="${description}" />
        </a>
        `)
    .join("");
galleryEl.innerHTML = lastInLiImageEl; 

const selectImg = event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return; }
   // const selectimg = event.target;
   // selectimg.classList.add("sel-img");
   const selectedAlt = event.target.alt;
    const selectedImg = event.target.src;
   // instance.show();
   // const navImgInDivEl = document.querySelector('.basicLightbox__placeholder > img'); 
   // navImgInDivEl.src = selectedImg;
    // const galleryEl = document.querySelector('.gallery >li [alt="${selectedImg}"]');
    //galleryEl.classList.add("gallery__link");
   
   console.log(selectedAlt);
   console.log(selectedImg);
    
   console.log(event.currentTarget); console.log(event.target);
};

galleryEl.addEventListener("click", selectImg);

