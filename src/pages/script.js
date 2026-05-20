// document.addEventListener('DOMContentLoaded', () => {

// const list = document.getElementById('list');
// const left = document.getElementById('left');
// const right = document.getElementById('right');

// left.addEventListener('click', () => {
//   list.scrollBy({
//     left: -250,
//     behavior: 'smooth'
//   });
// });

// right.addEventListener('click', () => {
//   list.scrollBy({
//     right: 250,
//     behavior: 'smooth'
//   });
// });

// const li = document.getElementById('item');
// li.scrollIntoView({
//   behavior: 'smooth',
//   block: 'start' 
// });
// })


const Restaurant = [
  {
    name: string,
    rating: number,
    status: string,
    discount: string,
    image: string,
    logo: string,
  }
] 

const restaurants: Restaurant[] = [
  {
    name: "Foodworld",
    rating: 46,
    status: "Opens tomorrow",
    discount: "20% off",
    image: "../images/foodworld.png",
    logo: "../images/foodworld-logo.svg",
  },
  {
    name: "Pizzahub",
    rating: 120,
    status: "Open now",
    discount: "10% off",
    image: "../images/pizza.png",
    logo: "../images/pizza-logo.svg",
  },
  {
    name: "Burger King",
    rating: 300,
    status: "Open now",
    discount: "15% off",
    image: "../images/burger.png",
    logo: "../images/burger-logo.svg",
  },
  {
    name: "Sushi Bar",
    rating: 88,
    status: "Closes soon",
    discount: "25% off",
    image: "../images/sushi.png",
    logo: "../images/sushi-logo.svg",
  },
];

const INITIAL_COUNT = 3;
let expanded = false;

const template = document.getElementById(
  "rest-template"
) as HTMLTemplateElement;

const list = document.querySelector(".rests") as HTMLUListElement;

const button = document.getElementById("toggle") as HTMLButtonElement;

function render(data: Restaurant[]) {
  list.innerHTML = "";

  data.forEach((rest) => {
    const clone = template.content.cloneNode(true) as DocumentFragment;

    (clone.querySelector(".food-img") as HTMLImageElement).src = rest.image;
    (clone.querySelector(".logo") as HTMLImageElement).src = rest.logo;

    (clone.querySelector(".title") as HTMLElement).textContent = rest.name;

    (clone.querySelector(".status") as HTMLElement).textContent = rest.status;

    (clone.querySelector(".percent") as HTMLElement).textContent =
      rest.discount;

    (clone.querySelector(".rating-text") as HTMLElement).textContent =
      String(rest.rating);

    list.appendChild(clone);
  });
}

function updateView() {
  const visible = expanded
    ? restaurants
    : restaurants.slice(0, INITIAL_COUNT);

  render(visible);
}

button.addEventListener("click", () => {
  expanded = !expanded;

  button.textContent = expanded ? "Свернуть" : "Показать все";

  updateView();
});

updateView();
