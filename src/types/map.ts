import type { Restaurant } from "./restaurant";

export interface Map {
  restaurants: Restaurant[];
  center: { lat: number; lng: number };
  radius: number;
  minRating: number;
}
