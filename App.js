import React, { useState } from "react";
import "./App.css";
function App() {
 // 👜 Wallet product data
 const wallets = [
    {id: 1, name:"Ctrl P", price: 1099, img:"https://images.urbndata.com/is/image/UrbanOutfitters/49715600_001_b?$xlarge$&fit=constrain&…"},
    {id: 2, name:"Send Money", price: 699, img:"https://tse4.mm.bing.net/th/id/OIP.i92v4AdJP6LfBQahypZcQAHaHa?cb=12&rs=1&pid=ImgDetMain&…"},
    {id: 3, name:"Arep", price: 899, img:"https://cdn-images.farfetch-contents.com/16/35/16/78/16351678_31734986_480.jpg" },
    {id: 4, name:"Waley", price: 799, img:"https://tse4.mm.bing.net/th/id/OIP.OgOZ_ztjMjUotZtjV4yiWQHaHa?cb=12&rs=1&pid=ImgDetMain&…"},
    {id: 5, name:"$", price: 999, img:"https://tse3.mm.bing.net/th/id/OIP.5J-DP1XU1lub4NJn8mnXDgHaFS?cb=12&rs=1&pid=ImgDetMain&… "},
    {id: 6, name:"Coin", price: 1299, img:"https://tse3.mm.bing.net/th/id/OIP.y9xSw7o7qaHIg79kO1xHiAAAAA?cb=12&rs=1&pid=ImgDetMain&… "},
   
   
 
 
 ]
 
 
 // 💡 States
 const [cart, setCart] = useState([]);
 const [search, setSearch] = useState("");
 // ➕ Add item to cart
 function addToCart(wallet) {
   setCart([...cart, wallet]);
 }
 // ❌ Remove from cart
 function removeFromCart(id) {
   setCart(cart.filter(item => item.id !== id));
 }
 // 💰 Calculate total price
 const total = cart.reduce((sum, item) => sum + item.price, 0);
 // 🔍 Filter wallets by search
 const filtered = wallets.filter(wallet =>
   wallet.name.toLowerCase().includes(search.toLowerCase())
 );
 return (
<div className="app">
<header>
<h1>Portefeuille 👜</h1>
<input
         type="text"
         placeholder="Search Wallet"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
</header>
<main>
<h2>👜 Wallet Collections 👜</h2>
<div className="wallet-list">
         {filtered.map(wallet => (
<div key={wallet.id} className="wallet-card">
<img src={wallet.img} alt={wallet.name} />
<h3>{wallet.name}</h3>
<p>₱{wallet.price}</p>
<button onClick={() => addToCart(wallet)}>Add to Cart</button>
</div>
         ))}
</div>
<h2>🛒 Shopping Cart</h2>
       {cart.length === 0 ? (
<p>Your cart is empty.</p>
       ) : (
<ul className="cart-list">
           {cart.map((item, index) => (
<li key={index}>
               {item.name} - ₱{item.price}{" "}
<button onClick={() => removeFromCart(item.id)}>Remove</button>
</li>
           ))}
</ul>
       )}
<h3>💰 Total: ₱{total}</h3>
       {cart.length > 0 && <button onClick={() => alert("Checkout Successful!")}>Checkout</button>}
</main>
</div>
 );
}
export default App;