import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import python from "../assets/skills/python.svg"
import kotlin from "../assets/skills/kotlin.svg"
import symfony from "../assets/skills/symfony.svg"
import csharp from "../assets/skills/csharp.svg"
import php from "../assets/skills/php.svg"


import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Compétences</h1>
            <p className="font-light text-gray-400">Voici quelques-unes de mes compétences</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="symfony" experience="1 ans" img={symfony} />
                    <SkillCard name="python" experience="1 ans" img={python} />
                    <SkillCard name="javascript" experience="1 ans" img={javascript} />
                    <SkillCard name="kotlin" experience="1 ans" img={kotlin} />
                    <SkillCard name="Csharp" experience="1 ans" img={csharp} />

                    <SkillCard name="php" experience="1 ans" img={php} />

                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}