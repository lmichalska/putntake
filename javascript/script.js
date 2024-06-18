

//-------------------------------------------------------------------|
// side-navbar menu opening and closing when clicking hamburger menu |
//-------------------------------------------------------------------|
const hamburgerMenu = document.getElementById('hamburger-menu')
const mobileNav = document.getElementById('mobile-nav')
const overlay = document.getElementById('overlay')
const closeBtn = document.getElementById('close-btn')

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('show')
    overlay.classList.toggle('show')
})
overlay.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    overlay.classList.remove('show')
})
closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('show')
    overlay.classList.remove('show')
})
//------------------------------------------------------------------|
// dropdown opening, arrow moving, and language disappearing behind |
//------------------------------------------------------------------|
const dropdownBtn = document.getElementById('dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const dropdownArrow = document.getElementById('dropdown-arrow')
const languageSelector = document.querySelector('.language-selector')

dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show')
    dropdownArrow.classList.toggle('flipped')
    
    if (!languageSelector.classList.contains('show')) {
        setTimeout(() => {
            languageSelector.classList.add('show')
        }, 250)
    } else {
        languageSelector.classList.remove('show')
    }
})



//----------------------------------------------------------------------------------------------------|
// makes all logo click events lead to index page - this would have to be changed for other languages |
//----------------------------------------------------------------------------------------------------|
const brandLogo = document.querySelectorAll('.logo')

brandLogo.forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index-en.html'
    })
})

const brandLogoDk = document.querySelectorAll('.logo-dk')

brandLogoDk.forEach(logo => {
    logo.addEventListener('click', () => {
        window.location.href = 'index.html'
    })
})



//------------------------------------------------------------------------|
// Updates index for carousel slides on landing page and moves the slides |
//------------------------------------------------------------------------|
const landingCarouselContent = document.querySelector('.landing-carousel-content')
const landingCarouselItems = document.querySelectorAll('.landing-carousel-item')
const landingCarouselRadioBtns = document.querySelectorAll('.landing-carousel-radio-buttons input[type="radio"]')
let currentIndex = 0
let slideInterval

function showSlide(index) {
    const offset = -index * 100
    landingCarouselContent.style.transform = `translateX(${offset}%)`
    landingCarouselRadioBtns[index].checked = true
    currentIndex = index
}

function nextSlide() {
    const nextIndex = (currentIndex + 1) % landingCarouselItems.length
    showSlide(nextIndex)
}

// resets interval for when the radio buttons are clicked
function resetSlideInterval() {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, 5000)
}

landingCarouselRadioBtns.forEach((radio, index) => {
    radio.addEventListener("click", () => {
        showSlide(index)
        resetSlideInterval()
    })
})

slideInterval = setInterval(nextSlide, 5000)

//---------------------------------------|
// review card clickable moving carousel |
//---------------------------------------|
const reviewCardContainer = document.querySelector('.review-card-container')
const reviewCard = document.querySelectorAll('.review-card')
const reviewRadioBtns = document.querySelectorAll('.review-radio-buttons input[type="radio"]')
let currentReview = 0

function showReviewCard(review) {
    const reviewOffset = -review * 100
    reviewCardContainer.style.transform = `translateX(${reviewOffset}%)`
    reviewRadioBtns[review].checked = true
    currentReview = review
}

function nextReviewCard() {
    const nextReview = (currentReview + 1) % reviewCard.length
    showReviewCard(nextReview)
}

function previousReviewCard() {
    const nextReview = (currentReview - 1) % reviewCard.length
    showReviewCard(nextReview)
}

reviewRadioBtns.forEach((radio, review) => {
    radio.addEventListener('click', () => {
        showReviewCard(review)
    })
})
const reviewArrowForward = document.querySelector('.review-arrow-forward');
if (reviewArrowForward) {
    reviewArrowForward.addEventListener('click', () => {
        console.log('Review arrow forward clicked');
        nextReviewCard();
    });
} else {
    console.log('Review arrow forward not found');
}

// Review arrow back logic
const reviewArrowBack = document.querySelector('.review-arrow-back');
if (reviewArrowBack) {
    reviewArrowBack.addEventListener('click', () => {
        console.log('Review arrow back clicked');
        previousReviewCard();
    });
} else {
    console.log('Review arrow back not found');
}
//-------------------|
// currency switcher |
//-------------------|
const toggleButton = document.getElementById('currencyToggleButton');

