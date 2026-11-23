type Projeto = {
    id: number;
    titulo: string;
    descricao: string;
    link?: string; 
    situacao: 'Em andamento' | 'Concluido';
    
}

const projetos: Projeto[] = [
    {
        id: 1,
        titulo: 'Portfólio',
        descricao: 'Página de perfil feita com React e Tailwind.',
        link: 'https://github.com/gabriel-b-25/Projeto1-react.git',
        situacao: 'Concluido',
    },
    {
        id: 2,
        titulo: 'Site Voluntarium',
        descricao: 'Site da plataforma Voluntarium, que conecta pessoas, instituições e empresas para dar visibilidade a projetos de forma confiável ' +
            'e promover a captação de recursos e o voluntariado. (Projeto desenvolvido nas disciplinas de Extensão do curso de ADS-IFTM).',
        situacao: 'Concluido',
    },
    {
        id: 3,
        titulo: 'Calculadora de IMC',
        descricao: 'Página dinâmica simples com calculadora de IMC e histórico dos cálculos, desenvolvida em Angular e TypeScript.',
        situacao: 'Concluido',
    },
    {
        id: 4 ,
        titulo: 'Pitada de Psicologia',
        descricao: 'Site estático com HTML e CSS desenvolvido durante a disciplina de Fundamentos de Web Design no 1º período do curso de ADS.',
        link: 'https://gabriel-b-25.github.io/Site-Pitada_de_Psicologia/',
        situacao: 'Concluido',
    },   
    {
        id: 5,
        titulo: 'Lista de Tarefas',
        descricao: 'Site simples com exibição de tarefas pendentes e tarefas já realizadas.',
        situacao: 'Em andamento',
    },
]

function mostrarProjetos(p: Projeto) {
    return (
        <article
            key={p.id}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 
                hover:-translate-y-1 hover:shadow-xl">
            
            <div className="p-3">
                <h3 className="font-bold text-sky-800">{p.titulo}</h3>

                <span className={'mt-1 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium ' +
                    (p.situacao === 'Em andamento'
                    ? 'bg-amber-100 text-amber-800'
                    : 'bg-green-100 text-green-800' )}> 
                    {p.situacao} 
                </span>

                <p className="mt-2 text-sm text-slate-600">{p.descricao}</p>

                {p.link !== undefined && (
                    <a href={p.link} target="_blank" rel="noreferrer"
                       className="mt-2 inline-block text-sm text-sky-700 underline hover:text-sky-900" >
                       Ver projeto
                    </a>
                )}
            </div>
        </article>
    )
}

export function Projetos() {
    return(
        <section className="mt-2 w-[85%] mx-auto rounded-2xl border border-slate-200 p-4 bg-slate-200 shadow-md">
            <h2 className="mb-3 text-xl font-bold">Projetos</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {projetos.map(mostrarProjetos)}
            </div>
        </section>
    )
}