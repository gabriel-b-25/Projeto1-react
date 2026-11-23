type CabecalhoProps = {
    nome: string;
    curso: string;
    periodo: number;
    foto?: string;
}

export function Cabecalho ({nome, curso, periodo, foto}: CabecalhoProps) {

    return(
        <section className="mt-2 w-[85%] mx-auto rounded-2xl border border-sky-100 p-4 bg-sky-100 shadow-md
            hover:shadow-xl hover:bg-sky-200 hover:border-sky-200 hover:transition duration-300">
            
            <div className="flex items-center gap-4">
                {foto && (
                    <img src={foto} alt={`Foto de ${nome}`} className="h-16 w-16 rounded-full object-cover object-top" />
                )}
                <div>
                    <h2 className="mb-2 font-bold text-xl  text-sky-900"> {nome} </h2>
                    <p className=" text-sm text-slate-500"> {curso} - {periodo}º período </p>
                </div>
            </div>
        </section>
    )

}