const slides = [
  {
    title: "Electronics Super Sale",
    subtitle: "Extra 5% Offer",
    desc: "Power Up Your Day — Latest phones, laptops & headphones. Shop now and save up to 60%!",
    img: "../src/assest/watch.jpg",
  },
  {
    title: "Dress Collections",
    subtitle: "New Launch Offer",
    desc: "Step into style — explore the latest trends and make every outfit shine.",
    img: "../src/assest/Kurta_sets.webp",
  },
  {
    title: "Laptop Upgrade Days",
    subtitle: "Exchange & Save",
    desc: "Trade in your old device and upgrade to new performance beasts with up to 50% off.",
    img: "../src/assest/pc.jpg",
  },
  {
    title: "Audio Power Sale",
    subtitle: "Flat 40% OFF",
    desc: "Experience crystal-clear sound. Headphones, speakers & more with unbeatable prices.",
    img: "../src/assest/perfume.jpg",
  },
];

function createSlide(slide) {
  const wrapper = document.createElement('div');
  wrapper.className = 'bannerOne';

  const text = document.createElement('div');
  text.className = 'bannerText';
  text.innerHTML = `
    <h1 class="heroSlide-head">${slide.title}</h1>
    <h3 class="heroSlide-secondHead">${slide.subtitle}</h3>
    <p class="heroSlide-para">${slide.desc}</p>
    <button class="banner-btn">Shop Now</button>
  `;

  const imgWrap = document.createElement('div');
  imgWrap.className = 'bannerImage';
  const img = document.createElement('img');
  img.src = slide.img;
  img.alt = slide.title;
  imgWrap.appendChild(img);

  wrapper.appendChild(text);
  wrapper.appendChild(imgWrap);
  return wrapper;
}

const container = document.getElementById('heroSlide');
slides.forEach((s, i) => {
  const node = createSlide(s);
  if (i === 0) node.classList.add('active');
  container.appendChild(node);
});

let current = 0;
setInterval(() => {
  const nodes = Array.from(container.children);
  nodes[current].classList.remove('active');
  current = (current + 1) % nodes.length;
  nodes[current].classList.add('active');
}, 4000);
