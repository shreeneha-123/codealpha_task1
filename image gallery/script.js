const images = [
            'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg',
            'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg',
            'img9.jpg', 'img10.jpg', 'img11.avif', 'img12.jpg'
];

let currentIndex = 0

function openFullImg(src, index) {
    const fullImgBox = document.getElementById('fullImgBox');
    const fullImg = document.getElementById('fullImg');
    fullImgBox.style.display = 'flex';
    fullImg.src = src;
    currentIndex = index;
}

function closeFullImg() {
    const fullImgBox = document.getElementById('fullImgBox');
    fullImgBox.style.display = 'none';
}

function prevImg() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    document.getElementById('fullImg').src = images[currentIndex];
}

function nextImg() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    document.getElementById('fullImg').src = images[currentIndex];
}