import { Layout } from "@/components/Layout";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";
import Link from "next/link";

function homePage({ products }) {

  const renderProducts = () => {


    if (products.length === 0) {
      return <h1 className="text-center text-2xl font-bold">No productos</h1>
    }
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }
  console.log(products);
  return (
    <Layout>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
        {renderProducts()}
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );
  return {
    props: {
      products,
    },
  };
};
export default homePage;
