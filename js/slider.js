const carousel = document.querySelector(".carousel"), //container dari slider 
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i"); //wrapp kumpulan dari image 
let isDragStart = true, isDragging = true, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // menampilkan dan menyembunyikan ikon prev/next sesuai dengan nilai carousel scroll left
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 1; 
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // memanggil showHideIcons setelah 60ms
    });
});