import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { gamesData } from "./data/games";
import { GameCard } from "./components/GameCard";
import "./App.css";

function App() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState("dash");
  const [favorites, setFavorites] = useState([]); 

  const filteredGames = gamesData
  .filter((game) => activeTab === "dash" || favorites.includes(game.id))
  .filter((game) => game.title.toLowerCase().includes(search.toLowerCase()));


const toggleFavorite = (id) => {
// verifica se o item esta no array, se sim ele substitui o item e o reorganiza
  setFavorites((prev) => prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],

  );

}

  return (
    <div className="vortex-app">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="vortex-main">

        <Header search = {search} setSearch={setSearch} />

        <div className="vortex-content">

          <h2 className="section-title">
            {activeTab === "dash" && "Dashboard"}
            {activeTab === "favorite" && "meus jogos"}
            {activeTab === "profile" && "Perfil"}
          </h2>

          <div className="vortex-grid">

           {filteredGames.length > 0 ? (
            filteredGames.map((g) => (
               <GameCard
                key={g.id}
                title={g.title}
                category={g.category}
                banner={g.banner}
                isFavorite={favorites.includes(g.id)}
                onFavorite={() => toggleFavorite(g.id)}
              />
            ))
           ) : (
            <p style={{color: "#94a3b8"}}>Nenhum jogo encontrado...</p>
           )}
            
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
