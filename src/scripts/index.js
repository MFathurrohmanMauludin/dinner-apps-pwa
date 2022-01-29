import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

// Menampilkan data dari Data.json
import('../DATA.json').then(({
    default: jsonData
}) => {
    console.log(jsonData)
    let dataRestraurant = jsonData['restaurants']
    let dataList = '';
    dataRestraurant.forEach(function (temp) {
        dataList += `
        <div class="list-item">
            <img class="list-thumb" src="${temp['pictureId']}" alt="${temp['name']}" title="${temp['name']}">
            <div class="city">${temp['city']}</div>
            <div class="list-content">
                <p class="list-item-rating">
                    Rating : 
                    <a href="#" class="list-rating-value">${temp['rating']}</a>
                </p>
                <h1 class="list-title"><a href="#">${temp['name']}</a></h1>
                <div class="list-desc">${temp['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('#tes').innerHTML = dataList;
});

// Menampilkan menu navbar
const menuAction = document.querySelector('#menu');
const image = document.querySelector('.image');
const main = document.querySelector('main');
const navDrawer = document.querySelector('#nav-drawer');

menuAction.addEventListener('click', function (event) {
    navDrawer.classList.toggle('open');
    event.stopPropagation();
});

image.addEventListener('click', function () {
    navDrawer.classList.remove('open');
});

main.addEventListener('click', function () {
    navDrawer.classList.remove('open');
});