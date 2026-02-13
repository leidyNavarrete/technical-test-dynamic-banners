## 🎥 Facebook Video Post → HTML Banner

Marca: Nike
Formato: 300x600px / 320x480px
Tipo: Rich Media Banner
Objetivo: Adaptación de video post estilo Facebook a formato publicitario HTML5

🧩 Descripción General

* Desarrollo de un banner Rich Media basado en un post de video, cumpliendo estándares de pauta digital:
* Banner completamente clickeable
* Video interactivo sin afectar redirección 
* Medición de interacciones del usuario
* Visualización de engagement por impresión
* Separación clara entre capa publicitaria y capa interactiva

📐 Especificaciones del Formato

* Dimensiones: 300x600px (principal)
* Versión adaptable: 320x480px
* Arquitectura optimizada para entornos de pauta
* Sin dependencias externas
* 100% HTML5 / CSS3 / JavaScript Vanilla

🖱 Comportamiento del Banner
*Click Global* 

Todo el banner redirige a:
https://www.nike.com/co/

Se implementa una Click Layer Strategy, donde:

* El banner completo es interactivo
* Los controles del video no disparan redirección
* Se previene propagación de eventos (stopPropagation)
* Esto simula correctamente el comportamiento esperado en entornos programáticos y redes publicitarias.

🎥 Interactividad del Video

Controles personalizados:
* Play
* Pause
* Mute
* Unmute

Eventos monitoreados:
* Play
* Pause
* volumechange

Los controles operan de forma independiente al click principal del anuncio.

📊 Sistema de Medición de Interacciones

Se implementa un sistema de tracking basado en eventos del video.

Métricas registradas:
* Play
* Pause
* Mute
* Unmute
* Total de interacciones

Persistencia mediante:

* localStorage

Esto permite visualizar cuántas veces un usuario interactúa con el anuncio durante su sesión.

🧪 Dev Mode (Simulación de Entorno de Medición)

El banner incluye un panel de métricas visible únicamente en entorno local:
* Activación automática en localhost
* Visualización en tiempo real de eventos
* Reset de métricas
* Simulación de tracking sin backend

Esto permite validar comportamiento antes de integración con herramientas externas (Ad Server / Analytics).

🏗 Enfoque Técnico

* Arquitectura desacoplada
* Control explícito de propagación de eventos
* Simulación de tracking publicitario
* Código limpio y sin librerías externas

Optimizable para integración con:
* Ad Servers
* Google Analytics
* Meta Pixel
* Sistemas de medición propietarios

🚀 Ejecución

1. Clonar repositorio
2. Abrir index.html (Open with Live Server)
3. Ejecutar en entorno local para activar Dev Panel

No requiere instalación ni dependencias adicionales.

🔎 Enfoque Publicitario

Este desarrollo replica condiciones reales de pauta digital:

* Click principal obligatorio
* Interacciones medibles
* Video con control independiente
* Comportamiento predecible en entorno publicitario
* Base lista para integración con tracking real

🔮 Escalabilidad

Posibles mejoras para entorno productivo:

* Envío de eventos a endpoint externo
* Integración con Ad Server (clickTag dinámico)
* Optimización de peso para estándares IAB
* Multiples formatos en una sola estructura
* Implementación de tracking por impresión única



## 🎯 Instagram Carousel Banner Interactivo

Marca: Nike
Formato: 300x600px / 320x480px
Tipo: Rich Media Carousel Banner
Objetivo: Adaptación de post estilo Instagram a formato publicitario HTML5 interactivo.

🧩 Descripción General

Desarrollo de un banner tipo carrusel inspirado en formato Instagram, adaptado a entorno publicitario HTML5, cumpliendo con:

* Interacción horizontal (navegación izquierda/derecha)
* Click individual por slide
* Redirección independiente por producto
* Medición de interacciones por navegación y por imagen
* Simulación de entorno real de pauta digital

📐 Especificaciones del Formato

* Dimensiones principales: 300x600px
* Adaptable a 320x480px mediante variables CSS
* Arquitectura sin dependencias externas
* HTML5 / CSS3 / JavaScript Vanilla

🖱 Comportamiento del Banner
*Interacción del Carrusel*

* Navegación con botón izquierdo (‹)
* Navegación con botón derecho (›)
* Transición suave con transform: translateX
* Indicadores visuales (dots dinámicos)

La navegación es circular:

index = (index + 1) % slideElements.length;


*Click por Slide (Deep Linking)*

Cada slide contiene:

data-url="..."

Al hacer clic:

* Se registra la métrica
* Se abre la URL correspondiente en nueva pestaña
* Esto simula comportamiento de producto individual en campañas dinámicas.

📊 Sistema de Medición de Interacciones

Se implementa tracking basado en eventos de navegación y clic.

*Métricas registradas:*

* Click en flecha izquierda
* Click en flecha derecha
* Click independiente en cada slide:
Producto 1
Producto 2
Producto 3

*Persistencia mediante:*

localStorage("instaMetrics")

*Estructura:*

{
  left: number,
  right: number,
  s1: number,
  s2: number,
  s3: number
}

Esto permite medir engagement granular por producto.

