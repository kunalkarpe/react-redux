import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}
const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const Quantity = state.carts.findIndex((item) => item.id === action.payload.id)
            if (Quantity >= 0) {
                state.carts[Quantity].qnty += 1;
            } else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
            }
        },

        removeFromCart: (state, action) => {
            const remove = state.carts.filter((item) => item.id !== action.payload.id)
            state.carts = remove;
        },

        decreaseQuantity: (state, action) => {
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (state.carts[ItemIndex].qnty >= 1) {
                state.carts[ItemIndex].qnty -= 1
            }
        },

        removeAll: (state, action) => {
            state.carts = []
        }
    }
})

export const { addToCart, removeFromCart, decreaseQuantity, removeAll } = cartSlice.actions;
export default cartSlice.reducer;



