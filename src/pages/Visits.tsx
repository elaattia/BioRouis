
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, CalendarDays, Users, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/components/ui/use-toast";

type VisitFormValues = {
  fullName: string;
  email: string;
  phone: string;
  visitDate: Date;
  groupSize: number;
  message: string;
};

const Visits = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<VisitFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      groupSize: 1,
      message: "",
    },
  });

  const onSubmit = (data: VisitFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Réservation envoyée !",
      description: `Votre visite est prévue pour le ${format(data.visitDate, "d MMMM yyyy", { locale: fr })}`,
    });
    form.reset();
  };

  return (
    <div className="min-h-screen bg-[#F2FCE2] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1A1F2C] mb-4">
            Réserver une Visite
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre ferme biologique et nos méthodes de production durables
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center space-y-0 gap-2">
              <Clock className="h-6 w-6 text-[#9b87f5]" />
              <div>
                <CardTitle className="text-base">Durée</CardTitle>
                <CardDescription>1h30 environ</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center space-y-0 gap-2">
              <Users className="h-6 w-6 text-[#9b87f5]" />
              <div>
                <CardTitle className="text-base">Groupe</CardTitle>
                <CardDescription>2 à 15 personnes</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center space-y-0 gap-2">
              <CalendarDays className="h-6 w-6 text-[#9b87f5]" />
              <div>
                <CardTitle className="text-base">Disponibilité</CardTitle>
                <CardDescription>Mar. - Sam.</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Booking Form */}
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Formulaire de réservation</CardTitle>
            <CardDescription>
              Remplissez ce formulaire pour planifier votre visite
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  rules={{ required: "Le nom est requis" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom complet</FormLabel>
                      <FormControl>
                        <Input placeholder="Jean Dupont" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    rules={{ 
                      required: "L'email est requis",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalide"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jean@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{ required: "Le téléphone est requis" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Téléphone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="06 12 34 56 78" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="visitDate"
                    rules={{ required: "La date est requise" }}
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date de visite</FormLabel>
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          className="rounded-md border"
                          locale={fr}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="groupSize"
                    rules={{ 
                      required: "La taille du groupe est requise",
                      min: { value: 1, message: "Minimum 1 personne" },
                      max: { value: 15, message: "Maximum 15 personnes" }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre de personnes</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min={1} 
                            max={15}
                            {...field}
                            onChange={e => field.onChange(parseInt(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (optionnel)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Questions ou demandes particulières..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-[#9b87f5] hover:bg-[#8B5CF6]">
                  Réserver ma visite
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Visits;
