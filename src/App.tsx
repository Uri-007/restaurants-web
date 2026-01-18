import "./App.css";
import RestaurantList from "./components/RestaurantList";
import Loading from "./components/Loading";
import { useRestaurants } from "./hooks/useRestaurants";

function App() {
  const { data, loading } = useRestaurants();

  if (loading) {
    return <Loading text="Cargando restaurantes..." />;
  }

  return (
    <main className="p-6 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-800">Melp Restaurants</h1>
        <p className="text-gray-500 text-sm max-w-xl">
          Descubre los mejores restaurantes cerca de ti, ordénalos por
          calificación o nombre y encuentra nuevas recomendaciones en tu zona.
        </p>
      </header>

      {/* List + Pagination */}
      <RestaurantList restaurants={data} />
    </main>
  );
}

export default App;
