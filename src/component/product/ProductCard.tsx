import { useSelector, useDispatch } from "react-redux";
import { getDataProduct } from "../../app/feature/product";
import { useEffect } from "react";
import { RootState, AppDispatch } from "../../app/store";

const ProductCard: React.FC = () => {
  const { product } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getDataProduct());
  }, [dispatch]);
  console.log(product);
  return (
    // <div>
    //   {product && product.length > 0 && (
    //     <div>
    //       {product.map((item, index) => (
    //         <div key={index}>
    //           <p>{item.product_name}</p>
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>
    <div className="relative mx-28 mt-4 flex flex-row rounded-[20px] p-4">
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
          <p className="text-base text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pb-2 pt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #photography
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #travel
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
