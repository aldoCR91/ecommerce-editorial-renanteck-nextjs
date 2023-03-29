//import { Inter } from "next/font/google";
import ProductFeed from "../components/productFeed/ProductFeed";
import Banner from "../components/banner/Banner";
import Layout from "../components/Layout";

//import styles from "@/styles/Home.module.css";

//const inter = Inter({ subsets: ["latin"] });

export default function Home({products}) {
  return (
    <>
      <Layout title={"Inicio"}>
        <Banner/>
        <ProductFeed products={products}></ProductFeed>
      </Layout>
    </>
  );
}

export async function getServerSideProps(context){
  const products = await fetch("https://fakestoreapi.com/products").then((res)=>res.json());

  return{
    props: {
      products
    }
  }
}
