const API_KEY = '5238252df8f5f0d107b43c0fce827617';

const CITIES = [
  { name: 'Bogotá', lat: 4.711, lon: -74.0721, tempBase: 14, condition: 'nublado' },
  { name: 'Medellín', lat: 6.2442, lon: -75.5812, tempBase: 24, condition: 'soleado' },
  { name: 'Cali', lat: 3.4516, lon: -76.532, tempBase: 28, condition: 'calor' },
  { name: 'Barranquilla', lat: 10.9685, lon: -74.7813, tempBase: 30, condition: 'calor' },
  { name: 'Cartagena', lat: 10.3997, lon: -75.5144, tempBase: 31, condition: 'calor' },
  { name: 'Bucaramanga', lat: 7.1254, lon: -73.1198, tempBase: 23, condition: 'templado' }
];

const CREATIVE_MESSAGES = {
  'soleado': '☀️ EL SOL NO ESPERA. ¿TÚ SÍ?',
  'calor': '🔥 ENTRE MÁS CALOR, MÁS CARÁCTER.',
  'nublado': '☁️ DÍA PERFECTO PARA ROMPER RÉCORDS.',
  'lluvia': '🌧️ LA LLUVIA NO MANCHA, IMPULSA.',
  'tormenta': '⚡ LA TORMENTA TAMBIÉN ENTRENA.',
  'niebla': '🌫️ LA VISIÓN ES CLARA. TU META TAMBIÉN.',
  'frio': '❄️ EL FRÍO PRUEBA. TÚ RESPONDES.',
  'templado': '🎯 HOY NO HAY EXCUSAS. SOLO ADIDAS.'
};


const WEATHER_LINKS = {
  'soleado': 'https://www.adidas.co/ropa-sol',
  'calor': 'https://www.adidas.co/climacool',
  'nublado': 'https://www.adidas.co/running',
  'lluvia': 'https://www.adidas.co/rain-rdy',
  'tormenta': 'https://www.adidas.co/training',
  'niebla': 'https://www.adidas.co/reflective',
  'frio': 'https://www.adidas.co/cold-rdy',
  'templado': 'https://www.adidas.co/hombre'
};

// PARÁMETROS DE PARTÍCULAS

const WEATHER_PARAMS = {
  'soleado': { particles: 'sun', count: 15, speed: 1.2 },
  'calor': { particles: 'sun', count: 20, speed: 1.5 },
  'nublado': { particles: 'cloud', count: 12, speed: 0.6 },
  'lluvia': { particles: 'rain', count: 30, speed: 2.0 },
  'tormenta': { particles: 'storm', count: 25, speed: 2.5 },
  'niebla': { particles: 'cloud', count: 40, speed: 0.3 },
  'frio': { particles: 'cloud', count: 18, speed: 0.5 },
  'templado': { particles: 'cloud', count: 10, speed: 0.8 }
};

// SISTEMA DE PARTÍCULAS

class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.animationFrame = null;
    this.weatherType = 'templado';
    this.isStripesMode = false;
  }

  init(weatherType) {
    this.weatherType = weatherType;
    this.clearParticles();
    const params = WEATHER_PARAMS[weatherType] || WEATHER_PARAMS['templado'];
    const count = params.count;
    
    for (let i = 0; i < count; i++) {
      this.createParticle(params);
    }
    
    this.animate();
    
    // Alineación stripes cada 3 segundos
    setInterval(() => this.alignStripes(), 3000);
  }

  createParticle(params) {
    const particle = document.createElement('div');
    particle.className = `particle particle-${params.particles}`;
    
    const size = params.particles === 'rain' ? 
      Math.random() * 4 + 2 : 
      Math.random() * 8 + 4;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    
    const speedX = (Math.random() - 0.5) * params.speed;
    const speedY = params.particles === 'rain' ? 
      params.speed * (Math.random() * 2 + 2) : 
      (Math.random() - 0.5) * params.speed;
    
    particle.dataset.speedX = speedX;
    particle.dataset.speedY = speedY;
    particle.dataset.baseX = x;
    particle.dataset.baseY = y;
    
    this.container.appendChild(particle);
    this.particles.push(particle);
  }

  animate() {
    this.particles.forEach(particle => {
      let x = parseFloat(particle.style.left);
      let y = parseFloat(particle.style.top);
      
      let speedX = parseFloat(particle.dataset.speedX);
      let speedY = parseFloat(particle.dataset.speedY);
      
      x += speedX * 0.1;
      y += speedY * 0.1;
      
      if (x < 0 || x > 100) {
        particle.dataset.speedX = -speedX;
        x = Math.max(0, Math.min(100, x));
        particle.style.background = 'radial-gradient(circle, #004BFF, #FFFFFF)';
        setTimeout(() => particle.style.background = '', 200);
      }
      
      if (y < 0 || y > 100) {
        particle.dataset.speedY = -speedY;
        y = Math.max(0, Math.min(100, y));
        particle.style.background = 'radial-gradient(circle, #004BFF, #FFFFFF)';
        setTimeout(() => particle.style.background = '', 200);
      }
      
      particle.style.left = `${x}%`;
      particle.style.top = `${y}%`;
    });
    
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }

  alignStripes() {
    if (this.isStripesMode) return;
    this.isStripesMode = true;
    
    const stripePositions = [25, 50, 75];
    
    this.particles.forEach((particle, index) => {
      const stripeIndex = index % 3;
      const targetX = stripePositions[stripeIndex];
      const currentX = parseFloat(particle.style.left);
      
      particle.style.setProperty('--original-x', `${currentX}%`);
      particle.style.setProperty('--target-x', `${targetX}%`);
      particle.classList.add('particles-stripes');
      
      setTimeout(() => {
        particle.classList.remove('particles-stripes');
      }, 500);
    });
    
    setTimeout(() => {
      this.isStripesMode = false;
    }, 600);
  }

  reactToRipple(x, y) {
    this.particles.forEach(particle => {
      const particleX = parseFloat(particle.style.left);
      const particleY = parseFloat(particle.style.top);
      
      const dx = particleX - x;
      const dy = particleY - y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 30) {
        const force = (30 - distance) / 30 * 5;
        particle.dataset.speedX = parseFloat(particle.dataset.speedX) + dx * 0.01 * force;
        particle.dataset.speedY = parseFloat(particle.dataset.speedY) + dy * 0.01 * force;
        particle.style.boxShadow = '0 0 15px #004BFF';
        setTimeout(() => particle.style.boxShadow = '', 300);
      }
    });
  }

  clearParticles() {
    this.particles.forEach(p => p.remove());
    this.particles = [];
  }
}

