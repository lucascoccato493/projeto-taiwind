export default function HeroCodeCard(){
    return(
        <div 
            className="
                rounded-2xl
                border
                border-slate-700
                bg-slate-900
                p-8
                shadow-2xl
            "
        >

            <p className="text-sm text-slate-400">
                Exemplo de componente
            </p>

            <div 
                className="
                mt-4
                rounded-x1
                bg-black
                p-6
            "
        >

            <p className="font-mono text-sm text-yellow-400">
                &lt;div className="
            </p>

            <p className="ml-5 font-mono text-sm text-green-400">
                bg-black
            </p>

            <p className="ml-5 font-mono text-sm text-green-400">
                text-yellow-400
            </p>

            <p className="ml-5 font-mono text-sm text-yellow-400">
                "&gt;
            </p>
        </div>

        </div>       
    )
}