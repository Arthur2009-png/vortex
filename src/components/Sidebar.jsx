import "./Sidebar.css"
import { LayoutDashboard, Gamepad2, User } from 'lucide-react'
export function Sidebar() {
    return (
        <aside className="Vortex_Sidebar">

            <h2 className="logo">VORTEX</h2>

            <div>
                <div className="nav-item" active=""> <LayoutDashboard size={20} />DashBoard </div>
                <div className="nav-item" > <Gamepad2 size={20} />Meus jogos</div>
                <div className="nav-item" active=""> <User size={20} />Perfil</div>
            </div>


        </aside>
    );
}

export default Sidebar