let info = {
  service: [
    {
      id: 1,
      title: "Графический дизайн",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
    {
      id: 2,
      title: "Фронетенд Разработчик",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
    {
      id: 3,
      title: "UI / UX Дизайнер",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
    {
      id: 4,
      title: "Контент Менеджер",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
    {
      id: 5,
      title: "Тестировщик",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
    {
      id: 6,
      title: "Разработчик мобильных приожений",
      text: "это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра",
    },
  ],
  work: [
    {
      id: 1,
      src: "./img/work/burger.png",
      title: "Ресторан Burger House",
      text: "BURGER HOUSE - это ресторан, предлагающий широкий ассортимент бургеров, закусок и напитков. Уютная атмосфера, быстрое обслуживание и вкуснейшие бургеры делают его популярным местом для отдыха и обеда.",
      urlSite: "https://lybimkab.github.io/burgers/",
      urlSiteText: "ресторан burgers",
      urlLayout:
        "https://www.figma.com/proto/TTVN5YJ6sy2efoAjbYjBUM/landing?node-id=252-588&t=OhmHGLTeR5XMmNnM-1",
      urlLayoutText: "макет burgers",
    },
    {
      id: 2,
      src: "./img/work/parallax.png",
      title: "Сайт с Parallax эфектом",
      text: "Это веб-сайт, на котором элементы интерфейса и контента прокручиваются с разной скоростью, создавая иллюзию трехмерности и глубины.",
      urlSite: "https://lybimkab.github.io/parallax/",
      urlSiteText: "сайт Parallax",
      urlLayout: "#",
      urlLayoutText: "отсутствует",
    },
    {
      id: 3,
      src: "./img/work/hotel.png",
      title: "Отель Royal Park",
      text: "Идеальное место для комфортного и роскошного отдыха. Расположенный в живописном месте с прекрасным видом на природу, отель предлагает роскошные номера, отличный сервис, бассейн, спа-центр и рестораны с изысканной кухней. Приезжайте в отель Royal Park и наслаждайтесь идеальным отдыхом!",
      urlSite: "https://lybimkab.github.io/RayalPark/",
      urlSiteText: "отель Royal Park",
      urlLayout:
        "https://www.figma.com/design/PlZoSToPs5E9EAgqOnxoCw/Hotel?node-id=0-1&t=C5PEMpdFfyH3oUsB-1",
      urlLayoutText: "макет Royal Park",
    },
    {
      id: 4,
      src: "./img/work/gallows.png",
      title: 'Игра "Виселица"',
      text: 'Играй в классическую игру "Виселица" и проверь свои знания слов! Угадай загаданное слово, чтобы спасти висельника от неминуемой гибели. Прояви свою логику и лингвистические способности в этой захватывающей игре.',
      urlSite: "https://lybimkab.github.io/gallows/",
      urlSiteText: 'игра "Виселица"',
      urlLayout: "#",
      urlLayoutText: "отсутствует",
    },
    {
      id: 5,
      src: "./img/work/to_find_the_trove.png",
      title: 'Игра "Найди сокровище"',
      text: 'Игра "Найди сокровище" - это захватывающий способ провести время! Почувствуй азарт и веселье, угадывая место клада и получая подсказки от робота. Погрузись в мир веселья!',
      urlSite: "https://lybimkab.github.io/treasure/",
      urlSiteText: 'игра "Найди сокровище"',
      urlLayout: "#",
      urlLayoutText: "отсутствует",
    },
    {
      id: 6,
      src: "./img/work/clean.png",
      title: "Клиниговая компания",
      text: "Клининговая компания предлагает профессиональные услуги уборки для домов, офисов и коммерческих помещений. Наши опытные сотрудники используют самые эффективные методы и средства для обеспечения идеальной чистоты и порядка.",
      urlSite: "#",
      urlSiteText: "отсутствует",
      urlLayout:
        "https://www.figma.com/design/JO43pxQfqVnvTqhU8zvaGL/Cleaning-company?node-id=0-1&t=eRPGwC87uUjOBVin-1",
      urlLayoutText: " макет клининговой компании",
    },
  ],
};

const service = document.querySelector(".service-grid");
const work = document.querySelector(".work-grid");
const burger = document.querySelector(".header-burger-img");
const menu = document.querySelector(".header-nav-menubar-elements");
const navBar = document.querySelector(".header-nav-menu");

function addInfoService(el) {
  const serviceBlock = `<div class="service-block">
                        <p class="service-block-title">
                            ${el.title}
                        <p>
                        <p class="service-block-text">
                            ${el.text}
                        </p>
                    </div>`;

  service.insertAdjacentHTML("beforeend", serviceBlock);
}

function addInfoWork(el) {
  const workBlock = `<div class="work-block">
                        <div class="work-block-info"><img src="${el.src}" alt="${el.id}">
                            <p class="work-block-title">${el.title}</p>
                            <p class="work-block-text">
                                ${el.text}
                            </p>
                            <div class="work-link">
                                <p class="work-block-text-link">Ссылка на сайт: <a
                                        href="${el.urlSite}">${el.urlSiteText}</a></p>
                                <p class="work-block-text-link">Ссылка на макет: <a
                                        href="${el.urlLayout}">${el.urlLayoutText}</a>
                                </p>
                            </div>
                        </div>
                        <button class="work-btn-el darkGreen-btn btn">Подробнее</button>
                    </div>`;

  work.insertAdjacentHTML("beforeend", workBlock);
}

function ClickWorkBtn(e) {
  let n = 0;
  if (e.target.classList.contains("work-btn-el")) {
    e.target.parentElement.classList.toggle("active");
    if (e.target.parentElement.classList.contains("active")) {
      e.target.textContent = "Скрыть";
    } else {
      e.target.textContent = "Подробнее";
    }
  }
}

function NavBar() {
  menu.classList.toggle("activity");
  if (menu.classList.contains("activity")) {
    burger.src = "./img/header/exit.png";
  } else burger.src = "./img/header/menu.png";
}

info.service.forEach((el) => addInfoService(el));
info.work.forEach((el) => addInfoWork(el));

work.addEventListener("click", ClickWorkBtn);
burger.addEventListener("click", NavBar);
navBar.addEventListener("click", LinkStyle);
