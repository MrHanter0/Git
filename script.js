// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenuBtn.innerHTML = nav.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
       
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add to cart button functionality
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-info').querySelector('h3').textContent;
        alert(`Товар "${productName}" добавлен в корзину!`);
    });
});

// Cart counter functionality
let cartCount = 0;
const cartIcon = document.querySelector('.fa-shopping-bag').closest('a');

// Initialize cart icon with counter
const cartCounter = document.createElement('span');
cartCounter.className = 'cart-counter';
cartCounter.style.cssText = `
    position: absolute;
    top: -8px;
    right: -8px;
    background-color: var(--accent-gold);
    color: var(--primary-dark);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
cartIcon.style.position = 'relative';
cartIcon.appendChild(cartCounter);
updateCartCounter();

function updateCartCounter() {
    cartCounter.textContent = cartCount;
    cartCounter.style.display = cartCount > 0 ? 'flex' : 'none';
}

// Update cart counter when adding items
document.querySelectorAll('.btn-outline').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-info').querySelector('h3').textContent;
        cartCount++;
        updateCartCounter();
        alert(`Товар "${productName}" добавлен в корзину! В корзине теперь ${cartCount} товар(ов)`);
    });
});

// Search functionality
const searchIcon = document.querySelector('.fa-search').closest('a');
searchIcon.addEventListener('click', function(e) {
    e.preventDefault();
    const searchTerm = prompt('Что вы ищете?');
    if(searchTerm) {
        alert(`Поиск товаров по запросу: "${searchTerm}"\n(В реальном магазине здесь будет переход на страницу поиска)`);
    }
});

// User account icon functionality
const userIcon = document.querySelector('.fa-user').closest('a');
userIcon.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Вход в личный кабинет\n(В реальном магазине здесь будет форма входа)');
});

// Cart icon click functionality
cartIcon.addEventListener('click', function(e) {
    e.preventDefault();
    if(cartCount > 0) {
        alert(`В вашей корзине ${cartCount} товар(ов)\n(В реальном магазине здесь будет переход на страницу корзины)`);
    } else {
        alert('Ваша корзина пуста');
    }
});