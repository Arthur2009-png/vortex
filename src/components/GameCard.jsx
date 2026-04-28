import "./GameCard.css";
import { Play, Heart } from "lucide-react";


export function GameCard({ title, category, banner, isFavorite, onFavorite }) {
  return (
    <div className="vortex-card">
      <img src={banner} alt={title} className="card-img" />

      <button
        className={`favorite-btn ${isFavorite ? "active" : ''}`}
        onClick={onFavorite}
      >
        <Heart
          size={20}
          fill={isFavorite ? "#7c3aed" : "tranparent"}
          stroke={isFavorite ? "#7c3aed" : "white"}
        />

      </button>

      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>
        <button className="play-btn">
          <Play size={14} fill="white" />
        </button>
      </div>
    </div>
  );
}

//props - Properties ou Propriedades