class MorphingEngine {
  constructor(iconElement) {
    this.icon = iconElement;
    this.morphInterval = null;
  }

  start() {
    this.morphInterval = setInterval(() => this.morphToProduct(), 4000);
  }

  morphToProduct() {
    const weatherType = document.body.dataset.weatherType || 'templado';
    
    const originalIcon = this.icon.textContent;
    
    this.icon.classList.add('morphing');
    
    setTimeout(() => {
      this.icon.textContent = '👟';
    }, 200);
    
    setTimeout(() => {
      this.icon.classList.remove('morphing');
    }, 800);
    
    setTimeout(() => {
      this.icon.classList.add('morphing');
      this.icon.textContent = originalIcon;
      
      setTimeout(() => {
        this.icon.classList.remove('morphing');
      }, 800);
    }, 3000);
  }
}

class BiometricEngine {
  constructor(bannerElement) {
    this.banner = bannerElement;
    this.breathingInterval = null;
    this.heartbeatInterval = null;
  }

  start(weatherType) {
    this.setBreathingRate(weatherType);
    this.startHeartbeat(weatherType);
  }

  setBreathingRate(weatherType) {
    if (this.breathingInterval) clearInterval(this.breathingInterval);
    
    let cycleDuration = 4000;
    
    switch(weatherType) {
      case 'frio': cycleDuration = 5000; break;
      case 'templado': cycleDuration = 4000; break;
      case 'calor': cycleDuration = 3000; break;
      case 'soleado': cycleDuration = 3500; break;
      case 'lluvia': cycleDuration = 4500; break;
      case 'tormenta': cycleDuration = 2500; break;
    }
    
    this.banner.classList.add('respirando');
    this.banner.style.animation = `respirar ${cycleDuration}ms cubic-bezier(0.42, 0, 0.58, 1) infinite`;
  }

  startHeartbeat(weatherType) {
    if (this.heartbeatInterval) clearInterval(this.heartbeatInterval);
    
    let frequency = 2000;
    
    switch(weatherType) {
      case 'frio': frequency = 3000; break;
      case 'templado': frequency = 2000; break;
      case 'calor': frequency = 1500; break;
      case 'soleado': frequency = 1800; break;
      case 'tormenta': frequency = 1200; break;
    }
    
    this.heartbeatInterval = setInterval(() => {
      this.banner.classList.add('pulso');
      setTimeout(() => this.banner.classList.remove('pulso'), 400);
    }, frequency);
  }

  intensify() {
    this.banner.style.animationDuration = '2000ms';
  }

  normalize() {
    const weatherType = document.body.dataset.weatherType || 'templado';
    this.setBreathingRate(weatherType);
  }
}

class RippleEngine {
  constructor(bannerElement) {
    this.banner = bannerElement;
    this.overlay = null;
    this.createOverlay();
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'ripple-overlay';
    this.banner.appendChild(this.overlay);
  }

  createRipple(x, y, isTriple = false) {
    if (isTriple) {
      this.createTripleRipple(x, y);
      return;
    }
    
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.overlay.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 800);
  }

  createTripleRipple(x, y) {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const ripple = document.createElement('div');
        ripple.className = 'ripple-triple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.style.width = `${10 + i * 8}px`;
        ripple.style.height = `${10 + i * 8}px`;
        ripple.style.borderColor = '#004BFF';
        ripple.style.opacity = `${1 - i * 0.2}`;
        this.overlay.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 800);
      }, i * 150);
    }
  }
}

