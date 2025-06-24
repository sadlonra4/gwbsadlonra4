const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gwb-white bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-6">
              APIE <span className="text-gwb-green">GREEN WHITE BOYS</span>
            </h2>

            <div className="space-y-6 text-gwb-black">
              <p className="text-lg leading-relaxed">
                Green White Boys (GWB) - oficialus Žalgirio Kauno fanų klubas,
                įkurtas tikrų aistruolių, kurie gyvena ir kvėpuoja krepšiniu.
                Mes esame tie, kurie sukuria atmosferą arenoje, palaikome
                komandą gerais ir blogais laikais.
              </p>

              <p className="text-lg leading-relaxed">
                Mūsų misija - ne tik palaikyti Žalgirį, bet ir puoselėti fanų
                kultūrą Lietuvoje. Mes organizuojame choreografijas, keliavimus
                į svečius, kuriame atmosferą, kuri padeda komandai kovoti
                kiekviename mače.
              </p>

              <p className="text-lg leading-relaxed">
                <span className="text-gwb-green font-semibold">
                  Ištikimybė iki galo
                </span>{" "}
                - tai ne tik šūkis, tai mūsų gyvenimo būdas. Prisijunk prie mūsų
                ir tapk dalimi šios didžiosios šeimos!
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  1000+
                </div>
                <div className="text-sm text-gwb-white">Narių</div>
              </div>
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  25+
                </div>
                <div className="text-sm text-gwb-white">Metų istorijos</div>
              </div>
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  ∞
                </div>
                <div className="text-sm text-gwb-white">Ištikimybės</div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=5760&auto=format&fit=crop"
                alt="GWB Fans"
                className="w-full h-96 object-cover rounded-lg shadow-2xl border-4 border-gwb-green"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gwb-black/50 to-transparent rounded-lg bg-green-950"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-gwb-green/90 p-3 rounded bg-lime-400">
                <p className="text-gwb-white font-oswald text-xl font-semibold text-center text-zinc-950">
                  KARTU MES - JĖGA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
