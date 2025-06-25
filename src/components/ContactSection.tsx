import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: "rgba(5, 46, 22, 1)" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-gwb-white mb-4">
            <span style={{ color: "#7ED321" }}>KONTAKTAI</span>
          </h2>
          <p className="text-gwb-white text-lg max-w-2xl mx-auto">
            Turite klausimų? Norite prisijungti? Susisiekite su mumis!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gwb-white border-gwb-black border-2">
            <CardContent className="p-8">
              <h3 className="font-oswald text-2xl font-semibold text-gwb-black mb-6">
                Parašyk mums
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Vardas"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gwb-white border-gwb-green border-2 text-gwb-black placeholder:text-gray-500 focus:border-gwb-black"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="El. paštas"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gwb-white border-gwb-green border-2 text-gwb-black placeholder:text-gray-500 focus:border-gwb-black"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Žinutė"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gwb-white border-gwb-green border-2 text-gwb-black placeholder:text-gray-500 focus:border-gwb-black resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gwb-green hover:bg-gwb-green/80 text-gwb-white font-semibold bg-lime-500 hover:bg-lime-400 text-zinc-950"
                >
                  SIŲSTI ŽINUTĘ
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-gwb-white border-gwb-black border-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div style={{ color: "#7ED321" }}>
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg font-semibold text-gwb-black">
                      El. paštas
                    </h4>
                    <p className="text-gwb-black">info@gwb.lt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gwb-white border-gwb-black border-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div style={{ color: "#7ED321" }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg font-semibold text-gwb-black">
                      Adresas
                    </h4>
                    <p className="text-gwb-black">Žalgirio arena, Kaunas</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gwb-white border-gwb-black border-2">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div style={{ color: "#7ED321" }}>
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-oswald text-lg font-semibold text-gwb-black">
                      Telefoqwertųūnas
                    </h4>
                    <p className="text-gwb-black">+370 XXX XXXXX</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gwb-white border-gwb-black border-2">
              <CardContent className="p-6">
                <h4 className="font-oswald text-lg font-semibold text-gwb-black mb-4">
                  Sekite mus
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/greenwhiteboys/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gwb-black"
                    style={{ color: "#7ED321" }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@GreenWhiteBoys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gwb-black"
                    style={{ color: "#7ED321" }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/greenwhiteboys"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gwb-black"
                    style={{ color: "#7ED321" }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
