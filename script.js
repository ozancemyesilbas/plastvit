




const menuButton = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

// Sayfa scroll edildiğinde menü kapanır
window.addEventListener("scroll", function () {
    if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        document.body.classList.remove("menu-open"); // Bu artık gerekmez ama yedekte kalsın
    }
});































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

    // ✅ Arka plan kaymasını engelle
    document.body.style.overflow = 'hidden';

    // ✅ Popup içeriğini ekran ortasına kaydır (mobilde yukarıda kalma sorununu çözer)
    const popupContent = popup.querySelector('.popup-content');
    if (popupContent) {
        popup.scrollTop = 0; // popup içini yukarı al
        popupContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function closePopup(sliderId) {
    document.getElementById(`popup${sliderId}`).style.display = 'none';

    // ✅ Kaydırmayı geri aç
    document.body.style.overflow = '';
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











let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // 4 saniyede bir geçiş












// Mobilde dropdown menüsünü tıklayınca açılmasını sağlar
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function (e) {
        // Sadece mobil görünümde çalışsın
        if (window.innerWidth <= 768) {
            e.preventDefault(); // #products linkine gitmesini engelle
            const parent = this.parentElement;
            parent.classList.toggle("open"); // open class'ı ekle/kaldır
        }
    });
});





// Menüdeki bağlantılara tıklanınca menü kapanır ama dropdown başlığına basınca değil
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        const isDropdownParent = this.parentElement.classList.contains("dropdown");

        if (window.innerWidth <= 768) {
            if (!isDropdownParent) {
                // Normal bağlantı → menüyü kapat
                document.getElementById("nav-menu").classList.remove("active");

                // Tüm dropdown'ları kapat
                document.querySelectorAll(".dropdown.open").forEach(drop => {
                    drop.classList.remove("open");
                });
            } else {
                // Sadece üst dropdown başlığına tıkladı → menü kapanmasın
                e.preventDefault(); // sayfa kaymasın
                this.parentElement.classList.toggle("open");
            }
        }
    });
});



document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
        const parentLi = this.parentElement;
        const isDropdown = parentLi.classList.contains("dropdown");

        if (window.innerWidth <= 768) {
            if (isDropdown) {
                // Eğer dropdown ise menüyü kapatma, sadece alt menüyü aç/kapat
                e.preventDefault(); // "#products" gibi linke gitmesin
                parentLi.classList.toggle("open");
            } else {
                // Normal bağlantıysa menüyü ve açık dropdownları kapat
                document.getElementById("nav-menu").classList.remove("active");

                document.querySelectorAll(".dropdown.open").forEach(drop => {
                    drop.classList.remove("open");
                });
            }
        }
    });
});










function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Escape tuşuyla kapatma
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
});











