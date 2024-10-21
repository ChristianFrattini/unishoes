import React from "react";
import Hero from "../components/storefront/Hero";
import CategorySelection from "../components/storefront/CategorySelection";
import FeaturedProducts from "../components/storefront/FeaturedProducts";

export default function IndexPage() {
  return (
    <div>
      <Hero />
      <CategorySelection />
      <FeaturedProducts />
    </div>
  );
}
