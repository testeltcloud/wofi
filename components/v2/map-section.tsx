"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

const GEO_URL = "/data/world-110m.json";

type Coords = [number, number]; // [longitude, latitude]

interface GeoFeature {
  rsmKey: string;
  [key: string]: unknown;
}

const CITIES: { name: string; coords: Coords }[] = [
  { name: "New York",      coords: [-74,    40.7]  },
  { name: "São Paulo",     coords: [-46.6, -23.5]  },
  { name: "London",        coords: [0,      51.5]  },
  { name: "Cairo",         coords: [31.2,   30.0]  },
  { name: "Johannesburg",  coords: [28.0,  -26.2]  },
  { name: "Dubai",         coords: [55.3,   25.2]  },
  { name: "Mumbai",        coords: [72.8,   19.1]  },
  { name: "Bangkok",       coords: [100.5,  13.7]  },
  { name: "Singapore",     coords: [103.8,   1.4]  },
  { name: "Tokyo",         coords: [139.7,  35.7]  },
  { name: "Sydney",        coords: [151.2, -33.9]  },
  { name: "Mexico City",   coords: [-99.1,  19.4]  },
];

const ROUTES: [number, number][] = [
  [0,  2],  // New York → London
  [2,  3],  // London → Cairo
  [3,  5],  // Cairo → Dubai
  [5,  6],  // Dubai → Mumbai
  [6,  8],  // Mumbai → Singapore
  [8,  9],  // Singapore → Tokyo
  [9,  10], // Tokyo → Sydney
  [0,  1],  // New York → São Paulo
  [1,  4],  // São Paulo → Johannesburg
  [4,  5],  // Johannesburg → Dubai
  [11, 0],  // Mexico City → New York
  [7,  8],  // Bangkok → Singapore
];

const STATS = [
  {
    value: "165+",
    label: "países cobertos",
    desc: "Europa, Ásia, Américas e Oriente Médio conectados na plataforma.",
  },
  {
    value: "0",
    label: "risco operacional",
    desc: "Sem estoque, sem logística. Sua agência vende 100% digital.",
  },
  {
    value: "24h",
    label: "ativação do eSIM",
    desc: "Entregue digitalmente direto no celular do viajante.",
  },
  {
    value: "R$0",
    label: "custo de entrada",
    desc: "Cadastro gratuito. Comece a oferecer conectividade hoje mesmo.",
  },
];

const CYCLE   = 20;
const STAGGER = CYCLE / ROUTES.length;

export function V2MapSection() {
  return (
    <section className="relative bg-[#f4f6fb] py-16 lg:py-24">

      {/* ── Estilos de animação ───────────────────────────────────────── */}
      <style>{`
        .rsm-rt {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          opacity: 0;
          animation: rsm-trace ${CYCLE}s linear infinite;
        }
        @keyframes rsm-trace {
          0%,4%      { stroke-dashoffset:1;  opacity:0   }
          6%         { stroke-dashoffset:1;  opacity:.75 }
          18%        { stroke-dashoffset:0;  opacity:.75 }
          21%        { stroke-dashoffset:0;  opacity:.75 }
          25%        { stroke-dashoffset:-1; opacity:0   }
          25.1%,100% { stroke-dashoffset:1;  opacity:0   }
        }
        .rsm-ring {
          transform-box: fill-box;
          transform-origin: center;
          animation: rsm-ring 2.8s ease-out infinite;
        }
        @keyframes rsm-ring {
          0%   { transform:scale(1);   opacity:.65 }
          100% { transform:scale(3.8); opacity:0   }
        }
        @keyframes rsm-dot {
          0%,100%{ opacity:1   }
          50%    { opacity:.45 }
        }
        @media (prefers-reduced-motion: reduce) {
          .rsm-rt, .rsm-ring { animation:none!important }
        }
      `}</style>

      {/* ── Título central ───────────────────────────────────────────── */}
      <div className="mx-auto mb-12 max-w-[860px] px-5 text-center sm:px-8">
        <h2
          className="font-[family-name:var(--font-sora)] font-extrabold leading-[1.1] tracking-[-0.025em] text-[#0b1020]"
          style={{ fontSize: "clamp(1.75rem, 3vw + 0.5rem, 2.9rem)" }}
        >
          A conectividade deixou de ser um detalhe da viagem.{" "}
          <span className="text-[#15803d]">Hoje, ela faz parte essencial</span>{" "}
          da experiência do viajante.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-[#5b647b]">
          A Woofi consolida soluções de conectividade em uma única plataforma,
          permitindo que sua agência entregue uma experiência de turismo mais
          completa, moderna e integrada.
        </p>
      </div>

      {/* ── Corpo: stats + mapa ──────────────────────────────────────── */}
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:gap-0 lg:px-12">

        {/* Estatísticas */}
        <div className="w-full space-y-8 lg:w-[28%] lg:shrink-0 lg:pr-10">
          {STATS.map((s) => (
            <div key={s.label}>
              <p
                className="font-[family-name:var(--font-sora)] font-black leading-none text-[#0b1020]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)" }}
              >
                {s.value}
              </p>
              <p className="mt-1 text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[#15803d]">
                {s.label}
              </p>
              <p className="mt-1.5 text-[0.88rem] leading-[1.6] text-[#5b647b]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mapa */}
        <div className="w-full flex-1">
          <ComposableMap
            projection="geoNaturalEarth1"
            projectionConfig={{ scale: 153, center: [15, 10] }}
            style={{ width: "100%", height: "auto" }}
          >
            {/* Gradiente e glow para os pins */}
            <defs>
              <radialGradient id="rsmPinGrad" cx="35%" cy="28%" r="70%">
                <stop offset="0%"   stopColor="#fcd34d" />
                <stop offset="55%"  stopColor="#f97316" />
                <stop offset="100%" stopColor="#c2410c" />
              </radialGradient>
              <filter id="rsmGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="1.8" result="b" />
                <feMerge>
                  <feMergeNode in="b" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Países */}
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: GeoFeature[] }) =>
                geographies.map((geo: GeoFeature) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#c5cade"
                    stroke="#f4f6fb"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover:   { outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* Rotas animadas */}
            {ROUTES.map(([fi, ti], i) => (
              <Line
                key={i}
                from={CITIES[fi].coords}
                to={CITIES[ti].coords}
                stroke="#f97316"
                strokeWidth={1.4}
                strokeLinecap="round"
                className="rsm-rt"
                /* pathLength normaliza o dash para funcionar sem medir */
                pathLength={1}
                style={{ animationDelay: `${-(i * STAGGER).toFixed(2)}s` }}
              />
            ))}

            {/* Marcadores de cidade */}
            {CITIES.map((city, i) => {
              const delay = `${((i * 0.42) % 2.8).toFixed(2)}s`;
              return (
                <Marker key={i} coordinates={city.coords}>
                  {/* Anel de ripple */}
                  <circle
                    r={4}
                    fill="none"
                    stroke="#f97316"
                    strokeWidth={1}
                    className="rsm-ring"
                    style={{ animationDelay: delay }}
                  />
                  {/* Pin — teardrop laranja */}
                  <g
                    transform="translate(0, -10)"
                    filter="url(#rsmGlow)"
                    style={{ pointerEvents: "none" }}
                  >
                    <path
                      d="M0,-7 C-4,-7 -7,-4 -7,0 C-7,4 0,10 0,10 C0,10 7,4 7,0 C7,-4 4,-7 0,-7 Z"
                      fill="url(#rsmPinGrad)"
                    />
                    <circle cx={0} cy={-0.5} r={2.2} fill="white" opacity={0.85} />
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
