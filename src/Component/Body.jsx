import Banner from "./Banner";
import Item from "./Item";

export default function Body() {
  return (
    <main className="container mx-auto px-4 py-10">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </main>
  );
}