import "./App.css";
import MapView from "./components/MapView";
import RestaurantList from "./components/RestaurantList";
import { useRestaurants } from "./hooks/useRestaurants";

function App() {
  const { data, loading } = useRestaurants();

  if (loading) return <p className="p-6">Cargando...</p>;

  return (
    <div className="p-6 space-y-10">
      <h1 className="text-3xl font-bold">Restaurants</h1>

      {/* List + Pagination */}
      <RestaurantList restaurants={data} />

      {/* Map */}
      <MapView
        restaurants={data}
        center={{ lat: 19.4326, lng: -99.1332 }}
        radius={1000}
        minRating={3}
      />
    </div>
  );
}

export default App;
