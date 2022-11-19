import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
 
const galleryEl = document.querySelector(".gallery");

const lastInLiImageEl = galleryItems
  .map(({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${original}"
      data-source="large-image.jpg"
      alt="${description}"
    />
  </a>
</div>
 `)
    .join("");
galleryEl.innerHTML = lastInLiImageEl;  

//galleryEl.insertAdjacentHTML('beforeend', '<ul class="list">' + lastInLiImageEl + '</ul>');  


const selectImg = event => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") { return; }
   // const selectimg = event.target;
   // selectimg.classList.add("sel-img");
   const selectedAlt = event.target.alt;
    const selectedImg = event.target.src;
    instance.show();
    const navImgInDivEl = document.querySelector('.basicLightbox__placeholder > img'); 
  navImgInDivEl.src = selectedImg;
  
const selectKeyEscp = event => { 
  event.preventDefault();
  const keyEnter = event.key;
const navDivEl = document.querySelector('.basicLightbox');
  console.log(keyEnter);
  if (keyEnter === "Escape") { console.log(keyEnter === "Escape");
    let event = new Event("click", { bubbles: true, cancelable: true});
    navDivEl.dispatchEvent(event);
  };

};
galleryEl.addEventListener("keydown", selectKeyEscp);


    // const galleryEl = document.querySelector('.gallery >li [alt="${selectedImg}"]');
    //galleryEl.classList.add("gallery__link");
   
   console.log(selectedAlt);
   console.log(selectedImg);
    
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
   <img src="" width: 100%;>
`
); //<img src="assets/images/image.png" width="800" height="600">
//instance.show()
 



 
