import { ref, computed } from 'vue'; // Add computed here


export function useCart() {
    const cart = ref([]); // Cart items stored in memory

    // Get cart from localStorage on mount
    const loadCartFromStorage = () => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart.value = JSON.parse(savedCart);
        }
    };

    // Save cart to localStorage
    const saveCartToStorage = () => {
        localStorage.setItem('cart', JSON.stringify(cart.value));
    };

    // Add item to cart
    const addToCart = (item) => {
        const existingItem = cart.value.find((cartItem) => cartItem.name === item.name);
        if (existingItem) {
            existingItem.quantity += 1; // If already in the cart, increase the quantity
        } else {
            cart.value.push({ ...item, quantity: 1 }); // Add new item to the cart
        }
        saveCartToStorage();
    };

    // Remove item from cart
    const removeFromCart = (item) => {
        cart.value = cart.value.filter((cartItem) => cartItem.name !== item.name);
        saveCartToStorage();
    };

    // Update quantity
    const updateQuantity = (item, quantity) => {
        const cartItem = cart.value.find((cartItem) => cartItem.name === item.name);
        if (cartItem) {
            cartItem.quantity = quantity;
            saveCartToStorage();
        }
    };

    // Calculate total
    const totalPrice = computed(() => {
        return cart.value.reduce((total, item) => total + item.price * item.quantity, 0);
    });

    return {
        cart,
        loadCartFromStorage,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
    };
}
