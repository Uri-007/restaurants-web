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
      <header>
        <h1 className="text-3xl font-bold text-gray-800">Restaurants</h1>
        <p className="text-gray-500 text-sm">
          Explora restaurantes cercanos y descubre nuevas opciones
        </p>
      </header>

      {/* List + Pagination */}
      <RestaurantList restaurants={data} />
    </main>
  );
}

export default App;
