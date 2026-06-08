import Hero_section from "../Component/About/Hero-section";
import Section_1 from "../Component/About/Section_1";
import Section_2 from "../Component/About/Section_2";
import Section_3 from "../Component/About/Section_3";
import Section_4 from "../Component/About/Section_4";

function About() {
    return (
                <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
                    {/* Main Container (NO BORDER) */}
                    <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">

<Hero_section/>
<Section_1/>
<Section_2/>
<Section_3/>
<Section_4/>
</div>
</div>
    );
}

export default About;