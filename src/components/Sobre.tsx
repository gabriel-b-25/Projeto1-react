import type { ReactNode } from "react";

type SobreProp = {
    titulo: string;
    children: ReactNode;
}

export function Sobre ({titulo, children}: SobreProp) {
    return(
        <section className="mb-2 w-[85%] mx-auto mt-4 rounded-xl border-slate-200 bg-slate-200 p-4 shadow-md">
            <h2 className=" text-xl font-bold mt-2 mb-4">{titulo} </h2>
            <p>{children}</p>
        </section>
    )
}