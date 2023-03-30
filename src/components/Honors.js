import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors() {
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projets académiques & stages </h1>
            <p className="font-light text-gray-400"></p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Projet de creation d'un site web dynamique " is=" permettant aux étudiants de signaler divers problèmes techniques à l'administration" desc="HTML, CSS, PHP, MYSQL, JAVA SCRIPT." />
                <HonorCard name="Platform de gestion de stock d'un centre sportif . " desc=" PHP Framework Symfony." />
                <HonorCard name="Gestion de système bancaire  . " desc="c#." />
                <HonorCard name="Stage en développement web" is="APIANAH : Janvier/février 2023" desc=" WIX, JavaScript, HTML/CSS, PHP." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
