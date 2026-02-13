const slides = document.querySelector(".slides");
const slideElements = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let index = 0;
let metrics = JSON.parse(localStorage.getItem("instaMetrics")) || {
  left: 0, right: 0, s1: 0, s2: 0, s3: 0
};

function update() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  
  // Actualizar UI de métricas
  document.getElementById("mLeft").textContent = metrics.left;
  document.getElementById("mRight").textContent = metrics.right;
  document.getElementById("mS1").textContent = metrics.s1;
  document.getElementById("mS2").textContent = metrics.s2;
  document.getElementById("mS3").textContent = metrics.s3;
  localStorage.setItem("instaMetrics", JSON.stringify(metrics));
}

// Botón Siguiente
document.getElementById("next").onclick = (e) => {
  e.stopPropagation();
  index = (index + 1) % slideElements.length;
  metrics.right++;
  update();
};

// Botón Anterior
document.getElementById("prev").onclick = (e) => {
  e.stopPropagation();
  index = (index - 1 + slideElements.length) % slideElements.length;
  metrics.left++;
  update();
};

// Clic en cada Slide
slideElements.forEach((slide, i) => {
  slide.onclick = () => {
    metrics[`s${i + 1}`]++;
    update();
    window.open(slide.dataset.url, "_blank");
  };
});

// Panel Dev
document.getElementById("devToggle").onclick = () => {
  const p = document.getElementById("devPanel");
  p.style.display = p.style.display === "block" ? "none" : "block";
};

document.getElementById("resetMetrics").onclick = () => {
  metrics = { left: 0, right: 0, s1: 0, s2: 0, s3: 0 };
  update();
};

update();




