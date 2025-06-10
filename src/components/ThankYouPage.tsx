import React from 'react';
import { CheckCircle, ArrowLeft, Mail, Phone } from 'lucide-react';

interface ThankYouPageProps {
  onBackToHome: () => void;
}

function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <CheckCircle size={48} className="text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              MENSAGEM ENVIADA!
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-8 border border-green-500/20 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white">Obrigado pelo seu contato!</h2>
          <p className="text-lg text-gray-300 mb-6">
            Recebemos sua mensagem e entraremos em contato em breve. Nossa equipe da DSW Soluções Digitais 
            está ansiosa para conhecer seu projeto e transformar suas ideias em realidade digital.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center justify-center space-x-3 bg-purple-600/20 rounded-lg p-4">
              <Mail size={20} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Resposta em até</p>
                <p className="text-white font-semibold">24 horas</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 bg-blue-600/20 rounded-lg p-4">
              <Phone size={20} className="text-blue-400" />
              <div className="text-left">
                <p className="text-sm text-gray-300">Atendimento</p>
                <p className="text-white font-semibold">Segunda à Sexta</p>
              </div>
            </div>
          </div>

        
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBackToHome}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Voltar ao Site</span>
          </button>
          
          <a
            href="https://wa.me/551994471456?text=Olá! Acabei de enviar uma mensagem pelo site da DSW Soluções Digitais."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-green-400 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <Phone size={20} />
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="text-gray-400 text-sm mt-8">
                                                                                       
        </p>
      </div>
    </div>
  );
}

export default ThankYouPage;