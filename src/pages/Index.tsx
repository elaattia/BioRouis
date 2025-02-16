
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Calendar, Award, ShoppingCart, House, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white p-6">
          <h1 className="text-5xl font-bold mb-4">BioRouis</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Une tradition familiale d'excellence dans l'agriculture biologique
          </p>
          <Button 
            className="bg-[#9b87f5] hover:bg-[#8B5CF6]"
            onClick={() => navigate("/products")}
          >
            <ShoppingCart className="mr-2" />
            Découvrir nos produits
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
            La Famille Rouis
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Depuis des générations, la famille Rouis cultive la terre avec passion et respect. 
                Notre engagement envers l'agriculture biologique reflète notre désir de préserver 
                l'environnement tout en produisant des aliments sains et savoureux.
              </p>
              <div className="flex items-center gap-4">
                <Leaf className="text-[#9b87f5] w-6 h-6" />
                <span className="text-gray-700">100% Bio et Naturel</span>
              </div>
            </div>
            <div className="bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb')] bg-cover bg-center h-64 rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-[#F2FCE2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A1F2C]">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="text-[#9b87f5]" />
                  Commandes
                </CardTitle>
                <CardDescription>
                  Commandez nos produits bio en ligne
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/products")}
                >
                  Commander
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="text-[#9b87f5]" />
                  Visites
                </CardTitle>
                <CardDescription>
                  Planifiez une visite de notre ferme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/visits")}
                >
                  Réserver
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-[#9b87f5]" />
                  Certifications
                </CardTitle>
                <CardDescription>
                  Découvrez nos certifications bio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => navigate("/certifications")}
                >
                  Voir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-[#1A1F2C]">
            Contactez-nous
          </h2>
          <div className="flex justify-center gap-6">
            <Button 
              className="bg-[#9b87f5] hover:bg-[#8B5CF6]"
              onClick={() => navigate("/visits")}
            >
              <House className="mr-2" />
              Nous rendre visite
            </Button>
            <Button 
              className="bg-[#9b87f5] hover:bg-[#8B5CF6]"
              onClick={() => navigate("/contact")}
            >
              <Handshake className="mr-2" />
              Devenir partenaire
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
