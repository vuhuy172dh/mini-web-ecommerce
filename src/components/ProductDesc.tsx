type TDescProps = {
  name: string;
  price: number;
  desc: string;
  width: number;
  height: number;
  depth: number;
};

function ProductDesc({ name, price, desc, width, height, depth }: TDescProps) {
  return (
    <div className="col-span-4 laptop:col-span-6 laptop:ml-9 px-2">
      {/* Top Text */}
      <div className="mt-7 mb-4 laptop:mt-9 laptop:mb-7">
        <h3 className="text-h3 mb-3 laptop:text-h1 laptop:mb-4">{name}</h3>
        <h4 className="text-h4 laptop:text-h3">${price}</h4>
      </div>
      <hr />
      {/* Description */}
      <div className="mt-7 laptop:mt-6">
        <h5 className="text-h5 mb-3">Product description</h5>
        <small className="text-body-sm laptop:text-body-md">{desc}</small>
      </div>
      {/* Dimensions */}
      <div className="mt-7 laptop:mt-9 laptop:w-80">
        <h5 className="text-h5 mb-3 laptop:mb-6">Dimensions</h5>
        <hr className="hidden" />
        {/* Dimensions Metrics */}
        <div className="flex justify-between items-center mt-4 ">
          <div>
            <h6 className="text-h6 mb-4">Height</h6>
            <small className="text-body-sm laptop:text-body-md">
              {height}cm
            </small>
          </div>
          <div className="h-11 w-1 bg-border_grey"></div>
          <div>
            <h6 className="text-h6 mb-4">Width</h6>
            <small className="text-body-sm laptop:text-body-md">
              {width}cm
            </small>
          </div>
          <div className="h-11 w-1 bg-border_grey"></div>
          <div>
            <h6 className="text-h6 mb-4">Depth</h6>
            <small className="text-body-sm laptop:text-body-md">
              {depth}cm
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDesc;
