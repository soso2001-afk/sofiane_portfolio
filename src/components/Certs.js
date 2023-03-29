import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"

import progateHtml from "../assets/certs/progate-htmlcss.png"


// import 

export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>


            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Kursus HTML & CSS" img={progateHtml} issued="Progate" date="Oct 2020" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
