
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
   
    const answer = question.nextElementSibling;

  
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      question.querySelector('.faq-toggle').textContent = '+';
    } else {
      answer.style.display = 'block';
      question.querySelector('.faq-toggle').textContent = '-';
    }
  });
});




// Маленький домик 
const images = [
  'img/IMG_1479.JPG', 
  'img/domikDla2/domik2(1).jpg',
  'img/domikDla2/domik2(2).jpg',
  'img/domikDla2/domik2(3).jpg',
  'img/domikDla2/domik2(4).jpg'
];


let currentIndex = 0;

function changeImg() {
  const image = document.getElementById('img1');
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  image.src = images[currentIndex];
}

// Большой домик на 4
const images2 = [
  'img/IMG_1480.JPG',
  'img/domicDla4/domic4(1).JPG',
  'img/domicDla4/domic4(2).JPG',
  'img/domicDla4/domic4(3).JPG',
  'img/domicDla4/domic4(4).JPG'
];


let currentIndex1 = 0;

function changeImg2() {
  const image = document.getElementById('img2');

  currentIndex1++;
  
  if (currentIndex1 >= images2.length) {
    currentIndex1 = 0;
  }

  image.src = images2[currentIndex1];
}

// Большой домик на 6
const images3 = [
  'img/DomikNa8.JPG',
  'img/domicDla4/domic4(1).JPG',
  'img/domicDla4/domic4(2).JPG',
  'img/domicDla4/domic4(3).JPG',
  'img/domicDla4/domic4(4).JPG'
];


let currentIndex2 = 0;

function changeImg3() {
  const image = document.getElementById('img3');

  currentIndex2++;
  
  if (currentIndex2 >= images3.length) {
    currentIndex2 = 0;
  }

  image.src = images3[currentIndex2];
}


// Весь участок 

const images4 = [
  'img/VesYchastok.JPG',
  'img/VesYchastok/VesYch(1).JPG',
  'img/VesYchastok/VesYch(2).JPG',
  'img/VesYchastok/VesYch(3).JPG',
  'img/VesYchastok/VesYch(4).JPG',
  'img/VesYchastok/VesYch(5).JPG',
  'img/VesYchastok/VesYch(6).JPG',
  'img/VesYchastok/VesYch(7).JPG'
];


let currentIndex3 = 0;

function changeImg4() {
  const image = document.getElementById('img4');

  currentIndex3++;
  
  if (currentIndex3 >= images4.length) {
    currentIndex3 = 0;
  }

  image.src = images4[currentIndex3];
}


