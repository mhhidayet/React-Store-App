import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <div className="product-item" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
