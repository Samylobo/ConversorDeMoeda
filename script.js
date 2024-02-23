// Função para converter a moeda
function convertCurrency(amount, fromCurrency, toCurrency) {
  const rates = {
      USD_BRL: 5.50,
      BRL_USD: 0.18,
      USD_EUR: 0.85,
      EUR_USD: 1.18,
      BRL_EUR: 0.15,
      EUR_BRL: 6.75
  };
  const rate = rates[`${fromCurrency}_${toCurrency}`];
  if (!rate) {
      return 'Taxa de conversão não encontrada';
  }
  return amount * rate;
}

// Função para animação das imagens
function animateImages(currency) {
  const activeSlide = document.querySelector('.slide.active');
  activeSlide.classList.remove('active');
  const nextSlide = activeSlide.nextElementSibling || slides[0];
  nextSlide.classList.add('active');
}

// Implemente a lógica para a animação das imagens

// Evento de clique no botão de converter
document.getElementById('convertButton').addEventListener('click', function() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);

  // Exibe o resultado da conversão
  document.getElementById('convertedAmount').value = `R$ ${convertedAmount.toFixed(2)}`;

  // Animação das imagens
  animateImages(fromCurrency);
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Alterna os slides a cada 3 segundos
