import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"

import udemy from "../assets/certs/udemy.png"


// import 


export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>


            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-1 justify-center mt-4 gap-5">
                <CertCard name=" Apprendre Symfony 5" img={udemy} issued="UDEMY" date="mars 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
