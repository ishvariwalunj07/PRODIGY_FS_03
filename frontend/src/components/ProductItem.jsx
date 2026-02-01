import { Link } from "react-router-dom";
import productImages from "../assets/productImages";

const ProductItem = ({ id, name, price, image }) => {
  const imageKey = Array.isArray(image) ? image[0] : image;
  const productImage = productImages[imageKey];

  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={productImage}
          alt={name}
          className="hover:scale-110 transition ease-in-out"
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">₹{price}</p>
    </Link>
  );
};

export default ProductItem;
