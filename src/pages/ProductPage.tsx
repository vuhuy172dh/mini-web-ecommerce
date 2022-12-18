import ProductCarousel from '../components/ProductCarousel';
import ProductScrollView from '../components/ProductScrollView';
import Overview from '../components/Overview';
import ProductDesc from '../components/ProductDesc';
import useClientRect from '../hooks/useClientRect';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F0?alt=media&token=3e5db459-a174-4c69-be87-e2f25cea16d4',
  'https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F3?alt=media&token=d9e60e22-eef7-47ad-bdde-18854575384e',
  'https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F1?alt=media&token=fd1256b7-1039-4ed6-9668-fc71433de774',
  'https://firebasestorage.googleapis.com/v0/b/avion-b7024.appspot.com/o/products%2F0fhwc9FDjka1E4uBacOW%2F2?alt=media&token=e340f65a-5bef-42f1-bd3f-2912cffea45c',
];

function ProductPage() {
  const { rect: imgsRect, ref: imgsRef } = useClientRect();
  // scroll to index image when click on image overview
  const handleScroll = (index: number) => {
    window.scrollTo({
      top: index * (imgsRect?.height / 4) + 144,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mx-2 tablet:mx-6 laptop:mx-20">
      {/* Product detail */}
      <section className="flex flex-col w-full tablet:flex-row tablet:gap-4">
        {/* product image list for mobile*/}
        <div className="block tablet:hidden mb-8">
          <ProductCarousel images={images} />
        </div>

        {/* product image list for laptop */}
        <div className="w-full hidden tablet:block" ref={imgsRef}>
          <ProductScrollView images={images} />
        </div>

        {/* floating overview */}
        <div className="hidden tablet:block">
          <Overview images={images} visible={true} onClick={handleScroll} />
        </div>

        <div className="w-full h-full sticky top-20 bg-border_grey rounded-xl shadow-lg shadow-gray-700/40">
          <ProductDesc
            name="hello world"
            desc="dfbisdfbiodfsb sdbidfsb sdfbsdf sdfbsdfb sbsd sdfbsdfb sdbdsf sbsdfb fsdbsdbsd"
            price={120}
            width={120}
            height={120}
            depth={3}
          />
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
