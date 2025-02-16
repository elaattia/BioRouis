
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Leaf } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Huile d'Olive Bio",
      description: "Huile d'olive extra vierge pressée à froid",
      price: "24,90 €",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843"
    },
    {
      id: 2,
      name: "Légumes Bio de Saison",
      description: "Panier de légumes frais de notre ferme",
      price: "35,00 €",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    },
    {
      id: 3,
      name: "Viande Bio",
      description: "Viande bovine bio de nos pâturages",
      price: "19,90 €/kg",
      image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2] py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          Retour
        </Button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">Nos Produits Bio</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de produits biologiques, cultivés avec soin dans notre ferme familiale
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="bg-white">
              <CardHeader>
                <div className="h-48 rounded-lg overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="text-[#9b87f5] w-5 h-5" />
                  {product.name}
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#1A1F2C]">{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6]">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Ajouter au panier
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
