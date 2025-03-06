import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [], // Initialize empty cart
    }),

    actions: {
        // Action to load cart from localStorage on first load
        loadCart() {
            const savedCart = JSON.parse(localStorage.getItem("cart"));
            if (savedCart && Array.isArray(savedCart)) {
                this.cart = savedCart;
            }
        },

        addToCart(item) {
            const existingItem = this.cart.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...item, quantity: 1 });
            }
            this.saveCart();
        },

        removeFromCart(item) {
            this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
            this.saveCart();
        },

        updateQuantity(item, quantity) {
            const cartItem = this.cart.find((cartItem) => cartItem.id === item.id);
            if (cartItem) {
                cartItem.quantity = quantity;
            }
            this.saveCart();
        },

        saveCart() {
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },
    },

    getters: {
        totalPrice: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
        totalQuantity: (state) =>
            state.cart.reduce((total, item) => total + item.quantity, 0),
    },
});

// You can then call `loadCart()` when initializing the store to load the saved cart
