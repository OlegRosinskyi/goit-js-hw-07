import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryEl = document.querySelector(".gallery");

const lastInLiImageEl = galleryItems
  .map(({ preview, original, description }) =>
  `<li class = "gallery__item item"> <img class="gallery__image imgformat"  src="${original}" loading="lazy" alt="${description}"width="850" ></li>`)
    .join("");
galleryEl.innerHTML = '<ul class="gallery list">' + lastInLiImageEl + '</ul>';  


//galleryEl.insertAdjacentHTML('beforeend', '<ul class="list">' + lastInLiImageEl + '</ul>');  


const selectImg = event => {
    
    if (event.target.nodeName !== "IMG") { return; }
    
    const selectedImg = event.target.alt;
    const namberEl = event.target.offsetParent.childElementCount;
    instance.show();
    // const galleryEl = document.querySelector('.gallery >li [alt="${selectedImg}"]');
    //galleryEl.classList.add("gallery__link");
   
    console.log(selectedImg);
    console.log(namberEl);
    console.log(event.currentTarget); console.log(event.target);
};

galleryEl.addEventListener("click", selectImg);

//const instance = basicLightbox.create(`
 //   <div class="modal">
 //       <p>
 //           Your first lightbox with just a few lines of code.
  //          Yes, it's really that simple.
  //      </p>
 //   </div>
//`)



const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

//instance.show()

