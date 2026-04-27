import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Leaf, Users, Globe, TreePine, Heart, Recycle, MapPin, ShoppingBag, Lightbulb, Share2, Target, BookOpen, Megaphone, Eye, Instagram, Music2, Camera, Mountain, Book, Video, Zap, X, Check, Utensils, Flag, Droplet, Sprout } from 'lucide-react';
import logo from '../images/ecorutas.jpg';
import logoLarga from '../images/ecorutasmxlarga.jpg';
import logoLarga2 from '../images/ecorutasmxlarga2.jpg';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="w-full bg-[#FDFBF7]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoLarga} alt="EcoRutas MX" className="h-12 object-contain cursor-pointer" onClick={() => scrollToSection('inicio')} />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Inicio</button>
              <button onClick={() => scrollToSection('turismo-sostenible')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Turismo sostenible</button>
              <button onClick={() => scrollToSection('destinos')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Destinos</button>
              <button onClick={() => scrollToSection('consejos')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Consejos</button>
              <button onClick={() => scrollToSection('redes-sociales')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Redes sociales</button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Galería</button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-[#2D5F3F] transition-colors">Contacto</button>
              <button className="bg-[#D2691E] text-white px-4 py-2 rounded-lg hover:bg-[#B8581A] transition-colors">
                Síguenos
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col gap-2">
                <button onClick={() => scrollToSection('inicio')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Inicio</button>
                <button onClick={() => scrollToSection('turismo-sostenible')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Turismo sostenible</button>
                <button onClick={() => scrollToSection('destinos')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Destinos</button>
                <button onClick={() => scrollToSection('consejos')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Consejos</button>
                <button onClick={() => scrollToSection('redes-sociales')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Redes sociales</button>
                <button onClick={() => scrollToSection('galeria')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Galería</button>
                <button onClick={() => scrollToSection('contacto')} className="text-left py-2 text-gray-700 hover:text-[#2D5F3F]">Contacto</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen mt-16 flex items-center justify-center">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630340191817-8c2a24eda6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBtZXhpY28lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3MjUwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Paisaje de montaña"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl mb-6">Turismo sostenible para viajar con conciencia</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Descubre destinos increíbles en México mientras apoyas a las comunidades locales y cuidas nuestro medio ambiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('destinos')} className="bg-[#5A9C6E] text-white px-8 py-3 rounded-lg hover:bg-[#4A8C5E] transition-colors text-lg">
              Explora destinos
            </button>
            <button onClick={() => scrollToSection('redes-sociales')} className="bg-white text-[#2D5F3F] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
              Síguenos en redes
            </button>
          </div>
        </div>
      </section>

      {/* ¿Qué es el turismo sostenible? */}
      <section id="turismo-sostenible" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#2D5F3F] mb-4">¿Qué es el turismo sostenible?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Es viajar de forma responsable, disfrutando los destinos sin dañarlos, reduciendo el impacto ambiental, respetando la cultura local y generando beneficios económicos para las comunidades receptoras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#5A9C6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-3">Cuida el ambiente</h3>
              <p className="text-gray-700">
                Reduce tu huella ecológica, minimiza residuos y respeta los ecosistemas naturales en cada destino que visites.
              </p>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#5A9C6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-3">Apoya a la comunidad local</h3>
              <p className="text-gray-700">
                Consume productos y servicios locales, genera empleos y contribuye al desarrollo económico de las regiones que visitas.
              </p>
            </div>

            <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-[#5A9C6E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-3">Protege la cultura</h3>
              <p className="text-gray-700">
                Valora las tradiciones, costumbres y patrimonio cultural local. Sé respetuoso con las comunidades y sus formas de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Promoción tradicional vs digital */}
      <section className="py-20 px-4 bg-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Promoción tradicional vs digital</h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#2D5F3F] text-white">
                    <th className="py-4 px-6 text-left">Aspecto</th>
                    <th className="py-4 px-6 text-left">Promoción tradicional</th>
                    <th className="py-4 px-6 text-left">Promoción digital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-[#2D5F3F]">Alcance</td>
                    <td className="py-4 px-6">Limitado a una zona geográfica específica</td>
                    <td className="py-4 px-6">Global, sin límites geográficos</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-[#2D5F3F]">Costo</td>
                    <td className="py-4 px-6">Alto (folletos, carteles, radio, televisión)</td>
                    <td className="py-4 px-6">Bajo (redes sociales, páginas web, videos)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-6 font-semibold text-[#2D5F3F]">Actualización</td>
                    <td className="py-4 px-6">Lenta y costosa</td>
                    <td className="py-4 px-6">Inmediata y en tiempo real</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="py-4 px-6 font-semibold text-[#2D5F3F]">Interacción</td>
                    <td className="py-4 px-6">Comunicación unidireccional limitada</td>
                    <td className="py-4 px-6">Interacción directa: comentarios, mensajes, respuestas</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#2D5F3F]">Medición</td>
                    <td className="py-4 px-6">Difícil de medir el impacto</td>
                    <td className="py-4 px-6">Métricas precisas: alcance, engagement, conversiones</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos sostenibles */}
      <section id="destinos" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Destinos recomendados</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630340191817-8c2a24eda6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBtb3VudGFpbnMlMjBtZXhpY28lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3MjUwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cerro de la Silla"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-[#2D5F3F] mb-2">Cerro de la Silla</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Monterrey, N.L.</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Símbolo emblemático de Monterrey, ideal para senderismo y conexión con la naturaleza.
                </p>
                <div className="bg-[#F5F5DC] p-3 rounded-lg flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" />
                  <p className="text-sm text-[#2D5F3F]">
                    No tires basura y respeta los senderos marcados
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1731964004606-9ccaa4e35b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Santiago"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-[#2D5F3F] mb-2">Santiago</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Santiago, N.L.</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Pueblo mágico con cascadas espectaculares, gastronomía local y cultura tradicional.
                </p>
                <div className="bg-[#F5F5DC] p-3 rounded-lg flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" />
                  <p className="text-sm text-[#2D5F3F]">
                    Consume en negocios locales y cuida los espacios naturales
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578759463746-bfa6ec4d27e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmb3Jlc3QlMjBwYXRoJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chipinque"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-[#2D5F3F] mb-2">Parque Chipinque</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>San Pedro, N.L.</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Bosque protegido con senderos, miradores y biodiversidad única en la región.
                </p>
                <div className="bg-[#F5F5DC] p-3 rounded-lg flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" />
                  <p className="text-sm text-[#2D5F3F]">
                    No alimentes la fauna silvestre, observa sin interferir
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1671403835932-1f7bd18ab576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHRvdXJpc20lMjBuYXR1cmV8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Bustamante"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl text-[#2D5F3F] mb-2">Bustamante</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Bustamante, N.L.</span>
                </div>
                <p className="text-gray-700 mb-4">
                  Grutas impresionantes, historia colonial y tradiciones culturales bien preservadas.
                </p>
                <div className="bg-[#F5F5DC] p-3 rounded-lg flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-[#2D5F3F] flex-shrink-0" />
                  <p className="text-sm text-[#2D5F3F]">
                    Respeta los espacios culturales y patrimonio histórico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guía del turista responsable */}
      <section id="consejos" className="py-20 px-4 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Guía del turista responsable</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Planifica tu viaje</h3>
              <p className="text-gray-700">
                Investiga sobre el destino, su cultura, normas locales y mejores prácticas sostenibles antes de viajar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <TreePine className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Respeta la naturaleza</h3>
              <p className="text-gray-700">
                Mantén los senderos, no dañes flora ni fauna, y lleva contigo toda tu basura.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Consume local</h3>
              <p className="text-gray-700">
                Apoya negocios familiares, artesanos locales y experiencias auténticas de la comunidad.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Reduce residuos</h3>
              <p className="text-gray-700">
                Usa botellas reutilizables, evita plásticos de un solo uso y separa tus residuos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Ahorra recursos</h3>
              <p className="text-gray-700">
                Consume agua y energía de manera responsable en tu hospedaje y actividades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
              <div className="w-12 h-12 bg-[#5A9C6E] rounded-full flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-[#2D5F3F] mb-3">Comparte con responsabilidad</h3>
              <p className="text-gray-700">
                Difunde prácticas sostenibles en redes sociales e inspira a otros viajeros responsables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Redes sociales */}
      <section id="redes-sociales" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Síguenos en redes sociales</h2>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-8 rounded-2xl text-white">
              <div className="flex items-center gap-3 mb-4">
                <Instagram className="w-8 h-8" />
                <h3 className="text-2xl">Instagram</h3>
              </div>
              <p className="text-lg mb-4">@ecorutas.mx</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <Camera className="w-5 h-5 flex-shrink-0" />
                  <span>Carruseles de destinos sostenibles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mountain className="w-5 h-5 flex-shrink-0" />
                  <span>Fotografías inspiradoras de naturaleza</span>
                </li>
                <li className="flex items-center gap-2">
                  <Book className="w-5 h-5 flex-shrink-0" />
                  <span>Historias con tips y consejos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Video className="w-5 h-5 flex-shrink-0" />
                  <span>Reels de experiencias auténticas</span>
                </li>
              </ul>
              <a 
                href="https://www.instagram.com/ecorutas_mx?utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors text-center"
              >
                Visitar Instagram
              </a>
            </div>
          </div>

          <div className="bg-[#F5F5DC] p-8 rounded-2xl text-center">
            <p className="text-lg text-gray-700">
              Únete a nuestra comunidad de viajeros responsables. Comparte tus experiencias, aprende consejos sostenibles y descubre nuevos destinos con conciencia ambiental.
            </p>
          </div>
        </div>
      </section>

      {/* Objetivos de la estrategia digital */}
      <section className="py-20 px-4 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Objetivos de nuestra estrategia digital</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#D2691E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-[#2D5F3F] mb-3">Visibilizar destinos sostenibles</h3>
              <p className="text-gray-700">
                Dar a conocer lugares responsables y opciones de turismo consciente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#D2691E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-[#2D5F3F] mb-3">Conectar con viajeros</h3>
              <p className="text-gray-700">
                Crear una comunidad interesada en viajar de manera responsable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#D2691E] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-[#2D5F3F] mb-3">Educar mediante consejos</h3>
              <p className="text-gray-700">
                Compartir tips ambientales y culturales para un turismo sostenible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <div className="w-16 h-16 bg-[#D2691E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg text-[#2D5F3F] mb-3">Impulsar comunidades</h3>
              <p className="text-gray-700">
                Apoyar proyectos locales y turísticos sostenibles en la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido destacado */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Contenido destacado</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630340192395-891fe4c0b4bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxoaWtpbmclMjBtb3VudGFpbnMlMjBtZXhpY28lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3MjUwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Paisajes"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-2">Paisajes</h3>
              <p className="text-gray-700">
                Montañas, cascadas y naturaleza que inspira a viajar con responsabilidad.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1768716697797-35dffd4b27f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxtZXhpY2FuJTIwZm9vZCUyMHRyYWRpdGlvbmFsJTIwY3Vpc2luZXxlbnwxfHx8fDE3NzcyNTA1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Gastronomía"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-2">Gastronomía local</h3>
              <p className="text-gray-700">
                Sabores auténticos que apoyan a productores y negocios familiares.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1703084004452-446b56f5f6d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxmb3Jlc3QlMjBwYXRoJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Tips sostenibles"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-2">Tips sostenibles</h3>
              <p className="text-gray-700">
                Consejos prácticos para reducir tu impacto y viajar mejor.
              </p>
            </div>

            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl mb-4">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522110016761-21a249819de1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2NhbCUyMGNvbW11bml0eSUyMGFydGlzYW4lMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Comunidad"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl text-[#2D5F3F] mb-2">Comunidad</h3>
              <p className="text-gray-700">
                Historias de personas que cuidan su entorno y cultura local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones para redes sociales */}
      <section className="py-20 px-4 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Publicaciones destacadas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630340190878-d9d1ebe0e531?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxoaWtpbmclMjBtb3VudGFpbnMlMjBtZXhpY28lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3MjUwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Post Cerro de la Silla"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-[#2D5F3F] mb-3">Descubre el Cerro de la Silla</h3>
                <p className="text-gray-700 mb-4">
                  El icono de Monterrey te espera con senderos increíbles y vistas espectaculares. Recuerda: respeta los senderos y lleva tu basura contigo.
                </p>
                <div className="flex gap-2 mb-4">
                  <Mountain className="w-5 h-5 text-[#2D5F3F]" />
                  <Recycle className="w-5 h-5 text-[#5A9C6E]" />
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  #TurismoSostenible #EcoRutasMX #CerroDeLaSilla #ViajeroResponsable
                </p>

              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760322327926-65aaca03150b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtZXhpY2FuJTIwZm9vZCUyMHRyYWRpdGlvbmFsJTIwY3Vpc2luZXxlbnwxfHx8fDE3NzcyNTA1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Post gastronomía"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-[#2D5F3F] mb-3">Sabores que apoyan</h3>
                <p className="text-gray-700 mb-4">
                  Cuando consumes en negocios locales, apoyas a familias y preservas tradiciones culinarias. ¡Cada platillo cuenta una historia!
                </p>
                <div className="flex gap-2 mb-4">
                  <Utensils className="w-5 h-5 text-[#2D5F3F]" />
                  <Flag className="w-5 h-5 text-[#5A9C6E]" />
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  #GastronomíaLocal #ApoyaLocal #TurismoConsciente #EcoRutasMX
                </p>

              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1703084005208-cc67a4429f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxmb3Jlc3QlMjBwYXRoJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Post tips"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-[#2D5F3F] mb-3">Tips para el viajero responsable</h3>
                <p className="text-gray-700 mb-4">
                  Usa botellas reutilizables, evita plásticos de un solo uso y respeta la fauna local. Pequeñas acciones, gran impacto.
                </p>
                <div className="flex gap-2 mb-4">
                  <Sprout className="w-5 h-5 text-[#5A9C6E]" />
                  <Droplet className="w-5 h-5 text-[#2D5F3F]" />
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  #ViajaConConciencia #SinPlástico #EcoRutasMX #SostenibilidadReal
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería multimedia */}
      <section id="galeria" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#2D5F3F] text-center mb-12">Galería multimedia</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1630340191936-26efbf0eab2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoaWtpbmclMjBtb3VudGFpbnMlMjBtZXhpY28lMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzc3MjUwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1656352451218-202ab9bd09a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1592183075437-13a5af4dd779?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1635788217034-7da0323933f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwZm9vZCUyMHRyYWRpdGlvbmFsJTIwY3Vpc2luZXxlbnwxfHx8fDE3NzcyNTA1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1671403835817-2570776982dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzdXN0YWluYWJsZSUyMHRvdXJpc20lMjBuYXR1cmV8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1591442710240-cb2f6338b486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxmb3Jlc3QlMjBwYXRoJTIwaGlraW5nJTIwdHJhaWx8ZW58MXx8fHwxNzc3MjUwNTc3fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1590562004069-e5a484c890dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsb2NhbCUyMGNvbW11bml0eSUyMGFydGlzYW4lMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
              "https://images.unsplash.com/photo-1627596593046-ba0422eb2b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3YXRlcmZhbGwlMjBuYXR1cmUlMjBtZXhpY298ZW58MXx8fHwxNzc3MjUwNTc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
            ].map((src, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg aspect-square cursor-pointer relative group"
                onClick={() => setSelectedImage(src)}
              >
                <ImageWithFallback
                  src={src}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2D5F3F] to-[#5A9C6E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <img src={logo} alt="EcoRutas MX" className="w-24 h-24 object-cover mx-auto mb-6 rounded-full shadow-2xl border-4 border-white/20" />
          <h2 className="text-4xl md:text-5xl mb-6">Viajar también es cuidar</h2>
          <p className="text-xl mb-8 leading-relaxed">
            Cada destino tiene una historia, una comunidad y un entorno natural que merecen nuestro respeto. Al viajar de forma responsable, no solo disfrutas experiencias auténticas, sino que contribuyes a preservar la belleza y cultura de los lugares que visitas.
          </p>
          <p className="text-lg mb-8">
            Síguenos en redes sociales, comparte nuestras publicaciones y descubre nuevas formas de viajar responsablemente. Juntos podemos hacer la diferencia.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#1A3D2A] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4 bg-white/95 p-2 rounded-xl inline-block shadow-sm">
                <img src={logoLarga2} alt="EcoRutas MX" className="h-12 object-contain" />
              </div>
              <p className="text-gray-300">
                Proyecto académico sobre turismo sostenible en México, promoviendo viajes responsables y conscientes.
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => scrollToSection('inicio')} className="hover:text-white transition-colors">Inicio</button></li>
                <li><button onClick={() => scrollToSection('turismo-sostenible')} className="hover:text-white transition-colors">Turismo sostenible</button></li>
                <li><button onClick={() => scrollToSection('destinos')} className="hover:text-white transition-colors">Destinos</button></li>
                <li><button onClick={() => scrollToSection('consejos')} className="hover:text-white transition-colors">Consejos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Redes sociales</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <Instagram className="w-5 h-5" />
                  <span>@ecorutas.mx</span>
                </li>

              </ul>
            </div>

            <div>
              <h4 className="text-lg mb-4">Contacto</h4>
              <p className="text-gray-300 mb-2">
                Nuevo León, México
              </p>
              <p className="text-gray-300">
                contacto@ecorutasmx.com
              </p>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p className="mb-2">Hecho con conciencia para viajeros responsables</p>
            <p className="text-sm">Proyecto académico sobre turismo sostenible © 2026 EcoRutas MX</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-[101]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center pointer-events-none"
          >
            <img 
              src={selectedImage} 
              alt="Imagen en pantalla completa" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
