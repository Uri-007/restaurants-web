import { useState } from "react";
import type { Restaurant } from "../types/restaurant";
import RestaurantCard from "./RestaurantCard";
import Pagination from "./Pagination";

interface Props {
  restaurants: Restaurant[];
}

const ITEMS_PER_PAGE = 6;

export default function RestaurantList({ restaurants }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(restaurants.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentRestaurants = restaurants.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
}
