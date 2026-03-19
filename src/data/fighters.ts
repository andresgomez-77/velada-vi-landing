export interface FighterProfile {
  readonly id: number;
  readonly name: string;
  readonly nickname: string;
  readonly origin: string;
  readonly fightTitle: string;
  readonly rival: string;
  readonly description: string;
  readonly personality: string;
  readonly stats: {
    readonly style: string;
    readonly reach: string;
    readonly weight: string;
    readonly record: string;
  };
  readonly gradient: string;
  readonly accentColor: string;
  readonly textColor: string;
}

export const fighterProfiles: FighterProfile[] = [
  {
    id: 1,
    name: "IlloJuan",
    nickname: "El Rey de Twitch",
    origin: "Sevilla, España",
    fightTitle: "MAIN EVENT",
    rival: "TheGrefg",
    description:
      "El streamer más querido de España llega al ring como protagonista absoluto del Main Event. IlloJuan ha conquistado millones de corazones con su humor único y su autenticidad sin filtros.",
    personality:
      "Fanático del fútbol, amante de los memes y el rey del caos controlado. Su energía caótica en el ring es su mayor arma.",
    stats: {
      style: "Caos controlado",
      reach: "185 cm",
      weight: "80 kg",
      record: "1-0",
    },
    gradient: "from-amber-500 via-orange-600 to-red-700",
    accentColor: "#f59e0b",
    textColor: "#fef3c7",
  },
  {
    id: 2,
    name: "TheGrefg",
    nickname: "El Máquina",
    origin: "Murcia, España",
    fightTitle: "MAIN EVENT",
    rival: "IlloJuan",
    description:
      "David Cánovas, conocido como TheGrefg, es uno de los creadores más influyentes de habla hispana. Disciplinado, competitivo y con una mentalidad ganadora que lleva del gaming al ring.",
    personality:
      "Obsesionado con mejorar, gamer profesional en el alma. Donde otros ven un obstáculo, él ve una oportunidad de ganar.",
    stats: {
      style: "Técnico y explosivo",
      reach: "182 cm",
      weight: "78 kg",
      record: "1-1",
    },
    gradient: "from-blue-600 via-indigo-700 to-purple-800",
    accentColor: "#6366f1",
    textColor: "#e0e7ff",
  },
  {
    id: 3,
    name: "Fernanfloo",
    nickname: "El Salvador",
    origin: "El Salvador",
    fightTitle: "YouTubers Latam",
    rival: "Plex",
    description:
      "Leyenda absoluta de YouTube en Latinoamérica. Fernanfloo representa a toda una generación que creció viéndolo. Su popularidad es tan grande como su corazón.",
    personality:
      "Alegre, humilde y con una conexión única con su comunidad. Le encanta los videojuegos, la comida latina y hacer feliz a la gente.",
    stats: {
      style: "Potencia y corazón",
      reach: "175 cm",
      weight: "75 kg",
      record: "2-1",
    },
    gradient: "from-green-500 via-emerald-600 to-teal-700",
    accentColor: "#10b981",
    textColor: "#d1fae5",
  },
  {
    id: 4,
    name: "Plex",
    nickname: "La Sorpresa",
    origin: "España",
    fightTitle: "YouTubers Latam",
    rival: "Fernanfloo",
    description:
      "El joven streamer que nadie esperaba y que ha demostrado que la nueva generación viene con todo. Plex ha crecido a una velocidad meteórica y llega al ring con hambre de gloria.",
    personality:
      "Energético, irreverente y siempre dispuesto a sorprender. Fan del trap, los coches y las noches largas de stream.",
    stats: {
      style: "Agresivo y veloz",
      reach: "178 cm",
      weight: "73 kg",
      record: "0-0",
    },
    gradient: "from-purple-600 via-violet-700 to-indigo-800",
    accentColor: "#8b5cf6",
    textColor: "#ede9fe",
  },
  {
    id: 5,
    name: "Lit Killah",
    nickname: "El Rap God",
    origin: "Buenos Aires, Argentina",
    fightTitle: "Raperos",
    rival: "Kidd Keo",
    description:
      "Una de las voces más importantes del trap y el rap en español. Lit Killah cambia el micrófono por los guantes pero su mentalidad de guerrero sigue intacta.",
    personality:
      "Intenso, creativo y apasionado. Vive la música como una batalla y lleva esa misma energía al combate.",
    stats: {
      style: "Rítmico y preciso",
      reach: "180 cm",
      weight: "76 kg",
      record: "1-0",
    },
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    accentColor: "#f59e0b",
    textColor: "#fef3c7",
  },
  {
    id: 6,
    name: "Kidd Keo",
    nickname: "El Murciélago",
    origin: "Murcia, España",
    fightTitle: "Raperos",
    rival: "Lit Killah",
    description:
      "Pionero del trap en España, Kidd Keo ha construido una carrera basada en la autenticidad y el trabajo duro. En el ring no hay beats, solo sus puños.",
    personality:
      "Nocturno, intenso y con una visión artística única. Es de los que entrena en silencio y deja hablar a los resultados.",
    stats: {
      style: "Implacable",
      reach: "176 cm",
      weight: "72 kg",
      record: "0-1",
    },
    gradient: "from-slate-600 via-gray-700 to-zinc-800",
    accentColor: "#94a3b8",
    textColor: "#f1f5f9",
  },
  {
    id: 7,
    name: "Marta Díaz",
    nickname: "La Reina",
    origin: "Jaén, España",
    fightTitle: "Creadoras",
    rival: "Tati",
    description:
      "Una de las influencers más reconocidas de España. Marta Díaz demuestra que la fama no es suficiente — hay que ganársela también en el ring.",
    personality:
      "Determinada, elegante y mucho más dura de lo que aparenta. Le apasiona el fitness, la moda y superar sus propios límites.",
    stats: {
      style: "Elegante y contundente",
      reach: "168 cm",
      weight: "58 kg",
      record: "0-0",
    },
    gradient: "from-rose-500 via-pink-600 to-fuchsia-700",
    accentColor: "#f43f5e",
    textColor: "#ffe4e6",
  },
  {
    id: 8,
    name: "Tati",
    nickname: "La Tormenta",
    origin: "México",
    fightTitle: "Creadoras",
    rival: "Marta Díaz",
    description:
      "Creadora de contenido mexicana con millones de seguidores y actitud de campeona. Tati llega a La Velada dispuesta a demostrar que el talento no tiene fronteras.",
    personality:
      "Divertida, espontánea y con una chispa natural que conquista a todos. Dentro del ring esa chispa se convierte en fuego.",
    stats: {
      style: "Veloz y explosiva",
      reach: "165 cm",
      weight: "56 kg",
      record: "1-0",
    },
    gradient: "from-orange-500 via-red-600 to-rose-700",
    accentColor: "#f97316",
    textColor: "#ffedd5",
  },
  {
    id: 9,
    name: "Gero Arias",
    nickname: "El Gamer Alfa",
    origin: "Argentina",
    fightTitle: "Gaming",
    rival: "Viruzz",
    description:
      "Referente del gaming en Argentina, Gero Arias lleva la competitividad de los videojuegos a la vida real. Cada pelea es una partida que planea ganar.",
    personality:
      "Estratega nato, amante de los FPS y la competencia. Analiza cada situación como si fuera un mapa de Counter-Strike.",
    stats: {
      style: "Estratégico",
      reach: "179 cm",
      weight: "77 kg",
      record: "0-0",
    },
    gradient: "from-cyan-500 via-sky-600 to-blue-700",
    accentColor: "#06b6d4",
    textColor: "#cffafe",
  },
  {
    id: 10,
    name: "Viruzz",
    nickname: "El Virus",
    origin: "Valencia, España",
    fightTitle: "Gaming",
    rival: "Gero Arias",
    description:
      "Streamer valenciano conocido por su carisma desbordante y su capacidad para entretener durante horas. En el ring su viralidad se convierte en golpes.",
    personality:
      "Sociable, gracioso y con una energía que contagia a todos. Adora los memes, las bromas pesadas y sorprender a propios y extraños.",
    stats: {
      style: "Impredecible",
      reach: "177 cm",
      weight: "74 kg",
      record: "1-0",
    },
    gradient: "from-violet-500 via-purple-600 to-fuchsia-700",
    accentColor: "#8b5cf6",
    textColor: "#ede9fe",
  },
  {
    id: 11,
    name: "Rivers",
    nickname: "El Río Imparable",
    origin: "España",
    fightTitle: "Creadores",
    rival: "Roro",
    description:
      "Creador de contenido con una comunidad fiel y apasionada. Rivers fluye como su nombre indica — constante, imparable y difícil de contener.",
    personality:
      "Tranquilo fuera del ring, explosivo dentro. Le gusta la música, los deportes y conectar con su audiencia de forma auténtica.",
    stats: {
      style: "Resistente",
      reach: "181 cm",
      weight: "79 kg",
      record: "0-0",
    },
    gradient: "from-teal-500 via-cyan-600 to-sky-700",
    accentColor: "#14b8a6",
    textColor: "#ccfbf1",
  },
  {
    id: 12,
    name: "Roro",
    nickname: "El Torbellino",
    origin: "España",
    fightTitle: "Creadores",
    rival: "Rivers",
    description:
      "Energía pura embotellada. Roro es de esos creadores que nunca paran y siempre están al 200%. Su ritmo en el ring es tan frenético como sus streams.",
    personality:
      "Hiperactivo, divertido y con una creatividad sin límites. Si hay caos, Roro está en el centro con una sonrisa.",
    stats: {
      style: "Frenético",
      reach: "174 cm",
      weight: "71 kg",
      record: "0-0",
    },
    gradient: "from-red-500 via-rose-600 to-pink-700",
    accentColor: "#ef4444",
    textColor: "#fee2e2",
  },
  {
    id: 13,
    name: "Alondrissa",
    nickname: "La Guerrera",
    origin: "España",
    fightTitle: "Streamers",
    rival: "Angie Velasco",
    description:
      "Streamer con carácter y personalidad arrolladora. Alondrissa no viene a participar, viene a ganar. Su determinación dentro del ring es tan fuerte como frente a la cámara.",
    personality:
      "Directa, apasionada y sin pelos en la lengua. Amante del anime, los videojuegos y los retos que la saquen de su zona de confort.",
    stats: {
      style: "Determinada",
      reach: "166 cm",
      weight: "57 kg",
      record: "0-0",
    },
    gradient: "from-fuchsia-500 via-pink-600 to-rose-700",
    accentColor: "#d946ef",
    textColor: "#fae8ff",
  },
  {
    id: 14,
    name: "Angie Velasco",
    nickname: "La Colombiana",
    origin: "Colombia",
    fightTitle: "Streamers",
    rival: "Alondrissa",
    description:
      "La representante colombiana que llega con el sabor latino y la garra de una campeona. Angie Velasco mezcla carisma y competitividad en proporciones perfectas.",
    personality:
      "Alegre, combativa y con una energía caribeña que ilumina cualquier espacio. Baila, canta y ahora también boxea.",
    stats: {
      style: "Explosiva",
      reach: "163 cm",
      weight: "55 kg",
      record: "0-0",
    },
    gradient: "from-yellow-400 via-orange-500 to-red-600",
    accentColor: "#facc15",
    textColor: "#fefce8",
  },
  {
    id: 15,
    name: "Edu Aguirre",
    nickname: "El Periodista",
    origin: "Madrid, España",
    fightTitle: "Creadores vs Periodistas",
    rival: "Gastón Edul",
    description:
      "Periodista deportivo conocido por su pasión y sus polémicas declaraciones. Edu Aguirre lleva años hablando de deportes — ahora toca practicarlo.",
    personality:
      "Apasionado, controvertido y sin miedo a decir lo que piensa. Su mayor enemigo es él mismo cuando se pone nervioso.",
    stats: {
      style: "Impulsivo",
      reach: "178 cm",
      weight: "76 kg",
      record: "0-0",
    },
    gradient: "from-blue-500 via-sky-600 to-cyan-700",
    accentColor: "#3b82f6",
    textColor: "#dbeafe",
  },
  {
    id: 16,
    name: "Gastón Edul",
    nickname: "El Narrador",
    origin: "Buenos Aires, Argentina",
    fightTitle: "Creadores vs Periodistas",
    rival: "Edu Aguirre",
    description:
      "Periodista argentino famoso por su narración épica de goles. Gastón Edul narra las grandes hazañas — ahora le toca protagonizar una.",
    personality:
      "Carismático, apasionado del fútbol y con una voz que emociona multitudes. Fuera del micrófono es tan intenso como dentro.",
    stats: {
      style: "Calculado",
      reach: "180 cm",
      weight: "78 kg",
      record: "0-0",
    },
    gradient: "from-sky-500 via-blue-600 to-indigo-700",
    accentColor: "#0ea5e9",
    textColor: "#e0f2fe",
  },
  {
    id: 17,
    name: "Fabiana Sevillano",
    nickname: "La Fuerza",
    origin: "España",
    fightTitle: "Latinas",
    rival: "La Parce",
    description:
      "Creadora de contenido con actitud de campeona. Fabiana llega a La Velada para demostrar que la fuerza no tiene género ni fronteras.",
    personality:
      "Intensa, trabajadora y con una mentalidad de superación constante. Le apasiona el deporte y los retos extremos.",
    stats: {
      style: "Poderosa",
      reach: "170 cm",
      weight: "62 kg",
      record: "0-0",
    },
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    accentColor: "#10b981",
    textColor: "#d1fae5",
  },
  {
    id: 18,
    name: "La Parce",
    nickname: "La Parcera",
    origin: "Colombia",
    fightTitle: "Latinas",
    rival: "Fabiana Sevillano",
    description:
      "El sabor colombiano hecho campeona. La Parce representa la nueva generación de creadoras latinas que llegan con todo y sin pedir permiso.",
    personality:
      "Auténtica, directa y con una personalidad que engancha desde el primer segundo. Su conexión con la comunidad es legendaria.",
    stats: { style: "Veloz", reach: "164 cm", weight: "56 kg", record: "0-0" },
    gradient: "from-yellow-500 via-amber-600 to-orange-700",
    accentColor: "#eab308",
    textColor: "#fefce8",
  },
  {
    id: 19,
    name: "Clerss",
    nickname: "La Azteca",
    origin: "México",
    fightTitle: "Mexicanas",
    rival: "Natalia MX",
    description:
      "Creadora mexicana con millones de seguidores y el corazón de una guerrera. Clerss sube al ring para demostrar que México tiene campeones en todas las disciplinas.",
    personality:
      "Divertida, espontánea y con un sentido del humor que desarma a cualquiera. Dentro del ring ese desarme es literal.",
    stats: {
      style: "Técnica",
      reach: "165 cm",
      weight: "57 kg",
      record: "0-0",
    },
    gradient: "from-green-600 via-emerald-700 to-green-800",
    accentColor: "#16a34a",
    textColor: "#dcfce7",
  },
  {
    id: 20,
    name: "Natalia MX",
    nickname: "La Mexicana",
    origin: "México",
    fightTitle: "Mexicanas",
    rival: "Clerss",
    description:
      "Influencer y creadora mexicana con una presencia que llena estadios. Natalia MX llega a La Velada a escribir su propio capítulo en la historia del evento.",
    personality:
      "Segura, carismática y siempre al 100%. Le encanta la moda, el baile y demostrar que los límites están para romperlos.",
    stats: {
      style: "Agresiva",
      reach: "167 cm",
      weight: "59 kg",
      record: "0-0",
    },
    gradient: "from-red-600 via-rose-700 to-pink-800",
    accentColor: "#dc2626",
    textColor: "#fee2e2",
  },
];
