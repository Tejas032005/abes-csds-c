let cartCount = 0;

function addToCart() {
  cartCount++;
  document.querySelector(".basket__count").textContent = cartCount;
  alert("Item added to cart! 🛒");
}
