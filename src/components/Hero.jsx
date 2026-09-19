import HeroContent from "./HeroContent";
import HeroCodeCard from "./HeroCodeCard";

export default function Hero(){
    return (
        <section 
        id="inicio"
        className="
            bg-gradient-to-r
            from-black
            via-slate-900
            to-slate-800
            text-white
        "
    >
        <div
            className="
                mx-auto
                grid
                max-w-6xl
                items-center
                gap-10
                px-6
                py-20
                md:grid-cols-2
            "
        >
            <HeroContent />

            <HeroCodeCard />
            
        </div>
    </section>
    )
}