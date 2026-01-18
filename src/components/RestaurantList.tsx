import { useState } from "react";
import type { Restaurant } from "../types/restaurant";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import { sortByName, sortByRating } from "../utils/sorting";
import { Icon } from "@iconify/react";

interface Props {
  restaurants: Restaurant[];
}

const ITEMS_PER_PAGE = 6;

export default function RestaurantList({ restaurants }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState<"name" | "rating">("name");

  const sortedRestaurants =
    sort === "name" ? sortByName(restaurants) : sortByRating(restaurants);

  const totalPages = Math.ceil(sortedRestaurants.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRestaurants = sortedRestaurants.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  return (
    <>
      {/* Header controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        {/* Count */}
        <p className="text-sm text-gray-500">
          {sortedRestaurants.length} restaurantes encontrados
        </p>

        {/* Sort select */}
        <div className="relative w-full sm:w-64">
          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as "name" | "rating");
              setCurrentPage(1);
            }}
            className="
        w-full appearance-none
        rounded-xl
        bg-white
        border border-gray-200
        px-4 py-2.5
        pr-10
        text-sm font-medium text-gray-700
        shadow-sm
        cursor-pointer
        transition
        hover:border-blue-400
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      "
          >
            <option value="name">Ordenar por nombre (A-Z)</option>
            <option value="rating">Ordenar por calificación</option>
          </select>

          {/* Custom arrow */}
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <Icon icon="mynaui:filter-solid" />
          </span>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </>
  );
}
