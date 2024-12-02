// Array de objetos con información de las tarjetas
const cardsData = [
  { title: 'San Antonio A', description: 'Codigo:TR-0078', href: 'SanantonioA1.html', category: 'categoria4' },
  { title: 'Linea Universitaria', description: 'Codigo:TR-0224', href: 'LineaU1.html', category: 'categoria2' },
  { title: 'Chasqui B', description: 'Codigo:TR-0018', href: 'Chasqui B1.html', category: 'categoria3' },
  { title: 'Ethisac B', description: 'Codigo:TR-0136', href: 'EtihsacB1.html', category: 'categoria3' },
  { title: 'Santiago Leon', description: 'Codigo:TR-0088', href: 'SantiagoA1.html', category: 'categoria3' },
  { title: 'Etsa', description: 'Codigo:TR-0078', href: 'Etsa.html', category: 'categoria2' },
  { title: 'Chasqui A', description: 'Codigo:TR-0018', href: 'Chasqui A1.html', category: 'categoria3' },
  { title: 'Trans Alfa B', description: 'Codigo:TR-0006', href: 'TransAlfaB1.html', category: 'categoria4' },
  { title: 'San Juan B', description: 'Codigo:TR-0083', href: 'SanjuanB1.html', category: 'categoria1' },
  { title: 'Andorinha', description: 'Codigo:TR-0007', href: 'Andorinha.html', category: 'categoria3' },
  { title: 'Niño Jesus', description: 'Codigo:TR-0067', href: 'Niñojesus.html', category: 'categoria4' },
  { title: 'Peñaloza', description: 'Codigo:TR-0110', href: 'Peñaloza1.html', category: 'categoria3' },
  { title: 'San Antonio B', description: 'Codigo:TR-0078', href: 'SanantonioB1.html', category: 'categoria1' },
  { title: 'Saños Grande', description: 'Codigo:TR-0091', href: 'SañosGrande1.html', category: 'categoria2' },
  { title: 'Etarsa B', description: 'Codigo:TR-0012', href: 'EtarsaB1.html', category: 'categoria2' },
  { title: 'Sol de Oro', description: 'Codigo:TR-0036', href: 'SoldeOro.html', category: 'categoria3' },
  { title: 'Virgo', description: 'Codigo:TR-0198', href: 'Virgo1.html', category: 'categoria3' },
  { title: 'Ethisac A', description: 'Codigo:TR-0136', href: 'EtihsacA1.html', category: 'categoria2' },
  { title: 'Trans Alfa A', description: 'Codigo:TR-0006', href: 'TransAlfaA1.html', category: 'categoria4' },
  { title: 'San Juan A', description: 'Codigo:TR-0083', href: 'SanjuanA1.html', category: 'categoria1' },
  { title: 'Colectivo 6', description: 'Codigo:TR-00170', href: 'colectivo61.html', category: 'categoria2' },
  { title: 'Colectivo 16', description: 'Codigo:TR-0167', href: 'colectivo16.html', category: 'categoria3' },
  { title: 'Union Wanka', description: 'Codigo:TR-0126', href: 'Unionwanka1.html', category: 'categoria2' },
  { title: 'Uñas', description: 'Codigo:TR-0126', href: 'Uñas.html', category: 'categoria3' },
  { title: 'Union Huayta', description: 'Codigo:TR-0161', href: 'Unionhuayta.html', category: 'categoria2' },
  { title: 'Corazon de Jesus', description: 'Codigo:TR-0025', href: 'Corazondejesus1.html', category: 'categoria3' },
  { title: 'Sra. de Guadalupe', description: 'Codigo:TR-0036', href: 'Nstraguadalupe1.html', category: 'categoria1' },
  { title: '20 de Marzo', description: 'Codigo:TR-0060', href: '20deMarzo.html', category: 'categoria2' },
  { title: 'Etarsa A', description: 'Codigo:TR-0012', href: 'EtarsaA1.html', category: 'categoria2' },
  { title: 'Huracan', description: 'Codigo:TR-0044', href: 'Huracan1.html', category: 'categoria2' },
  { title: 'Tercera Dimension', description: 'Codigo:TR-0155', href: 'terceradimencion.html', category: 'categoria2' },
  { title: 'Transparr', description: 'Codigo:TR-0116', href: 'Transparr1.html', category: 'categoria2' }
];

// Crear un contenedor para las tarjetas
const cardContainer = document.getElementById('card-container');

// Función para mostrar las tarjetas
function displayCards(cards) {
  // Limpiar el contenedor de tarjetas
  cardContainer.innerHTML = '';
  cards.forEach(cardData => {
      // Crear un elemento de tarjeta
      const card = document.createElement('div');
      card.className = 'card';

      // Crear un título para la tarjeta
      const title = document.createElement('h2');
      title.textContent = cardData.title;
      card.appendChild(title);

      // Crear un párrafo para la tarjeta
      const description = document.createElement('p');
      description.textContent = cardData.description;
      card.appendChild(description);

      // Crear un enlace
      const link = document.createElement('a');
      link.href = cardData.href; // URL a la que se dirigirá el enlace
      link.textContent = 'Ver ruta';
      
      // Agregar el enlace a la tarjeta
      card.appendChild(link);

      // Agregar la tarjeta al contenedor
      cardContainer.appendChild(card);
  });
}

// Llamar a la función para mostrar todas las tarjetas al cargar la página
displayCards(cardsData);

// Función para filtrar tarjetas por categoría
function filterCards(category) {
  if (category === 'all') {
      displayCards(cardsData);
  } else {
      const filteredCards = cardsData.filter(card => card.category === category);
      displayCards(filteredCards);
  }
}

// Agregar eventos a los botones de categoría
const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      filterCards(category);
  });
});

// Función para buscar tarjetas
document.getElementById('search-input').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredCards = cardsData.filter(card => 
      card.title.toLowerCase().includes(searchTerm) || 
      card.description.toLowerCase().includes(searchTerm)
  );
  displayCards(filteredCards);
});