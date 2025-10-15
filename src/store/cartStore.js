
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      // 🛒 initial state
      cart: [],

      // ➕ Add item to cart
      addToCart: (product, qty = 1) => {
        const existingItem = get().cart.find((item) => item.id === product.id)

        if (existingItem) {
          // If product already in cart, increase quantity
          const updatedCart = get().cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + qty }
              : item
          )
          set({ cart: updatedCart })
        } else {
          // Add new product with quantity
          set({ cart: [...get().cart, { ...product, quantity: qty }] })
        }
      },

      // ❌ Remove item from cart
      removeFromCart: (id) => {
        const updatedCart = get().cart.filter((item) => item.id !== id)
        set({ cart: updatedCart })
      },

       increaseQuantity: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    }),
      decreaseQuantity: (id) =>
    set({
      cart: get().cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    }),

      // 🔄 Update item quantity
      updateQuantity: (id, qty) => {
        if (qty <= 0) {
          const updatedCart = get().cart.filter((item) => item.id !== id)
          set({ cart: updatedCart })
        } else {
          const updatedCart = get().cart.map((item) =>
            item.id === id ? { ...item, quantity: qty } : item
          )
          set({ cart: updatedCart })
        }
      },

      // 🧹 Clear all items from cart
      clearCart: () => set({ cart: [] }),

      // 📊 Get total item count
      getTotalItems: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

      // 💰 Get total price
      getTotalPrice: () =>
        get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    {
      name: 'ecommerce-cart', // key name in localStorage
    }
  )
)
