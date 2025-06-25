import { Heart, Users, Flag, Bus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
const ContributeSection = () => {
  const contributionAreas = [
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Vėliavos ir baneriai",
      description:
        "Padėk finansuoti naujų vėliavų ir banerių gamybą choreografijoms",
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Išvykos į svečius",
      description: "Prisidėk prie autobusų nuomos ir kelionių organizavimo",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fanų zona",
      description:
        "Pagerinkim fanų zoną arenoje ir sukurkim dar geresnę atmosferą",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Bendruomenė",
      description: "Palaikyk GWB veiklą ir fanų bendruomenės vystymą",
    },
  ];
  return (
    <section id="contribute" className="py-20 bg-gwb-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-4">
            <span className="text-gwb-green">PRISIDĖK</span> PRIE JUDĖJIMO
          </h2>
          <p className="text-gwb-black text-lg max-w-2xl mx-auto">
            Tavo parama padeda mums kurti nepamirštamą atmosferą ir palaikyti
            Žalgirį kiekviename mače
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contributionAreas.map((area, index) => (
            <Card
              key={index}
              className="bg-gwb-green border-gwb-black border-2 hover:border-gwb-green hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardContent
                className="p-6 text-center"
                style={{ backgroundColor: "#A3E635" }}
              >
                <div className="text-gwb-white mb-4 flex justify-center">
                  {area.icon}
                </div>
                <h3 className="font-oswald text-lg font-semibold text-gwb-white mb-3">
                  {area.title}
                </h3>
                <p className="text-gwb-white text-sm">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="rounded-lg p-8 text-center border-2 border-gwb-black"
          style={{ backgroundColor: "#A3E635" }}
        >
          <h3 className="font-oswald text-2xl font-semibold text-gwb-white mb-4">
            Kaip galiu prisidėti?
          </h3>
          <p className="text-gwb-white mb-6 max-w-2xl mx-auto">
            Kiekvienas euras svarbus! Tavo parama eina tiesiai į fanų veiklą -
            vėliavų gamybą, išvykų organizavimą, pirotechnikos pirkimą ir
            bendruomenės plėtrą.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/parama">
              <Button
                size="lg"
                className="bg-gwb-white hover:bg-gwb-white/80 text-gwb-black font-semibold"
              >
                <Heart className="mr-2" size={20} />
                PAREMTI DABAR
              </Button>
            </Link>
            <Link to="/narystes">
              <Button
                variant="outline"
                size="lg"
                className="border-gwb-white border-2 text-gwb-white hover:bg-gwb-white hover:text-gwb-black bg-slate-50 text-base text-zinc-950"
              >
                TAPTI NARIU
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gwb-white">
            <p>Atsiskaitymas saugus per banko pavedimą arba contribee</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContributeSection;
