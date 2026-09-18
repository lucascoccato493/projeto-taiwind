import RecursoCard from "./RecursoCard";

export default function Recursos() {
    return (
        <section
        id="recursos"
        className="mx-auto max-w-6x1 px-6 py-16"
    >
        <div className="text-center">

            <p
            className="
            font-semibold
            uppercase
            tracking-widest
            text-yellow-600
            "
        >
            Tailwind CSS
        </p>

        <h2 className="mt-2 text 3xl font-bold">
            O que você consegue fazer?
        </h2>

        <p
            className="
            mx-auto
            mt-4
            max-w-2xl
            text-slate-500
            "
        >
            Com poucas classes conseguimos controlar praticamente
            toda a apresentação da interface.
        </p>

        <div
        className="
        mt-10
        grid
        grid-cols-1
        gap-6
        md:grid-cols-3
        "
        >
            <RecursoCard
            icone="🎨"
            titulo="Estilização"
            descricao="
            "
            ></RecursoCard>
        </div>
        </div>
    </section>
    )
}