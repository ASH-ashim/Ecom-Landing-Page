document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.classList.add('mobile-menu-overlay');
    document.body.appendChild(mobileMenuOverlay);
    
    hamburgerMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    mobileMenuOverlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // ===== NEW CODE ADDED =====
    // Add click event to all links inside mobile menu to close it when clicked
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu when any link is clicked
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    // ===== END OF NEW CODE =====
    
    const scrollTopBtn = document.querySelector('.scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    

    const filterButtons = document.querySelectorAll('.filter-btn');
    const productsGrid = document.querySelector('.products-grid');
    

    const products = [
        {
            id: 1,
            title: 'Wireless Bluetooth Headphones',
            category: 'electronics',
            price: 899.99,
            oldPrice: 1299.99,
            image: 'assets/headphone1.avif',
            rating: 4.5,
            reviews: 124,
            badge: 'Sale'
        },
        
        {
            id: 3,
            title: 'Smart Watch Pro',
            category: 'electronics',
            price: 1999.99,
            oldPrice: 2499.99,
            image: 'assets/watch.avif',
            rating: 4.8,
            reviews: 215,
            badge: 'Bestseller'
        },
        {
            id: 4,
            title: 'Cotton T-Shirt',
            category: 'fashion',
            price: 249.99,
            oldPrice: 349.99,
            image: 'assets/tshirt.avif',
            rating: 4.0,
            reviews: 56,
            badge: 'New'
        },
        {
            id: 5,
            title: 'Ceramic Coffee Mug',
            category: 'home',
            price: 149.99,
            oldPrice: 199.99,
            image: 'assets/mug.avif',
            rating: 4.7,
            reviews: 178,
            badge: 'Best Seller'
        },
        {
            id: 6,
            title: 'Wireless Headphone',
            category: 'electronics',
            price: 699.99,
            oldPrice: 999.99,
            image: 'assets/headphone2.avif',
            rating: 4.3,
            reviews: 92,
            badge: 'Best Seller'
        },
        {
            id: 7,
            title: 'Chair',
            category: 'home',
            price: 699.99,
            oldPrice: 1199.99,
            image: 'assets/chair.avif',
            rating: 4.1,
            reviews: 47,
            badge: 'New'
        },
        {
            id: 8,
            title: 'Running Shoes',
            category: 'fashion',
            price: 799.99,
            oldPrice: 1999.99,
            image: 'assets/shoes.avif',
            rating: 4.6,
            reviews: 203,
            badge: 'Hot'
        },
        {
            id: 9,
            title: 'Iphone 12 pro',
            category: 'electronics',
            price: 114999.99,
            oldPrice: 144999.99,
            image: 'assets/mobile.avif',
            rating: 4.8,
            reviews: 472,
            badge: 'Hot'
        },
        {
            id: 10,
            title: 'Comfy Sofa',
            category: 'home',
            price: 9999.99,
            oldPrice: 15999.99,
            image: 'assets/sofa.avif',
            rating: 4.5,
            reviews: 31,
            badge: 'Hot'
        },
        {
            id: 11,
            title: 'HD 4k TV',
            category: 'electronics',
            price: 99999.99,
            oldPrice: 159999.99,
            image: 'assets/tv.avif',
            rating: 4.6,
            reviews: 321,
            badge: 'Premium'
        },
        {
            id: 12,
            title: 'Coat',
            category: 'fashion',
            price: 1999.99,
            oldPrice: 999.99,
            image: 'assets/womenwear.avif',
            rating: 4.4,
            reviews: 31,
            badge: 'Hot'
        },

    ];
    
    
    function renderProducts(filter = 'all') {
        productsGrid.innerHTML = '';
        
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        filteredProducts.forEach(product => {
            const stars = Array(Math.floor(product.rating)).fill('<i class="fas fa-star"></i>').join('');
            const halfStar = product.rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '';
            const emptyStars = Array(5 - Math.ceil(product.rating)).fill('<i class="far fa-star"></i>').join('');
            
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.dataset.category = product.category;
            productCard.innerHTML = `
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image">
                    <img src="${product.image}" alt="${product.title}">
                    <div class="product-actions">
                        <button class="product-action-btn"><i class="far fa-heart"></i></button>
                        <button class="product-action-btn"><i class="fas fa-eye"></i></button>
                        <button class="product-action-btn"><i class="fas fa-share-alt"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                    <h3 class="product-title">${product.title}</h3>
                    <div class="product-price">
                        <span class="current-price">NPR ${product.price.toFixed(2)}</span>
                        ${product.oldPrice ? `<span class="old-price">$${product.oldPrice.toFixed(2)}</span>` : ''}
                    </div>
                    <div class="product-rating">
                        <div class="stars">${stars}${halfStar}${emptyStars}</div>
                        <span class="reviews">(${product.reviews})</span>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
            
            productsGrid.appendChild(productCard);
        });
        
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.dataset.id;
                const product = products.find(p => p.id == productId);
                
                const cartCount = document.querySelector('.cart-count');
                let count = parseInt(cartCount.textContent);
                cartCount.textContent = count + 1;
                
                const notification = document.createElement('div');
                notification.className = 'notification slide-up';
                notification.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>Added "${product.title}" to cart</span>
                `;
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.classList.add('fade-out');
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            });
        });
    }
    

    renderProducts();
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
    
    const newsletterForm = document.querySelector('.newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input');
        const email = emailInput.value;
        
        console.log('Subscribed email:', email);
    
        const notification = document.createElement('div');
        notification.className = 'notification slide-up';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>Thanks for subscribing!</span>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
        
        emailInput.value = '';
    });
    

    const chatBtn = document.querySelector('.chat-btn');
    chatBtn.addEventListener('click', function() {
        alert('Message functionality is not avilable at this moment.');
    });
    

    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('slide-up');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); 
});