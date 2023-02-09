import Link from "next/link";

export function ProductCard({product}) {
  return (
    <>
      <Link href={`/products/${product.id}`} key={product.id}>
        <div className="border border-gray-200 shadow-md p-6">
          {/* <h1>{product.id}</h1> */}
          <h1>{product.name}</h1>
          <h1>{product.description}</h1>
          <h1>{product.price}</h1>
        </div>
      </Link>
    </>
  );
}
