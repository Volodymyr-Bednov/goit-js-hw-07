import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector("div.gallery");
galleryItems.map((value) => {
  const { preview, original, description } = value;

  const gItem = document.createElement("div");
  gItem.classList.add("gallery__item");

  const gLink = document.createElement("a");
  gLink.classList.add("gallery__link");
  gLink.href = original;

  const gImage = document.createElement("img");
  gImage.classList.add("gallery__image");
  gImage.src = preview;
  gImage.alt = description;
  gImage.setAttribute("data-source", original);

  gallery.append(gItem);
  gItem.append(gLink);
  gLink.append(gImage);
});

gallery.onclick = (ev) => {
  ev.preventDefault();
  if (ev.target.nodeName !== "IMG") return;
  const imageOriginalURL = ev.target.dataset.source;

  const dialogBLB = basicLightbox.create(
    `
  		<img width="1400" height="900" src="${imageOriginalURL}">
  	`
  );
  dialogBLB.show(
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") dialogBLB.close();
    })
  );
};