🧪 Dev Mode (Panel de Métricas)

Incluye panel de desarrollo con:

* Visualización en tiempo real
* Reset de métricas
* Validación de comportamiento sin backend

Permite simular integración con Ad Server o herramienta de analítica.

🏗 Enfoque Técnico

* Arquitectura modular y escalable
* Control explícito de eventos
* Persistencia local simulando sesión de usuario
* Preparado para integración futura con:
Ad Server
Google Analytics
Meta Pixel
Tracking personalizado

🚀 Ejecución

1. Clonar repositorio
2. Abrir index.html (Open with Live Server)
3. Ejecutar en navegador
4. Activar panel con botón DEV

No requiere instalación ni dependencias adicionales.

🔎 Enfoque Publicitario

Este desarrollo replica condiciones reales de pauta digital:

* Carrusel interactivo medible
* Deep linking por producto
* Navegación con tracking individual
* Métricas diferenciadas por tipo de interacción
* Base lista para integración con sistemas de medición reales

🔮 Escalabilidad

Posibles mejoras en entorno productivo:

* Integración con clickTag dinámico
* Tracking por impresión única
* Soporte para carga dinámica de productos (JSON)
* Optimización de peso según estándares IAB
* Autoplay o swipe touch para mobile ads



## 🌦️ Dynamic Weather Banner

Marca: Adidas
API utilizada: OpenWeather
Formatos: 300x250px / 300x600px
Tipo: Dynamic Contextual Rich Media Banner

🎯 Objetivo del Desarrollo

Crear un set de banners HTML5 dinámicos que:

* Se conecten a una API real de clima
* Muestren temperatura y condición actual en ciudades de Colombia
* Ajusten creatividades y animaciones según el clima
* Incluyan CTA con redirección dinámica
* Integren animaciones avanzadas optimizadas para entorno publicitario

🧠 Concepto Creativo

* El banner reacciona al clima como si fuera un organismo vivo.

Se diseñó una experiencia basada en 4 capas:

* Contexto real (Weather API)
* Mensaje dinámico según condición
* Sistema de partículas reactivo
* Animación biométrica (respiración + pulso)
* La pieza cambia visual y conductualmente según:
Soleado
Lluvia
Tormenta
Nublado
Frío
Calor
Niebla
Templado

🌎 Integración con API de Clima

Se realiza consulta a:

https://api.openweathermap.org/data/2.5/weather

Mediante coordenadas (lat/lon) de ciudades colombianas:

Bogotá
Medellín
Cali
Barranquilla
Cartagena
Bucaramanga

Cada 15 segundos:

* Se consulta una ciudad aleatoria
* Se actualiza temperatura
* Se cambia icono
* Se recalcula tipo de clima
* Se reinician animaciones

Incluye fallback seguro en caso de error de API.

🌀 Sistema de Animaciones Avanzadas
1. Particle Engine

Sistema de partículas programático que varía según clima:

Clima	 Tipo	        Cantidad	    Velocidad
Soleado	 Sun particles	   15	          Media
Lluvia	 Rain drops	       30	          Alta
Tormenta Storm sparks	   25	        Muy alta
Niebla	 Cloud haze	       40	          Baja

Características:

* Movimiento con requestAnimationFrame
* Rebote dinámico en límites
* Reacción a clic (efecto ripple)
* Alineación periódica en stripes (branding motion)
* Optimizado con will-change y cálculos ligeros.

2. Biometric Engine (Respiración + Pulso)

El banner simula comportamiento orgánico:

* Animación de respiración variable según clima
* Pulso dinámico con frecuencia adaptativa
* Intensificación en hover
* Normalización al salir

Ejemplo:

Tormenta → pulso rápido
Frío → respiración lenta
Calor → ciclo acelerado

3. Morphing Engine

El ícono del clima:

* Se transforma temporalmente en producto (👟)
* Regresa a su estado original
* Animación con easing custom

Esto conecta clima → producto → marca.

4. Ripple Engine (Interacción)

Cada clic genera:

* Ripple visual
* Triple ripple si es CTA
* Reacción física de partículas

Se crea sensación táctil incluso en desktop.

🎨 Creatividad Dinámica
*Mensaje Adaptativo*

Ejemplos:

☀️ "EL SOL NO ESPERA. ¿TÚ SÍ?"

🌧️ "LA LLUVIA NO MANCHA, IMPULSA."

❄️ "EL FRÍO PRUEBA. TÚ RESPONDES."

*CTA Dinámico por Clima*

El botón redirige a categoría distinta según condición:

Calor → ClimaCool
Lluvia → Rain Rdy
Frío → Cold Rdy
Soleado → Ropa Sol

Esto simula una campaña contextual avanzada.

📐 Especificaciones Técnicas

* HTML5 puro
* CSS3 avanzado (keyframes, transforms, filters)
* JavaScript modular orientado a clases
* requestAnimationFrame para animaciones suaves
* Gestión eficiente de DOM
* Fallback de datos

🖱 Interacción y Redirección

* Todo el banner es clickeable
* CTA independiente con ripple especial
* Redirección en nueva pestaña
* Compatible con implementación de clickTag en entorno Ad Server

