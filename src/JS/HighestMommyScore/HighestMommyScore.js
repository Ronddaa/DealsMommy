import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Инициализация Swiper.js
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2, // По умолчанию 2 карточки
  spaceBetween: 10, // Отступ между карточками
   pagination: {
    el: ".swiper-pagination", // Элемент для пагинации
    clickable: true, // Возможность клика по булетам
    type: 'bullets', // Тип пагинации - булеты
  },
  breakpoints: {
    1024: { slidesPerView: 4, spaceBetween: 20 }, // На ПК (4 карточки)
  },
});

// Данные о товарах
const products = [
  { image: "./src/assets/img/IMG.png", title: "DEWALT 20V Drill", priceBefore: "$239.00", priceNow: "$129.00", discount: "-20%" },
  { image: "./src/assets/img/IMG.png", title: "Makita Brushless Drill", priceBefore: "$299.00", priceNow: "$199.00", discount: "-33%" },
  { image: "./src/assets/img/IMG.png", title: "Bosch Drill Kit", priceBefore: "$159.00", priceNow: "$99.00", discount: "-38%" },
  { image: "./src/assets/img/IMG.png", title: "Milwaukee Impact Driver", priceBefore: "$349.00", priceNow: "$229.00", discount: "-34%" },
];

// Контейнер для карточек
const cardList = document.getElementById("highestMommyScoreCardsList");

// Генерация карточек товаров
products.forEach((product) => {
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");

  slide.innerHTML = `
    <div class="swiper-slide shadow-sm border-0 highestMommyCard" style="width: 18rem;">
  <img src="${product.image}" alt="Product Image" class="highestMommyCard-img-top cardsIMGsize">
  <div class="highestMommy-body">
    <h5 class="highestMommyCard-title">${product.title}</h5>
    <p class="text-muted"><s>Was: ${product.priceBefore}</s></p>
    <p class="fs-4 fw-bold textPrice">${product.priceNow}</p>
    <button class="btnMoreDRed">
      Deal details <span class="discountBtn">${product.discount}</span>
    </button>
  </div>
</div>
  `;

  cardList.appendChild(slide);
});