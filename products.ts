  // Kategori: Lipstik
  {
    id: 1,
    name: "Lipstik Matte Red",
    price: 75000,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop",
    category: "Lipstik"
  },
  {
    id: 2,
    name: "Lipstik Nude Pink",
    price: 65000,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=300&h=300&fit=crop",
    category: "Lipstik"
  },
  {
    id: 3,
    name: "Lip Gloss Shiny",
    price: 55000,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=300&h=300&fit=crop",
    category: "Lipstik"
  },
  // Kategori: Foundation & Cushion
  {
    id: 4,
    name: "Foundation Dewy",
    price: 150000,
    image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=300&h=300&fit=crop",
    category: "Foundation & Cushion"
  },
  {
    id: 5,
    name: "Cushion Natural",
    price: 120000,
    image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?w=300&h=300&fit=crop",
    category: "Foundation & Cushion"
  },
  // Kategori: Eyeshadow & Mascara
  {
    id: 6,
    name: "Eyeshadow Palette",
    price: 180000,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&fit=crop",
    category: "Eyeshadow & Mascara"
  },
  {
    id: 7,
    name: "Mascara Waterproof",
    price: 85000,
    image: "https://images.unsplash.com/photo-1631214503851-2bd786381b18?w=300&h=300&fit=crop",
    category: "Eyeshadow & Mascara"
  },
  {
    id: 8,
    name: "Eyeliner Pen",
    price: 45000,
    image: "https://images.unsplash.com/photo-1617220379175-68eb0bde3a42?w=300&h=300&fit=crop",
    category: "Eyeshadow & Mascara"
  },
  // Kategori: Blush & Highlighter
  {
    id: 9,
    name: "Blush On Pink",
    price: 95000,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=300&h=300&fit=crop",
    category: "Blush & Highlighter"
  },
  {
    id: 10,
    name: "Highlighter Glow",
    price: 110000,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300&h=300&fit=crop",
    category: "Blush & Highlighter"
  }
];

export const categories = ["Lipstik", "Foundation & Cushion", "Eyeshadow & Mascara", "Blush & Highlighter"];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID').format(price);
