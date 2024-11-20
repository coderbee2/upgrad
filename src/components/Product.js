import React, { useState } from "react";
import {

  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SortByDropdown from './SortByDropdown';
import AppBarComponent from './AppBarComponent'
import { ToggleButton, ToggleButtonGroup } from "@mui/lab";

const Products = () => {
  const mockProducts = [
    {
      id: 1,
      name: "Shoes",
      price: 1000,
      category: "FOOTWEAR",
      description:
        "wndr-13 sports shoes for men | Latest Stylish Casual sport shoes for men running shoes for boys | Lace up Lightweight grey shoes for running, walking, gym, trekking, hiking & party",
      image: "path-to-shoes-image",
    },
    {
      id: 2,
      name: "EMERGO RUNNER Running Shoes",
      price: 1679,
      category: "FOOTWEAR",
      description:
        "Unique new design with an amalgamation of PU and textile mesh. PU at the rearfoot for motion and protection. Full EVA outsole responsible for traction and responsiveness.",
      image: "path-to-runner-shoes-image",
    },
    {
      id: 3,
      name: "boAt Airdopes 131",
      price: 1299,
      category: "ELECTRONICS",
      description: "Bring home the boAt Airdopes 131 that comes with a carrying case.",
      image: "path-to-airdopes-image",
    },
    {
      id: 4,
      name: "T-Shirt",
      price: 499,
      category: "APPAREL",
      description: "Comfortable cotton t-shirt for everyday wear.",
      image: "path-to-tshirt-image",
    },
    {
      id: 5,
      name: "Face Wash",
      price: 299,
      category: "PERSONAL CARE",
      description: "Gentle face wash with natural ingredients.",
      image: "path-to-facewash-image",
    },
  ];

  const [product, setProduct] = useState(mockProducts);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleCategoryChange = (event, newCategory) => {
    setSelectedCategory(newCategory);

    if (newCategory === "ALL") {
      setProduct(mockProducts);
    } else {
      const filteredProducts = mockProducts.filter(
        (product) => product.category === newCategory
      );
      setProduct(filteredProducts);
    }
  };

  return (
    <div>
      {/* Header */}
     <AppBarComponent></AppBarComponent>

      {/* Category Tabs with ToggleButtonGroup */}
      {/* <Box sx={{ display: "flex", justifyContent: "center", margin: "20px" }}>
        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleCategoryChange}
          aria-label="categories"
        >
          <ToggleButton value="ALL" aria-label="all">
            ALL
          </ToggleButton>
          <ToggleButton value="APPAREL" aria-label="apparel">
            APPAREL
          </ToggleButton>
          <ToggleButton value="ELECTRONICS" aria-label="electronics">
            ELECTRONICS
          </ToggleButton>
          <ToggleButton value="FOOTWEAR" aria-label="footwear">
            FOOTWEAR
          </ToggleButton>
          <ToggleButton value="PERSONAL CARE" aria-label="personal-care">
            PERSONAL CARE
          </ToggleButton>
        </ToggleButtonGroup>
      </Box> */}

      {/* Product Listing */}
      <div style={{ padding: "20px" }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 2 }}>
          <SortByDropdown onSortChange={() => {}} />
        </Box>

        <Grid container spacing={3}>
          {product.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6">{product.name}</Typography>
                  <Typography color="textSecondary">{`₹ ${product.price}`}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <div style={{ marginTop: "10px", display: "flex" }}>
                    <Button variant="contained" color="primary" size="small">
                      BUY
                    </Button>
                    <IconButton size="small" color="secondary">
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" color="error">
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Products;
