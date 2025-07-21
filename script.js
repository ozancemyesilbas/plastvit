const cards = document.querySelectorAll('.product-card');
let currentIndex = 0;

cards.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentIndex = index;
    openPopup(card.dataset.title, card.dataset.content);
  });
});

function openPopup(title, content) {
  document.getElementById('popup-title').textContent = title;
  document.getElementById('popup-desc').innerHTML = content;
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

function scrollSlider(index, direction) {
  const track = document.getElementById(`sliderTrack${index}`);
  const amount = 320;
  track.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
}


function prevPopup() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  const card = cards[currentIndex];
  openPopup(card.dataset.title, card.dataset.content);
}

function nextPopup() {
  currentIndex = (currentIndex + 1) % cards.length;
  const card = cards[currentIndex];
  openPopup(card.dataset.title, card.dataset.content);
}



document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.getElementById("whatsappTooltip");

    // İlk açılışta hemen göster (3 saniye)
    tooltip.style.opacity = "1";
    tooltip.style.visibility = "visible";
    setTimeout(() => {
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden";
    }, 3000);

    // Sonra her 10 saniyede bir 4 saniye göster
    setInterval(() => {
        tooltip.style.opacity = "1";
        tooltip.style.visibility = "visible";

        setTimeout(() => {
            tooltip.style.opacity = "0";
            tooltip.style.visibility = "hidden";
        }, 4000);
    }, 10000);
});




document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    const aboutCard = document.querySelector(".about-card");
    if (aboutCard) {
        observer.observe(aboutCard);
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.3 });

    const visionCard = document.querySelector(".vision-card");
    if (visionCard) {
        observer.observe(visionCard);
    }
});








const allSliders = document.querySelectorAll('.slider-container');

allSliders.forEach((container, index) => {
    const sliderId = index + 1;
    const cards = container.querySelectorAll('.product-card');

    cards.forEach((card, i) => {
        card.addEventListener('click', () => {
            openPopup(sliderId, i);
        });
    });

    container.setAttribute('data-total', cards.length);
});



const currentIndices = {};

function openPopup(sliderId, index) {
    currentIndices[sliderId] = index;
    const track = document.getElementById(`sliderTrack${sliderId}`);
    const cards = track.querySelectorAll('.product-card');
    const popup = document.getElementById(`popup${sliderId}`);
    const title = cards[index].getAttribute('data-title');
    const content = cards[index].getAttribute('data-content');

    document.getElementById(`popup-title${sliderId}`).textContent = title;
    document.getElementById(`popup-desc${sliderId}`).innerHTML = content;
    popup.style.display = 'flex';
}

function closePopup(sliderId) {
    document.getElementById(`popup${sliderId}`).style.display = 'none';
}

function prevPopup(sliderId) {
    const track = document.getElementById(`sliderTrack${sliderId}`);
    const cards = track.querySelectorAll('.product-card');
    currentIndices[sliderId] = (currentIndices[sliderId] - 1 + cards.length) % cards.length;
    openPopup(sliderId, currentIndices[sliderId]);
}

function nextPopup(sliderId) {
    const track = document.getElementById(`sliderTrack${sliderId}`);
    const cards = track.querySelectorAll('.product-card');
    currentIndices[sliderId] = (currentIndices[sliderId] + 1) % cards.length;
    openPopup(sliderId, currentIndices[sliderId]);
}












document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.getElementById("scrollToTopBtn");
    const footer = document.querySelector("footer");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    scrollBtn.classList.add("show");
                } else {
                    scrollBtn.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.5,
        }
    );

    if (footer) {
        observer.observe(footer);
    }

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

