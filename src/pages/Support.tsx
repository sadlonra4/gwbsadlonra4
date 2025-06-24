import { useState } from "react";
import {
  Heart,
  CreditCard,
  ArrowLeft,
  Euro,
  Users,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const Support = () => {
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const predefinedAmounts = ["10", "25", "50", "100", "250"];

  const supportAreas = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Choreografijos",
      description:
        "Vėliavų, banerių ir pirotechnikos įsigijimas spektaklingoms choreografijoms",
      raised: "2,350€",
      goal: "5,000€",
      percentage: 47,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Išvykos į svečius",
      description: "Autobusų nuoma ir fanų grupės kelionių organizavimas",
      raised: "1,200€",
      goal: "3,000€",
      percentage: 40,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bendruomenės veikla",
      description: "Renginių organizavimas, susitikimų vietos ir įrangos nuoma",
      raised: "850€",
      goal: "2,000€",
      percentage: 42,
    },
  ];

  const handleAmountSelect = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount("");
  };

  const getCurrentAmount = () => {
    return customAmount || selectedAmount;
  };

  const handleDonate = async () => {
    const amount = getCurrentAmount();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Prašome įvesti paremimo sumą");
      return;
    }

    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert(
        "Ačiū už paramą! Mokėjimas bus apdorotas saugiai per mūsų partnerius.",
      );
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
              <span className="text-gwb-green">PAREMK</span> GWB
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Heart
              size={80}
              className="mx-auto mb-4"
              style={{ color: "#a3e635" }}
            />
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
              PALAIKYK MŪSŲ JUDĖJIMĄ
            </h2>
            <p className="text-gwb-black text-lg max-w-3xl mx-auto mb-8">
              Tavo parama padeda mums kurti nepamirštamą atmosferą arenoje,
              organizuoti išvykas į svečius ir vystyt fanų bendruomenę.
              Kiekvienas euras svarbus mūsų bendram tikslui!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <Card className="border-2 border-gwb-black">
              <CardContent className="p-8">
                <h3 className="font-oswald text-2xl font-semibold text-gwb-black mb-6">
                  Paremti finansiškai
                </h3>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-gwb-black font-semibold mb-3">
                    Pasirink sumą
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={
                          selectedAmount === amount ? "default" : "outline"
                        }
                        onClick={() => handleAmountSelect(amount)}
                        className={
                          selectedAmount === amount
                            ? "text-gwb-black font-semibold"
                            : "border-gwb-black text-gwb-black hover:bg-gwb-black hover:text-gwb-white"
                        }
                        style={{
                          backgroundColor:
                            selectedAmount === amount ? "#a3e635" : undefined,
                        }}
                      >
                        {amount}€
                      </Button>
                    ))}
                  </div>

                  <div className="relative">
                    <Euro
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                    <Input
                      type="number"
                      placeholder="Kita suma"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="pl-10 border-gwb-black"
                    />
                  </div>
                </div>

                {/* Donor Information */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      Vardas (neprivaloma)
                    </label>
                    <Input
                      value={donorInfo.name}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, name: e.target.value })
                      }
                      placeholder="Jūsų vardas"
                      className="border-gwb-black"
                    />
                  </div>

                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      El. paštas (kvitui)
                    </label>
                    <Input
                      type="email"
                      value={donorInfo.email}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, email: e.target.value })
                      }
                      placeholder="jusu@email.lt"
                      className="border-gwb-black"
                    />
                  </div>

                  <div>
                    <label className="block text-gwb-black font-semibold mb-2">
                      Žinutė (neprivaloma)
                    </label>
                    <Textarea
                      value={donorInfo.message}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, message: e.target.value })
                      }
                      placeholder="Jūsų žinutė fanų bendruomenei..."
                      className="border-gwb-black"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Total and Payment Button */}
                {getCurrentAmount() && (
                  <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gwb-black font-semibold">
                        Paremimo suma:
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{ color: "#a3e635" }}
                      >
                        {getCurrentAmount()}€
                      </span>
                    </div>
                  </div>
                )}

                <Button
                  onClick={handleDonate}
                  disabled={!getCurrentAmount() || isProcessing}
                  className="w-full bg-gwb-black hover:bg-gwb-black/80 text-gwb-white font-semibold py-3 text-lg"
                >
                  <CreditCard className="mr-2" size={20} />
                  {isProcessing ? "APDOROJAMA..." : "PAREMTI DABAR"}
                </Button>

                <p className="text-xs text-gray-600 mt-4 text-center">
                  Mokėjimas saugus ir apdorojamas per mūsų patikimus partnerius
                </p>
              </CardContent>
            </Card>

            {/* Support Areas & Progress */}
            <div className="space-y-6">
              <h3 className="font-oswald text-2xl font-semibold text-gwb-black">
                Kaip naudojama parama
              </h3>

              {supportAreas.map((area, index) => (
                <Card key={index} className="border-2 border-gwb-black">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="text-gwb-green">{area.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-oswald text-lg font-semibold text-gwb-black mb-2">
                          {area.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {area.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gwb-black font-semibold">
                              Surinkta: {area.raised}
                            </span>
                            <span className="text-gray-600">
                              Tikslas: {area.goal}
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full transition-all duration-300"
                              style={{
                                backgroundColor: "#a3e635",
                                width: `${area.percentage}%`,
                              }}
                            ></div>
                          </div>
                          <div className="text-right">
                            <span
                              className="text-xs font-semibold"
                              style={{ color: "#a3e635" }}
                            >
                              {area.percentage}% pasiekta
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Additional Support Options */}
              <Card className="border-2 border-gwb-black bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h4 className="font-oswald text-lg font-semibold text-gwb-black mb-3">
                    Kiti paramos būdai
                  </h4>
                  <div className="space-y-2 text-sm text-gwb-black">
                    <p>• Banko pavedimas: LT123456789012345678</p>
                    <p>• PayPal: support@gwb.lt</p>
                    <p>• Crypto: Galimi Bitcoin ir Ethereum mokėjimai</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
