// Index Page JavaScript

// Handle login button click
document.getElementById('loginBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Implement login functionality or redirect to login page
    window.location.href = 'login.html';
});

// Handle register button click
document.getElementById('registerBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Implement register functionality or redirect to register page
    window.location.href = 'register.html';
});

// Handle special offers button click
document.getElementById('specialOffersBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Implement special offers functionality
    alert('Special offers feature coming soon!');
});

// Update cart count when storage changes
window.addEventListener('storage', function(e) {
    if (e.key === StorageManager.PREFIX + StorageManager.keys.CART) {
        const cart = StorageManager.get(StorageManager.keys.CART) || [];
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        document.querySelector('.cart-count').textContent = totalItems;
    }
});

// Initialize featured items if they don't exist
function initializeFeaturedItems() {
    const menuItems = StorageManager.get(StorageManager.keys.MENU_ITEMS);
    if (!menuItems || menuItems.length === 0) {
        const sampleItems = [
            {
                id: '1',
                name: 'Grilled Salmon',
                description: 'Fresh Atlantic salmon with seasonal vegetables',
                price: 1200,
                image: 'images/salmon.jpeg',
                featured: true
            },
            {
                id: '2',
                name: 'Pasta Primavera',
                description: 'Fettuccine pasta with seasonal vegetables',
                price: 850,
                image: 'images/pasta.jpg',
                featured: true
            },
            {
                id: '3',
                name: 'Chocolate Lava Cake',
                description: 'Warm chocolate cake with vanilla ice cream',
                price: 450,
                image: 'images/cake.jpg',
                featured: true
            }
        ];
        StorageManager.set(StorageManager.keys.MENU_ITEMS, sampleItems);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeFeaturedItems();
}); 