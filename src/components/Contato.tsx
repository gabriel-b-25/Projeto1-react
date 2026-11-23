type ContatoProps = {
    nome: string;
    email: string;
    redeSocial?: string;
}

export function Contato ({nome, email, redeSocial}: ContatoProps){

    return(
        <section className="mt-2 w-[85%] mx-auto rounded-2xl border border-slate-200 p-4 bg-slate-200 shadow-md 
            transition duration-300 hover:shadow-xl hover:bg-sky-100">
            <h2 className="mb-2 text-xl font-bold">Contato</h2>

            <p className="text-slate-700">{nome}</p>
            <p className="text-slate-700"> E-mail: {email} </p>
            
            {redeSocial !== undefined && (
                <p className="text-slate-700"> Rede Social: {redeSocial}</p>
            )}
        </section>
    )
}