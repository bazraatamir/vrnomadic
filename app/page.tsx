"use client";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";

const Globe = dynamic(() => import("react-globe.gl"), {ssr: false});

export default function HomePage() {
  const globeEl = useRef<any>();
  const router = useRouter();

  const [countries, setCountries] = useState<any[]>([]);
  const [mongoliaProvinces, setMongoliaProvinces] = useState<any[]>([]);
  const [labels, setLabels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Улс орны хил бүхий GeoJSON-ыг татаж авах
        const countriesRes = await fetch(
          "https://raw.githubusercontent.com/vasturiano/globe.gl/refs/heads/master/example/datasets/ne_110m_admin_0_countries.geojson"
        );
        const countriesData = await countriesRes.json();

        // Монгол Улсын гео өгөгдлийг countriesData доторээс ялгах
        const mongoliaCountry = countriesData.features.find(
          (f: any) => f.properties.ADMIN === "Mongolia"
        );

        let provincesFeatures: any[] = [];
        if (mongoliaCountry && mongoliaCountry.properties.hasSubunits) {
          provincesFeatures = mongoliaCountry.subunits.features;
        } else {
          // Mongolian аймгуудыг өөрөө өөр JSON-аас авах хэрэгтэй.
          provincesFeatures = [];
        }

        // Аймгуудын координат буюу labels-г дотоодоос
        const labelsData = [
          {lat: 47.8971101, lng: 100.7240165, text: "Arkhangai"},

          {lat: 49.9833, lng: 92.0667, text: "Uvs"},
          {lat: 50.2204484, lng: 100.3213768, text: "Khuvsgul"},
          {lat: 46.5653163, lng: 113.5380836, text: "Sukhbaatar"},
        ];

        setCountries(countriesData.features);
        setMongoliaProvinces(provincesFeatures);
        setLabels(labelsData);
        setLoading(false);
      } catch (error) {
        console.error("Өгөгдөл татахад алдаа гарлаа:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 1.0;
        globeEl.current.pointOfView(
          {lat: 47.9, lng: 106.9, altitude: 0.8},
          4000
        );
      }, 3000);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center bg-black text-white text-2xl'>
        Өгөгдөл татаж байна...
      </div>
    );
  }

  return (
    <div className='w-full h-screen bg-black overflow-x-hidden'>
      <Globe
        ref={globeEl}
        globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
        backgroundColor='black'
        polygonsData={[...countries, ...mongoliaProvinces]}
        polygonCapColor={(d: any) =>
          d.properties.ADMIN === "Mongolia"
            ? "rgba(255, 0, 0, 0.3)"
            : "rgba(0, 0, 255, 0.15)"
        }
        polygonSideColor={() => "rgba(0, 100, 0, 0.05)"}
        polygonStrokeColor={(d: any) =>
          d.properties.ADMIN === "Mongolia" ? "#FF0000" : "#0000FF"
        }
        polygonLabel={(d: any) =>
          d.properties.ADMIN === "Mongolia" ? d.properties.ADMIN : null
        }
        labelsData={labels}
        labelSize={1.2}
        labelDotRadius={0.4}
        labelColor={() => "red"}
        onPolygonClick={(polygon) => {
          if (polygon.properties.ADMIN === "Mongolia") {
            const provinceName =
              polygon.properties.NAME_1 || polygon.properties.ADMIN;
            router.push(`/province/${provinceName}`);
          }
        }}
      />
    </div>
  );
}
