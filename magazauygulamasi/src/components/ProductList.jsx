import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {products.map((p) => (
        <div
          key={p.id}
          style={{
            backgroundColor: "#cfe8fc", // primary.light yerine renk
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}
