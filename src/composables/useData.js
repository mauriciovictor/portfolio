import {Github, Linkedin, Mail, Phone} from "lucide-vue-next";
import CV from '../assets/cv.pdf?url'

export function useData() {
    const data = () => {
        return {
            aboutMe: {
                title: 'Olá, me chamo Maurício',
                subject: 'Desenvolvedor Full Stack',
                description: `Eu sou um desenvolvedor full-stack com mais de 5 anos de experiência em
                              criar soluções web eficientes e escaláveis. Apaixonado por tecnologia e
                              inovação, estou sempre em busca de novos desafios para aprimorar minhas
                              habilidades e contribuir para o sucesso dos projetos em que estou
                              envolvido.`,
                cv: CV,
            },
            education: [
                {
                    id: 1,
                    degree: "Pós-graduação em desenvolvimento full stack",
                    institution: "Descomplica",
                    period: "fev de 2025 – fev de 2026 (em andamento)",
                    description: "",
                },
                {
                    id: 2,
                    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
                    institution: "UNIP",
                    period: "2018 – 2019",
                    description: "",
                },
            ],
            experiences: [
                {
                    title: "Desenvolvedor Pneno",
                    company: "MSB Tecnologia",
                    period: "jul de 2024 - o momento · 1 ano 4 meses",
                    description:
                        "Desenvolvimento de interfaces web responsivas utilizando Vue.js e Astro.",
                },
                {
                    title: "Freelancer",
                    company: "MSB Tecnologia",
                    period: "ago de 2022 - o momento · 3 anos 3 meses",
                    description:
                        "Atuando em projetos com diversas tecnologias como laravel, nodejs, vuejs,inertia,livewire",
                },
                {
                    title: "Programador",
                    company: "Brinfo - Soluções Tecnológicas",
                    period: "nov de 2018 - jun de 2024 · 5 anos 8 meses",
                    description: "Atuando em projetos utilizando laravel e delphi",
                },
            ],
            badges: [
                {
                    alt: "PHP",
                    src: "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
                },
                {
                    alt: "JavaScript",
                    src: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                },
                {
                    alt: "TypeScript",
                    src: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
                },
                {
                    alt: "Delphi",
                    src: "https://img.shields.io/badge/Delphi-EE1F35?style=for-the-badge&logo=delphi&logoColor=white",
                },
                {
                    alt: "HTML5",
                    src: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                },
                {
                    alt: "CSS3",
                    src: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
                },
                {
                    alt: "Laravel",
                    src: "https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white",
                },
                {
                    alt: "Vue.js",
                    src: "https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white",
                },
                {
                    alt: "Inertia",
                    src: "https://img.shields.io/badge/Inertia-9553E9?style=for-the-badge&logo=inertia&logoColor=white",
                },
                {
                    alt: "Livewire",
                    src: "https://img.shields.io/badge/Livewire-FB70A9?style=for-the-badge&logo=livewire&logoColor=white",
                },
                {
                    alt: "React",
                    src: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                },
                {
                    alt: "Node.js",
                    src: "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white",
                },
                {
                    alt: "jQuery",
                    src: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white",
                },
                {
                    alt: "MySQL",
                    src: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white",
                },
                {
                    alt: "PostgreSQL",
                    src: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white",
                },
                {
                    alt: "SQLite",
                    src: "https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white",
                },
                {
                    alt: "Oracle",
                    src: "https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white",
                },
                {
                    alt: "MariaDB",
                    src: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
                },
                {
                    alt: "SQL Server",
                    src: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white",
                },
                {
                    alt: "Firebird",
                    src: "https://img.shields.io/badge/Firebird-FF5B36?style=for-the-badge&logo=firebird&logoColor=white",
                },
            ],
            enterpriseProjects: [
                {
                    title: "Emprega Amapá",
                    description:
                        "Plataforma completa para conectar empregadores e candidatos no estado do Amapá. Sistema de gestão de vagas, currículos e processos seletivos com interface moderna e intuitiva.",
                    tecnologias: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS"],
                    link: "https://empregaamapa.portal.ap.gov.br/",
                },
                {
                    title: "Porto de Santos",
                    description:
                        "Sistema de gestão portuária para o maior porto da América Latina. Controle de operações logísticas, movimentação de cargas e infraestrutura portuária com alta performance.",
                    tecnologias: ["PHP", "JavaScript", "Bootstrap"],
                    link: "https://www.portodesantos.com.br/conheca-o-porto/infraestrutura-portuaria/",
                },
                {
                    title: "RURAP - Sistema de Gestão Rural",
                    description:
                        "Aplicativo para apoio à agricultura familiar no Amapá. Gestão de propriedades rurais, controle de produção, assistência técnica e extensão rural.",
                    tecnologias: ["Laravel", "Livewire", "Alpine.js", "Tailwind CSS"],
                    link: "https://sigater-rurap.portal.ap.gov.br/",
                },
            ],
            personalProjects: [
                {
                    title: "Meu Portfólio",
                    description:
                        "Projeto desenvolvido para apresentar minhas habilidades, experiências e projetos. Construído com Astro, Vue.js e Tailwind CSS para uma interface moderna e responsiva.",
                    tecnologias: [
                        "Vue.js",
                        "TailwindCSS",
                        "Astro",
                    ],
                    link: "https://github.com/mauriciovictor/portfolio",
                },
                {
                    title: "Master Alias - CLI",
                    description:
                        "Gerencie seus aliases de shell como um profissional — salve-os no Github gist, gere um arquivo de shell e execute-o a partir do seu RC de shell. Simples, rápido e seguro.",
                    tecnologias: [
                        "Golang",
                        "Github Gist",
                        "Shell Script",
                    ],
                    link: "https://github.com/mauriciovictor/master-alias",
                },
                {
                    title: "Gestão de projetos",
                    description:
                        "Aplicação administrativa construída em Laravel + Inertia + Vue 3 (PrimeVue) com TailwindCSS. O objetivo é gerenciar usuários, perfis/roles e permissões com uma UI reativa (Inertia) e componentes do PrimeVue.",
                    tecnologias: [
                        "PHP",
                        "Laravel 12",
                        "Inertia",
                        "Vue 3",
                        "TailwindCSS",
                        "PNPM",
                        "DOCKER"
                    ],
                    link: "https://github.com/mauriciovictor/master-alias",
                },
            ],
            contacts: [
                {
                    label: "E-mail",
                    icon: Mail,
                    value: "mauriciovictor17@gmail.com",
                    href: "mailto:mauriciovictor17@gmail.com",
                },
                {
                    label: "Telefone",
                    icon: Phone,
                    value: "(96) 99907-1159",
                    href: "tel:+5596999071159",
                },
                {
                    label: "Linkedin",
                    icon: Linkedin,
                    value: "mauricio-v-ferreira-",
                    href: "https://www.linkedin.com/in/mauricio-v-ferreira-/",
                },
                {
                    label: "Github",
                    icon: Github,
                    value: "@mauriciovictor",
                    href: "https://github.com/mauriciovictor",
                },
            ],
        };
    };

    return {data};
}
