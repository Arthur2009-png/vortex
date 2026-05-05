import"./GameModal.css"
import { X, trophy, Users, Clock } from "lucide-react";

export function GameModal({ game, onClose }) {
    // caso nao tenha jogo selecionado, nao retorna nada 
    if (!game) return null;

    return (
        // se clicar fora do card, se fecha na hora
        <div className="modal-overlay" onClick={onClose}>
            {/* não deixa que o card se feixe com um click nele mesmo  */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* adiciona um botao X para sair do card */}
                <button className="close-bnt" onClick={onClose}>
                    < X />
                </button>

                <img src={game.banner} alt={game.tittle} className="modal-banner" />

                {/* conteudo de dentro do card/modal */}
                <div className="modal-body">
                    <span className="modal-category">{game.category}</span>
                    <h2>{game.tittle}</h2>
                    <p className="description">
                        prepare-se para uma experiencia epica em {game.tittle}. Domine as habilidades,
                        suba no ranking e torne-se uma lenda no ecossistema vortex.
                    </p>

                    <div className="game-status">
                        <div className="stat">
                            <Trophy size={18} /> <span>Ranking: #01</span>
                        </div>
                        <div className="stat">
                            <Users size={18} /> <span>online: 128</span>
                        </div>
                        <div className="stat">
                            <Clock size={18} /> <span>tempo: 44Hrs</span>
                        </div>
                    </div>
                    <button className="stat game-bnt">Iniciar Jogo</button>
                </div>

            </div>
        </div>
    );

}
