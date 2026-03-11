// Export Products Data
export interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

export const products: Product[] = [
  // Charcoal Products
  { id: '1', name: 'Restaurant Hardwood Charcoal', category: 'Charcoal' },
  { id: '2', name: 'BBQ Hardwood Charcoal', category: 'Charcoal' },
  { id: '3', name: 'Ayin Charcoal', category: 'Charcoal' },
  { id: '4', name: 'Acacia Charcoal', category: 'Charcoal' },
  { id: '5', name: 'Coconut Shell Charcoal', category: 'Charcoal' },
  
  // Spices - Fresh/Dry
  { id: '6', name: 'Fresh Ginger', category: 'Spices' },
  { id: '7', name: 'Split Dry Ginger', category: 'Spices' },
  { id: '8', name: 'Garlic', category: 'Spices' },
  { id: '9', name: 'Turmeric', category: 'Spices' },
  { id: '10', name: 'Organic Chilli Pepper', category: 'Spices' },
  { id: '11', name: 'Organic Black Pepper', category: 'Spices' },
  
  // Agricultural Products
  { id: '12', name: 'Soya Beans', category: 'Agricultural' },
  { id: '13', name: 'Dried Hibiscus Flower', category: 'Agricultural' },
  { id: '14', name: 'Cashew Nuts', category: 'Agricultural' },
  
  // Powdered Products
  { id: '15', name: 'Powdered Ginger', category: 'Powdered' },
  { id: '16', name: 'Powdered Garlic', category: 'Powdered' },
  { id: '17', name: 'Powdered Turmeric', category: 'Powdered' },
  { id: '18', name: 'Powdered Soybean', category: 'Powdered' }
];

// Product Categories
export const productCategories = ['All', 'Charcoal', 'Spices', 'Agricultural', 'Powdered'];

// Filter products by category
export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
};
