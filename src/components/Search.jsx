export function Search({ value, onChange }) {
    return (
        <div className="my-4">
            <input onChange={(e) => onChange(e.target.value)} value={value} className="w-full p-2 bg-zinc-800 rounded outline-0"  type="text" placeholder="Buscar produtos..."/>
        </div>
    )
}