import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = Array.from({ length: 1000 }, (_, i) => ({
id: i + 1,
name: `Product ${i + 1}`,
price: Math.floor(Math.random() * 100) + 1,
}));

function ProductPage() {
    const [counter, setCounter] = useState(0);
    const [products] = useState(productsData);

    const totalPrice = useMemo(() => {
        console.log("Calculating total price...");
        return products.reduce((sum, item) => sum + item.price, 0);
    }, [products]);

    const handleProduct = useCallback((product) => {
        console.log("Selected:", product.name);
    }, []);

    return (
        <div>
        <h1>React Preformance Optimization</h1>
        <h2>Total Price: ₹{totalPrice}</h2>
        <button onClick={() => setCounter(counter + 1)}>
            Counter: {counter}
        </button>

        <ProductList
        products={products}
        onSelectProduct={handleProduct}
        />
        </div>
    );
}
export default ProductPage;