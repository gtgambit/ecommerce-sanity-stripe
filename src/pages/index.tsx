import React from "react";
import { GetServerSideProps } from "next";
import { client } from "../../lib/client";
import { Product, FooterBanner, HeroBanner } from "../../components/index";

interface HomeProps {
  products: any[]; // Replace `any` with the actual type of your products
  bannerData: any[]; // Replace `any` with the actual type of your banner data
}

const Home: React.FC<HomeProps> = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2 className="products-title">Best Selling Products</h2>
        <p>speaker There are many variations passages</p>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData[0]} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
