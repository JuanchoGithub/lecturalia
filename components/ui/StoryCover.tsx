
import React, { useMemo } from 'react';

interface StoryCoverProps {
  storyId: string;
  title: string;
  className?: string;
}

const StoryCover: React.FC<StoryCoverProps> = ({ storyId, title, className = "" }) => {
  const seed = useMemo(() => {
    const str = storyId + title;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }, [storyId, title]);

  const config = useMemo(() => {
    const gradients: Record<string, string[]> = {
      'adelante-valeroso-navegante': ['#3A86FF', '#00F2FE'],
      'barba-azul': ['#1E293B', '#334155'],
      'leo-the-lighthouse-lion': ['#FB5607', '#FFBE0B'],
      'snow-white': ['#FF006E', '#8338EC'],
      'el-soldadito-de-plomo': ['#94A3B8', '#475569'],
      'don-fresquete': ['#00F2FE', '#3A86FF'],
      'nico-youtuber': ['#8338EC', '#FF006E'],
      'nico-youtuber-parte-2': ['#7C3AED', '#DB2777'],
      'nico-youtuber-parte-3': ['#4C1D95', '#9D174D'],
      'el-patito-feo': ['#00B09B', '#96C93D'],
      'cinderella': ['#F093FB', '#F5576C'],
      'el-gato-con-botas': ['#D97706', '#B45309'],
      'kirby-forgotten-land': ['#FF85A1', '#FF006E'],
      'hansel-y-gretel': ['#78350F', '#F59E0B'],
      'beauty-and-the-beast': ['#991B1B', '#F87171'],
      'sleeping-beauty': ['#BE185D', '#F472B6'],
      'la-bella-durmiente-grimm': ['#BE185D', '#F472B6'],
      'the-happy-prince': ['#EAB308', '#FEF08A'],
      'pulgarcito': ['#065F46', '#34D399'],
      'pulgarcito-sastre': ['#065F46', '#34D399'],
      'juan-sin-miedo': ['#374151', '#9CA3AF'],
      'los-musicos-de-brema': ['#4338CA', '#818CF8'],
      'el-traje-nuevo-del-emperador': ['#FBBF24', '#FDE68A'],
      'caperucita-roja': ['#B91C1C', '#EF4444'],
      'caperucita-roja-grimm': ['#B91C1C', '#EF4444'],
      'bisa-vuela': ['#0EA5E9', '#7DD3FC'],
      'el-pais-de-la-geometria': ['#FFFFFF', '#E2E8F0'],
      'se-busca-pirata': ['#451A03', '#92400E'],
      'en-tren-de-descubrimiento': ['#1E1B4B', '#4338CA'],
      'botella-al-mar': ['#1D4ED8', '#60A5FA'],
      'la-plapla': ['#000000', '#4B5563'],
      'the-canterville-ghost': ['#4C1D95', '#1E1B4B'],
      'el-gigante-egoista': ['#15803D', '#4ADE80'],
      'sastrecillo-valiente': ['#F59E0B', '#D97706'],
      'sukimuki': ['#F43F5E', '#FB7185'],
      'deme-otro': ['#6366F1', '#A5B4FC'],
      'tal-vez-se-acuerda': ['#8B5CF6', '#C4B5FD'],
      'caballito': ['#F97316', '#FDBA74'],
      'joaquin-y-las-palabras': ['#EC4899', '#F472B6'],
      'calle-laserre': ['#3B82F6', '#93C5FD'],
      'jugar-a-la-mancha': ['#10B981', '#6EE7B7'],
      'por-nada-del-mundo': ['#64748B', '#CBD5E1'],
      'un-viaje-de-pelicula': ['#0F172A', '#334155'],
      'unas-rimas-que-se-arriman': ['#F59E0B', '#FCD34D'],
      'una-nave-especial': ['#06B6D4', '#67E8F9'],
      'una-asombrosa-llama-en-el-desierto': ['#EA580C', '#FDBA74'],
      'un-libro-de-ciencia-friccion': ['#4F46E5', '#818CF8'],
      'el-run-imposible-de-kirby': ['#FF85A1', '#F43F5E'],
      'el-guardian-de-las-luces-perdidas': ['#FFE259', '#FFA751'],
    };

    const defaultGradients = [
      ['#FF7E5F', '#FEB47B'],
      ['#6A11CB', '#2575FC'],
      ['#00B09B', '#96C93D']
    ];

    const grad = gradients[storyId] || defaultGradients[seed % defaultGradients.length];
    return { gradient: grad, id: storyId };
  }, [storyId, seed]);

  const renderIllustration = () => {
    switch (config.id) {
      case 'botella-al-mar':
        return (
          <g className="animate-floaty">
            <path d="M-10 80 Q25 70 50 80 T110 80" fill="none" stroke="white" strokeWidth="2" opacity="0.5" className="animate-waves" />
            <path d="M40 20 L60 20 L65 35 L65 75 A5 5 0 0 1 60 80 L40 80 A5 5 0 0 1 35 75 L35 35 Z" fill="rgba(255,255,255,0.3)" stroke="white" strokeWidth="2" />
            <rect x="42" y="45" width="16" height="25" rx="1" fill="#FDE68A" opacity="0.8" />
            <circle cx="50" cy="20" r="4" fill="#78350F" />
          </g>
        );
      case 'deme-otro':
        return (
          <g className="animate-floaty">
            <circle cx="30" cy="50" r="15" fill="#3A86FF" />
            <circle cx="70" cy="50" r="15" fill="#FF006E" />
            <path d="M35 30 Q50 20 65 30" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 2" className="animate-spin-slow" style={{transformOrigin: 'center'}} />
            <path d="M65 70 Q50 80 35 70" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 2" className="animate-spin-slow" style={{transformOrigin: 'center'}} />
          </g>
        );
      case 'unas-rimas-que-se-arriman':
        return (
          <g className="animate-floaty">
            <circle cx="35" cy="45" r="12" fill="#FB5607" />
            <circle cx="65" cy="45" r="12" fill="#B45309" />
            <path d="M30 65 Q50 80 70 65" fill="none" stroke="white" strokeWidth="3" className="animate-pulse" />
            <text x="50" y="30" fontSize="12" fill="white" fontWeight="black" textAnchor="middle" className="animate-waves">HA HA!</text>
          </g>
        );
      case 'una-asombrosa-llama-en-el-desierto':
        return (
          <g className="animate-floaty">
            <path d="M50 80 Q30 80 20 50 Q20 20 50 10 Q80 20 80 50 Q70 80 50 80" fill="#FB5607" className="animate-pulse" />
            <path d="M50 75 Q40 75 35 55 Q35 35 50 25 Q65 35 65 55 Q60 75 50 75" fill="#FFBE0B" />
            <path d="M10 20 L30 10 M10 50 L25 45 M80 15 L95 25" stroke="#00F2FE" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          </g>
        );
      case 'un-libro-de-ciencia-friccion':
        return (
          <g className="animate-floaty">
            <rect x="20" y="30" width="60" height="40" rx="2" fill="white" />
            <line x1="50" y1="30" x2="50" y2="70" stroke="#E2E8F0" strokeWidth="2" />
            <circle cx="35" cy="50" r="8" fill="none" stroke="#3A86FF" strokeWidth="2" strokeDasharray="3 2" className="animate-spin-slow" />
            <path d="M60 40 L75 40 M60 50 L75 50 M60 60 L75 60" stroke="#FB5607" strokeWidth="2" className="animate-waves" />
            <path d="M10 30 L25 45 M90 30 L75 45" stroke="#FFBE0B" strokeWidth="2" className="animate-pulse" />
          </g>
        );
      case 'por-nada-del-mundo':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="45" r="30" fill="#3A86FF" stroke="white" strokeWidth="2" className="animate-spin-slow" />
            <path d="M30 45 Q50 35 70 45" fill="none" stroke="#10B981" strokeWidth="4" />
            <g transform="translate(70, 65)" className="animate-pulse">
               <circle cx="0" cy="0" r="12" fill="white" stroke="#FF006E" strokeWidth="2" />
               <line x1="0" y1="0" x2="0" y2="-6" stroke="#FF006E" strokeWidth="2" />
               <line x1="0" y1="0" x2="4" y2="3" stroke="#FF006E" strokeWidth="2" />
            </g>
          </g>
        );
      case 'don-fresquete':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="78" r="18" fill="white" />
            <circle cx="50" cy="55" r="14" fill="white" />
            <circle cx="50" cy="35" r="10" fill="white" />
            <circle cx="47" cy="33" r="1" fill="black" />
            <circle cx="53" cy="33" r="1" fill="black" />
            <path d="M50 35 L58 37 L50 39 Z" fill="#FB5607" />
            <rect x="42" y="25" width="16" height="2" fill="#1E293B" />
            <rect x="45" y="18" width="10" height="8" fill="#1E293B" />
            <g className="animate-waves">
              <path d="M75 10 L85 20 L75 30 L65 20 Z" fill="#FF006E" stroke="white" strokeWidth="1" />
              <path d="M65 20 L85 20 M75 10 L75 30" stroke="white" strokeWidth="0.5" />
              <path d="M75 30 Q80 40 75 50" fill="none" stroke="white" strokeWidth="1" strokeDasharray="2 1" />
              <line x1="50" y1="50" x2="65" y2="20" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
            </g>
          </g>
        );
      case 'el-guardian-de-las-luces-perdidas':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="50" r="28" fill="#FF85A1" stroke="#FF006E" strokeWidth="2" />
            <ellipse cx="40" cy="45" rx="3" ry="6" fill="#1E293B" />
            <ellipse cx="60" cy="45" rx="3" ry="6" fill="#1E293B" />
            <g transform="translate(15, 10)" className="animate-pulse">
              <rect x="45" y="0" width="10" height="15" rx="2" fill="#FFE259" stroke="#EAB308" strokeWidth="1" />
              <circle cx="50" cy="7" r="15" fill="url(#starGradient)" opacity="0.6" />
            </g>
            <path d="M45 65 Q50 70 55 65" fill="none" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'el-soldadito-de-plomo':
        return (
          <g className="animate-floaty">
            <rect x="46" y="35" width="8" height="25" fill="#B91C1C" rx="1" />
            <rect x="46" y="60" width="8" height="15" fill="#1E1B4B" />
            <circle cx="50" cy="28" r="8" fill="#FDE68A" />
            <rect x="45" y="15" width="10" height="6" fill="#1E1B4B" />
            <line x1="42" y1="35" x2="42" y2="65" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
            <path d="M20 85 L80 85 L70 70 L30 70 Z" fill="white" stroke="#CBD5E1" strokeWidth="1" />
            <path d="M50 70 L50 50 L75 70 Z" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
            <path d="M50 45 Q50 40 45 40 T40 45 Q40 50 50 60 Q60 50 60 45 T55 40 Q50 40 50 45" fill="#EF4444" opacity="0.4" />
          </g>
        );
      case 'en-tren-de-descubrimiento':
        return (
          <g className="animate-floaty">
            <rect x="25" y="55" width="45" height="20" rx="2" fill="#1E293B" />
            <rect x="55" y="35" width="15" height="30" rx="2" fill="#B91C1C" />
            <rect x="30" y="40" width="8" height="15" fill="#1E293B" />
            <circle cx="35" cy="75" r="6" fill="#475569" className="animate-spin-slow" />
            <circle cx="55" cy="75" r="6" fill="#475569" className="animate-spin-slow" />
            <g transform="translate(10, -10)" className="animate-waves">
              <circle cx="30" cy="30" r="10" fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="2" />
              <line x1="37" y1="37" x2="45" y2="45" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </g>
            <line x1="10" y1="82" x2="90" y2="82" stroke="white" strokeWidth="1" opacity="0.3" />
            <line x1="10" y1="88" x2="90" y2="88" stroke="white" strokeWidth="1" opacity="0.3" />
          </g>
        );
      case 'joaquin-y-las-palabras':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="65" r="15" fill="#FDE68A" />
            <path d="M35 65 Q50 85 65 65" fill="none" stroke="#1E293B" strokeWidth="2" />
            <g className="animate-pulse">
              <circle cx="25" cy="30" r="12" fill="white" opacity="0.3" />
              <text x="25" y="33" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">LUNA</text>
              <circle cx="75" cy="25" r="14" fill="white" opacity="0.3" />
              <text x="75" y="28" textAnchor="middle" fontSize="6" fill="white" fontWeight="bold">LANA</text>
              <path d="M40 50 Q50 40 30 35" stroke="white" strokeWidth="0.5" opacity="0.4" fill="none" />
              <path d="M60 50 Q50 40 70 30" stroke="white" strokeWidth="0.5" opacity="0.4" fill="none" />
            </g>
            <text x="15" y="70" fontSize="14" fill="white" opacity="0.5" className="animate-waves">A</text>
            <text x="85" y="60" fontSize="14" fill="white" opacity="0.5" className="animate-waves" style={{animationDelay: '1s'}}>E</text>
          </g>
        );
      case 'the-canterville-ghost':
        return (
          <g className="animate-floaty">
            <path d="M50 20 Q30 20 25 50 T50 80 T75 50 Q70 20 50 20" fill="white" opacity="0.4" />
            <circle cx="40" cy="40" r="3" fill="#1E1B4B" />
            <circle cx="60" cy="40" r="3" fill="#1E1B4B" />
            <path d="M20 60 Q10 70 20 80 M80 60 Q90 70 80 80" fill="none" stroke="#94A3B8" strokeWidth="3" className="animate-waves" />
          </g>
        );
      case 'el-gigante-egoista':
        return (
          <g className="animate-floaty">
            <rect x="15" y="60" width="70" height="30" fill="#475569" rx="2" />
            <rect x="25" y="45" width="50" height="15" fill="#475569" rx="2" />
            <path d="M50 45 L50 25" stroke="#15803D" strokeWidth="4" />
            <circle cx="50" cy="20" r="8" fill="#F43F5E" className="animate-pulse" />
            <circle cx="50" cy="20" r="4" fill="#FEF08A" />
          </g>
        );
      case 'sastrecillo-valiente':
        return (
          <g className="animate-floaty">
            <path d="M40 20 L60 80" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
            <circle cx="40" cy="20" r="4" fill="none" stroke="#94A3B8" strokeWidth="1" />
            {[...Array(7)].map((_, i) => (
                <circle key={i} cx={30 + Math.sin(i) * 20} cy={40 + Math.cos(i) * 20} r="2" fill="black" className="animate-waves" style={{animationDelay: `${i * 0.2}s`}} />
            ))}
          </g>
        );
      case 'sukimuki':
        return (
          <g className="animate-floaty">
            <path d="M50 80 L20 40 A30 30 0 0 1 80 40 Z" fill="#F43F5E" stroke="white" strokeWidth="2" />
            <path d="M50 80 L35 45 M50 80 L50 40 M50 80 L65 45" stroke="white" strokeWidth="1" />
            <path d="M70 20 Q80 10 90 20 T70 40" fill="#FEF08A" className="animate-waves" />
          </g>
        );
      case 'tal-vez-se-acuerda':
        return (
          <g className="animate-floaty">
            <rect x="40" y="10" width="20" height="80" rx="5" fill="#78350F" />
            <path d="M42 20 L58 20 M42 40 L58 40 M42 60 L58 60" stroke="#FDE68A" strokeWidth="2" />
            <path d="M45 10 L45 90 M50 10 L50 90 M55 10 L55 90" stroke="white" strokeWidth="0.5" opacity="0.6" className="animate-pulse" />
          </g>
        );
      case 'caballito':
        return (
          <g className="animate-floaty">
            <rect x="45" y="10" width="10" height="80" fill="#EAB308" />
            <path d="M30 40 Q30 20 60 25 L70 45 Q50 45 40 60 Z" fill="white" stroke="#D97706" strokeWidth="2" />
            <circle cx="55" cy="35" r="2" fill="#1E293B" />
            <path d="M60 25 Q70 20 75 30" fill="none" stroke="#D97706" strokeWidth="3" strokeLinecap="round" />
          </g>
        );
      case 'calle-laserre':
        return (
          <g className="animate-floaty">
            <rect x="10" y="35" width="80" height="30" rx="5" fill="#1E3A8A" stroke="white" strokeWidth="3" />
            <text x="50" y="58" textAnchor="middle" fill="white" fontSize="22" fontWeight="black" className="animate-waves">RRRR</text>
          </g>
        );
      case 'jugar-a-la-mancha':
        return (
          <g className="animate-floaty">
            <path d="M30 20 L70 20 L85 40 L70 40 L70 80 L30 80 L30 40 L15 40 Z" fill="white" stroke="#E2E8F0" strokeWidth="2" />
            <path d="M50 50 Q65 40 60 65 T40 70 T50 50" fill="#8338EC" className="animate-waves" />
            <circle cx="50" cy="55" r="5" fill="#FF006E" opacity="0.6" className="animate-pulse" />
          </g>
        );
      case 'una-nave-especial':
        return (
          <g className="animate-floaty">
            <ellipse cx="50" cy="50" rx="40" ry="15" fill="#94A3B8" stroke="#1E293B" strokeWidth="2" />
            <path d="M30 45 A20 15 0 0 1 70 45" fill="#06B6D4" stroke="#1E293B" strokeWidth="2" />
            <path d="M50 65 L30 95 L70 95 Z" fill="url(#ufoLight)" opacity="0.6" className="animate-pulse" />
          </g>
        );
      case 'un-viaje-de-pelicula':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="40" r="30" fill="none" stroke="white" strokeWidth="8" strokeDasharray="10 5" className="animate-spin-slow" />
            <path d="M20 70 L80 70 M20 80 L80 80" stroke="white" strokeWidth="4" strokeDasharray="5 5" />
            <rect x="45" y="35" width="10" height="10" fill="white" />
          </g>
        );
      case 'el-run-imposible-de-kirby':
        return (
          <g className="animate-floaty">
             <circle cx="40" cy="50" r="25" fill="#FF85A1" stroke="#FF006E" strokeWidth="2" />
             <path d="M70 40 L90 40 M75 50 L95 50 M70 60 L90 60" stroke="white" strokeWidth="3" strokeLinecap="round" className="animate-waves" />
             <path d="M35 45 Q40 40 45 45 M35 55 Q40 60 45 55" fill="none" stroke="#1E293B" strokeWidth="2" />
          </g>
        );
      case 'el-gato-con-botas':
        return (
          <g className="animate-floaty">
            <path d="M35 30 L35 80 L65 80 L70 65 L50 60 L50 30 Z" fill="#451A03" stroke="white" strokeWidth="2" />
            <path d="M55 20 L65 40 L45 40 Z" fill="#D97706" />
            <path d="M65 20 L75 40 L55 40 Z" fill="#D97706" />
          </g>
        );
      case 'caperucita-roja':
      case 'caperucita-roja-grimm':
        return (
          <g className="animate-floaty">
            <path d="M50 20 Q30 20 20 50 Q20 80 50 85 Q80 80 80 50 Q70 20 50 20" fill="#B91C1C" />
            <path d="M50 20 L50 85" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <circle cx="50" cy="15" r="5" fill="#B91C1C" />
          </g>
        );
      case 'pulgarcito':
      case 'pulgarcito-sastre':
        return (
          <g className="animate-floaty">
            <path d="M30 30 L30 80 L70 80 L75 60 L50 55 L50 30 Z" fill="#451A03" />
            <circle cx="80" cy="75" r="5" fill="#FDE68A" className="animate-pulse" />
            <text x="75" y="78" fontSize="8" fill="#451A03" fontWeight="bold">웃</text>
          </g>
        );
      case 'hansel-y-gretel':
        return (
          <g className="animate-floaty">
            <rect x="25" y="45" width="50" height="40" fill="#78350F" />
            <path d="M20 45 L50 15 L80 45 Z" fill="#F472B6" stroke="#DB2777" strokeWidth="3" />
            <circle cx="35" cy="55" r="4" fill="#FBBF24" />
            <circle cx="65" cy="55" r="4" fill="#10B981" />
          </g>
        );
      case 'beauty-and-the-beast':
        return (
          <g className="animate-floaty">
            <path d="M50 80 Q50 40 50 20" fill="none" stroke="#059669" strokeWidth="3" />
            <path d="M50 20 Q30 10 40 40 Q50 30 60 40 Q70 10 50 20" fill="#EF4444" />
            <circle cx="50" cy="45" r="35" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </g>
        );
      case 'sleeping-beauty':
      case 'la-bella-durmiente-grimm':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="50" r="30" fill="none" stroke="#FDE68A" strokeWidth="4" strokeDasharray="10 5" className="animate-spin-slow" />
            <path d="M40 80 L60 80 M50 80 L50 20 M30 40 L70 60" stroke="#FDE68A" strokeWidth="3" />
          </g>
        );
      case 'the-happy-prince':
        return (
          <g className="animate-floaty">
            <path d="M50 85 L20 50 A15 15 0 0 1 50 25 A15 15 0 0 1 80 50 Z" fill="#EAB308" />
            <path d="M70 20 Q85 20 90 40 L70 30 Z" fill="#4B5563" className="animate-waves" />
          </g>
        );
      case 'el-patito-feo':
        return (
          <g className="animate-floaty">
            <path d="M30 80 Q50 75 70 80" fill="none" stroke="white" strokeWidth="2" className="animate-waves" />
            <path d="M40 60 Q30 60 30 45 Q30 30 45 30 Q60 30 60 45 Q60 60 50 60" fill="#94A3B8" />
            <path d="M45 65 Q55 65 65 85 Q50 95 35 85 Z" fill="white" opacity="0.4" transform="scale(1 -1) translate(0 -160)" />
          </g>
        );
      case 'los-musicos-de-brema':
        return (
          <g className="animate-floaty">
            <rect x="35" y="70" width="30" height="20" rx="5" fill="#94A3B8" />
            <rect x="40" y="55" width="20" height="15" rx="4" fill="#B45309" />
            <rect x="45" y="45" width="10" height="10" rx="3" fill="#4B5563" />
            <path d="M50 35 L45 45 L55 45 Z" fill="#EF4444" />
          </g>
        );
      case 'juan-sin-miedo':
        return (
          <g className="animate-floaty">
            <path d="M60 30 Q80 30 80 60 L70 90 L50 80 L40 90 Z" fill="rgba(255,255,255,0.6)" className="animate-waves" />
            <circle cx="35" cy="45" r="15" fill="#FDE68A" />
            <path d="M30 45 Q35 50 40 45" fill="none" stroke="#1E293B" strokeWidth="2" />
          </g>
        );
      case 'el-traje-nuevo-del-emperador':
        return (
          <g className="animate-floaty">
            <path d="M30 40 Q50 20 70 40" fill="none" stroke="#4B5563" strokeWidth="3" />
            <circle cx="50" cy="25" r="5" fill="none" stroke="#4B5563" strokeWidth="2" />
            <rect x="48" y="40" width="4" height="40" fill="#4B5563" opacity="0.2" />
          </g>
        );
      case 'el-pais-de-la-geometria':
        return (
          <g className="animate-floaty">
            <path d="M50 20 L30 80 M50 20 L70 80" stroke="#EF4444" strokeWidth="4" />
            <circle cx="50" cy="20" r="4" fill="#EF4444" />
            <circle cx="70" cy="80" r="30" fill="none" stroke="#3A86FF" strokeWidth="2" strokeDasharray="5 5" className="animate-spin-slow" />
          </g>
        );
      case 'bisa-vuela':
        return (
          <g className="animate-floaty">
            <path d="M20 50 L80 50 L75 40 L25 40 Z" fill="#EAB308" />
            <path d="M40 40 L50 20 L60 40" fill="#EAB308" />
            <rect x="80" y="30" width="4" height="40" fill="#4B5563" className="animate-spin-slow" transform-origin="82 50" />
          </g>
        );
      case 'la-plapla':
        return (
          <g className="animate-floaty">
            <text x="50" y="70" textAnchor="middle" fontSize="60" fontWeight="black" fill="white" className="animate-waves">A</text>
            <circle cx="70" cy="40" r="5" fill="#EF4444" />
          </g>
        );
      case 'se-busca-pirata':
        return (
          <g className="animate-floaty">
            <rect x="20" y="50" width="60" height="35" rx="5" fill="#78350F" />
            <path d="M20 50 Q50 30 80 50" fill="#451A03" />
            <path d="M10 60 Q20 60 25 40" fill="none" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
          </g>
        );
      case 'adelante-valeroso-navegante':
        return (
          <g className="animate-floaty">
            <path d="M-10 80 Q25 70 50 80 T110 80" fill="none" stroke="white" strokeWidth="2" opacity="0.5" className="animate-waves" />
            <path d="M20 65 L80 65 L70 80 L30 80 Z" fill="#F7F9FB" stroke="#1E293B" strokeWidth="2" />
            <path d="M50 65 L50 25 L85 45 Z" fill="#FFBE0B" stroke="#1E293B" strokeWidth="2" />
          </g>
        );
      case 'barba-azul':
        return (
          <g className="animate-floaty">
            <rect x="25" y="20" width="50" height="40" rx="10" fill="#FDE68A" />
            <path d="M25 55 Q25 95 50 95 Q75 95 75 55 Z" fill="#3A86FF" className="animate-beard" />
            <circle cx="40" cy="40" r="3" fill="#1E293B" />
            <circle cx="60" cy="40" r="3" fill="#1E293B" />
          </g>
        );
      case 'leo-the-lighthouse-lion':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="45" r="35" fill="#FB5607" stroke="#FFBE0B" strokeWidth="4" strokeDasharray="10 5" className="animate-spin-slow" />
            <circle cx="50" cy="45" r="22" fill="#FFBE0B" />
            <circle cx="42" cy="42" r="2.5" fill="#1E293B" />
            <circle cx="58" cy="42" r="2.5" fill="#1E293B" />
          </g>
        );
      case 'snow-white':
        return (
          <g className="animate-floaty">
            <path d="M50 85 Q20 80 20 50 Q20 20 50 25 Q80 20 80 50 Q80 80 50 85" fill="#FF006E" />
            <path d="M50 25 Q55 5 65 15" fill="none" stroke="#059669" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
      case 'nico-youtuber':
      case 'nico-youtuber-parte-2':
      case 'nico-youtuber-parte-3':
        return (
          <g className="animate-floaty">
            <rect x="20" y="25" width="60" height="45" rx="5" fill="#1E293B" stroke="white" strokeWidth="2" />
            <text x="50" y="55" textAnchor="middle" fill="#00FF00" fontSize="20" fontWeight="black" fontFamily="monospace">0</text>
            <path d="M15 45 Q10 45 10 30 T25 30 M85 45 Q90 45 90 30 T75 30" fill="none" stroke="#FF006E" strokeWidth="4" strokeLinecap="round" />
          </g>
        );
      case 'kirby-forgotten-land':
      case 'la-leyenda-de-fecto-elfilis':
        return (
          <g className="animate-floaty">
            <circle cx="50" cy="50" r="45" fill="url(#starGradient)" opacity="0.3" className="animate-spin-slow" />
            <circle cx="50" cy="50" r="30" fill="#FF85A1" stroke="#FF006E" strokeWidth="2" />
            <ellipse cx="40" cy="45" rx="3" ry="6" fill="#1E293B" />
            <ellipse cx="60" cy="45" rx="3" ry="6" fill="#1E293B" />
          </g>
        );
      default:
        return (
          <g className="animate-floaty">
            <rect x="20" y="20" width="60" height="60" rx={seed % 20} fill={['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF'][seed % 5]} />
            <g className="animate-blink-eye">
              <circle cx="40" cy="45" r="5" fill="#1E293B" />
              <circle cx="60" cy="45" r="5" fill="#1E293B" />
            </g>
            <path d="M40 65 Q50 75 60 65" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
          </g>
        );
    }
  };

  return (
    <div 
      className={`w-full h-full relative overflow-hidden flex flex-col items-center justify-center p-4 transition-transform duration-500 group-hover:scale-110 ${className}`}
      style={{ background: `linear-gradient(135deg, ${config.gradient[0]}, ${config.gradient[1]})` }}
    >
      <div className="relative w-32 h-32 drop-shadow-2xl">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <defs>
                <radialGradient id="starGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="ufoLight" cx="50%" cy="0%" r="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
            </defs>
            {renderIllustration()}
        </svg>
      </div>

      <div className="mt-4 z-10 w-full text-center">
        <div className="bg-white/20 backdrop-blur-lg px-3 py-1.5 rounded-xl border border-white/40 shadow-xl inline-block max-w-[90%]">
            <h3 className="text-white text-[10px] font-black drop-shadow-lg leading-tight uppercase tracking-tighter line-clamp-2">
                {title}
            </h3>
        </div>
      </div>

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes waves {
          0%, 100% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
        }
        @keyframes beard {
          0%, 100% { transform: skewX(-2deg); }
          50% { transform: skewX(2deg); }
        }
        @keyframes blink-eye {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-floaty { animation: floaty 4s infinite ease-in-out; }
        .animate-waves { animation: waves 3s infinite ease-in-out; }
        .animate-beard { animation: beard 2s infinite ease-in-out; transform-origin: top; }
        .animate-blink-eye { animation: blink-eye 5s infinite; transform-origin: 50% 45%; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; transform-origin: center; }
      `}</style>
    </div>
  );
};

export default StoryCover;