// API Y ACTUALIZACIÓN DE CLIMA

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric&lang=es`
    );
    
    if (!response.ok) throw new Error('API Error');
    
    const data = await response.json();
    const condition = data.weather[0].main.toLowerCase();
    let weatherType = 'templado';
    
    if (condition.includes('clear') || condition.includes('sun')) weatherType = 'soleado';
    else if (condition.includes('cloud')) weatherType = 'nublado';
    else if (condition.includes('rain')) weatherType = 'lluvia';
    else if (condition.includes('thunder')) weatherType = 'tormenta';
    else if (condition.includes('fog')) weatherType = 'niebla';
    else if (data.main.temp < 15) weatherType = 'frio';
    else if (data.main.temp > 27) weatherType = 'calor';
    
    return {
      temp: Math.round(data.main.temp),
      icon: getWeatherIcon(data.weather[0].icon),
      cityName: city.name,
      weatherType
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      temp: city.tempBase || 22,
      icon: getDefaultIcon(city.condition),
      cityName: city.name,
      weatherType: city.condition || 'templado'
    };
  }
}

function getWeatherIcon(iconCode) {
  const map = {
    '01d': '☀️', '01n': '🌙',
    '02d': '⛅', '02n': '☁️',
    '03d': '☁️', '03n': '☁️',
    '04d': '☁️', '04n': '☁️',
    '09d': '🌧️', '09n': '🌧️',
    '10d': '🌦️', '10n': '🌧️',
    '11d': '⚡', '11n': '⚡',
    '13d': '❄️', '13n': '❄️',
    '50d': '🌫️', '50n': '🌫️'
  };
  return map[iconCode] || '☀️';
}

function getDefaultIcon(condition) {
  const map = {
    'soleado': '☀️',
    'calor': '☀️',
    'nublado': '☁️',
    'lluvia': '🌧️',
    'tormenta': '⚡',
    'niebla': '🌫️',
    'frio': '❄️',
    'templado': '⛅'
  };
  return map[condition] || '☀️';
}

// ACTUALIZA UI 

function updateUI(weatherData) {
  // Ciudad y temperatura
  document.querySelector('.city-name').textContent = weatherData.cityName;
  document.querySelector('.temperature').innerHTML = `${weatherData.temp}<span class="temp-unit">°C</span>`;
  document.querySelector('.weather-icon').textContent = weatherData.icon;
  
  // 🎯 FRASE CREATIVA según el clima
  const msgElement = document.querySelector('.creative-message');
  msgElement.textContent = CREATIVE_MESSAGES[weatherData.weatherType] || CREATIVE_MESSAGES['templado'];
  
  // 🔗 LINK DINÁMICO según el clima
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.href = WEATHER_LINKS[weatherData.weatherType] || WEATHER_LINKS['templado'];
}

// INICIALIZACIÓN

let particleSystem = null;
let morphingEngine = null;
let biometricEngine = null;
let rippleEngine = null;

async function initBanner() {
  const banner = document.querySelector('.banner');
  const iconElement = document.querySelector('.weather-icon');
  const particlesContainer = document.querySelector('.particles-container');
  
  if (!banner || !iconElement || !particlesContainer) return;
  
  // Inicializar motores
  particleSystem = new ParticleSystem(particlesContainer);
  morphingEngine = new MorphingEngine(iconElement);
  biometricEngine = new BiometricEngine(banner);
  rippleEngine = new RippleEngine(banner);
  
  // Obtener clima inicial
  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];
  const weatherData = await fetchWeatherData(randomCity);
  
  // Guardar tipo de clima
  document.body.dataset.weatherType = weatherData.weatherType;
  
  // Actualizar UI
  updateUI(weatherData);
  
  // Iniciar animaciones
  particleSystem.init(weatherData.weatherType);
  morphingEngine.start();
  biometricEngine.start(weatherData.weatherType);
  
  // Event listeners
  setupEventListeners(banner, particleSystem, rippleEngine, biometricEngine);
  
  // Actualizar clima cada 15s
  setInterval(async () => {
    const newCity = CITIES[Math.floor(Math.random() * CITIES.length)];
    const newWeather = await fetchWeatherData(newCity);
    updateUI(newWeather);
    
    document.body.dataset.weatherType = newWeather.weatherType;
    particleSystem.init(newWeather.weatherType);
    biometricEngine.start(newWeather.weatherType);
  }, 15000);
}

function setupEventListeners(banner, particles, ripple, biometric) {
  // Ripple en clic
  banner.addEventListener('click', (e) => {
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const isCTA = e.target.classList.contains('cta-button') || 
                  e.target.closest('.cta-button');
    
    ripple.createRipple(x, y, isCTA);
    
    if (particles) {
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;
      particles.reactToRipple(xPercent, yPercent);
    }
  });
  
  // Hover effects
  banner.addEventListener('mouseenter', () => {
    biometric?.intensify();
  });
  
  banner.addEventListener('mouseleave', () => {
    biometric?.normalize();
  });
}

// Iniciar todo
document.addEventListener('DOMContentLoaded', initBanner);