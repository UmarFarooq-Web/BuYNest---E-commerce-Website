import {create} from 'zustand'

const useStore = create((set)=>({
    cartProducts:[],
    
    setCartProducts:(Products) => set((state)=>({cartProducts:Products})),


    addToCart:(productId) =>set((state)=>({
        cartProducts:[...state.cartProducts , productId]
    })),

    removeFromCart:(prodectId)=>((state)=>({
        cartProducts:state.cartProducts.filter((e)=>e!=prodectId)
    })),


    

}))

export default useStore;