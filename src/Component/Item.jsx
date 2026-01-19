const Item = () => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm text-center">
      <div className="bg-gray-300 h-40 flex items-center justify-center text-gray-600">
        500 x 325
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Card title</h3>
        <p className="text-sm text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Sapiente esse necessitatibus neque.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700">
          Find Out More!
        </button>
      </div>
    </div>
  );
};

export default Item;
