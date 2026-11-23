export type Habilidade = {
    nome: string;
    nivel: 'Iniciante' | 'Básico' | 'Intermediário' | 'Avançado';
}

const habilidades: Habilidade[] = [
    { nome: 'Linguagem C', nivel: 'Intermediário'},
    { nome: 'HTML' , nivel: 'Intermediário'},
    { nome: 'CSS', nivel: 'Intermediário' },
    { nome: 'TypeScript', nivel: 'Básico' },
    { nome: 'Tailwind CSS', nivel: 'Básico' },
    { nome: 'Angular', nivel: 'Básico' },
    { nome: 'React', nivel: 'Iniciante' },
    { nome: 'Git', nivel: 'Iniciante' },
]

export function Habilidades() {
    return (
        <section className="mt-2 w-[90%] mx-auto rounded-2xl border border-slate-50 p-4 bg-slate-100 shadow-sm">
            <h2 className="mb-3 font-bold text-sky-800">Habilidades</h2>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {habilidades.map((h) => (
                    <li
                        key={h.nome}
                        className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition duration-300 
                            hover:shadow-lg hover:bg-sky-100" >
                        <p className="font-semibold text-slate-800">{h.nome}</p>
                        <p className="text-sm text-slate-500">{h.nivel}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}