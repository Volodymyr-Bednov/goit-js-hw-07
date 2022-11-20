import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector("ul.gallery");
galleryItems.map((value) => {
  const { preview, original, description } = value;

  const gItem = document.createElement("li");

  const gLink = document.createElement("a");
  gLink.classList.add("gallery__item");
  gLink.href = original;

  const gImage = document.createElement("img");
  gImage.classList.add("gallery__image");
  gImage.src = preview;
  gImage.alt = description;

  gallery.append(gItem);
  gItem.append(gLink);
  gLink.append(gImage);
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
