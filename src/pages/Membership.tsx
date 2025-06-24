import { useState } from "react";
import {
  Users,
  Star,
  ArrowLeft,
  Check,
  Mail,
  Calendar,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("");
  const [memberInfo, setMemberInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    experience: "",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const membershipPlans = [
    {
      id: "basic",
      name: "Pradedantis fanasą",
      price: "15€/mėn",
      annual: "150€/met",
      savings: "Sutaupai 30€",
      color: "#a3e635",
      benefits: [
        "Oficiala GWB narystės kortelė",
        "Nuolaidos parduotuvėje (10%)",
        "Prieiga prie narių renginių",
        "Mėnesinis naujienlaiškis",
        "GWB lipdukų rinkinys",
      ],
    },
    {
      id: "premium",
      name: "Aktyvus rėmėjas",
      price: "30€/mėn",
      annual: "300€/met",
      savings: "Sutaupai 60€",
      color: "#22c55e",
      isPopular: true,
      benefits: [
        "Visi pradedančio nario pranašumai",
        "Didesnės nuolaidos (20%)",
        "Prioritetas bilietų pirkimui",
        "Nemokamas GWB šalikas",
        "Prieiga prie VIP zonos renginiuose",
        "Asmeninis kuratoriaus",
        "Išvykų organizavimo teisės",
      ],
    },
    {
      id: "vip",
      name: "GWB legenda",
      price: "50€/mėn",
      annual: "500€/met",
      savings: "Sutaupai 100€",
      color: "#16a34a",
      benefits: [
        "Visi aktyvaus rėmėjo pranašumai",
        "Maksimalios nuolaidos (30%)",
        "Nemokamas dalyvavimas visuose renginiuose",
        "Personalizado GWB drabužių komplektas",
        "Susitikimas su Žalgirio žaidėjais",
        "Vardas ant garbes lentos",
        "Balsavimo teisė sprendžiant veiklos klausimus",
        "Galimybė organizuoti privačius renginius",
      ],
    },
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      alert("Prašome pasirinkti narystės planą");
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Jūsų paraiška pateikta! Su jumis susisieksime per 24 valandas.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gwb-white">
      {/* Header */}
      <header className="bg-gwb-black py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center text-gwb-white hover:text-gwb-green transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Grįžti į pagrindinį
            </Link>
            <h1 className="font-oswald text-2xl md:text-3xl font-bold text-gwb-white">
              <span className="text-gwb-green">TAPTI</span> GWB NARIU
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Users
              size={80}
              className="mx-auto mb-4"
              style={{ color: "#a3e635" }}
            />
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
              PRISIJUNK PRIE ŠEIMOS
            </h2>
            <p className="text-gwb-black text-lg max-w-3xl mx-auto mb-8">
              Tapk oficialu Green White Boys nariu ir būk dalimi didžiausios
              Žalgirio fanų šeimos. Gauk ekskluzyvias privilegijas, dalyvaukie
              renginiuose ir padėk kurti nepakartojaną atmosferą!
            </p>
          </div>

          {/* Season Ticket Subscription */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-gwb-black hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-oswald text-2xl font-bold text-gwb-black mb-4">
                    2025/2026 SEZONO ABONEMENTAI
                  </h3>
                  <p className="text-gwb-black text-lg">
                    Sektoriai 130/131 • Aktyviausi Green White Boys fanų
                    sektoriai
                  </p>
                </div>

                <div className="flex justify-center mb-6">
                  <img
                    src="https://cdn.builder.io/api/v1/assets/36c58a22022c4771b1fc6957762733ab/490996090_1215661523542337_853527310572755486_n-f72d96?format=webp&width=800"
                    alt="GWB 2025/2026 sezono abonementų taisyklės"
                    className="max-w-full h-auto rounded-lg border-2 border-gwb-black shadow-md"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 rounded-lg p-6 border-2 border-gwb-black">
                    <h4 className="font-oswald text-lg font-semibold text-gwb-black mb-3">
                      Pagrindinė informacija
                    </h4>
                    <div className="space-y-2 text-sm text-gwb-black">
                      <p>
                        • <strong>Kaina:</strong> Ženkli pjūtė, nei kasose -
                        170€
                      </p>
                      <p>
                        • <strong>Sektoriai:</strong> 130/131 (aktyviausi fanų
                        sektoriai)
                      </p>
                      <p>
                        • <strong>Sezonas:</strong> 2025/2026
                      </p>
                      <p>
                        • <strong>Privilegijos:</strong> Nuolaidos ir bendri
                        renginiai
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 border-2 border-gwb-black">
                    <h4 className="font-oswald text-lg font-semibold text-gwb-black mb-3">
                      Ką gauni
                    </h4>
                    <div className="space-y-2 text-sm text-gwb-black">
                      <p>• Nuolaidos atributukai iš "Green White Boys"</p>
                      <p>• Nuolaidos išvykoms</p>
                      <p>• Papildomiems bilietams į 130/131 sektorių</p>
                      <p>• Bendri renginiai su GWB komanda</p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    onClick={() => setSelectedPlan("season")}
                    className="bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold px-8 py-3 text-lg"
                  >
                    <Users className="mr-2" size={20} />
                    UŽSISAKYTI ABONEMENTĄ
                  </Button>
                  <p className="text-xs text-gray-600 mt-3">
                    Susisiek su mumis dėl abonementų užsakymo ir apmokėjimo
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Application Form */}
          {selectedPlan && (
            <Card className="border-2 border-gwb-black max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="font-oswald text-2xl font-semibold text-gwb-black mb-6 text-center">
                  Registracijos forma
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gwb-black font-semibold mb-2">
                        Vardas *
                      </label>
                      <Input
                        required
                        value={memberInfo.firstName}
                        onChange={(e) =>
                          setMemberInfo({
                            ...memberInfo,
                            firstName: e.target.value,
                          })
                        }
                        className="border-gwb-black"
                      />
                    </div>
                    <div>
                      <label className="block text-gwb-black font-semibold mb-2">
                        Pavardė *
                      </label>
                      <Input
                        required
                        value={memberInfo.lastName}
                        onChange={(e) =>
                          setMemberInfo({
                            ...memberInfo,
                            lastName: e.target.value,
                          })
                        }
                        className="border-gwb-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      El. paštas *
                    </label>
                    <div className="relative">
                      <Mail
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={16}
                      />
                      <Input
                        type="email"
                        required
                        value={memberInfo.email}
                        onChange={(e) =>
                          setMemberInfo({
                            ...memberInfo,
                            email: e.target.value,
                          })
                        }
                        className="pl-10 border-gwb-black"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gwb-black font-semibold mb-2">
                        Telefono nr.
                      </label>
                      <Input
                        value={memberInfo.phone}
                        onChange={(e) =>
                          setMemberInfo({
                            ...memberInfo,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+370..."
                        className="border-gwb-black"
                      />
                    </div>
                    <div>
                      <label className="block text-gwb-black font-semibold mb-2">
                        Gimimo data
                      </label>
                      <div className="relative">
                        <Calendar
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                          size={16}
                        />
                        <Input
                          type="date"
                          value={memberInfo.birthDate}
                          onChange={(e) =>
                            setMemberInfo({
                              ...memberInfo,
                              birthDate: e.target.value,
                            })
                          }
                          className="pl-10 border-gwb-black"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      Patirtis su Žalgiriu
                    </label>
                    <Textarea
                      value={memberInfo.experience}
                      onChange={(e) =>
                        setMemberInfo({
                          ...memberInfo,
                          experience: e.target.value,
                        })
                      }
                      placeholder="Kiek metų palaikau Žalgirį, kokie įsimintiniausi momentai..."
                      className="border-gwb-black"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      Kodėl noriu tapti GWB nariu?
                    </label>
                    <Textarea
                      value={memberInfo.motivation}
                      onChange={(e) =>
                        setMemberInfo({
                          ...memberInfo,
                          motivation: e.target.value,
                        })
                      }
                      placeholder="Jūsų motyvacija ir lūkesčiai..."
                      className="border-gwb-black"
                      rows={3}
                    />
                  </div>

                  {/* Selected Plan Summary */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gwb-black mb-2">
                      Pasirinktas planas:
                    </h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gwb-black">
                        {
                          membershipPlans.find((p) => p.id === selectedPlan)
                            ?.name
                        }
                      </span>
                      <span className="font-bold" style={{ color: "#a3e635" }}>
                        {
                          membershipPlans.find((p) => p.id === selectedPlan)
                            ?.price
                        }
                      </span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold py-3 text-lg"
                  >
                    <Gift className="mr-2" size={20} />
                    {isSubmitting ? "PATEIKIAMA..." : "PATEIKTI PARAIŠKĄ"}
                  </Button>

                  <p className="text-xs text-gray-600 text-center">
                    Po paraiškos pateikimo su jumis susisieks mūsų komanda per
                    24 valandas
                  </p>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Additional Benefits */}
          <div className="mt-12 text-center">
            <h3 className="font-oswald text-2xl font-semibold text-gwb-black mb-6">
              Visi nariai gauna
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="text-gwb-green" size={32} />
                </div>
                <h4 className="font-semibold text-gwb-black mb-2">
                  Bendruomenė
                </h4>
                <p className="text-sm text-gray-600">
                  Prieiga prie uždaros narių grupės
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-gwb-green" size={32} />
                </div>
                <h4 className="font-semibold text-gwb-black mb-2">Renginiai</h4>
                <p className="text-sm text-gray-600">
                  Ekskluzyvūs narių susitikimai
                </p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Gift className="text-gwb-green" size={32} />
                </div>
                <h4 className="font-semibold text-gwb-black mb-2">Dovanos</h4>
                <p className="text-sm text-gray-600">Metinės narių dovanos</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Star className="text-gwb-green" size={32} />
                </div>
                <h4 className="font-semibold text-gwb-black mb-2">
                  Privilegijos
                </h4>
                <p className="text-sm text-gray-600">
                  Specialūs pasiūlymai ir nuolaidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Membership;
