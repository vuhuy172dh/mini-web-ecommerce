import Product from '../components/Product';

function ProductsPage() {
  return (
    <div className="relative z-20">
      {/* this is Header component */}
      <header className=" bg-light_grey py-8 px-6 laptop:bg-white laptop:pt-20 laptop:pb-3 laptop:px-20 relative z-30">
        <h2 className="text-center mb-10 text-h2 laptop:mb-8">
          View all products
        </h2>
      </header>

      {/* this is list Product component */}
      <div className="px-6 py-7 laptop:px-20 laptop:pb-10 relative z-20">
        <div className="grid grid-cols-2 gap-4 laptop:grid-cols-4 laptop:gap-x-5 laptop:gap-y-7">
          <Product
            image="https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F0?alt=media&token=3e5db459-a174-4c69-be87-e2f25cea16d4"
            name="hello"
            price={12}
          />
          <Product
            image="https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F0?alt=media&token=3e5db459-a174-4c69-be87-e2f25cea16d4"
            name="hello"
            price={12}
          />
          <Product
            image="https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F0?alt=media&token=3e5db459-a174-4c69-be87-e2f25cea16d4"
            name="hello"
            price={12}
          />
          <Product
            image="https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F0?alt=media&token=3e5db459-a174-4c69-be87-e2f25cea16d4"
            name="hello"
            price={12}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
