import Header from "./Header";
import Banner from "./Banner";
import Item from "./Item";
import Footer from "./Footer";

const BaiTapThucHanhLayout = () => {
  return (
    <>
      <Header />

      <main className="container-custom px-4 py-5">
        <Banner />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BaiTapThucHanhLayout;
