import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Special from "./components/Special";
import Consoles from "./components/Consoles";
import Browse from "./components/Browse";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#004156] to-[#022748]">
      {/* Navbar */}
      <Navbar />
      {/* Categories */}
      <Categories />
      {/* Featured */}
      <Featured />
      {/* Special Offers */}
      <Special />
      {/* Consoles */}
      <Consoles />
      {/* Browse */}
      <Browse />
      {/* Footer */}
    </div>
  );
}

export default App;
