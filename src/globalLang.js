import React from 'react';

const globalLang = {
	"es":{
		lang: "es",
		header: {
			ho: "Inicio",
			am: "Sobre_Mi",
			re: "Currículo",
			po: "Portafólio",
			bl: "Blog",
			co: "Contacto",
		},
		home: {
			greet: "Soy",
			dw: "Desarrollador Web",
			fl: "Freelancer",
			dm: "Desarrollador Mobile",
			dg: "Diseñador Gráfico",
		},
		about: {
			tit: "Sobre Mí",
			dcv: "Descargar CV",
			dpf: "Descargar Portafólio",
			dsc: <p>
				<strong>Hola, soy Jean Paul Rojas</strong>, Ingeniero de Sistemas graduado en Venezuela y 
				residenciado en Brasil. Tengo experiencia en desarrollo de sitios web personalizados y aplicaciones móviles.
				Me considero <strong>especialista en desarrollo front-end</strong>, aunque puedo fácilmente
				pertenecer a un equipo como <strong>ingeniero full-stack.</strong></p>,
			hab: <div className="title"><span>Mis</span> Habilidades</div>,
			serv: [
				{
					tit: "Desarrollo Front-End",
					des: 'Construcción de sitios web personalizados con estilo profesional, (ReactJS, Angular, ExtJS y otros).',
				},
				{
					tit: "Desarrollo Back-End",
					des: 'Diseño y desarrollo de bases de datos usando modelos relacionales (MySQL) y no-relacionales (MongoDB)',
				},
				{
					tit: "Desarrollo Móvil",
					des: 'Desarrollo de aplicaciones móviles usando lenguajes de programación nativos e hibridos.'
				},
				{
					tit: "Diseño Gráfico",
					des: "Manejo eficiente de herramientas de diseño y retoque fotográfico (Photoshop e Illustrator)."
				},
				{
					tit: "Indicadores de Gestión",
					des: 'Definición de KPI para empresas usando las mejores prácticas y software disponibles.',
				},
				{
					tit: "Políglota",
					des: "Fluencia en lectura, escritura y oralidad en Español, Inglés y Portugués",
				},
			],
			hec: <div className="title"><span>Hechos</span> Curiosos</div>
		},
		resume: {
			tit: "Currículo",
			exp: <div><span>Mi</span> Experiencia y <span>Mi</span> Educación</div>,
			eae: {
				tit: "Mi Experiencia y Educación",
				cont: [
					{
						job: "Analista de Contratación (Anal. de Sistemas)",
						date: "Mar 2018 - Dic 2018",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - PetroPiar",
						desc: "Desarrollo de Aplicación Web para control y seguimiento de procesos de contratación desde que son generados por las gerencias requirentes hasta su firma entre la Empresa Mixta PETROPIAR, S. A. y las contratistas."
					},
					{
						job: "Graduación (Ingeniero de Sistemas)",
						date: "Dic 2017",
						comp: "",
						desc: "Se celebra el Acto de Grado en la Universidad de Oriente - Núcleo de Anzoátegui de acuerdo a Cronograma de Actos de Grado."
					},
					{
						job: "Analista de Contratación (Planificador)",
						date: "Feb 2017 - Abr 2018",
						comp: "Petróleos de Venezuela, S.A. PetroVictoria - PCI Ingenieros Consultores",
						desc: "Planificación y control de actividades realizadas por analistas de contratación, rendición de cuentas mensual y resumen gerencial semanal."
					},
					{
						job: "Freelancer",
						date: "Ago 2016 - Ene 2017",
						comp: "",
						desc: "Desarrollo de Aplicaciones Web para múltiples clientes, así como aprendizaje de programas de diseño gráfico, retoque y fotomontaje. "
					},
					{
						job: "Pasante (Dpto. de Administración de Contratos) ",
						date: "Oct 2015 - Jul 2016",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - Div. Pta. de Mata",
						desc: "Desarrollo de Aplicación Web para el control y manejo de contratos firmados entre PDVSA y contratistas del sector privado. La aplicación manejaba cada actividad administrativa desde que inicia un contrato hasta que se termina, pasando por valuaciones, modificaciones a los contratos y/o variaciones no previstas."
					}
				]
			},
			skl: [
				{
					tit:<div className="title"><span>Habilidades</span> Técnicas</div>,
					hab: [
						{		tit: "Adobe Photoshop CC",              por: "90",			},
						{		tit: "Adobe Illustrator CC",            por: "90",			},
						{		tit: "Microsoft Word",            		por: "100",			},
						{		tit: "Microsoft Excel",            		por: "100",			},
						{		tit: "Microsoft PowerPoint",            por: "100",			},
						{		tit: "Microsoft Project",            	por: "100",			},
						{		tit: "Enterprise Architect",            por: "70",			},
						{		tit: "UML y Diseño de BBDD",           	por: "60",			},
					]
				},
				{
					tit:<div className="title"><span>Habilidades</span> Profesionales</div>,
					hab: [
						{		tit: "HTML5 & CSS3",                    por: "100",			},
						{		tit: "JavaScript & jQuery",             por: "90",			},
						{		tit: "PHP",                             por: "90",			},
						{		tit: "ExtJS",                           por: "100",			},
						{		tit: "Laravel (v5.4)",                  por: "70",			},
						{		tit: "jQuery Mobile / PhoneGap",        por: "80",			},
						{		tit: "WordPress",                       por: "60",			},
						{		tit: "AngularJS (v.1.6)",               por: "70",			},
						{		tit: "CodeIgniter",                 	por: "50",			},
						{		tit: "ReactJS",                         por: "70",			},
						{		tit: "Ionic",                           por: "40",			},
						{		tit: "Java",                            por: "60",			},
						{		tit: "NODE / NPM",                      por: "70",			},
						{		tit: "MySQL (MariaDB)",                 por: "90",			},
					]
				},
			]
		},
		contact: {
			tit: "Contacto",
			pec: <div><span>Pónte</span> en Contacto</div>,
			inf: [
				{
					tit: "Dirección",
					des: "Centro. Curitiba. Brasil",
				},
				{
					tit: "Correo",
					des: <span>ingjeanpaulrojas@gmail.com<br/>eccianime@gmail.com</span>,
				},
				{
					tit: "Teléfono",
					des: <span>(+55) 92 98210-0835<br/>(+55) 41 98762-3548<br/>(+55) 92 99968-1010</span>,
				},
				{
					tit: "Freelance",
					des: "Disponible"
				}
			]
		},
		portfolio:{
			tit: "Portafolio",
			por: <div><span>Mi</span> Portafólio</div>,
			cont: [
				{
					tit: "Sistema de Registro de Votantes",
					dsc: `Sistema Web desarrollado para ser utilizado por la Sala Situacional de la Empresa Mixta Petromonagas y Petrovictoria como apoyo al sistema de control nacional de votantes por motivo a las Elecciones Municipales 2017.
						A través de esta aplicación se chequea si el personal de cada una de las gerencias (Sub-Departamentos) de cada empresa mixta realizó su voto sin tomar en cuenta el candidato elegido. Se contempla el registro de cada votante por gerencia y la generación de reportes que permitan obtener un resumen al final de las votaciones.`
				},
				{
					tit: "Sistema de Seguimiento y Control de Pozos",
					dsc: "Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado de la Bachiller Rosangel Marín (Nov-2017) para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretende controlar diferentes variables relacionadas con el control de los pozos productores para la Empresa Mixta Petrolera Indovenezolana (PDVSA), así como la generación de reportes tabulados y gráficos en formato legible por programas ofimáticos conocidos. Desde el punto de vista de manejo de bases de datos, se utilizó la librería PHPExcel, en conjunto con consultas en PDO para conectar las llamadas AJAX con las bases de datos con motor MySQL."
				},
				{
					tit: "Sistema Integral de Captación de Talento",
					dsc: `Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado del Bachiller Deiby Itanare para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretendió realizar un control y seguimiento a los procesos de Captación de Personal hacia la Empresa Petróleos de Venezuela (PDVSA).
						Este sistema nace como iniciativa de la Gerencia de Recursos Humanos, dividiendo los procesos de ingreso en: Captación Anticipada (para ingresar personal con nivel de estudios de Bachiller, INCES o Pasante Universitario), Captación Interna (para realizar transferencias de personal entre gerencias o filiales) y Captación Externa (para el ingreso de personal profesional capacitado desde afuera de la empresa.)`
				},
				{
					tit: "Sistema Integral de Contratación",
					dsc: `Sistema Web desarrollado como iniciativa de la Gerencia de Contratación de la Empresa Mixta Petropiar para hacer un seguimiento y control a los procesos de Contrataciones Públicas realizados entre el Estado y las Empresas Privadas con el fin de que estos últimos obtengan un beneficio monetario a través de la prestación de servicios o la ejecución de obras que permitan mantener, recuperar o aumentar los niveles de producción de la Empresa Mixta.
						Este sistema permitirá hacer un seguimiento de cada uno de los procesos y poder establecer un cronograma que permita saber el tiempo que tarda realizar cada proceso de contratación desde que el proceso es iniciado hasta que se firma el contrato entre las partes para la ejecución de la obra o prestación del servicio.`
				},
				{
					tit: "ExpoTextil Perú 2018",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. A través de esta se pueden consultar todos los eventos que ocurrirán del 8 al 11 de noviembre en la Feria Textil de Perú 2018. La aplicación manejará (entre otros requisitos aún en maquetación) una administración interna para agregar, borrar y modificar eventos con la hora, el nombre y la descripción del evento así como el manejo de los expositores de cada stand de la feria."
				},
				{
					tit: "RelaxPanamá",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su utilidad radica en el uso de tokens comprados y dados como regalos entre usuarios con el fin de adquirir productos y paquetes turísticos en diferentes empresas afiliadas.",
				},
				{
					tit: "EBE Tracking de SAISA",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su finalidad consiste en un control de entrada para condomínios y empresas, tomando en cuenta si se trata de funcionarios o visitantes.",
				},
			]

		},
	},
	"br": {
		lang: "br",
		header: {
			ho: "Inicio",
			am: "Sobre_Mim",
			re: "Currículum",
			po: "Portfólio",
			bl: "Blog",
			co: "Contato",
		},
		home: {
			greet: "Sou",
			dw: "Desenvolvedor Web",
			fl: "Freelancer",
			dm: "Desenvolvedor Mobile",
			dg: "Desenhador Gráfico",
		},
		about: {
			tit: "Sobre Mim",
			dcv: "Descarregar CV",
			dpf: "Descarregar Portfólio",
			dsc: <p><strong>Olá, sou Jean Paul Rojas</strong>, Engenheiro de Sistemas formado na Venezuela e 
				morando no Brasil. Tenho experiência em desenvolvimento de sites web personalizados e aplicativos móveis.
				Considero-me um <strong>especialista em desenvolvimento Front-End</strong>, embora eu posso facilmente
				pertencer a uma equipe como <strong>Engenheiro Full-Stack.</strong></p>,
			hab: <div className="title"><span>As Minhas</span> Habilidades</div>,
			serv: [
				{
					tit: "Desenvolvimento Front-End",
					des: 'Criação de sites web sob medida com estilo profissional, (ReactJS, Angular, ExtJS e outros).',
				},
				{
					tit: "Desenvolvimento Back-End",
					des: 'Concepção e desenvolvimento de bancos de dados usando modelos relacionais (MySQL) e não-relacionais (MongoDB)',
				},
				{
					tit: "Desenvolvimento Móvel",
					des: 'Criação de aplicativos móveis usando linguagens de programação nativos e híbridos.'
				},
				{
					tit: "Design Gráfico",
					des: "Manipulação eficiente de ferramentas de Design y retoque fotográfico (Photoshop e Illustrator)."
				},
				{
					tit: "Indicadores de Gestão",
					des: 'Definição de KPI para empresas usando as melhores práticas e software disponíveis.',
				},
				{
					tit: "Poliglota",
					des: "Fluencia em leitura, escrita y oralidade em Espanhol, Inglês y Português",
				},
			],
			hec: <div className="title"><span>Fatos</span> Notáveis</div>
		},	
		resume: {
			tit: "Currículo",
			exp: <div><span>A Minha</span> Experiência e <span>A Minha</span> Educação</div>,
			eae: {
				tit: "A minha Experiência e Educação",
				cont: [
					{
						job: "Analista de Contratação (Anal. de Sistemas)",
						date: "Mar 2018 - Dez 2018",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - PetroPiar",
						desc: "Desenvolvimento de Aplicativo Web para controle e monitoramento de processos de contratação desde que sejam gerados pelos gerentes solicitantes até sua assinatura entre a empresa mista PETROPIAR, S. A. e os contratantes."
					},
					{
						job: "Formatura (Engenheiro de Sistemas)",
						date: "Dez 2017",
						comp: "",
						desc: "Celebra-se a ceremônia de formatura na Universidad de Oriente - Núcleo de Anzoátegui (Venezuela) em acordo ao Cronograma de ceremônias de Formatura."
					},
					{
						job: "Analista de Contratação (Planejador)",
						date: "Fev 2017 - Abr 2018",
						comp: "Petróleos de Venezuela, S.A. PetroVictoria - PCI Ingenieros Consultores",
						desc: "Planejamento e controle de atividades realizadas com contratação de analistas, prestação mensal de contas e resumo de gestão semanal."
					},
					{
						job: "Freelancer",
						date: "Ago 2016 - Jan 2017",
						comp: "",
						desc: "Desenvolvimento de Aplicativos Web para diferentes clientes, bem como aprendizagem de aplicativos de design gráfico, retoque y fotomontagem. "
					},
					{
						job: "Estagiário (Dpto. de Administração de Contratos) ",
						date: "Out 2015 - Jul 2016",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - Div. Pta. de Mata",
						desc: "Desenvolvimento de Aplicações Web para o Departamento de Administração de Contratos, no qual o controle de atividades foi gerenciado, bem como o seguimento financeiro das avaliações, modificações e variações imprevistas até o encerramento administrativo e final do contrato."
					}
				]
			},
			skl: [
				{
					tit:<div className="title"><span>Habilidades</span> Técnicas</div>,
					hab: [
						{		tit: "Adobe Photoshop CC",              por: "90",			},
						{		tit: "Adobe Illustrator CC",            por: "90",			},
						{		tit: "Microsoft Word",            		por: "100",			},
						{		tit: "Microsoft Excel",            		por: "100",			},
						{		tit: "Microsoft PowerPoint",            por: "100",			},
						{		tit: "Microsoft Project",            	por: "100",			},
						{		tit: "Enterprise Architect",            por: "70",			},
						{		tit: "UML y Design de BBDD",           	por: "60",			},
					]
				},
				{
					tit:<div className="title"><span>Habilidades</span> Profissionais</div>,
					hab: [
						{		tit: "HTML5 & CSS3",                    por: "100",			},
						{		tit: "JavaScript & jQuery",             por: "90",			},
						{		tit: "PHP",                             por: "90",			},
						{		tit: "ExtJS",                           por: "100",			},
						{		tit: "Laravel (v5.4)",                  por: "70",			},
						{		tit: "jQuery Mobile / PhoneGap",        por: "80",			},
						{		tit: "WordPress",                       por: "60",			},
						{		tit: "AngularJS (v.1.6)",               por: "70",			},
						{		tit: "CodeIgniter",                 	por: "50",			},
						{		tit: "ReactJS",                         por: "70",			},
						{		tit: "Ionic",                           por: "40",			},
						{		tit: "Java",                            por: "60",			},
						{		tit: "NODE / NPM",                      por: "70",			},
						{		tit: "MySQL (MariaDB)",                 por: "90",			},
					]
				},
			]
		},
		contact: {
			tit: "Contato",
			pec: <div><span>Entre</span> em Contato</div>,
			inf: [
				{
					tit: "Endereço",
					des: "Centro. Curitiba. Brasil",
				},
				{
					tit: "E-Mail",
					des: <div>ingjeanpaulrojas@gmail.com<br/>eccianime@gmail.com</div>,
				},
				{
					tit: "Telefone",
					des: <div>(+55) 92 98210-0835<br/>(+55) 41 98762-3548<br/>(+55) 92 99968-1010</div>,
				},
				{
					tit: "Freelance",
					des: "Disponível"
				}
			]
		},
		portfolio:{
			tit: "Portfólio",
			por: <div><span>Meu</span> Portfólio</div>,
			cont: [
				{
					tit: "Sistema de Registro de Votantes",
					dsc: `Sistema Web desarrollado para ser utilizado por la Sala Situacional de la Empresa Mixta Petromonagas y Petrovictoria como apoyo al sistema de control nacional de votantes por motivo a las Elecciones Municipales 2017.
						A través de esta aplicación se chequea si el personal de cada una de las gerencias (Sub-Departamentos) de cada empresa mixta realizó su voto sin tomar en cuenta el candidato elegido. Se contempla el registro de cada votante por gerencia y la generación de reportes que permitan obtener un resumen al final de las votaciones.`
				},
				{
					tit: "Sistema de Seguimiento y Control de Pozos",
					dsc: "Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado de la Bachiller Rosangel Marín (Nov-2017) para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretende controlar diferentes variables relacionadas con el control de los pozos productores para la Empresa Mixta Petrolera Indovenezolana (PDVSA), así como la generación de reportes tabulados y gráficos en formato legible por programas ofimáticos conocidos. Desde el punto de vista de manejo de bases de datos, se utilizó la librería PHPExcel, en conjunto con consultas en PDO para conectar las llamadas AJAX con las bases de datos con motor MySQL."
				},
				{
					tit: "Sistema Integral de Captación de Talento",
					dsc: `Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado del Bachiller Deiby Itanare para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretendió realizar un control y seguimiento a los procesos de Captación de Personal hacia la Empresa Petróleos de Venezuela (PDVSA).
						Este sistema nace como iniciativa de la Gerencia de Recursos Humanos, dividiendo los procesos de ingreso en: Captación Anticipada (para ingresar personal con nivel de estudios de Bachiller, INCES o Pasante Universitario), Captación Interna (para realizar transferencias de personal entre gerencias o filiales) y Captación Externa (para el ingreso de personal profesional capacitado desde afuera de la empresa.)`
				},
				{
					tit: "Sistema Integral de Contratación",
					dsc: `Sistema Web desarrollado como iniciativa de la Gerencia de Contratación de la Empresa Mixta Petropiar para hacer un seguimiento y control a los procesos de Contrataciones Públicas realizados entre el Estado y las Empresas Privadas con el fin de que estos últimos obtengan un beneficio monetario a través de la prestación de servicios o la ejecución de obras que permitan mantener, recuperar o aumentar los niveles de producción de la Empresa Mixta.
						Este sistema permitirá hacer un seguimiento de cada uno de los procesos y poder establecer un cronograma que permita saber el tiempo que tarda realizar cada proceso de contratación desde que el proceso es iniciado hasta que se firma el contrato entre las partes para la ejecución de la obra o prestación del servicio.`
				},
				{
					tit: "ExpoTextil Perú 2018",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. A través de esta se pueden consultar todos los eventos que ocurrirán del 8 al 11 de noviembre en la Feria Textil de Perú 2018. La aplicación manejará (entre otros requisitos aún en maquetación) una administración interna para agregar, borrar y modificar eventos con la hora, el nombre y la descripción del evento así como el manejo de los expositores de cada stand de la feria."
				},
				{
					tit: "RelaxPanamá",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su utilidad radica en el uso de tokens comprados y dados como regalos entre usuarios con el fin de adquirir productos y paquetes turísticos en diferentes empresas afiliadas.",
				},
				{
					tit: "EBE Tracking de SAISA",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su finalidad consiste en un control de entrada para condomínios y empresas, tomando en cuenta si se trata de funcionarios o visitantes.",
				},
			]
		},
	},
	"en": {
		lang: "en",
		header: {
			ho: "Home",
			am: "About_Me",
			re: "Resume",
			po: "Portfolio",
			bl: "Blog",
			co: "Contact",
		},
		home: {
			greet: "I am",
			dw: "Web Developer",
			fl: " Freelancer ",
			dm: "Mobile Developer",
			dg: "Graphic Designer",
		},
		about: {
			tit: "About Me",
			dcv: "Download CV",
			dpf: "Download Portfolio",
			dsc: <p>
				<strong>Hi, I'm Jean Paul Rojas</strong>, Systems Engineer graduated from Venezuela and 
				living in Brazil. I have experience in customized web sites and mobile applications development.
				I consider myself as a <strong>Front-End Development specialist</strong>, though I can easily
				join a team as a <strong>Full-Stack Engineer.</strong></p>,
			hab: <div className="title"><span>My</span> Skills</div>,
			serv: [
				{
					tit: "Front-End Development",
					des: 'Customized web-sites creation with professional style, (ReactJS, Angular, ExtJS and others).',
				},
				{
					tit: "Back-End Development",
					des: 'Design and development of databases using relational (MySQL) and non-relational (MongoDB) models',
				},
				{
					tit: "Mobile Development",
					des: 'Development of mobile applications using native and hybrid programming languages.'
				},
				{
					tit: "Graphic Design",
					des: "Efficient control of tools oriented to photographic designing and editing (Photoshop e Illustrator)."
				},
				{
					tit: "Management Indicators",
					des: 'KPI Definition for companies using the best practices and available software.',
				},
				{
					tit: "Multilingual",
					des: "Fluency in writing, reading and speeching in Spanish, English and Portuguese",
				},
			],
			hec: <div className="title"><span>Fun</span> Facts</div>
		},
		resume: {
			tit: "Resume",
			exp: <div><span>My</span> Experience and <span>My</span> Education</div>,
			eae: {
				tit: "My Experience and my Education",
				cont: [
					{
						job: "Analist of Contracts (System Analyst)",
						date: "Mar 2018 - Dec 2018",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - PetroPiar",
						desc: "Web-App Development for controlling and monitoring of public contracting processes since their generation from the requiring departments until their signature between the Mixed Company PETROPIAR, S. A. and the contractors."
					},
					{
						job: "Graduation (Systems' Engineer)",
						date: "Dec 2017",
						comp: "",
						desc: "The Graduation Act is celebrated in the Universidad de Oriente - Núcleo de Anzoátegui following the Graduation Acts Cronogram."
					},
					{
						job: "Analist of Contracts (Planning)",
						date: "Feb 2017 - Apr 2018",
						comp: "Petróleos de Venezuela, S.A. PetroVictoria - PCI Ingenieros Consultores",
						desc: "Activities planning and controlling realized by contracts' analysts, monthly auditing and weekly management summary."
					},
					{
						job: "Freelancer",
						date: "Ago 2016 - Ene 2017",
						comp: "",
						desc: "Web-Apps Development for multiple clients, as well as learning of graphic design, retouching y photomontage software. "
					},
					{
						job: "Intern (Dep. of Contracts Administration) ",
						date: "Oct 2015 - Jul 2016",
						comp: "Petróleos de Venezuela, S.A. (PDVSA) - Div. Pta. de Mata",
						desc: "Web-App Development for controlling of signed contracts between PDVSA and private-sector contractors. The application allowed the management of every administrative activity since a contract begun until it's finished, going through payments, modifications to the contracts and unexpected variations."
					}
				]
			},
			skl: [
				{
					tit:<div className="title"><span>Tech</span> Skills</div>,
					hab: [
						{		tit: "Adobe Photoshop CC",              por: "90",			},
						{		tit: "Adobe Illustrator CC",            por: "90",			},
						{		tit: "Microsoft Word",            		por: "100",			},
						{		tit: "Microsoft Excel",            		por: "100",			},
						{		tit: "Microsoft PowerPoint",            por: "100",			},
						{		tit: "Microsoft Project",            	por: "100",			},
						{		tit: "Enterprise Architect",            por: "70",			},
						{		tit: "UML and DDBB Design",           	por: "60",			},
					]
				},
				{
					tit:<div className="title"><span>Professional</span> Skills</div>,
					hab: [
						{		tit: "HTML5 & CSS3",                    por: "100",			},
						{		tit: "JavaScript & jQuery",             por: "90",			},
						{		tit: "PHP",                             por: "90",			},
						{		tit: "ExtJS",                           por: "100",			},
						{		tit: "Laravel (v5.4)",                  por: "70",			},
						{		tit: "jQuery Mobile / PhoneGap",        por: "80",			},
						{		tit: "WordPress",                       por: "60",			},
						{		tit: "AngularJS (v.1.6)",               por: "70",			},
						{		tit: "CodeIgniter",                 	por: "50",			},
						{		tit: "ReactJS",                         por: "70",			},
						{		tit: "Ionic",                           por: "40",			},
						{		tit: "Java",                            por: "60",			},
						{		tit: "NODE / NPM",                      por: "70",			},
						{		tit: "MySQL (MariaDB)",                 por: "90",			},
					]
				},
			]
		},
		contact: {
			tit: "Contact",
			pec: <div><span>Get</span> in Touch</div>,
			inf: [
				{
					tit: "Address",
					des: "Centro. Curitiba. Brazil",
				},
				{
					tit: "Mail",
					des: <div>ingjeanpaulrojas@gmail.com<br/>eccianime@gmail.com</div>,
				},
				{
					tit: "Phone",
					des: <div>(+55) 92 98210-0835<br/>(+55) 41 98762-3548<br/>(+55) 92 99968-1010</div>,
				},
				{
					tit: "Freelance",
					des: "Available"
				}
			]
		},
		portfolio:{
			tit: "Portfolio",
			por: <div><span>My</span> Portfolio</div>,
			cont: [
				{
					tit: "Sistema de Registro de Votantes",
					dsc: `Sistema Web desarrollado para ser utilizado por la Sala Situacional de la Empresa Mixta Petromonagas y Petrovictoria como apoyo al sistema de control nacional de votantes por motivo a las Elecciones Municipales 2017.
						A través de esta aplicación se chequea si el personal de cada una de las gerencias (Sub-Departamentos) de cada empresa mixta realizó su voto sin tomar en cuenta el candidato elegido. Se contempla el registro de cada votante por gerencia y la generación de reportes que permitan obtener un resumen al final de las votaciones.`
				},
				{
					tit: "Sistema de Seguimiento y Control de Pozos",
					dsc: "Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado de la Bachiller Rosangel Marín (Nov-2017) para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretende controlar diferentes variables relacionadas con el control de los pozos productores para la Empresa Mixta Petrolera Indovenezolana (PDVSA), así como la generación de reportes tabulados y gráficos en formato legible por programas ofimáticos conocidos. Desde el punto de vista de manejo de bases de datos, se utilizó la librería PHPExcel, en conjunto con consultas en PDO para conectar las llamadas AJAX con las bases de datos con motor MySQL."
				},
				{
					tit: "Sistema Integral de Captación de Talento",
					dsc: `Sistema Web desarrollado para ser presentado como resultado del Trabajo de Grado del Bachiller Deiby Itanare para optar por el título de Ingeniero de Sistemas de la Universidad de Oriente – Núcleo de Monagas (Venezuela). A través de este sistema se pretendió realizar un control y seguimiento a los procesos de Captación de Personal hacia la Empresa Petróleos de Venezuela (PDVSA).
						Este sistema nace como iniciativa de la Gerencia de Recursos Humanos, dividiendo los procesos de ingreso en: Captación Anticipada (para ingresar personal con nivel de estudios de Bachiller, INCES o Pasante Universitario), Captación Interna (para realizar transferencias de personal entre gerencias o filiales) y Captación Externa (para el ingreso de personal profesional capacitado desde afuera de la empresa.)`
				},
				{
					tit: "Sistema Integral de Contratación",
					dsc: `Sistema Web desarrollado como iniciativa de la Gerencia de Contratación de la Empresa Mixta Petropiar para hacer un seguimiento y control a los procesos de Contrataciones Públicas realizados entre el Estado y las Empresas Privadas con el fin de que estos últimos obtengan un beneficio monetario a través de la prestación de servicios o la ejecución de obras que permitan mantener, recuperar o aumentar los niveles de producción de la Empresa Mixta.
						Este sistema permitirá hacer un seguimiento de cada uno de los procesos y poder establecer un cronograma que permita saber el tiempo que tarda realizar cada proceso de contratación desde que el proceso es iniciado hasta que se firma el contrato entre las partes para la ejecución de la obra o prestación del servicio.`
				},
				{
					tit: "ExpoTextil Perú 2018",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. A través de esta se pueden consultar todos los eventos que ocurrirán del 8 al 11 de noviembre en la Feria Textil de Perú 2018. La aplicación manejará (entre otros requisitos aún en maquetación) una administración interna para agregar, borrar y modificar eventos con la hora, el nombre y la descripción del evento así como el manejo de los expositores de cada stand de la feria."
				},
				{
					tit: "RelaxPanamá",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su utilidad radica en el uso de tokens comprados y dados como regalos entre usuarios con el fin de adquirir productos y paquetes turísticos en diferentes empresas afiliadas.",
				},
				{
					tit: "EBE Tracking de SAISA",
					dsc: "Desarrollada en HTML, CSS y JavaScript, soportado por la librería jQuery Mobile y montada en Android (como un archivo apk) con la finalidad de poder ser instalada en teléfonos celulares inteligentes. Su finalidad consiste en un control de entrada para condomínios y empresas, tomando en cuenta si se trata de funcionarios o visitantes.",
				},
			]
		},
	}
}

export default globalLang;