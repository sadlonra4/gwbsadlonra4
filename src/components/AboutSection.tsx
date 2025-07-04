import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t, language } = useLanguage();
  return (
    <section id="about" className="py-20 bg-gwb-white bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-black mb-6">
              {language === "LT" ? (
                <>
                  APIE <span className="text-gwb-green">GREEN WHITE BOYS</span>
                </>
              ) : (
                <>
                  ABOUT <span className="text-gwb-green">GREEN WHITE BOYS</span>
                </>
              )}
            </h2>

            <div className="text-gwb-black text-lg leading-relaxed">
              <h5 style={{ textAlign: "justify" }}>
                <br />
              </h5>
              <h5 style={{ textAlign: "justify" }}>
                „Green White Boys" – ultras grupuotė iš Kauno, ištikimai
                palaikanti Kauno „Žalgirio" krepšinio komandą. Mūsų grupuotė
                susibūrė iš noro ne tik ištikimai palaikyti komandą kiekvienose
                varžybose, bet ir kurti tikrą vienybės bei lojalumo jausmą tarp
                „Žalgirio" sirgalių.
              </h5>
              <h5 style={{ textAlign: "justify" }}>
                <br />
              </h5>
              <h5 style={{ textAlign: "justify" }}>
                Mūsų pasirodymuose galima išvysti ir choreografinių vaizdinių,
                kuriems skiriame daug laiko ir pastangų. Visa tai kuriama tam,
                kad palaikyme jaustųsi energija ir būtų jaučiamas
                nenutrūkstantis palaikymas „Žalgiriui".
              </h5>
              <h5 style={{ textAlign: "justify" }}>
                <br />
              </h5>
              <h5 style={{ textAlign: "justify" }}>
                Tikslas – būti aktyviems ne tik namų varžybose, tačiau ir
                išvykose, nesvarbu Lietuvoje ar užsienyje. Mūsų veikla
                nesibaigia vien tik varžybų metu - organizuojame bendrus
                renginius ir akcijas, kurios stiprina bendruomenės jausmą tarp
                „Žalgirio" gerbėjų, skatina patriotizmą ir solidarumą.
              </h5>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  1000+
                </div>
                <div className="text-sm text-gwb-white">{t("members")}</div>
              </div>
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  25+
                </div>
                <div className="text-sm text-gwb-white">
                  {t("yearsHistory")}
                </div>
              </div>
              <div className="text-center bg-gwb-green p-4 rounded-lg">
                <div className="text-3xl font-oswald font-bold text-gwb-white">
                  ∞
                </div>
                <div className="text-sm text-gwb-white">{t("loyalty")}</div>
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
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  backgroundImage:
                    "url('https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2F13b482833ea04728ae37639778155aad')",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="absolute bottom-4 left-4 right-4 bg-gwb-green/90 p-3 rounded bg-lime-400">
                <p className="text-gwb-white font-oswald text-xl font-semibold text-center text-zinc-950">
                  {t("togetherWeAreStrong")}
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
