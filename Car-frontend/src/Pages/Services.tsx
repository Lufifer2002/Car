import { FaWrench, FaCar, FaPaintBrush, FaCog, FaShieldAlt, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaWrench className="text-4xl text-white mb-4" />,
    title: "General Repair",
    description:
      "Expert diagnostics and repair for all makes and models. Our certified technicians use state-of-the-art equipment to get you back on the road quickly.",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-white mb-4" />,
    title: "Body & Paint",
    description:
      "Professional bodywork and custom paint services to restore your vehicle's appearance or give it a stunning new look.",
  },
  {
    icon: <FaCog className="text-4xl text-white mb-4" />,
    title: "Engine Tuning",
    description:
      "Performance tuning and optimization to unlock your engine's full potential. From ECU remapping to turbo upgrades.",
  },
  {
    icon: <FaCar className="text-4xl text-white mb-4" />,
    title: "Detailing",
    description:
      "Premium interior and exterior detailing that protects and enhances your vehicle's finish with meticulous care.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-white mb-4" />,
    title: "Warranty & Protection",
    description:
      "Extended warranty packages and paint protection films to keep your investment safe for years to come.",
  },
  {
    icon: <FaSearch className="text-4xl text-white mb-4" />,
    title: "Vehicle Inspection",
    description:
      "Comprehensive multi-point inspections so you can buy or sell with confidence. Detailed reports provided.",
  },
];

const Services = () => {
  return (
    <div className="bg-[#020202] min-h-screen text-white p-4 md:p-6">
      <div className="relative overflow-hidden rounded-[30px] bg-black shadow-[0_0_80px_rgba(255,255,255,0.03)]">
        {/* Hero Banner */}
        <div className="relative py-20 px-6 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <h1 className="relative text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="relative text-gray-400 max-w-2xl mx-auto text-lg">
            From routine maintenance to custom builds, LuxAuto delivers
            dealership-quality service with a personal touch.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose LuxAuto Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Certified Technicians",
                desc: "Our team consists of factory-trained specialists with deep expertise in luxury and performance vehicles.",
              },
              {
                title: "Genuine Parts",
                desc: "We use only OEM and premium aftermarket components to ensure quality and longevity on every job.",
              },
              {
                title: "State-of-the-Art Equipment",
                desc: "Our facility features the latest diagnostic and service technology for precise, efficient results.",
              },
              {
                title: "Satisfaction Guaranteed",
                desc: "We stand behind our work with comprehensive warranties and a commitment to your complete satisfaction.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:border-white/30 transition-all duration-300"
              >
                <span className="text-2xl mt-1">&#10003;</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 pb-16 text-center">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Schedule Service?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Book an appointment online or give us a call. Our team is ready to
              take care of your vehicle.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
