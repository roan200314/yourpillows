import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [], // Initialize empty cart
    }),

    actions: {
        // Load the cart from localStorage if it exists
        loadCart() {
            const savedCart = JSON.parse(localStorage.getItem("cart"));
            if (savedCart && Array.isArray(savedCart)) {
                this.cart = savedCart;
                console.log("Loaded cart from localStorage:", this.cart); // Debugging
            } else {
                console.log("No cart found in localStorage."); // Debugging
            }
        },

        // Add item to the cart with a unique identifier
        addToCart(item) {
            const uniqueId = `${item.id}-${item.material}-${item.size}-${item.color}`;

            const existingItem = this.cart.find((cartItem) => cartItem.uniqueId === uniqueId);

            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if the item already exists in the cart
            } else {
                this.cart.push({ ...item, uniqueId, quantity: 1 }); // Add new item with quantity 1
            }

            this.saveCart(); // Save cart to localStorage
            console.log("Cart after adding item:", this.cart); // Debugging
        },

        // Remove item from the cart
        removeFromCart(item) {
            this.cart = this.cart.filter((cartItem) => cartItem.uniqueId !== item.uniqueId);
            this.saveCart();
            console.log("Cart after removing item:", this.cart); // Debugging
        },

        // Update item quantity
        updateQuantity(item, quantity) {
            const cartItem = this.cart.find((cartItem) => cartItem.uniqueId === item.uniqueId);
            if (cartItem && quantity > 0) {
                cartItem.quantity = quantity; // Update quantity if valid
                this.saveCart(); // Save cart to localStorage
                console.log("Updated cart:", this.cart); // Debugging
            }
        },

        // Clear all items from the cart
        clearCart() {
            this.cart = [];
            this.saveCart();
            console.log("Cart cleared."); // Debugging
        },

        // Save the cart to localStorage
        saveCart() {
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
    },

    getters: {
        // Get the total price of items in the cart
        totalPrice: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),

        // Get the total quantity of items in the cart
        totalQuantity: (state) =>
            state.cart.reduce((total, item) => total + item.quantity, 0),
    },
});
