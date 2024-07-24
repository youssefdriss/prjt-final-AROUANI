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
    cartItems.splice(index, 1);
    renderCart();
}
// Function to update quantity of an item in cart
function updateQuantity(index, newQuantity) {
    cartItems[index].quantity = parseInt(newQuantity);
    renderCart();
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
            <img src="product${index + 1}.jpg" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${index}, this.value)">
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${index})">Remove</div>
        `;

        cartContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });
    

    cartTotal.textContent = `Total: $${totalPrice.toFixed(6)}`;
}
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
    cartItems.splice(index, 1);
    renderCart();
}
// Function to update quantity of an item in cart
function updateQuantity(index, newQuantity) {
    cartItems[index].quantity = parseInt(newQuantity);
    renderCart();
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
            <img src="product3${index + 1}.jpg" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <input type="number" value="${item.quantity}" min="0" onchange="updateQuantity(${index}, this.value)">
            </div>
            <div class="cart-item-remove" onclick="removeFromCart(${index})">Remove</div>
        `;

        cartContainer.appendChild(cartItem);

        totalPrice += item.price * item.quantity;
    });
    

    cartTotal.textContent = `Total: $${totalPrice.toFixed(6)}`;
}
