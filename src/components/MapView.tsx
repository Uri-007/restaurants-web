import { Circle, MapContainer, Marker, TileLayer } from "react-leaflet";
import type { Restaurant } from "../types/restaurant";
import { distanceInMeters } from "../utils/geo";
import { Icon } from "@iconify/react";

interface MapViewProps {
  restaurants: Restaurant[];
  center: { lat: number; lng: number };
  radius: number;
  minRating: number;
}

export default function MapView({
  restaurants,
  center,
  radius,
  minRating,
}: MapViewProps) {
  const filtered = restaurants.filter((r) => {
    const d = distanceInMeters(
      center.lat,
      center.lng,
      r.address.location.lat,
      r.address.location.lng,
    );
    return d <= radius && r.rating >= minRating;
  });

  const avgRating =
    filtered.reduce((acc, r) => acc + r.rating, 0) / filtered.length || 0;

  return (
    <section className="mt-14">
      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            <Icon icon="mdi:map" className="text-orange-500 text-2xl" />
            Mapa de restaurantes
          </h2>

          <div className="flex gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">
              <Icon icon="mdi:map-marker-radius" />
              {filtered.length} cercanos
            </span>
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
              <Icon icon="mdi:star" />
              {avgRating.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Map */}
        <div className="relative h-[420px] z-0">
          <MapContainer
            center={[center.lat, center.lng]}
            zoom={13}
            className="h-full w-full"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle
              center={[center.lat, center.lng]}
              radius={radius}
              pathOptions={{
                color: "#fb923c",
                fillColor: "#fed7aa",
                fillOpacity: 0.35,
              }}
            />

            {filtered.map((r) => (
              <Marker
                key={r.id}
                position={[r.address.location.lat, r.address.location.lng]}
              />
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
}
