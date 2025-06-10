import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  Mail, 
  Phone, 
  MapPin,
  ChevronDown,
  Send,
  CheckCircle,
  Star
} from 'lucide-react';
import ThankYouPage from './components/ThankYouPage';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Verificar se veio da página de agradecimento do FormSubmit
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowThankYou(true);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowThankYou(false);
    // Limpar a URL
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // WhatsApp link - substitua pelo seu número
  const whatsappLink = "https://wa.me/5551994471456?text=Olá! Gostaria de saber mais sobre os serviços da DSW Soluções Digitais.";

  // Se deve mostrar a página de agradecimento
  if (showThankYou) {
    return <ThankYouPage onBackToHome={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo Image - substitua a URL pela sua imagem */}
              <img 
                src="/logo-dsw.png" 
                alt="DSW Soluções Digitais" 
                className="h-12 w-auto scale-[1.6]"
                onError={(e) => {
                  // Fallback para texto se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              {/* Fallback text logo */}
              <div className="text-2xl font-bold hidden">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  DSW
                </span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-purple-400 transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400 transition-colors">
                Contato
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className={`text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            {/* Logo principal - substitua pela sua imagem */}
            <div className="mb-6 flex justify-center">
              <img 
                src="/logo-dsw-hero.png" 
                alt="DSW Soluções Digitais" 
                className="h-32 md:h-40 w-auto"
                onError={(e) => {
                  // Fallback para texto se a imagem não carregar
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.style.display = 'block';
                }}
              />
              {/* Fallback text logo */}
              <div className="hidden">
                <h1 className="text-8xl md:text-9xl font-black mb-4 relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
                    DSW
                  </span>
                  <div className="absolute inset-0 text-8xl md:text-9xl font-black">
                    <span className="text-purple-400/20 blur-sm">DSW</span>
                  </div>
                </h1>
              </div>
            </div>
            <h2 className="text-2xl md:text-4xl font-light tracking-wider mb-2">
              SOLUÇÕES DIGITAIS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
            Transformamos suas ideias em experiências digitais extraordinárias com 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"> front-end de alta performance</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 inline-block"
            >
              Nossos Serviços
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-black transition-all duration-300"
            >
              Entre em Contato
            </button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-purple-400 cursor-pointer"
              onClick={() => scrollToSection('services')}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                NOSSOS SERVIÇOS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Especializados em desenvolvimento front-end moderno e soluções digitais que impulsionam seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Palette size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Desenvolvimento Web</h3>
                <p className="text-gray-300 mb-6">
                  Aplicações web modernas, Interfaces intuitivas e experiências memoráveis que conectam sua marca aos usuários.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Sites
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Landing Pages
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Dashboard
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Frameworks</h3>
                <p className="text-gray-300 mb-6">
                  Tecnologias modernas para máxima performance.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    React & Next.js
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    TypeScript
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Tailwind CSS
                  </div>
                </div>
              </div>
            </div>


            {/* Service 3 */}
            <div className="group relative bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Design Responsivo</h3>
                <p className="text-gray-300 mb-6">
                  Seu estilo e sua marca em todo lugar
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Mobile
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    PC's e Notbooks
                  </div>
                  <div className="flex items-center text-sm text-purple-300">
                    <CheckCircle size={16} className="mr-2" />
                    Tablets
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                ENTRE EM CONTATO
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu próximo projeto digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Fale Conosco</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Email</p>
                      <p className="text-white font-semibold">alessandradev2025@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Telefone</p>
                      <p className="text-white font-semibold">(51) 94471456</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-gray-300">Localização</p>
                      <p className="text-white font-semibold">Porto Alegre, RS</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <h4 className="text-lg font-semibold mb-4 text-white">Por que escolher a DSW?</h4>
                <div className="space-y-3">
                  <div className="flex items-center text-purple-300">
                    <Star size={16} className="mr-2 fill-current" />
                    <span className="text-sm">Desenvolvemos suas idéias</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Star size={16} className="mr-2 fill-current" />
                    <span className="text-sm">Construímos Sites perfeitos para voçê</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Star size={16} className="mr-2 fill-current" />
                    <span className="text-sm">Entrega no prazo </span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Star size={16} className="mr-2 fill-current" />
                    <span className="text-sm">Suporte contínuo pós-entrega</span>
                  </div>
                  <div className="flex items-center text-purple-300">
                    <Star size={16} className="mr-2 fill-current" />
                    <span className="text-sm">Tecnologias de ponta</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form with FormSubmit */}
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <form action="https://formsubmit.co/alessandradev2025@gmail.com" method="POST" className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Nova mensagem do site DSW Soluções Digitais" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${window.location.origin}?success=true`} />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Enviar Mensagem</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <img 
              src="/logo-dsw-footer.png" 
              alt="DSW Soluções Digitais" 
              className="h-8 w-auto mx-auto mb-2"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling!.style.display = 'block';
              }}
            />
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 hidden">
              DSW
            </span>
            <p className="text-gray-400 mt-2">Soluções Digitais</p>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 DSW Soluções Digitais. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;