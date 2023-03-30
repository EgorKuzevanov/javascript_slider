const sliderImage = document.querySelector(".slider-image");
const sliderButtons = document.querySelector(".slider_buttons-container");
const sliderDots = document.querySelector(".slider-dots");

let sliderImagesArray = [
    {
        text: "Первый кот",
        file: "https://www.purinaone.ru/cat/sites/purinaone.ru/files/2019-03/kittens-cat3.jpg"
    },
    {
        text: "Второй кот",
        file: "https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg"
    },
    {
        text: "Третий кот",
        file: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    }
];

let currentImageIndex = 0;

function paintElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        sliderButtons.innerHTML += `<button class="slider-button" id="slider-button${i}">${sliderImagesArray[i].text}</button>`;
        sliderDots.innerHTML += `<img class="dot" id="dot${i}" src="svg/circle-full.svg" alt="dot"></img>`;
    }
}

function addListenersToElements() {
    for (let i = 0; i < sliderImagesArray.length; i++) {
        document.getElementById(`slider-button${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
        });

        document.getElementById(`dot${i}`).addEventListener('click', () => {
            currentImageIndex = i;
            setImage();
        });
    }
}

paintElements();
addListenersToElements();
selectButton(0);
selectDot(0);

const leftArrow = document.getElementById("left-arrow-button");
leftArrow.addEventListener('click', () => {
    currentImageIndex--;
    setImage();
});

const rightArrow = document.getElementById("right-arrow-button");
rightArrow.addEventListener('click', () => {
    currentImageIndex++;
    setImage();
});

function setImage() {
    if (currentImageIndex > sliderImagesArray.length - 1)
        currentImageIndex = 0;
    if (currentImageIndex < 0)
        currentImageIndex = sliderImagesArray.length - 1;

    sliderImage.style.backgroundImage = "url(\"" + sliderImagesArray[currentImageIndex]['file'] + "\")";

    reduceButtons();
    selectButton(currentImageIndex);

    reduceDots();
    selectDot(currentImageIndex);
}

function selectButton(index) {
    let circle = sliderButtons.childNodes[index];
    circle.classList.add("slider-image__selected");
}

function reduceButtons() {
    sliderButtons.childNodes.forEach((item) => {
        item.classList.remove("slider-image__selected");
    });
}

function selectDot(index) {
    let circle = sliderDots.childNodes[index];
    circle.style.transform = "scale(1.2)";
    circle.src = "svg/circle-empty.svg";
}

function reduceDots() {
    sliderDots.childNodes.forEach((item) => {
        item.style.transform = "scale(1)";
        item.src = "svg/circle-full.svg";
    });
}
