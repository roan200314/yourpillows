import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: JSON.parse(localStorage.getItem("cart")) || [],
    }),

    actions: {
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
    },
});