toggleButton.addEventListener('click', () => {
    const prices = document.querySelectorAll('.price')
    if (toggleButton.textContent === "Switch to €") {
        toggleButton.textContent = "Switch to DKK"
        prices.forEach(price => {
            price.textContent = `€ ${price.getAttribute('data-eur')}`
        });
    } else if (toggleButton.textContent === "Switch to DKK") {
        toggleButton.textContent = "Switch to €";
        prices.forEach(price => {
            price.textContent = `DKK ${price.getAttribute('data-dkk')}`
        });

        // These are for the danish translation of the page
    } else if (toggleButton.textContent === "Skift til €") {
        toggleButton.textContent = "Skift til DKK"
        prices.forEach(price => {
            price.textContent = `€ ${price.getAttribute('data-eur')}`
        })
    } else if (toggleButton.textContent === "Skift til DKK") {
        toggleButton.textContent = "Skift til €"
        prices.forEach(price => {
            price.textContent= `DKK ${price.getAttribute('data-eur')}`
        })
    }
});



//------------------------------------------|
// pricing table currency and tab switching |
//------------------------------------------|
function showPrices(tab) {
    var tabs = document.querySelectorAll('.tab')
    var tables = document.querySelectorAll('.pricing-table')

    // Removes 'active' class from all tabs and hide all tables
    tabs.forEach(function(tab) {
        tab.classList.remove('active')
    });

    tables.forEach(function(table) {
        table.classList.add('hidden')
    });

    // Adds 'active' class to clicked tab and shows corresponding table
    document.querySelector('.tab[onclick="showPrices(\'' + tab + '\')"]').classList.add('active')
    document.getElementById(tab).classList.remove('hidden')
}

//----------------------------------|
// dropdown buttons on pricing page |
//----------------------------------|
const dropdownButtons = document.querySelectorAll('.pricing-dropdown-button');
const dropdownContents = document.querySelectorAll('.dropdown-content-prices');

dropdownButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const dropdownContent = dropdownContents[index];
        dropdownContent.classList.toggle('open');

        const arrow = button.querySelector('.arrow');
        if (dropdownContent.classList.contains('open')) {
            arrow.style.transform = "rotate(180deg)";
        } else {
            arrow.style.transform = "rotate(0deg)";
        }
    });
});

//--------------------|
// Pricing calculator |
//--------------------|
const calculatorBtn = document.getElementById('calculatorButton')
const calculatorContent = document.querySelector('.calculator-content')

calculatorBtn.addEventListener('click', () => {
    calculatorContent.classList.toggle('open')
})

const prices = {
    'base': [120, 140, 160, 180, 200, 260],
    'children': [60, 70, 80, 90, 100, 130],
    'extra': 30,
    'rodRental': 50,
    'additionalRod': 20
  };

  function calculateTotal() {
    const rods = document.getElementById('rods').value;
    const duration = document.getElementById('duration').value;
    const children = document.getElementById('children').value;
    const extraHour = document.getElementById('extra-hour').checked;
    const fishingRod = document.getElementById('fishing-rod').checked;

    let total = 0;
    const durationIndex = duration === 'day' ? 5 : parseInt(duration) - 2;

    total += prices['base'][durationIndex];

    if (children > 0) {
      total += prices['children'][durationIndex] * children;
    }

    if (rods > 1) {
      total += prices['additionalRod'] * (rods - 1);
    }

    if (extraHour) {
      total += prices['extra'];
    }

    if (fishingRod) {
      total += prices['rodRental'];
    }

    document.getElementById('total-price').textContent = `${total} DKK`;
  }

  document.getElementById('rods').addEventListener('input', calculateTotal);
  document.getElementById('duration').addEventListener('change', calculateTotal);
  document.getElementById('children').addEventListener('input', calculateTotal);
  document.getElementById('extra-hour').addEventListener('change', calculateTotal);
  document.getElementById('fishing-rod').addEventListener('change', calculateTotal);

  // Initial calculation on page load
  calculateTotal();