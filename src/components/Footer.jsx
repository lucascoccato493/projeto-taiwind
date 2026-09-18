export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="
                mx-auto flex max-w-6x1
                flex-col items-center justify-between
                gap-4
                px-6 py-8
                md:flex-row
            ">

                <div>
                    <h2 className="font-bold text-yellow-600">
                        &lt;/&gt; Desvendando o Código
                    </h2>

                    <p className="mt-1 text-sm text-purple-400">
                        Desenvolvimento Web na prática.
                    </p>
                </div>

                <p className="text-sm text-slate-700">
                2026 Desvendando o Código
                </p>

            </div>
        </footer>
    )
}