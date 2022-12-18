import type { TProductProps } from '../constants/types';

function Product({ image, name, price }: TProductProps) {
  return (
    <div className="flex flex-col laptop:flex-row justify-center w-full rounded-lg overflow-hidden relative group shadow-lg shadow-gray-700/40 cursor-pointer">
      <img
        src={image}
        alt="Product"
        className="w-full object-cover relative z-10"
      />

      {/* this is information */}
      <div className="laptop:flex hidden w-4/5 absolute bottom-4 z-20 px-4 flex-col items-center bg-light_grey rounded-xl translate-y-[calc(100%+16px)] group-hover:translate-y-[calc(70%+16px)] hover:!translate-y-0 transition-all duration-200">
        <p className="text-center text-h4 py-2">
          <strong>INFO</strong>
        </p>
        <hr className="w-[90%] border-t border-t-dark_primary" />
        <div className="w-full py-2">
          <p className="line-clamp-2">
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Price:</strong> {price}$
          </p>
        </div>
        <div className="w-full flex mb-4">Add to cart</div>
      </div>

      <div className="flex flex-col items-center laptop:hidden">
        <p className="text-center text-h5 py-1">
          <strong>INFO</strong>
        </p>
        <hr className="w-[90%] border-t border-t-dark_primary" />
        <div className="w-full py-2 px-2">
          <p className="line-clamp-2 text-h6">
            <strong>Name:</strong> {name}
          </p>
          <p className="line-clamp-2 text-h6">
            <strong>Price:</strong> {price}$
          </p>
        </div>
        <div className="px-2 mb-4">
          <p className="text-h6">Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
