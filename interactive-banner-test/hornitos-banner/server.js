const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// BASE DE DATOS - COLOMBIA, ARGENTINA, CHILE

let contents = [
    // COLOMBIA (CO) 
    { id: 1, brand: "Hornitos", country: "CO", product: "Tequila Reposado", headline: "Llegó la fiesta mexicana a Colombia", cta: "Descubrir", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 2, brand: "Hornitos", country: "CO", product: "Tequila Añejo", headline: "Añejado para disfrutar", cta: "Comprar", bgColor: "#5D3A1A", animation: "slideIn" },
    { id: 3, brand: "Hornitos", country: "CO", product: "Tequila Blanco", headline: "Suave como la brisa colombiana", cta: "Probar", bgColor: "#A0522D", animation: "zoomIn" },
    { id: 4, brand: "Hornitos", country: "CO", product: "Mezcal Artesanal", headline: "Ahumado y tradicional", cta: "Explorar", bgColor: "#2E5C4E", animation: "bounce" },
    { id: 5, brand: "Hornitos", country: "CO", product: "Margarita", headline: "El sabor de la fiesta", cta: "Celebrar", bgColor: "#F39C12", animation: "fadeIn" },
    { id: 6, brand: "Hornitos", country: "CO", product: "Paloma", headline: "Refrescate con Hornitos", cta: "Probar", bgColor: "#3498DB", animation: "slideIn" },
    { id: 7, brand: "Hornitos", country: "CO", product: "Tequila Sunrise", headline: "Atardecer en cartagena", cta: "Descubrir", bgColor: "#E67E22", animation: "zoomIn" },
    { id: 8, brand: "Hornitos", country: "CO", product: "Shot", headline: "El auténtico caballito", cta: "Brindar", bgColor: "#7D3C98", animation: "bounce" },
    { id: 9, brand: "Hornitos", country: "CO", product: "Tequila Reposado", headline: "100% agave, 100% colombiano", cta: "Degustar", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 10, brand: "Hornitos", country: "CO", product: "Margarita", headline: "Con limón y sal", cta: "Preparar", bgColor: "#F39C12", animation: "slideIn" },
    
    // ARGENTINA (AR)
    { id: 11, brand: "Hornitos", country: "AR", product: "Tequila Reposado", headline: "El sabor de México en Argentina", cta: "Descubrir", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 12, brand: "Hornitos", country: "AR", product: "Tequila Añejo", headline: "Para los paladares argentinos", cta: "Comprar", bgColor: "#5D3A1A", animation: "slideIn" },
    { id: 13, brand: "Hornitos", country: "AR", product: "Tequila Blanco", headline: "Suave y versátil", cta: "Probar", bgColor: "#A0522D", animation: "zoomIn" },
    { id: 14, brand: "Hornitos", country: "AR", product: "Mezcal", headline: "Ahumado artesanal", cta: "Explorar", bgColor: "#2E5C4E", animation: "bounce" },
    { id: 15, brand: "Hornitos", country: "AR", product: "Margarita", headline: "Fiesta y sabor argentino", cta: "Celebrar", bgColor: "#F39C12", animation: "fadeIn" },
    { id: 16, brand: "Hornitos", country: "AR", product: "Paloma", headline: "Refrescante como el vino", cta: "Probar", bgColor: "#3498DB", animation: "slideIn" },
    { id: 17, brand: "Hornitos", country: "AR", product: "Tequila Sunrise", headline: "Atardecer en Buenos Aires", cta: "Descubrir", bgColor: "#E67E22", animation: "zoomIn" },
    { id: 18, brand: "Hornitos", country: "AR", product: "Shot", headline: "Tradición mexicana", cta: "Brindar", bgColor: "#7D3C98", animation: "bounce" },
    { id: 19, brand: "Hornitos", country: "AR", product: "Tequila Reposado", headline: "Premium para vos", cta: "Degustar", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 20, brand: "Hornitos", country: "AR", product: "Margarita", headline: "Con un toque argentino", cta: "Preparar", bgColor: "#F39C12", animation: "slideIn" },
    
    // CHILE (CL) 
    { id: 21, brand: "Hornitos", country: "CL", product: "Tequila Reposado", headline: "De México para Chile", cta: "Descubrir", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 22, brand: "Hornitos", country: "CL", product: "Tequila Añejo", headline: "Premium como tú", cta: "Comprar", bgColor: "#5D3A1A", animation: "slideIn" },
    { id: 23, brand: "Hornitos", country: "CL", product: "Tequila Blanco", headline: "Suave y versátil", cta: "Probar", bgColor: "#A0522D", animation: "zoomIn" },
    { id: 24, brand: "Hornitos", country: "CL", product: "Mezcal", headline: "Ahumado tradicional", cta: "Explorar", bgColor: "#2E5C4E", animation: "bounce" },
    { id: 25, brand: "Hornitos", country: "CL", product: "Margarita", headline: "Celebra con Hornitos", cta: "Celebrar", bgColor: "#F39C12", animation: "fadeIn" },
    { id: 26, brand: "Hornitos", country: "CL", product: "Paloma", headline: "Refrescante", cta: "Probar", bgColor: "#3498DB", animation: "slideIn" },
    { id: 27, brand: "Hornitos", country: "CL", product: "Tequila Sunrise", headline: "Atardecer en Viña", cta: "Descubrir", bgColor: "#E67E22", animation: "zoomIn" },
    { id: 28, brand: "Hornitos", country: "CL", product: "Shot", headline: "El auténtico", cta: "Brindar", bgColor: "#7D3C98", animation: "bounce" },
    { id: 29, brand: "Hornitos", country: "CL", product: "Tequila Reposado", headline: "100% agave azul", cta: "Degustar", bgColor: "#8B4513", animation: "fadeIn" },
    { id: 30, brand: "Hornitos", country: "CL", product: "Margarita", headline: "Clásica y perfecta", cta: "Preparar", bgColor: "#F39C12", animation: "slideIn" }
];

