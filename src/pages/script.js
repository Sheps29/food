const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burger.classList.toggle('active');
})

const modal = document.getElementById('login-modal');
const loginForm = document.getElementById('login-form');
const loginBtns = document.querySelectorAll('#desktop-login, #mobile-login');
const closeModalBtn = document.getElementById('close-modal');

loginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
});

closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Вы успешно вошли в аккаунт!');
  modal.classList.remove('active');
});

// const restaurants = [
//   {
//     name: "Foodworld",
//     rating: 46,
//     status: "Opens tomorrow",
//     discount: "20% off",
//     image: "../images/foodworld.png",
//     logo: "../images/foodworld-logo.svg",
//   },
//   {
//     name: "Pizzahub",
//     rating: 40,
//     status: "Open now",
//     discount: "10% off",
//     image: "../images/pizzahub.png",
//     logo: "../images/pizzahub-logo.svg",
//   },
//   {
//     name: "Donuts hut",
//     rating: 20,
//     status: "Open now",
//     discount: "10% off",
//     image: "../images/donuts.png",
//     logo: "../images/donuts-logo.svg",
//   },
//   {
//     name: "Subwey",
//     rating: 50,
//     status: "Open now",
//     discount: "15% off",
//     image: "../images/subwey.png",
//     logo: "../images/subwey-logo.svg",
//   },
//   {
//     name: "Ruby Tuesday",
//     rating: 26,
//     status: "Open now",
//     discount: "10% off",
//     image: "../images/ruby.png",
//     logo: "../images/ruby-logo.svg",
//   },
//   {
//     name: "Kuakata Fried Chicken",
//     rating: 53,
//     status: "Open now",
//     discount: "25% off",
//     image: "../images/kfc.png",
//     logo: "../images/kfc-logo.svg",
//   },
//   {
//     name: "Red Square",
//     rating: 45,
//     status: "Open now",
//     discount: "10% off",
//     image: "../images/red.png",
//     logo: "../images/red-logo.svg",
//   },
//   {
//     name: "Taco Bell",
//     rating: 35,
//     status: "Open now",
//     discount: "10% off",
//     image: "../images/taco.png",
//     logo: "../images/taco-logo.svg",
//   },
// ];

// const template = document.getElementById("rest-template");
// const list = document.querySelector(".rests");
// const button = document.getElementById("toggle");

// const INITIAL_COUNT = 3;
// let expanded = false;

// function render(data) {
//   list.innerHTML = "";

//   data.forEach((rest) => {
//     const clone = template.content.cloneNode(true);

//     clone.querySelector(".food-img").src = rest.image;
//     clone.querySelector(".logo-rest").src = rest.logo;

//     clone.querySelector(".title").textContent = rest.name;
    
//     const statusEl = clone.querySelector(".status");
//     statusEl.textContent = rest.status;
//     statusEl.setAttribute('data-status', rest.status.toLowerCase());

//     clone.querySelector(".percent").textContent = rest.discount;

//     const star = clone.querySelector('.star');
//     star.append(` ${rest.rating}`);

//     list.appendChild(clone);
//   });
// }

// function updateView() {
//   const visible = expanded
//     ? restaurants
//     : restaurants.slice(0, INITIAL_COUNT);

//   render(visible);
// }

// button.addEventListener("click", () => {
//   expanded = !expanded;

//   button.textContent = expanded
//     ? "Свернуть"
//     : "Показать все";

//   updateView();
// });

// updateView();
