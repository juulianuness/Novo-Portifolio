import PrincipalImg from "../assets/Ju.perfil.jpg";


const Hero = () => {
  const skills = ["React", "TypeScript", "Tailwind CSS", "JavaScript", "CSS", "Node.js"];

  return (
    <section className="  flex flex-col md:flex-row items-center justify-center gap-4 py-16">
      {/* Foto */}
      <div className="flex justify-center md:justify-center w-full md:w-1/2">
        <img
          src={PrincipalImg}
          alt="Julia Nunes"
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-blue-200 shadow-xl"
        />
      </div>

      {/* Texto */}
      <div className="text-center md:text-left w-full md:w-1/2 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Olá, eu sou a <span className="text-blue-300">Julia Nunes</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-lg mb-12">
          Desenvolvedora Front-End. <br />
          Com experiência em desenvolvimento Fullstack pelo "Bootcamp React & Node" da <strong> SoulCode</strong>, onde Participei de projetos práticos e pude aplicar conceitos práticos da vivência de frontend e backend.
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 max-w-4xl md:justify-start justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-gradient-to-r from-blue-300 to-gray-300 text-white rounded-full shadow-md hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;