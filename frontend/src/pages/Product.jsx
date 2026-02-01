import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";
import productImages from "../assets/productImages";

const Product = () => {
  const { productId } = useParams(); // ✅ MATCHES ROUTE
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const foundProduct = products.find(
      (item) => item._id === productId
    );

    if (foundProduct) {
      setProductData(foundProduct);
      const firstImg = Array.isArray(foundProduct.image)
        ? foundProduct.image[0]
        : foundProduct.image;
      setImage(productImages[firstImg]);
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10">
      <div className="flex gap-12 flex-col sm:flex-row">
        {/* IMAGES */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18%]">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={productImages[img]}
                onClick={() => setImage(productImages[img])}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full" alt="" />
          </div>
        </div>

        {/* INFO */}
        <div className="flex-1">
          <h1 className="text-2xl font-medium">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={assets.star_icon} className="w-3" />
            ))}
            <img src={assets.star_dull_icon} className="w-3" />
            <p className="pl-2">(243)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500">
            {productData.description}
          </p>

          {/* SIZE */}
          <div className="my-8">
            <p className="mb-2">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border px-4 py-2 ${
                    size === item ? "border-red-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-8 py-3"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5">
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return within 7 days.</p>
          </div>
        </div>
      </div>

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
