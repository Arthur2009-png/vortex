import './Header.css';
import { Bell, Zap } from "lucide-react";

export function Header() {
    return (
        <header className="Vortex_Header">
            <div className="user-info">
                <h4>Bem vindo <span className="destaque">José</span></h4>
                <p>Status: online no level 01</p>
            </div>

            <div className="Header_actions">

                <div className="badge">
                    <Zap size={20} />
                    <span>Pro player</span>
                </div>

                <button className="notificacoes">
                    <Bell />
                </button>

            </div>


        </header>


    )
}

export default Header

