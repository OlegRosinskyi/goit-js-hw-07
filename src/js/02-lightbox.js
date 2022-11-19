import { galleryItems } from './gallery-items.js';
// Change code below this line
//var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

const lastInLiImageEl = galleryItems
  .map(({ preview, original, description }) =>
        ` <a class="gallery__item" href="${preview}">
         <img class="gallery__image" src="${original}" alt="${description} title="Beautiful Image" />
        </a> 
        `)
    .join("");
galleryEl.innerHTML = '<div class="gallery">' + lastInLiImageEl + '</div> '; 
//galleryEl.remove("ul");
let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});

