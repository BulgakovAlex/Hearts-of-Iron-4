document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "images/gallery-1.jpg",
        "images/gallery-2.jpg",
        "images/gallery-3.jpg",
        "images/gallery-4.jpg",
        "images/gallery-5.jpg"
    ];

    let currentIndex = 0;
    const galleryImage = document.getElementById("gallery-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function changeImage(index) {
        galleryImage.style.opacity = 0; // Исчезновение картинки
        setTimeout(() => {
            galleryImage.src = images[index];
            galleryImage.style.opacity = 1; // Плавное появление
        }, 300);
    }

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        changeImage(currentIndex);
    });

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        changeImage(currentIndex);
    });
});
