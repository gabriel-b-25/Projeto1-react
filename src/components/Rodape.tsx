type RodapeProps = {
    nome: string;
    instituicao: string;
    curso: string;
    disciplina: string;
    ano: number;
}

export function Rodape({ nome, instituicao, curso, disciplina, ano }: RodapeProps) {
    return (
        <footer className="mt-4 bg-slate-800 p-4 text-center text-sm text-slate-50">
            <p> {instituicao} - {curso} </p>
            <p> Disciplina: {disciplina}</p>
            <p> © {ano} {nome} </p> 
        </footer>
    )
  }