// ENDPOINT PRINCIPAL

app.get('/api/contents', (req, res) => {
    let filteredContents = [...contents];
    
    // Filtrar por marca
    if (req.query.brand) {
        filteredContents = filteredContents.filter(c => 
            c.brand.toLowerCase() === req.query.brand.toLowerCase()
        );
    }
    
    // Filtrar por país
    if (req.query.country) {
        filteredContents = filteredContents.filter(c => 
            c.country.toLowerCase() === req.query.country.toLowerCase()
        );
    }
    
    // Filtrar por producto
    if (req.query.product) {
        filteredContents = filteredContents.filter(c => 
            c.product.toLowerCase().includes(req.query.product.toLowerCase())
        );
    }
    
    // ===== FALLBACK: NUNCA DEVOLVER VACÍO =====
    // Si no hay resultados para el país, usar Colombia
    if (filteredContents.length === 0) {
        console.log(`⚠️ Sin datos para ${req.query.country}, usando Colombia`);
        filteredContents = contents.filter(c => c.country === "CO");
    }
    
    // Si aún así está vacío (no debería pasar), usar TODO
    if (filteredContents.length === 0) {
        filteredContents = contents;
    }
    
    // Seleccionar aleatorio
    const randomIndex = Math.floor(Math.random() * filteredContents.length);
    res.json(filteredContents[randomIndex]);
});

// ENDPOINT PARA GENERAR CONTENIDO CON IA 

app.post('/api/generate', (req, res) => {
    const { brand, country, prompt } = req.body;
    
    // Validar que el país sea CO, AR o CL
    let targetCountry = "CO"; // Por defecto Colombia
    if (country === "CO" || country === "AR" || country === "CL") {
        targetCountry = country;
    }
    
    // Generar headline basado en el prompt
    let headline = "Descubre Hornitos";
    let product = "Tequila Especial";
    let cta = "Descubrir";
    
    if (prompt) {
        headline = prompt.substring(0, 35);
        
        if (prompt.toLowerCase().includes('margarita')) {
            product = 'Margarita';
            cta = 'Preparar';
        } else if (prompt.toLowerCase().includes('reposado')) {
            product = 'Tequila Reposado';
            cta = 'Degustar';
        } else if (prompt.toLowerCase().includes('añejo')) {
            product = 'Tequila Añejo';
            cta = 'Comprar';
        } else if (prompt.toLowerCase().includes('mezcal')) {
            product = 'Mezcal';
            cta = 'Explorar';
        } else if (prompt.toLowerCase().includes('paloma')) {
            product = 'Paloma';
            cta = 'Probar';
        } else if (prompt.toLowerCase().includes('sunrise')) {
            product = 'Tequila Sunrise';
            cta = 'Descubrir';
        } else if (prompt.toLowerCase().includes('shot')) {
            product = 'Shot';
            cta = 'Brindar';
        }
    }
    
    // Mensaje personalizado según el país
    let countryMessage = "";
    if (targetCountry === "CO") countryMessage = "Colombia";
    if (targetCountry === "AR") countryMessage = "Argentina";
    if (targetCountry === "CL") countryMessage = "Chile";
    
    const newContent = {
        id: contents.length + 1,
        brand: brand || "Hornitos",
        country: targetCountry,
        product: product,
        headline: headline,
        cta: cta,
        bgColor: '#' + Math.floor(Math.random()*16777215).toString(16),
        animation: ['fadeIn', 'slideIn', 'zoomIn', 'bounce'][Math.floor(Math.random() * 4)]
    };
    
    // Agregar a la base de datos
    contents.push(newContent);
    
    console.log(`✅ Nuevo contenido generado para ${countryMessage}`);
    
    res.json({ 
        message: `✅ Contenido generado para ${countryMessage}`,
        content: newContent,
        total: contents.length 
    });
});


// ENDPOINT PARA VER POR PAÍS

app.get('/api/country/:country', (req, res) => {
    const countryCode = req.params.country.toUpperCase();
    
    // Solo permitir CO, AR, CL
    if (!['CO', 'AR', 'CL'].includes(countryCode)) {
        return res.json({
            message: "País no disponible. Usando Colombia",
            content: contents.filter(c => c.country === "CO")[0]
        });
    }
    
    const countryContents = contents.filter(c => c.country === countryCode);
    const randomIndex = Math.floor(Math.random() * countryContents.length);
    res.json(countryContents[randomIndex]);
});


// ENDPOINT PARA VER TODOS (DEBUG)

app.get('/api/all', (req, res) => {
    res.json({
        total: contents.length,
        countries: [...new Set(contents.map(c => c.country))],
        products: [...new Set(contents.map(c => c.product))],
        contents: contents
    });
});

// Iniciar servidor

app.listen(PORT, () => {
    console.log('\n🚀 SERVIDOR HORNITOS CORRIENDO');
    console.log('===============================');
    console.log(`📍 URL: http://localhost:${PORT}`);
    console.log(`📱 Tu Banner: http://localhost:${PORT}/banner-vertical.html`);
    console.log(`🔗 API: http://localhost:${PORT}/api/contents?brand=Hornitos&country=CO`);
    console.log(`🌍 Países disponibles: CO (Colombia), AR (Argentina), CL (Chile)`);
    console.log(`🥃 Total registros: ${contents.length} (10 cada país)`);
    console.log(`🤖 IA: Genera contenido para CO, AR, CL`);
    console.log(`✅ FALLBACK ACTIVADO: Siempre mostrará contenido\n`);
});