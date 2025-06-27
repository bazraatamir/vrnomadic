"use client";

import dynamic from "next/dynamic";
import {useRef, useEffect, useState} from "react";
import * as topojson from "topojson-client";

// Globe компонентийг dynamic-аар import хийнэ (SSR-гүй)
const Globe = dynamic(() => import("react-globe.gl"), {ssr: false});

export default function VirtualCulture() {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<any[]>([]);
  const [mongoliaBorders, setMongoliaBorders] = useState<any[]>([]);
  useEffect(() => {
    if (globeRef.current) {
      // Камераг ойртуулж байна (жижиг тоо бол ойртож харагдана)
      globeRef.current.controls().minDistance = 150;
      globeRef.current.controls().maxDistance = 400;

      // Эсвэл шууд харах өнцөг тохируулах
      globeRef.current.pointOfView({lat: 30, lng: 90, altitude: 1.2}, 1000);
    }
  }, []);

  return (
    <div className='container h-[600px] flex bg-[#BFC8E6] rounded-2xl  overflow-hidden mx-auto my-16 shadow-lg '>
      {/* Зүүн талын тайлбар хэсэг */}
      <div className='w-1/2 p-6 flex items-center justify-center text-gray-800'>
        <div className='max-w-lg space-y-4'>
          <h2 className='text-6xl font-bold text-[#2E3192] uppercase mb-4'>
            Виртуал өв соёл төсөл
          </h2>
          <p className='text-[12px] ml-4 leading-relaxed'>
            Виртуал өв соёл төсөл нь Монголын байгалийн үзэсгэлэн, дурсгалт
            газруудыг цаашлаад түүх өв соёлыг хадгалан таниулж буй музейнүүдийг
            дижитал орчинд хадгалан өвлүүлэх, сурталчлан таниулах, дэвшилтэт
            технологиор дамжуулан хүүхэд залуучууд соёлын өвтэй танилцах
            боломжийг бүрдүүлэх зорилготой төсөл юм.
          </p>
        </div>
      </div>

      {/* Баруун талын бөмбөрцөг */}
      <div className='w-1/2 h-full relative bottom-[-100px] right-70'>
        <Globe
          ref={globeRef}
          globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
          backgroundColor='rgba(0,0,0,0)'
          polygonSideColor={() => "hsla(120, 100.00%, 19.60%, 0.15)"}
          polygonStrokeColor={() => "#111"}
        />
      </div>
    </div>
  );
}
