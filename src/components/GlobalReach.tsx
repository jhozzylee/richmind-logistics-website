"use client";

import React, { useState, useEffect } from "react";
import { Plus, Minus, Move } from "lucide-react";

// @ts-ignore
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker, 
  ZoomableGroup 
} from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const markers = [
  { id: 1, coord: [3.37, 6.52] }, { id: 2, coord: [121.47, 31.23] }, { id: 3, coord: [4.47, 51.92] },
  { id: 4, coord: [-74.00, 40.71] }, { id: 5, coord: [55.27, 25.20] }, { id: 6, coord: [151.20, -33.86] },
  { id: 7, coord: [-46.63, -23.55] }, { id: 8, coord: [18.42, -33.92] }, { id: 9, coord: [77.20, 28.61] },
  { id: 10, coord: [-118.24, 34.05] }, { id: 11, coord: [37.61, 55.75] }, { id: 12, coord: [103.81, 1.35] },
  { id: 13, coord: [-99.13, 19.43] }, { id: 14, coord: [31.23, 30.04] }, { id: 15, coord: [139.69, 35.68] },
  { id: 16, coord: [-70.64, -33.44] }, { id: 17, coord: [114.16, 22.31] }, { id: 18, coord: [28.04, -26.20] },
  { id: 19, coord: [12.49, 41.90] }, { id: 20, coord: [-0.12, 51.50] }, { id: 21, coord: [101.68, 3.13] },
  { id: 22, coord: [-79.38, 43.65] }, { id: 23, coord: [24.93, 60.16] }, { id: 24, coord: [115.86, -31.95] },
  { id: 25, coord: [39.20, -6.79] }, { id: 26, coord: [-122.41, 37.77] }, { id: 27, coord: [2.35, 48.85] },
  { id: 28, coord: [126.97, 37.56] }, { id: 29, coord: [11.58, 48.13] }, { id: 30, coord: [174.76, -36.84] },
  { id: 31, coord: [73.04, 33.68] }, { id: 32, coord: [32.85, 39.93] }, { id: 33, coord: [-58.38, -34.60] },
  { id: 34, coord: [13.40, 52.52] }, { id: 35, coord: [51.38, 35.68] }, { id: 36, coord: [-9.13, 38.72] },
  { id: 37, coord: [46.67, 24.71] }, { id: 38, coord: [67.00, 24.86] }, { id: 39, coord: [100.50, 13.75] },
  { id: 40, coord: [-43.17, -22.90] }, { id: 41, coord: [36.82, -1.29] }, { id: 42, coord: [120.98, 14.59] },
  { id: 43, coord: [-3.70, 40.41] }, { id: 44, coord: [35.21, 31.76] }, { id: 45, coord: [144.96, -37.81] },
  { id: 46, coord: [106.62, 10.82] }, { id: 47, coord: [54.37, 24.45] }, { id: 48, coord: [-77.03, 38.90] },
  { id: 49, coord: [15.05, 12.11] }, { id: 50, coord: [90.41, 23.81] }, { id: 51, coord: [-70.66, -33.44] }
];

export default function GlobalReach() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ coordinates: [0, 0] as [number, number], zoom: 1 });

  // Ensure map only renders on client to prevent hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  function handleMoveEnd(pos: { coordinates: [number, number], zoom: number }) {
    setPosition(pos);
  }

  // Placeholder while loading or on server
  if (!mounted) {
    return (
      <section className="w-full bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
          <div className="w-full aspect-video md:aspect-[21/9] bg-[#1A2632] rounded-[3rem] animate-pulse" />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-surface py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1680px] px-[clamp(1.5rem,8vw,11.5rem)]">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center gap-6 mb-16">
          <div className="inline-flex items-center gap-3 border border-brand-orange/20 rounded-full px-4 py-2 bg-brand-orange/5 shadow-sm">
             <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            <span className="text-xsmall-bold text-brand-orange uppercase tracking-[0.2em]">Live Logistics Grid</span>
          </div>
          <h2 className="text-h2 md:text-[3.2rem] text-neutral font-bold leading-none">
            Global Reach, <span className="text-brand-orange italic font-medium">Local Strength</span>
          </h2>
        </div>

        {/* INTERACTIVE MAP BOX */}
        <div className="relative bg-[#1A2632] rounded-[3rem] p-4 lg:p-6 overflow-hidden shadow-2xl aspect-video md:aspect-[21/9] cursor-grab active:cursor-grabbing">
          
          {/* Status Indicators */}
          <div className="absolute top-8 left-8 z-20 flex flex-col gap-1 pointer-events-none">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest">System Online</span>
            </div>
            <p className="text-white font-bold text-lg tracking-tighter uppercase">Global_Nodes</p>
          </div>

          {/* Navigation Hint */}
          <div className="absolute top-8 right-8 z-20 hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none">
            <Move size={14} className="text-brand-orange" />
            <span className="text-white/70 text-[10px] uppercase font-bold tracking-widest">Drag to Explore</span>
          </div>

          {/* MAP COMPONENT */}
          <ComposableMap
            projectionConfig={{ scale: 190 }}
            className="w-full h-full"
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: any) =>
                  geographies.map((geo: any) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#2D3E4E"
                      stroke="#1A2632"
                      strokeWidth={0.5}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#385D76", outline: "none" },
                        pressed: { outline: "none" }
                      }}
                    />
                  ))
                }
              </Geographies>

              {markers.map((marker) => (
                <Marker key={marker.id} coordinates={marker.coord}>
                  <g>
                    {/* Visual Pulse */}
                    <circle r={6} fill="#FFA500" className="animate-ping opacity-25" />
                    <circle r={2.5} fill="#FFA500" />
                  </g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Grid Background Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#385D76_1px,transparent_1px)] [background-size:30px_30px]" />
          
          {/* ZOOM CONTROLS */}
          <div className="absolute bottom-8 left-8 z-30 flex gap-2">
             <button 
                type="button"
                onClick={() => setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }))}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-all active:scale-95"
             >
                <Plus size={20} />
             </button>
             <button 
                type="button"
                onClick={() => setPosition(pos => ({ ...pos, zoom: Math.max(1, pos.zoom / 1.5) }))}
                className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl flex items-center justify-center hover:bg-brand-orange transition-all active:scale-95"
             >
                <Minus size={20} />
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}