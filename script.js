let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    // Update count
    document.getElementById("cart-count").innerText = cart.length;

    // Update list
    let cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}
