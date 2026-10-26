import { Link } from "react-router-dom"

export function Header() {
    return (
        <header className="w-full bg-zinc-800 py-3">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link  className="text-zinc-50 text-2xl font-bold" to='/'>Mini Catálogo</Link>

            <nav>
                <ul className="flex items center-center gap-4">
                    <li>
                        <Link className="text-zinc-50" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-zinc-50" to='favoritos'>Favoritos</Link>
                    </li>
                </ul>
            </nav>
            </div>
            
        </header>
    )
}