import type { Restaurant } from "../types/restaurant";

export const sortByName = (arr: Restaurant[]): Restaurant[] => {
  return [...arr].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortByRating = (arr: Restaurant[]): Restaurant[] => {
  return [...arr].sort((a, b) => b.rating - a.rating);
};
