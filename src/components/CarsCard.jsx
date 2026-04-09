import "./CarsCard.css";

export function GameCard({ title, category, banner }) {
  return (
    <div className="vortex-card">
      <img src={banner} alt={title} className="card-img" />

      <div className="card-info">
        <h4>{title}</h4>
        <p>{category}</p>
      </div>
    </div>
  );
}

//props - Properties ou Propriedades
