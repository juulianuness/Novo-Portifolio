import React from "react";
import idadeImg from "../assets/idade.png";
import imersaoImg from "../assets/imersão.png";
import linkeImg from "../assets/linket.png";
import terapiaImg from "../assets/terapia.png";
import serieImg from "../assets/serie.png";
import quizImg from "../assets/quizrj.png";
import psiImg from "../assets/psi.png";
import listaImg from "../assets/lista.png";

const projects = [
  {
    title: "Imersão Mulheres",
    description: "um site informativo e de divulgação do evento realizado por profissionais da área da saúde",
    link: "https://imersao-mulheres-saudaveis.netlify.app/",
    image:  imersaoImg , 
  },
  {
    title: "Top melhores séries",
    description: "Este projeto foi criado como parte do meu aprendizado com Bootstrap, das minhas séries favoritas",
    link: "https://nossaserie.netlify.app/",
    image: serieImg ,
  },
  {
    title: "Apresentação Psi",
    description: "Este é um site institucional desenvolvido para a psicóloga Jaqueline Vieira, com o objetivo apresenta-la",
    link: "https://psijaquelinevieira.netlify.app/",
    image:  terapiaImg ,
  },
  {
    title: "lista de Tarefas",
    description: "Este é um projeto simples desenvolvido como parte do Bootcamp da SoulCode Academy",
    link: "https://juulianuness.github.io/Lista-de-Tarefas/",
    image: listaImg,
  },
  {
    title: "Linketree Psicologa",
    description: "Este projeto é uma página web responsiva com o objetivo de servir como um Linktree personalizado",
    link: "https://psijaquelinevieiralinktree.netlify.app/",
    image: linkeImg,
  },
  
  {
    title: "Quiz RJ",
    description: "Este projeto foi criado com o objetivo de aplicar e consolidar meus conhecimentos. ",
    link: "https://quizrj.netlify.app/",
    image: quizImg,
  },
  {
    title: "Verificador de Idade",
    description: "Aplicação simples que verifica a idade de uma pessoa a partir do ano de nascimento informado.",
    link: "https://verificadoridades.netlify.app/",
    image: idadeImg,
  },
  {
    title: "Psi Jaqueline Vieira",
    description: "Aplicação simples que exibe o horário atual e muda dinamicamente conforme o período do dia.",
    link: "https://psicologajaquelinevieira.netlify.app/",
    image: psiImg,
  },
];

const Projects = () => {
  return (
    <section id="projects" className=" mb-20   py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Projetos
      </h2>
      <div className="grid gap-8 md:grid-cols-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-1 hover:shadow-xl transition hover:scale-105 overflow-hidden"
          >
            {/* Imagem do projeto */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover p-3"
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-black-600 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className=" text-blue-400 font-medium hover:underline"
              >
                Ver mais →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
