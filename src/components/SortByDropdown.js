import React, { useState, useEffect } from 'react';



const SortByDropdown = () => {

  const mockProducts = [
    {
      id: 1,
      name: "Shoes",
      price: 1000,
      category: "FOOTWEAR",
      description:
        "wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men running shoes for boys | Lace up Lightweight grey shoes for running, walking, gym, trekking, hiking & party",
      image: "path-to-shoes-image",
      dateAdded: "2024-11-01"
    },
    {
      id: 2,
      name: "EMERGO RUNNER Running Shoes",
      price: 1679,
      category: "FOOTWEAR",
      description:
        "Unique new design with an amalgamation of PU and textile mesh. PU at the rearfoot for motion and protection. Full EVA outsole responsible for traction and responsiveness.",
      image: "path-to-runner-shoes-image",
      dateAdded: "2024-11-01"
    },
    {
      id: 3,
      name: "boAt Airdopes 131",
      price: 1299,
      category: "ELECTRONICS",
      description: "Bring home the boAt Airdopes 131 that comes with a carrying case.",
      image: "path-to-airdopes-image",
      dateAdded: "2024-11-01"
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 499,
      category: "APPAREL",
      description: "Comfortable cotton t-shirt for everyday wear.",
      image: "path-to-tshirt-image",
      dateAdded: "2024-11-01"
    },
    {
      id: 5,
      name: "Face Wash",
      price: 299,
      category: "PERSONAL CARE",
      description: "Gentle face wash with natural ingredients.",
      image: "path-to-facewash-image",
      dateAdded: "2024-11-01"
    },
  ];
  
  const [sortedProducts, setSortedProducts] = useState(mockProducts);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    let sortedArray = [...mockProducts];
    if (sortOption === "priceHighToLow") {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortOption === "priceLowToHigh") {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOption === "newest") {
      sortedArray.sort(
        (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
      );
    }
    setSortedProducts(sortedArray);
  }, [sortOption, mockProducts]);

  return (
    <div>
      {/* Sorting Dropdown */}
      <label htmlFor="sort">Sort By:</label>
      <select
        id="sort"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="newest">Newest</option>
      </select>

      {/* Product List */}
      <ul>
        {sortedProducts.map((mockProducts) => (
          <li key={mockProducts.id}>
            {mockProducts.name} - ${mockProducts.price} - Added on {mockProducts.dateAdded}
          </li>
        ))}
      </ul>
    </div>
  );
};




export default SortByDropdown;
