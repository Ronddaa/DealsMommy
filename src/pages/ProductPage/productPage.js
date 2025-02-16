document.addEventListener("DOMContentLoaded", () => {
        const params = new URLSearchParams(window.location.search);

        // Данные о товаре
        const title = params.get("title") || "No title";
        const priceBefore = params.get("priceBefore") || "N/A";
        const priceNow = params.get("priceNow") || "N/A";
        const discount = params.get("discount") || "No discount";

        // Парсим список изображений (ожидаем строку вида "img1.jpg,img2.jpg,img3.jpg")
        const images = params.get("images") ? params.get("images").split(",") : ["default.jpg"];

        // Заполняем элементы
        document.getElementById("productTitle").textContent = title;
        document.getElementById("priceBefore").textContent = "Was: " + priceBefore;
        document.getElementById("priceNow").textContent = "Now: " + priceNow;
        document.getElementById("discount").textContent = discount;

        const mainSwiperWrapper = document.getElementById("mainSwiperWrapper");
        const thumbsSwiperWrapper = document.getElementById("thumbsSwiperWrapper");

        // Генерируем слайды
        images.forEach((img) => {
          const slideMain = document.createElement("div");
          slideMain.classList.add("swiper-slide");
          slideMain.innerHTML = `<img src="${img}" alt="Product Image" class="main-image">`;
          mainSwiperWrapper.appendChild(slideMain);

          const slideThumb = document.createElement("div");
          slideThumb.classList.add("swiper-slide");
          slideThumb.innerHTML = `<img src="${img}" alt="Thumbnail" class="thumb-image">`;
          thumbsSwiperWrapper.appendChild(slideThumb);
        });

        // Инициализация Swiper
        const thumbSwiper = new Swiper(".thumb-swiper", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesProgress: true,
          loop: true,
        });

        new Swiper(".main-swiper", {
          loop: true,
          spaceBetween: 10,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          thumbs: {
            swiper: thumbSwiper,
          },
        });

        // Вставляем первое изображение в основной блок
        if (images.length > 0) {
          document.getElementById("productImage").src = images[0];
        }
      });