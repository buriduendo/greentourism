document.getElementById('min-price').addEventListener('input', updateTours);
document.getElementById('max-price').addEventListener('input', updateTours);
document.getElementById('sort').addEventListener('change', updateTours);

function pluralizeTours(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return "тур";
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
        return "тура";
    } else {
        return "туров";
    }
}

function updateTours() {
    // Получаем значения из полей
    const minPrice = document.getElementById('min-price').value;
    const maxPrice = document.getElementById('max-price').value;
    const sortOption = document.getElementById('sort').value;

    // Инициализируем массив для фильтрации туров
    let filteredTours = tours;

    // Фильтруем туры по нижней границе цены
    if (minPrice) {
    // Оставляем только туры, цена которых больше минимальной
        filteredTours = filteredTours.filter(tour => tour.price >= minPrice);
    }

    // Фильтруем туры по верхней границе цены
    if (maxPrice) {
    // Оставляем только туры, цена которых меньше максимальной
        filteredTours = filteredTours.filter(tour => tour.price <= maxPrice);
    }

    // Сортируем туры по цене
    if (sortOption === 'asc') {
        // Сортируем по возрастанию цены
        filteredTours.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'desc') {
        // Сортируем по убыванию цены
        filteredTours.sort((a, b) => b.price - a.price);
    }

    const tourCount = filteredTours.length;
    const tourCountText = document.getElementById('tour-count-number');
    tourCountText.innerText = tourCount + ' ' + pluralizeTours(tourCount);

    const tourContainer = document.getElementById('tour-container');
    tourContainer.innerHTML = ''; 

    filteredTours.forEach(tour => {
    const tourElement = document.createElement('section');
    tourElement.classList.add('tour-section');
    
    tourElement.innerHTML = `
      <div class="tour-image ">
        <img src="${tour.image}" alt="${tour.name}">
      </div>
      <div class="tour-details">
        <h2 class="tour-title">${tour.name}</h2>
        <p class="tour-description">${tour.description}</p>
        <p class="tour-location">• ${tour.location}</p>
        <p class="tour-price"><span class="price-amount">${tour.price}</span> ₽ с человека</p>
        <a href="${tour.url}" class="tour-button">Подробнее</a>
      </div>
    `;
    
    tourContainer.appendChild(tourElement);
    });
}

const tours = [
    { id: 1, name: "Отдых на страусиной ферме", description: "Посетите первую в России страусиную ферму, расположенную в 70 километрах от Москвы. Здесь вы познакомитесь с величественными австралийскими страусами и узнаете о них много интересного", location: "Серпухов, деревня Старые Кузьменки", price: 4800, image: "imgs/tur1.png", url: "tour.html" },
    { id: 2, name: "День на ферме Любытино-Хутор", description: "Желаете провести день вдали от городской суеты? Тогда приезжайте на ферму «Любытино-Хутор» и насладитесь свежей выпечкой, нежным творогом и другой натуральной продукцией, выращенной местными фермерами.", location: "Новгородская обл, деревня Бор", price: 4000, image: "imgs/tur2.png", url: "tour.html" },
    { id: 3, name: "Секреты пчеловодства на ферме", description: "Приглашаем на незабываемый день на пчелиной ферме! Вас ждет экскурсия по ферме, сон на ульях, мастер-классы, вкусная еда из фермерских продуктов, свежий воздух и много другое.", location: "Республика Коми, деревня Баяркерес", price: 5500, image: "imgs/tur3.png", url: "tour.html" },
    { id: 4, name: "Ремесла Костромской глубинки", description: "Вы посетите деревни, где до сих пор живы старинные ремесла: гончарное дело, ткачество и резьба по дереву. Вас ждут мастер-классы от местных мастеров, дегустация блюд и погружение в атмосферу традиционной русской деревни.", location: "Кострома, деревня Красное-на-Волге", price: 10000, image: "imgs/tur4.png", url: "tour.html" },
    { id: 5, name: "«Русская деревня» в Суздале", description: "Погрузитесь в атмосферу старинной русской деревни, прогуляйтесь по узким улочкам, насладитесь традиционной кухней. Познакомьтесь с историей и культурой России и попробуйте свои силы в деревенских ремеслах.", location: "Владимирская обл, Суздаль", price: 3500, image: "imgs/tur5.png", url: "tour.html" },
  ];
  
  updateTours();