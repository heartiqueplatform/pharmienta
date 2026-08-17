import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const WhatsAppFloatingWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <a
        id="btn-whatsapp-floating"
        href="https://wa.me/254704473503?text=Hello%20Pharmienta%20Team%2C%20I%20run%20a%20pharmacy%20in%20Kenya%20and%20would%20like%20to%20claim%20the%2012-Month%20Free%20Pioneer%20License."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-[#2ea043] hover:bg-[#288f3c] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl shadow-emerald-950/60 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Chat on WhatsApp with Pharmienta Kenya Support"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-ping" />
        </div>
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-[11px] font-extrabold leading-none">WhatsApp Us 24/7</span>
          <span className="text-[9px] text-emerald-100 font-medium">0704 473 503</span>
        </div>
      </a>
    </div>
  );
};
