import { createContext, useContext, useState } from "react";

type CartItem ={
    [key: string]: number;
}
type CartContextType = {
    cartItems: CartItem;
    addToCart: (itemkey: string , quantity: number) => void;
    setQuantityCart: (itemkey: string , delta: number) => void;
    emptyCart: () => void;
}

// Crreate the CartContext
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem>({});

    const addToCart = (itemKey: string, quantity: number) => {
        setCartItems((prevCartItems) => {
            return {
                ...prevCartItems,
                [itemKey]: (prevCartItems[itemKey] || 0) + quantity,
            }
        });
    }

    const setQuantityCart = (itemKey: string, delta: number) => {
        setCartItems((prevCartItems) => {
            return {
                ...prevCartItems,
                [itemKey]: Math.max((prevCartItems[itemKey] || 0) + delta,0),
            }
        });
    }

    const emptyCart = () => {
        setCartItems({});
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, setQuantityCart, emptyCart }}>
            {children}
        </CartContext.Provider>
        );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}