⚙ Arquitectura del Sistema

El código está estructurado en motores independientes:

* ParticleSystem
* MorphingEngine
* BiometricEngine
* RippleEngine

Esto permite:

* Escalabilidad
* Testing individual
* Reutilización modular
* Integración futura con tracking externo

🚀 Ejecución

1. Clonar repositorio
2. Insertar API_KEY válida
3. Abrir index.html (Open with Live Server)
4. Visualizar animaciones dinámicas

No requiere librerías externas.

🧩 Enfoque Publicitario Estratégico

Este banner representa:

* Contextual Advertising
* Dynamic Creative Optimization (DCO)
* Experiencia Rich Media de alto impacto
* Personalización basada en data externa

🔮 Posibles Mejoras en Entorno Productivo

* Integración con Ad Server (clickTag dinámico)
* Tracking por clima mostrado
* Tracking por ciudad
* Lazy loading de API
* Optimización peso para IAB < 150kb
* Versión AMP
* Cache de API



## 🧠 Dynamic Banner con Endpoint Propio

Marca: Hornitos (marca conceptual para la prueba)
Tecnología Backend: Node.js
Framework: Express
Tipo: Dynamic Creative con API propia
Formatos: 300x250px y 300x600px

🎯 Objetivo del Desarrollo

Construir un banner HTML5 dinámico que:

* Consuma datos desde un endpoint propio
* Muestre contenido distinto en cada recarga
* Permita generación de contenido dinámico mediante IA
* Simule una plataforma de Dynamic Creative Optimization (DCO)
* Incluya animación, texto y CTA dinámico
* Segmente contenido por país

🌐 Backend – API Dinámica

Se desarrolló un servidor con:

* Node.js
* Express
* CORS habilitado
* Servidor estático para HTML

El backend actúa como una mini plataforma de generación y distribución de creatividades dinámicas.

📦 Base de Datos Simulada

Se implementó una base de datos en memoria con:

* 30 registros iniciales

Segmentación por país:

🇨🇴 Colombia (10)
🇦🇷 Argentina (10)
🇨🇱 Chile (10)

Cada registro contiene:

{
  id,
  brand,
  country,
  product,
  headline,
  cta,
  bgColor,
  animation
}

Esto simula un sistema DCO real.

🔗 Endpoints Implementados
1. GET /api/contents

Permite:

* Filtrar por marca
* Filtrar por país
* Filtrar por producto
* Devuelve registro aleatorio
* Incluye fallback automático (nunca devuelve vacío)

Ejemplo:

/api/contents?brand=Hornitos&country=CO

2. POST /api/generate

Permite generar contenido dinámico enviando:

{
  "brand": "Hornitos",
  "country": "CO",
  "prompt": "Margarita clásica"
}

El sistema:

* Interpreta el prompt
* Detecta tipo de producto
* Genera headline
* Asigna CTA
* Genera color dinámico
* Asigna animación aleatoria
* Inserta el nuevo registro en la base
* Simula integración con modelo generativo (IA).

3. GET /api/country/:country

Devuelve contenido aleatorio por país específico.

4. GET /api/all (Debug)

Devuelve:

* Total de registros
* Países disponibles
* Productos disponibles
* Listado completo

🎨 Banner HTML5 Dinámico

El banner:

* Consulta el endpoint al cargar
* Cambia contenido cada 8 segundos
* Cambia fondo dinámicamente
* Cambia ícono según producto
* Aplica animación configurada desde API
* Incluye CTA dinámico

🌀 Sistema de Animaciones

Animaciones disponibles:

* fadeIn
* slideIn
* zoomIn
* bounce

La animación es controlada desde backend, lo que simula un sistema de control creativo remoto.

🌎 Segmentación por País

El banner recibe parámetro:

?country=CO
?country=AR
?country=CL


Esto permite:

* Adaptar mensaje por mercado
* Simular campañas regionalizadas
* Cambiar base creativa según ubicación

🤖 Plataforma de Generación con IA (Simulación)

Se desarrolló un panel interactivo que permite:

* Seleccionar país
* Escribir prompt
* Generar nuevo contenido
* Insertarlo dinámicamente en la base
* Ver estadísticas por país
* Recargar banner automáticamente
* Esto representa una visión de plataforma donde:

Marca + País + Prompt → Genera creatividad lista para pauta.

📊 Lógica DCO Simulada

El sistema reproduce principios reales de:

* Dynamic Creative Optimization
* Content variation
* Segmentación geográfica
* Creative testing
* Auto expansión de base creativa
* Fallback inteligente

🚀 Ejecución

1. Instalar dependencias:

npm install

2. Ejecutar servidor:

npm run dev

3. Abrir:

http://localhost:3000

4. Banner directo:

http://localhost:3000/banner-vertical.html?country=CO


🧩 Enfoque Publicitario Estratégico

Este desarrollo demuestra:

* Integración frontend + backend
* Arquitectura de distribución creativa
* Segmentación por mercado
* Generación dinámica de contenido
* Simulación de plataforma AdTech
* Control creativo desde servidor
* Escalabilidad estructural
