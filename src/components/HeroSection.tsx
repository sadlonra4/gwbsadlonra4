import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ffb2feadbb4494ac89f67fc7ee22e1642%2Fdaaf97c2fdbd4b08b5ed423fd2979a21')`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-gwb-white mb-6 leading-tight">
            <span className="text-gwb-green">ŽALIAI</span> BALTA&nbsp;
            <span className="text-gwb-green">AISTRA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gwb-white mb-8 max-w-2xl mx-auto">
            Oficialus Kauno „Žalgirio" fanų klubas. Ištikimybė iki galo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contribute">
              <Button
                size="lg"
                className="bg-gwb-green hover:bg-gwb-green/80 text-gwb-black font-semibold px-8 py-3 text-lg bg-lime-500 hover:bg-lime-400"
              >
                PRISIJUNK PRIE MŪSŲ
              </Button>
            </a>
            <a href="#shop">
              <Button
                variant="outline"
                size="lg"
                className="border-gwb-white text-gwb-white hover:bg-gwb-white hover:text-gwb-black px-8 py-3 text-lg text-zinc-950"
              >
                PARDUOTUVĖ
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime-400 flex justify-center rounded-full bg-transparent">
          <div className="w-1 h-3 bg-lime-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
