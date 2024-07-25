// Array to store cart items
let cartItems = [];

// Function to add item to cart
function addToCart(name, price) {
    // Check if item already exists in cart
    const existingItem = cartItems.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name: name, price: price, quantity: 1 });
    }
    renderCart();
}

// Function to remove item from cart
function removeFromCart(index) {
    if (index >= 0 && index < cartItems.length) {
        cartItems.splice(index, 1);
        renderCart();
    }
}

// Function to update quantity of an item in cart
function updateQuantity(index, newQuantity) {
    if (index >= 0 && index < cartItems.length) {
        const quantity = parseInt(newQuantity, 10);
        if (quantity > 0) {
            cartItems[index].quantity = quantity;
        } else {
            alert('Quantity must be greater than 0');
        }
        renderCart();
    }
}
// Function to render cart items
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="product${index+1}.jpg" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index +1}, this.value)">
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${index})">Remove</div>
        `;

        cartContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Optional: Clear cart functionality
function clearCart() {
    cartItems = [];
    renderCart();
}