import { Icon } from "@iconify/react";
import type { Restaurant } from "../types/restaurant";

interface Props {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-rose-50 opacity-70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">
              {restaurant.name}
            </h2>
            <span className="inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-700">
              {restaurant.type}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-green-500 text-white text-sm font-semibold shadow">
            {restaurant.rating}
          </div>
        </div>

        {/* Address */}
        <p className="text-sm text-gray-600 mb-5 flex items-center gap-2">
          <span className="text-orange-500">
            <Icon icon="gridicons:location" />
          </span>
          {restaurant.address.street}, {restaurant.address.city}
        </p>

        {/* Action */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${restaurant.contact.site}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-semibold shadow hover:bg-blue-700 transition-all"
        >
          Compartir
        </a>
      </div>
    </div>
  );
}
