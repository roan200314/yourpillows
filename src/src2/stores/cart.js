import { defineStore } from "pinia";

// Pinia store - cart.js

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: [],
    }),

    actions: {
        addToCart(item) {
            const filling = item.selectedFilling || '';
            const firstSide = item.selectedFirstSide || '';
            const secondSide = item.selectedSecondSide || '';
            const uniqueId = `${item.id}-${filling}-${firstSide}-${secondSide}`;
            const existingItem = this.cart.find(cartItem => cartItem.uniqueId === uniqueId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                const simplifiedItem = {
                    id: item.id,
                    name: item.name,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    quantity: 1,
                    selectedFilling: filling,
                    selectedFirstSide: firstSide,
                    selectedSecondSide: secondSide,
                    uniqueId: uniqueId,
                };
                this.cart.push(simplifiedItem);
            }

            localStorage.setItem("cart", JSON.stringify(this.cart));
        },

        loadCart() {
            const savedCart = localStorage.getItem("cart");
            if (savedCart) {
                try {
                    const parsedCart = JSON.parse(savedCart);
                    if (Array.isArray(parsedCart)) {
                        this.cart = parsedCart;
                    } else {
                        this.cart = [];
                    }
                } catch (e) {
                    this.cart = [];
                }
            } else {
                this.cart = [];
            }
        },

        removeFromCart(item) {
            this.cart = this.cart.filter(cartItem => cartItem.uniqueId !== item.uniqueId);
            localStorage.setItem("cart", JSON.stringify(this.cart));
        },

        updateQuantity(item, quantity) {
            const cartItem = this.cart.find(cartItem => cartItem.uniqueId === item.uniqueId);
            if (cartItem && quantity > 0) {
                cartItem.quantity = quantity;
                localStorage.setItem("cart", JSON.stringify(this.cart));
            }
        },

        clearCart() {
            this.cart = [];
            localStorage.removeItem("cart");
        }
    },

    getters: {
        totalPrice: (state) =>
            state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
    },

    persist: true,
});

