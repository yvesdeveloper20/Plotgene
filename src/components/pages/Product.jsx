import { useParams } from 'react-router-dom';
import { useState } from 'react';

// Dummy product data
const product = {
  id: 1,
  name: 'Leather Jacket',
  category: 'Jackets',
  price: 299.99,
  description: 'A premium quality leather jacket made from genuine leather. Perfect for both casual and formal occasions.',
  details: [
    '100% Genuine Leather',
    'Zippered front closure',
    'Multiple pockets',
    'Professional clean only',
    'Imported'
  ],
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'Brown', 'Dark Brown'],
  images: [
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
    'https://images.unsplash.com/photo-1591047139829-dbbecd3a1ed1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    'https://images.unsplash.com/photo-1578932750355-5eb30ece487a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  ]
};

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const { id } = useParams();

  // In a real app, you would fetch the product data based on the ID
  // const [product, setProduct] = useState(null);
  // useEffect(() => {
  //   fetchProduct(id).then(data => setProduct(data));
  // }, [id]);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', {
      id: product.id,
      name: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: product.price
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    // Navigate to checkout
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`rounded-md overflow-hidden ${currentImage === index ? 'ring-2 ring-gold-600' : ''}`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                <p>{product.description}</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc pl-5 text-sm space-y-2">
                  {product.details.map((detail, index) => (
                    <li key={index} className="text-gray-600">
                      <span className="text-gray-900">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" className="text-sm font-medium text-gold-600 hover:text-gold-500">
                  Size guide
                </a>
              </div>

              <div className="mt-4 grid grid-cols-5 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 border rounded-md flex items-center justify-center text-sm font-medium ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white border-transparent'
                        : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900">Color</h3>
              <div className="mt-4 flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedColor === color ? 'ring-2 ring-offset-2 ring-gold-600' : ''
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  >
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
              </div>
              <div className="mt-4 flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 rounded-l-md"
                >
                  -
                </button>
                <span className="px-4 py-2 border-t border-b border-gray-300 bg-white text-center text-gray-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 rounded-r-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                Add to cart
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 bg-gold-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gold-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500"
              >
                Buy now
              </button>
            </div>

            <div className="mt-6 text-center">
              <a href="#" className="group inline-flex text-base font-medium">
                <span className="text-gold-600 group-hover:text-gold-500">Continue Shopping</span>
                <span className="ml-2 text-gold-500">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;