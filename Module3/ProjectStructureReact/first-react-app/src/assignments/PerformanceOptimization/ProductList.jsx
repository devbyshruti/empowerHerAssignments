function ProductList({ products, onSelectProduct }) {
    console.log("ProductList rendered");

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <div key={product.id}>
                    {product.name} - ₹{product.price}
                    <button onClick={() => onSelectProduct(product)}>
                        Select
                    </button>
                    </div>
            ))}
     </div>   
    );
}
export default ProductList;