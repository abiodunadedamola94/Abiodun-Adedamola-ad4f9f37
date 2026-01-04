import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Premium UI Kit",
    description: "Complete Figma UI kit with 200+ components",
    price: "$49",
    originalPrice: "$79",
    rating: 4.9,
    reviews: 128,
  },
  {
    name: "React Template Bundle",
    description: "5 premium React templates for any project",
    price: "$89",
    originalPrice: "$149",
    rating: 4.8,
    reviews: 84,
  },
  {
    name: "Icon Pack Pro",
    description: "1000+ hand-crafted icons in multiple formats",
    price: "$29",
    originalPrice: null,
    rating: 5.0,
    reviews: 256,
  },
  {
    name: "Design System Guide",
    description: "Complete eBook on building design systems",
    price: "$19",
    originalPrice: "$29",
    rating: 4.7,
    reviews: 62,
  },
  {
    name: "Code Snippets Collection",
    description: "500+ reusable code snippets for web dev",
    price: "$39",
    originalPrice: null,
    rating: 4.9,
    reviews: 143,
  },
  {
    name: "Portfolio Starter Kit",
    description: "Everything you need to launch your portfolio",
    price: "$59",
    originalPrice: "$99",
    rating: 4.8,
    reviews: 97,
  },
];

export default function Shop() {
  return (
    <div className="min-h-screen px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            Digital <span className="gradient-text">Shop</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Premium digital products to help you build amazing things.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <ShoppingCart className="w-12 h-12 text-muted-foreground/30" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {product.description}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-display font-bold">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
