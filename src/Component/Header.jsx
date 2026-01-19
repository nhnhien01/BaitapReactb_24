const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container-custom flex justify-between items-center px-4 py-3">
        <h1 className="text-lg font-semibold">Start Bootstrap</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
