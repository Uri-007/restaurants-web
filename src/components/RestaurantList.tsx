import { useState } from "react";
import type { Restaurant } from "../types/restaurant";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";
import { sortByName, sortByRating } from "../utils/sorting";

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
      <div className="flex justify-between items-center mb-6">
        <p className="text-sm text-gray-500">
          {sortedRestaurants.length} restaurantes
        </p>

        <select
          value={sort}
          onChange={(e) => {
            setSort(e.target.value as "name" | "rating");
            setCurrentPage(1);
          }}
          className="px-4 py-2 rounded-xl border border-gray-200 text-sm"
        >
          <option value="name">Ordenar por nombre (A-Z)</option>
          <option value="rating">Ordenar por calificación</option>
        </select>
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
