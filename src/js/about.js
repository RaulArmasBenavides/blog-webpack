import '../css/about.css';
import 'normalize.css';
const languageButton = document.getElementById('languageButton');
const content = document.getElementById('content');

// Define los contenidos en español e inglés
const spanishContent = {
    title: 'Sobre mí',
    text: `Soy desarrollador de software con 5 años de experiencia en desarrollo e integración de páginas webs, 
    aplicaciones webs, sistemas ERPs y CRMs. Poseo competencias para el análisis y toma de decisiones en la resolución de problemas, 
    orientado a resultados y trabajo en equipo. He participado en proyectos de TI en la especificación de requerimientos, 
    la implementación y validación (testing) de los mismos.  Tengo experiencia en proyectos de TI en diferentes industrias 
    como sector eléctrico, retail, operaciones, logística y finanzas. En la parte técnica, cuento con experiencia full stack development, 
    principalmente con Javascript, Angular, ReactJS, NET ( Net framework y Net Core) y Node.js (ExpressJS y NestJS). 
    Cuento con conocimientos y experiencia en base de datos relacionales y no relacionales. 
    Actualmente estoy estudiando Maestría de Ingeniería de Sistemas con mención en Gestión de Tecnologías de la Información 
    en la Universidad Nacional Federico Villareal. Hablo inglés, francés y portugués como idiomas extranjeros y actualmente 
    estoy aprendiendo alemán. Me considero una persona bastante proactiva y autodidacta, me gusta estar en constante aprendizaje 
    y siempre aplico la mejora continua en las actividades que realizo. 
    Soy bachiller de Ingeniería Industrial de la Universidad Nacional Mayor de San Marcos 
    y bachiller en Ingeniería de Sistemas y Cómputo de la Universidad Inca Garcilaso de la Vega.`
};

const englishContent = {
    title: 'About me',
    text: ` I am a software developer with 5 years of experience in developing and integrating websites, web applications, ERPs, and CRMs. 
    I have skills in analysis and decision-making in problem-solving, results-oriented, and teamwork. 
    I have participated in IT projects specifying requirements, implementing, and validating (testing) them. 
    On the technical side, I have experience in full stack development, 
    mainly with Javascript, Angular, ReactJS, .NET (Net framework and Net Core), and Node.js (ExpressJS and NestJS). 
    I have knowledge and experience in both relational and non-relational databases. 
    I am currently studying a Master's degree in Systems Engineering with a focus 
    on Information Technology Management at the Universidad Nacional Federico Villareal. 
    I speak English, French, and Portuguese as foreign languages, and I am currently learning German. 
    I consider myself a very proactive and self-taught person. 
    I like to be in constant learning, and I always apply continuous improvement in the activities I perform. 
    I have a bachelor's degree in Industrial Engineering from the Universidad Nacional Mayor de San Marcos and a bachelor's degree in Systems Engineering and Computing from the Universidad Inca Garcilaso de la Vega.
    a university college or university.`
};

// Inicialmente, muestra el contenido en español
let currentLanguage = 'spanish';
content.innerHTML = `
    <h1>${spanishContent.title}</h1>
    <p>${spanishContent.text}</p>
`;

// Agrega un evento clic al botón para alternar entre idiomas
languageButton.addEventListener('click', () => {
    if (currentLanguage === 'spanish') {
        // Cambia al contenido en inglés
        currentLanguage = 'english';
        content.innerHTML = `
            <h1>${englishContent.title}</h1>
            <p>${englishContent.text}</p>
        `;
    } else {
        // Cambia al contenido en español
        currentLanguage = 'spanish';
        content.innerHTML = `
            <h1>${spanishContent.title}</h1>
            <p>${spanishContent.text}</p>
        `;
    }
});