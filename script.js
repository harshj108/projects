// Function to change the main image when a thumbnail is clicked
function changeImage(element) {
    document.getElementById('main-image').src = element.src;
}

// Add to cart functionality
document.getElementById('add-to-cart').addEventListener('click', function() {
    const message = document.getElementById('cart-message');
    message.classList.remove('hidden');
    
    setTimeout(() => {
        message.classList.add('hidden');
    }, 2000); // Hide the message after 2 seconds
});
