const OurProduct = () => {
  const products = [
    {
      id: 1,
      name: "Delicious Burger",
      price: "$20.99",
      image: "https://i.ibb.co.com/GQgZHj6W/delecious-burger-PNG.png",
    },
    {
      id: 2,
      name: "Grilled Chicken",
      price: "$22.99",
      image:
        "https://i.ibb.co.com/v4jSMgsk/838f3517-d175-417a-a5e4-4efeb0e300c4.jpg",
    },
    {
      id: 3,
      name: "Ruti With Chicken",
      price: "$19.99",
      image: "https://i.ibb.co.com/pBkL1xfB/routi-chicken.png",
    },
    {
      id: 4,
      name: "Fast Food Combo",
      price: "$24.99",
      image: "https://i.ibb.co.com/vvg32Tk0/food-combo.png",
    },
    {
      id: 5,
      name: "Chicago Deep Pizza",
      price: "$26.99",
      image: "https://i.ibb.co.com/4g9QTzBj/pizzachz.png",
    },
    {
      id: 6,
      name: "Chinese Pasta",
      price: "$18.99",
      image: "https://i.ibb.co.com/DgkvNk0G/pasta.jpg",
    },
    {
      id: 7,
      name: "Whopper Burger King",
      price: "$19.99",
      image: "https://i.ibb.co.com/spGZF100/hamburger-burger-king.png",
    },
    {
      id: 8,
      name: "Ruti With Beef Slice",
      price: "$21.99",
      image: "https://i.ibb.co.com/8D5Xtc4N/pngtree-best-beef-slices.png",
    },
  ];
  return (
    <div>
      <div className="bg-red-500 min-h-screen p-4 md:p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-500 font-semibold">OUR MENU FOOD</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore Our Products
          </h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-yellow-300 p-4 rounded flex flex-col items-center text-center"
            >
              <div className="mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-sm text-white">{`price ${product.price}`}</p>
              </div>
              <div className="mt-4 mb-2 w-full flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-40 h-40 object-cover rounded bg-yellow-300"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Icons */}
        <div className="hidden md:block absolute top-20 right-10">
          <div className="text-white opacity-20 text-6xl">🍂</div>
        </div>
        <div className="hidden md:block absolute bottom-20 left-10">
          <div className="text-white opacity-20 text-6xl">🍃</div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
