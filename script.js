document.addEventListener('DOMContentLoaded', () => {
    // Array de frases para enamorar 
    const frases = [
        { text: "Si cada vez que pensara en ti una flor naciera, los campos de Guatemala serían un jardín eterno.", author: "Anónimo" },
        { text: "Tus ojos son luceros que guían mi camino en la oscuridad. Eres la luz que ilumina mi vida.", author: "Anónimo" },
        { text: "Desde que te conocí, el mundo tiene más color y mis días más alegría. Eres mi musa.", author: "Anónimo" },
        { text: "No sé qué es lo que más me gusta de ti, si tu sonrisa, tu mirada o la forma en que me haces sentir.", author: "Anónimo" },
        { text: "Estar contigo es como volver a casa, un lugar donde encuentro paz y felicidad absolutas.", author: "Anónimo" },
        { text: "Me encanta la forma en que tu risa ilumina la habitación y contagia a todos a tu alrededor.", author: "Anónimo" },
        { text: "Cada momento a tu lado es un tesoro que guardo con cariño en lo más profundo de mi corazón.", author: "Anónimo" },
        { text: "Eres la melodía que le faltaba a mi canción, el verso que completa mi poema, la razón de mi existir.", author: "Anónimo" },
        { text: "Si el amor fuera un arte, tú serías la obra maestra más hermosa jamás creada.", author: "Anónimo" },
        { text: "Contigo no cuento los minutos, cuento los suspiros que me robas con cada gesto.", author: "Anónimo" },
        { text: "Tu voz es la banda sonora de mis sueños más dulces y tu presencia, el escenario perfecto.", author: "Anónimo" },
        { text: "Hay algo en tu mirada que me dice que eres el universo que siempre busqué.", author: "Anónimo" },
        { text: "Eres la razón por la que mis mañanas son más brillantes y mis noches más serenas.", author: "Anónimo" },
        { text: "No hay constelación más hermosa que la que se dibuja en tus ojos cuando sonríes.", author: "Anónimo" },
        { text: "Si la felicidad tuviera un rostro, sin duda sería el tuyo. Gracias por ser mi alegría.", author: "Anónimo" }
    ];

    const fraseContainer = document.getElementById('frase-container');

    frases.forEach(frase => {
        const card = document.createElement('div');
        card.classList.add('frase-card');

        const textElement = document.createElement('p');
        textElement.classList.add('frase-text');
        textElement.textContent = `${frase.text}`;

        const authorElement = document.createElement('p');
        authorElement.classList.add('frase-author');
        authorElement.textContent = ` ${frase.author}`;

        card.appendChild(textElement);
        card.appendChild(authorElement);
        fraseContainer.appendChild(card);
    });
});
