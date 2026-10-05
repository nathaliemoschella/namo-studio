/* ===== CONTENIDO DEL PORTAFOLIO =====
   Aquí editas textos, orden y fotos de cada proyecto.
   Las imágenes se llaman por nombre (sin extensión) y viven en img/p/ */
const SITE = { instagram: "https://www.instagram.com/namohaus/", handle: "@NAMOHAUS" };

const PROJECTS = [
  { id: "bean", icon: "bean", label: "Stool Bean", sub: "Banquito en madera · torno + CNC", hero: "bean-hero", fx: "24%",
    heroTitle: "STOOL “BEAN”", heroText: "<b>La Caraota,</b> el grano que es parte esencial de la cocina venezolana.", heroPos: "mid",
    title: "BEAN  BE — YOU",
    intro: ["BEan nace de una forma que reconozco desde pequeña: la caraota, que es parte esencial de la cocina venezolana. Tomé esa silueta y la reinterpreté como un banquito pequeño, funcional y con algo de historia. El diseño parte de una pregunta simple: ¿por qué los banquitos suelen ser tan incómodos? La superficie fue modelada en Fusion 360 y fresada en CNC para lograr una forma contorneada que responde al cuerpo en lugar de ignorarlo."],
    gallery: ["bean-g1", "bean-g2", "bean-g3", "bean-g4"], tight: true,
    mid: { icon: "bean", right: true, text: ["Las patas fueron torneadas en torno y ensambladas mediante uniones de caja y espiga acuñadas, con patas insertadas directamente en la estructura, lo que permite fijarlas en ángulo directo a la superficie sin travesaños ni pegamento estructural. El resultado es un ensamble completamente mecánico que se mantiene firme por tensión y geometría. La calidez de la madera no fue un detalle secundario. Fue una decisión consciente para que el objeto se sintiera cercano, como las cosas de la casa que uno recuerda."] },
    big: { img: "bean-big", xl: "BEan BE — YOU", ba: { left: "bean-before", right: "bean-after", leftLabel: "ANTES", rightLabel: "DESPUÉS" } } },

  { id: "rascacielos", icon: "rasca", label: "Rascacielos", sub: "Mesa auxiliar · mortise and tenon", hero: "rasca-hero",
    heroTitle: "CIELITO<br>EN SUSPENSIÓN", heroPos: "low",
    intro: ["Este proyecto nació mirando rascacielos en días nublados, esos momentos en que las torres perforan las nubes y todo lo que queda visible es la punta, flotando. Esa sensación de ligereza y elevación es lo que quise traducir en madera. La pieza fue construida completamente en tres semanas y fue mi primer proyecto trabajando con madera.",
            { b: "El reto principal que me impuse fue construirla sin ningún tipo de herraje ni tornillos, únicamente ensamble tradicional de madera. Esa restricción me obligó a entender el material de una forma mucho más profunda." }],
    gallery: ["rasca-g1", "rasca-g2", "rasca-g3"],
    mid: { icon: "rasca", text: ["Las uniones fueron resueltas mediante “mortise and tenon” (Caja y espiga), una técnica de carpintería tradicional donde cada pata encaja directamente en la superficie a través de una cavidad tallada con precisión. Las patas están dispuestas en ángulo, lo que le da a la pieza su sensación característica de movimiento y elevación. Toda la estabilidad estructural depende de la precisión del corte y la tensión del ensamble, no de elementos externos. Trabajar así, donde un milímetro de diferencia cambia si la pieza se sostiene o no, me enseñó más sobre integridad estructural que cualquier software."] },
    big: { img: "rasca-big" } },

  { id: "cutting-boards", icon: "tablas", label: "Cutting Boards", sub: "Tablas de cortar en end grain", hero: "tablas-hero",
    heroTitle: "CUTTING BOARDS", heroText: "<b>Diseñadas</b> para durar<br>Hechas para ser tuyas", heroPos: "sub-br",
    title: "CUTTING BOARDS",
    intro: ["Diseñé estas tablas pensando en algo que pasa muy seguido en cocinas reales: el espacio de corte nunca es suficiente, o la tabla se mueve, o después de un tiempo los cuchillos simplemente dejan de cortar bien. Quise resolver eso desde el material y desde la técnica."],
    gallery: ["tablas-g1", "tablas-g2", "tablas-g3", "tablas-g4"],
    pre: ["Todas las tablas están construidas en <b>end grain</b>, que es la técnica donde la madera se orienta de forma que el filo del cuchillo entra entre las fibras en lugar de cortarlas.",
          "Esto no solo preserva el filo por mucho más tiempo, sino que hace que la tabla se recupere sola con el uso. Es la técnica que usan las tablas de carnicería profesional, y hay una razón por la que llevan siglos siendo el estándar."],
    mid: { icon: "tablas", red: true, text: [{ b: "La dirección y combinación de los granos de madera se planea desde el principio, y en muchos casos es único para cada tabla. Dos maderas de tonos contrastantes, cortadas y ensambladas en bloques precisos, crean un patrón que es tanto una decisión estética como estructural." },
                                               "A esto se suma la posibilidad de personalización mediante grabado láser, lo que convierte cada tabla en un objeto completamente único para quien la recibe. Su nombre, un diseño, una fecha. Algo que hace que una tabla de cocina deje de ser un utensilio y se convierta en algo que la gente guarda."] },
    big: { pair: ["tablas-big-a", "tablas-big-b"] } },

  { id: "lampara", icon: "lampara", label: "Lámpara", sub: "Acero doblado · pintura electrostática", hero: "lampara-hero",
    heroTitle: "LÁMPARA", heroText: "mismo diseño, nuevo material", heroPos: "mid",
    title: "LÁMPARA",
    intro: ["Este proyecto partió de una pregunta diferente. La premisa era reutilizar algo en un diseño nuevo, y en lugar de tomar un material existente, decidí reutilizar algo mío: un diseño de lámpara que había construido en primer año, originalmente en acrílico. Volver a ese diseño con más herramientas y criterio fue un ejercicio interesante. La forma era la misma pero el material lo cambiaba todo. Construí las lámparas doblando láminas de acero en una metal plate bending machine (Plegadora de metal), lo que me permitió lograr ángulos limpios y precisos que el acrílico no hubiera podido sostener de la misma manera."],
    gallery: ["lampara-g1", "lampara-g2", "lampara-g3", "lampara-g4"],
    mid: { icon: "lampara", text: [{ b: "La forma en L de la base no es solo estética, crea una apertura que dirige la luz hacia abajo y hacia afuera al mismo tiempo, jugando con cómo la lámpara ilumina el espacio a su alrededor." },
                                   "Revisitar un diseño propio me enseñó que un buen concepto puede vivir en materiales muy distintos, y que a veces la madurez no está en empezar de cero sino en saber qué conservar y qué transformar."] },
    big: { img: "lampara-big", ba: { left: "lampara-before", right: "lampara-after", leftLabel: "ANTES", rightLabel: "DESPUÉS" }, caption: "<b>La estructura</b> fue fabricada en acero con acabado de pintura electrostática y posteriormente intervenida con pintura en aerosol color borgoña." } },

  { id: "entryway", icon: "entry", label: "The Entryway", sub: "Mesa de entrada en cherry", hero: "entry-hero",
    heroTitle: "ENTRYWAY", heroText: "<b>She is the way</b><br>The entryway", heroPos: "sub-br",
    intro: ["Diseñé esta mesa pensando en un problema muy concreto y cotidiano: el momento de salir de casa. En mi apartamento, como en muchos otros, hay un pasillo largo antes de llegar a la puerta, y ese espacio nunca tiene un lugar claro donde dejar las llaves, las bolsas o las cosas del día. Esa fricción pequeña pero constante fue el punto de partida. La mesa funciona como un espacio de transición entre el mundo de afuera y el interior del hogar. La superficie superior recibe los objetos del día a día, y la estructura cerrada en la parte inferior organiza y oculta los zapatos de la entrada, algo que en casas donde no se usa calzado tiende a volverse visualmente caótico."],
    gallery: ["entry-g1", "entry-g2", "entry-g3"],
    pre: ["La construí en Cherry, una madera que elegí de manera consciente porque me interesa cómo este material cambia con el tiempo: comienza con un tono cálido y anaranjado, y con los años se asienta en un color más neutro y profundo. Un mueble que envejece bien es un mueble que dura."],
    mid: { icon: "entry", text: [{ b: "Las uniones en las esquinas es un ensamble de dedos con un bisel de 45 grados, una combinación que resuelve dos cosas al mismo tiempo: la resistencia estructural que necesita una pieza de uso diario, y una esquina limpia y afilada que no interrumpe la continuidad visual de la forma." },
                                 "La forma es tipo cascada, sin patas visibles, lo que le da presencia y contención. Pero trabajar con madera sólida trae un desafío inmediato: el peso. Una pieza de estas dimensiones en cherry macizo es considerablemente pesada, y uno de mis objetivos era que visualmente no lo pareciera. Para lograr eso trabajé los bordes con un bisel en ambos lados, un corte en ángulo que adelgaza visualmente el perfil de la madera y le da una sensación de ligereza que la pieza por su masa no tendría de otra manera."] },
    big: { img: "entry-big", narrow: true } },

  { id: "skinnypop", icon: "skinny", label: "SkinnyPop", sub: "Rediseño de empaque", kind: "skinny", thumb: "skinny-logo" },

  { id: "sustainmyshoes", icon: "cross", label: "SustainMyShoes", sub: "Zapateros upcycled 3×3×3", kind: "sust", hero: "sust-hero",
    heroTitle: "SUSTAINMYSHOES", heroPos: "center" },

  { id: "dark-horse", icon: "dh", label: "Tesis · Dark Horse", sub: "Ciclo circular con HDPE reciclado", kind: "dh", hero: "dh-hero" }
];

/* Orden de los íconos (igual al del PDF) */
const ICONS = ["bean", "rasca", "tablas", "lampara", "entry", "skinny", "cross", "dh"]
  .map(k => ({ k, id: PROJECTS.find(p => p.icon === k).id }));
