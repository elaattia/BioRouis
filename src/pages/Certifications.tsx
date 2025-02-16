
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, ArrowLeft, ScrollText, Shield, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Certifications = () => {
  const navigate = useNavigate();

  const certifications = [
    {
      id: 1,
      name: "Agriculture Biologique",
      year: "2020",
      description: "Certification officielle de l'agriculture biologique européenne",
      icon: Shield,
    },
    {
      id: 2,
      name: "Excellence Bio",
      year: "2021",
      description: "Prix d'excellence pour nos pratiques agricoles durables",
      icon: Star,
    },
    {
      id: 3,
      name: "Certification ISO",
      year: "2022",
      description: "Certification ISO 22000 pour la sécurité alimentaire",
      icon: ScrollText,
    }
  ];

  const awards = [
    {
      id: 1,
      name: "Meilleur Producteur Bio",
      year: "2023",
      event: "Salon de l'Agriculture",
      description: "Reconnaissance de l'excellence de nos produits biologiques"
    },
    {
      id: 2,
      name: "Innovation Durable",
      year: "2022",
      event: "Prix de l'Agriculture Durable",
      description: "Récompense pour nos méthodes innovantes d'agriculture bio"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2] py-12">
      <div className="max-w-6xl mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">
            Nos Certifications et Récompenses
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La reconnaissance de notre engagement envers l'agriculture biologique et durable
          </p>
        </div>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-[#1A1F2C] mb-8 flex items-center gap-2">
            <Award className="text-[#9b87f5]" />
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <cert.icon className="text-[#9b87f5] w-6 h-6" />
                    <span className="text-sm font-medium text-[#9b87f5]">{cert.year}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-2xl font-bold text-[#1A1F2C] mb-8 flex items-center gap-2">
            <Star className="text-[#9b87f5]" />
            Récompenses
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award) => (
              <Card key={award.id} className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-[#9b87f5]">{award.year}</span>
                    <span className="text-sm text-gray-500">{award.event}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{award.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
