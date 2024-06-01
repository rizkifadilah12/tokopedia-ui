import { Header, KategoriAndTopUp, MobileDesain, SimpleSlider } from "./component";
import ProductCard from "./component/product/ProductCard";

function App() {
  return (
    <div>
      <div className="hidden h-full flex-col lg:flex xxl:hidden large:flex">
        <Header />
        <SimpleSlider />
        <KategoriAndTopUp />
        <ProductCard />
      </div>
      <div className="flex h-full flex-col lg:hidden xxl:flex large:hidden">
        <div className="flex justify-center">
          <div className="w-full rounded-md shadow-md md:w-[60%] lg:w-1/3 xxl:w-[25rem] xl:w-[30%]">
            <MobileDesain />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
