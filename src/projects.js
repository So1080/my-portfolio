// projects.js

export const CATEGORIES_DATA = {
  // Accessibiliy, Games, UX/UI
  games: {
    title: "Educational Games",
    description: "Designing playful mechanics that transform complex learning science and technical concepts into high-engagement interactive learning environments.",
    heroImage: "/assets/images/games-category-hero.jpg"
  },
  accessibility: {
    title: "Accessibility Projects",
    description: "Bridging human-computer interaction, tangible hardware, and accessible design to build intuitive physical-digital artifacts and seamless application workflows.",
    heroImage: "/projects_images/aquarium/aquarium5.jpg"
  },
  uxui: {
    title: "UX/UI Design",
    description: "Designing intuitive, user-centered interfaces and experiences that enhance usability, accessibility, and overall user satisfaction.",
    heroImage: "/assets/images/uxui-category-hero.jpg"
  }
};


export const PROJECTS_DATA = {
  aquarium: {
    title: "Aquarium Prototypes",
    heroVideo: "/projects_images/aquarium/2min_version.mp4",
    cardImage: "/projects_images/aquarium/aquarium5.jpg",
    category: "accessibility",
    role: "Sole Technical Developer & Designer",
    techStack: ["Python", "OpenCV", "MediaPipe", "JavaScript"],
    quickPitch: "Developing interactive, computer-vision driven tangible maps to make complex ocean data fully accessible to blind and visually impaired (BVI) museum visitors.",
    
    sections: [
      {
        title: "The Challenge & Context",
        text: "Developed under a Georgia Sea Grant in partnership with the UGA Aquarium and Gray's Reef National Marine Sanctuary, this ongoing project addresses the steep accessibility barriers blind and visually impaired (BVI) visitors face when interacting with complex ocean data in traditional museum and aquarium settings. Acting as the sole developer, I am responsible for translating dense scientific datasets into inclusive, tactile exhibitions.",
        image: "/projects_images/aquarium/Map-of-Grays-Reef-National-Marine-Sanctuary-depicting-habitat-types-and-locations-of-all.png",
        imagePosition: "right"
      },
      {
        title: "The Inclusive Vision",
        text: "The concept centers on a 3D physical map representing various ocean habitats. By deploying a depth camera, 3D mapping, and ArUco markers, a custom computer vision system-built using Python (OpenCV) and Microsoft's MediaPipe-tracks the physical coordinates of a user's index finger as they touch the map. The system maps these coordinates to specific habitats in real-time and triggers localized sound design, enabling BVI individuals to explore complex spatial and environmental datasets dynamically through sound and touch.",
        image: "/projects_images/aquarium/row_of_prototypes.png",
        imagePosition: "left"
      },
      {
        title: "Co-Design Methodology",
        text: "True inclusion requires diverse expertise. Our multidisciplinary team consists of oceanographers managing the core scientific data, learning specialists, a dedicated sound designer, and a researcher who is both an active scientist and a BVI individual. This close collaboration ensured that every auditory mapping and tactile asset was deeply grounded in both scientific accuracy and authentic accessibility requirements.",
        image: "/projects_images/aquarium/aquarium_test1.png",
        imagePosition: "right"
      },
      {
        title: "Technical Implementation",
        text: "To dynamically identify changing physical layouts, ArUco markers are affixed directly to the 3D maps, allowing the overhead camera to instantly determine which specific exhibit map is present. MediaPipe continuously tracks the continuous coordinates of the user's index finger within the camera's field of view. A homography matrix maps these raw camera pixels directly onto the spatial coordinates of the 3D map's habitat boundaries, dynamically playing the precise sonification file linked to that distinct ecological zone.",
        // image: "/projects_images/aquarium/skeleton_view_person_hands.jpg",
        images: [
          "/projects_images/aquarium/skeleton_view_person_hands.jpg",
          "/projects_images/aquarium/skeleton_view_animal.jpg"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Exhibition & Testing",
        text: "We utilized an iterative testing cycle that spanned four progressive prototype phases. Initial development relied on deep, qualitative user interviews with BVI individuals to establish basic usability and refine tactile feedback. Once validated, we deployed a full exhibition at the UGA Aquarium with everyday visitors, analyzing broader public engagement and confirming that the system creates an intuitive, shared learning experience for both sighted and BVI guests.",
        image: "/projects_images/aquarium/aquarium3.jpg",
        imagePosition: "right"
      },
      {
        title: "Impact & Recognition",
        text: "This technology has been selected for permanent installation at the Gray's Reef National Marine Sanctuary pavilion. Furthermore, this system serves as the foundational architecture for a massive 6'x6' interactive exhibition table currently in development for a museum in Florida, and has generated multiple scientific papers detailing its contributions to the learning sciences.",
        image: "/projects_images/aquarium/aquarium8.jpg",
        imagePosition: "left"
      }
    ]
  },

  barrs: {
    title: "Braille BARRS",
    category: "accessibility",
    role: "Designer & Sole Technical Developer",
    techStack: ["Python"],
    heroImage: "/projects_images/Braille_BARRS/barrs5.png",
    cardImage: "/projects_images/Braille_BARRS/barrs5.png",
    quickPitch: "An interactive 3D orientation map paired with a responsive hardware sonification device built to lower the spatial barrier and navigation anxiety for younger BVI children in museum environments.",
    
    sections: [
      {
        title: "The Challenge & Context",
        text: "Originating as an educational technology classroom initiative, Braille BARRS evolved into a formal partnership with the High Museum of Art in Atlanta. The project confronts a major spatial barrier: younger BVI children are frequently isolated from exploring open museum and gallery spaces independently, as they lack an intuitive orientation anchor to help them navigate before crowds of sighted children enter the space.",
        // image: "/assets/images/barrs-challenge.jpg",
        imagePosition: "right"
      },
      {
        title: "The Inclusive Vision",
        text: "Braille BARRS is an interactive 3D orientation map paired with a responsive hardware sonification device. The base map features physical pathways winding through the museum layout, interrupted by dedicated slots where children can insert distinct 3D-printed elements. Designed as a collaborative tool, it allows BVI children-either independently or alongside sighted peers and educators-to complete the physical map as a puzzle, listening to custom spatial descriptions and audio cues to safely internalize the layout of a real-world environment before stepping foot into it.",
        image: "/projects_images/Braille_BARRS/braille_render.png",
        imagePosition: "left"
      },
      {
        title: "Co-Design Methodology",
        text: "To build an authentic orientation tool, we executed a rigorous series of user interviews and usability testing sessions exclusively with BVI individuals. The core insight gained was that interview design is vital; structuring sessions around highly tactile, puzzle-like activities rather than abstract verbal questions drastically shifted the depth of the feedback we received, directly shaping the mechanical tolerances and auditory pacing of the final device.",
        image: "/projects_images/Braille_BARRS/braille_sketch.png",
        imagePosition: "right"
      },
      {
        title: "Technical Implementation",
        text: "The prototype relies on an integrated hardware-software architecture using Python to manage physical inputs and audio delivery. The tactile puzzle slots contain embedded electronic switches or sensor nodes that detect when a specific 3D-printed building or artifact is correctly inserted along the pathway. Upon activation, the software parses the spatial node ID and triggers high-fidelity auditory descriptions that match the kid's physical progress across the layout.",
        image: "/projects_images/Braille_BARRS/barrs1.jpeg",
        imagePosition: "left"
      },
      {
        title: "Exhibition & Testing",
        text: "We conducted live, real-world user testing with five BVI children directly inside the youth spaces of the High Museum of Art. The children treated the spatial orientation process as an engaging game, appreciating the playful, puzzle-like interaction loops and the descriptive audio feedback. It successfully served as a reliable cognitive anchor, proving that physical-digital maps can drastically lower the anxiety of exploring unfamiliar architectural layouts.",
        // image: "/assets/images/barrs-testing.jpg",
        imagePosition: "right"
      },
      {
        title: "Impact & Recognition",
        text: `Braille BARRS was awarded Best Project of the Semester at Georgia Tech. The research, methodologies, and deployment results were compiled into a peer-reviewed scientific paper and presented as an interactive poster session at the <a href="https://dl.acm.org/doi/10.1145/3694907.3765955" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;">ACM SUI conference in Montreal</a> in 2025.`,
        // image: "/assets/images/barrs-impact.jpg",
        imagePosition: "left"
      }
    ]
  },
  
  wherearemypeople: {
    title: "Where Are My People",
    category: "games",
    role: "Lead Game Designer and Developer",
    techStack: ["Unity", "C#", "Blender", "Git"],
    heroImage: "/projects_images/where_is_my_people/where_poster.png",
    // quickPitch: "A narrative-driven educational video game designed for middle and high school students that unmasks the hidden complexities of artificial intelligence, data pipelines, and systemic bias.",
    quickPitch: `Where Are My People? is an educational video game that teaches middle school students computer vision concepts through interactive gameplay. Check out our <a href="https://playandlearnlab.itch.io/where-are-my-people" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;"> itch.io link</a> or our <a href="https://www.playandlearnlab.com" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;"> lab's website</a> for more details on our research.`,
    
    sections: [
      {
        title: "The Learning Problem",
        text: "Students frequently treat artificial intelligence as an infallible, magical 'black box' that implicitly understands the world. The pedagogical objective of this game is to dispel this misconception, illustrating that machine learning models are heavily dependent on human data curation and are highly prone to reproducing human bias if trained incorrectly.",
        // image: "/assets/images/wamp-problem.jpg",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "The player is directly responsible for curating the training datasets for the spaceship's Al; any classification error or omission directly impedes the companion robot's ability to locate your family. By swapping perspectives and playing from the Al's literal viewpoint, students experience firsthand how features that human brains perceive instantly (such as a limb or a silhouette) require thousands of parsed inputs and sensor calibrations to be recognized accurately by a machine.",
        // image: "/projects_images/where_is_my_people/where2.png",
        images: [
          "/projects_images/where_is_my_people/where2.png",
          "/projects_images/where_is_my_people/where3.png"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Technical Architecture",
        text: "Developed utilizing a modular state machine architecture in Unity (C#) to cleanly separate the complex narrative dialog branching structures from the underlying data-driven machine learning visualization modules. The game features custom interface systems built to mimic data parsing pipelines, optimizing performance across web browsers to ensure seamless accessibility for standard school-issued Chromebooks and computers.",
        // image: "/assets/images/wamp-tech.jpg",
        imagePosition: "right"
      },
      {
        title: "Playtesting & Iteration",
        text: "Adhering to strict co-design frameworks, we conducted 6 extensive rounds of iterative playtesting, deliberately alternating between middle schoolers, high schoolers, college students, and active educators. These sessions revealed that several early mechanics inadvertently ran counter to our learning objectives-making the Al feel too autonomous or frustratingly arbitrary-which led to an extensive mechanical overhaul to maximize both replayability and clear conceptual clarity.",
        image: "/projects_images/where_is_my_people/where1.png",
        imagePosition: "left"
      },
      {
        title: "Current Status & Key Takeaway",
        text: "Fully launched and accessible online, the game is actively integrated into middle and high school curricula across several classrooms, drawing consistent weekly users. The project emphasized the challenges of maintaining long-term codebases for authentic stakeholders, confirming that educational game loops succeed only when user testing is embedded into every stage of development.",
        // image: "/assets/images/wamp-status.jpg",
        imagePosition: "right"
      }
    ]
  },

  squareup: {
    title: "SquareUp (Al Revamp)",
    category: "games",
    role: "Secondary Stage Lead Designer and Developer",
    techStack: ["Unity", "C#", "Git"],
    heroImage: "/projects_images/SquareUp/square_poster.png",
    quickPitch: `An educational coffee shop business-simulation game that demystifies neural networks, computer vision, and NLP data parsing structures for K-12 students. Check out our <a href="https://playandlearnlab.itch.io/square-up" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;"> itch.io link</a> or our <a href="https://www.playandlearnlab.com" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;"> lab's website</a> for more details on our research.`,

    sections: [
      {
        title: "The Learning Problem",
        text: "While the initial version of the game introduced machine learning concepts, evaluation showed it failed to accurately convey how data processing occurs under the hood, leaving students with an abstract understanding of Al capabilities without the technical context.",
        image: "/projects_images/SquareUp/square3.png",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "To bridge this gap, players engage in diagnostic quizzes to unlock upgraded shop infrastructure, combined with active training phases where they manually map verbal customer coffee orders to specific machine actions. Crucially, players have access to a live Al Analytics Report dashboard. Here, they inspect training curves, observe loss and gain metrics, and see exactly which weights fluctuate at the end of each simulated workday, making the abstract nature of neural network optimization tangible.",
        image: "/projects_images/SquareUp/squarup2_1.png",
        imagePosition: "left"
      },
      {
        title: "Technical Architecture",
        text: "Moving past basic visual simulation, the game features an authentic, lightweight machine learning model embedded directly into the Unity runtime. It evaluates text arrays using a constrained vocabulary and a real, dynamic weight matrix to predict customer orders. This mathematical authenticity ensures that when a player views their analytics dashboard, they are looking at real data fluctuations generated by their choices, satisfying a crucial pedagogical requirement for authentic learning.",
        // image: "/assets/images/squareup-tech.jpg",
        imagePosition: "right"
      },
      {
        title: "Playtesting & Iteration",
        text: "We ran extensive feedback loops with students, K-12 teachers, and university computer science majors. Consulting with advanced CS peers proved exceptionally valuable; their specialized domain knowledge helped us simplify dense machine learning mathematics into clean visual analogies that middle schoolers could immediately grasp without losing technical validity.",
        // image: "/assets/images/squareup-testing.jpg",
        imagePosition: "left"
      },
      {
        title: "Current Status & Key Takeaway",
        text: "The original build is live, and my expanded version is scheduled for deployment in June 2026, serving public school teachers across Georgia, USA. This project taught me a vital lesson in instructional design: it is easy to get caught up in development momentum and lose sight of core learning goals. Stepping back to critically audit an existing build-and being willing to overhaul systems to protect the educational objective-is essential for impactful design.",
        image: "/projects_images/SquareUp/squarup2_4.png",
        imagePosition: "right"
      }
    ]
  },

  glacou: {
    title: "Glaçou",
    category: "games",
    role: "Lead Systems and Gameplay Programmer",
    techStack: ["Unity", "C#", "Blender", "Git"],
    heroImage: "/projects_images/Glacou/glacou_livre.png",
    quickPitch: "A client-driven educational game and physical companion guidebook designed to build environmental consciousness and visual empathy in elementary school students.",
    
    sections: [
      {
        title: "The Learning Problem",
        text: "Designing for early childhood education introduces a unique barrier: you cannot assume your target audience possesses advanced reading literacy. The pedagogical challenge was to communicate complex, systemic ecological consequences entirely without long text descriptions or explicit written instructions.",
        // image: "/assets/images/glacou-problem.jpg",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "The gameplay relies heavily on a series of rapid mini-games incorporating randomized events to sustain high emotional engagement. We utilized classic, accessible frameworks-including point-and-click navigation, digital memory matching, mazes, and hide-and-seek mechanics. Rather than text-based warnings, feedback is delivered through clear, artistic changes in the ice cube's facial expressions and physical state, teaching cause-and-effect through visual empathy.",
        images: [
          "/projects_images/Glacou/glacou1.png",
          "/projects_images/Glacou/glacou2.png"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Technical Architecture",
        text: "Built using a decoupled, event-driven architecture within Unity to allow smooth integration of independent mini-games. The ice cube's emotional states and melting physics are governed by a central global variable manager, ensuring that actions taken across different mini-games alter the companion's visual blend-shapes and animation states consistently.",
        // image: "/assets/images/glacou-tech.jpg",
        imagePosition: "right"
      },
      {
        title: "Playtesting & Iteration",
        text: "Due to the strict 6-month constraints of our development phase and the heightened security and logistical protections required when testing with young children, user testing was restricted to the tail end of production. While initial feedback was highly positive, the lack of continuous testing left several UX rough spots unaddressed. To preserve our findings, we documented these insights in an exhaustive Game Design Document (GDD) to guide the next development team.",
        // image: "/assets/images/glacou-testing.jpg",
        imagePosition: "left"
      },
      {
        title: "Current Status & Key Takeaway",
        text: "The project is ongoing, passing sequentially to a new 5-person student cohort each semester to iterate and expand the codebase. This experience cemented my belief that a learning designer cannot effectively build tools in a vacuum. When your target persona is far removed from your own lived experience, continuous, iterative stakeholder feedback is absolutely mandatory to validate design assumptions.",
        image: "/projects_images/Glacou/glacou_planete_icon.png",
        imagePosition: "right"
      }
    ]
  },

  magnusatomus: {
    title: "Magnus Atomus",
    category: "games",
    role: "Core Systems Developer",
    techStack: ["Java"],
    heroImage: "/projects_images/MagnusAtomus/magnus_homescreen.png",
    quickPitch: "A native Java desktop puzzle game that transforms the periodic table of elements into a vibrant creature-collection and physics-based mechanics pipeline.",
    
    sections: [
      {
        title: "The Learning Problem",
        text: "The periodic table is frequently taught through rote memorization, causing students to lose sight of why an element's atomic structure or reactivity matters. The challenge lay in ensuring knowledge transfer: converting abstract chemical data sheets into interactive assets without losing the underlying scientific meaning.",
        images: [
          "/projects_images/MagnusAtomus/magnus_lowfi1.png",
          "/projects_images/MagnusAtomus/magnus_lowfi2.png"
        ],
        layout: "vertical",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "Elements are represented as interactive physical orbs that players slot into environmental mechanisms on screen. The puzzle solutions are direct expressions of chemical properties: slotting a hydrogen and oxygen pairing might fill a vessel with water to weigh down a pressure plate, while leveraging a highly reactive element might trigger a controlled blast to break through a barrier, mapping scientific principles directly to game progression.",
        images: [
          "/projects_images/MagnusAtomus/magnus1.png",
          "/projects_images/MagnusAtomus/magnus2.png"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Technical Architecture",
        text: "Built from scratch in native Java without an external commercial game engine, requiring us to construct our own modular Ul rendering layer and basic discrete collision detection systems. My puzzle architecture utilized an abstract, object-oriented component system where element objects dynamically passed their chemical property arrays to environmental trigger scripts, calculating reactions systematically based on the inserted element's data.",
        image: "/projects_images/MagnusAtomus/magnus_diagramme_classes.png",
        imagePosition: "right"
      },
      {
        title: "Playtesting & Iteration",
        text: "Given our limited academic window, direct testing with middle school classrooms was unfeasible. To mitigate this, we structured an internal evaluation loop, conducting weekly code and design reviews with a primary professor and bi-weekly defense panels with three additional faculty members. This expert feedback loop allowed us to flag and fix mechanical ambiguities and logic bugs early in development.",
        // image: "/assets/images/magnus-testing.jpg",
        imagePosition: "left"
      },
      {
        title: "Current Status & Key Takeaway",
        text: "Completed as a targeted, single-semester classroom project; the game remains an un-deployed educational prototype evaluated extensively for its technical execution and design framework. The project underscored the delicate balance of abstraction in educational games: if a mechanic becomes too detached from reality, the core learning objective is lost, making it the designer's job to keep gameplay loops tethered to real-world concepts.",
        image: "/projects_images/MagnusAtomus/magnus1bis.png",
        imagePosition: "right"
      }
    ]
  },

  playlearnlab: {
    title: "Play & Learn Lab (Collection)",
    category: "games",
    role: "Research Assistant, Lead Game Designer, and Developer",
    techStack: ["Unity", "C#", "Blender", "Git"],
    heroImage: "/projects_images/playandlearn.jpeg",
    quickPitch: `A multi-year research portfolio driving the co-design of educational web games with K-12 youth. Check out our <a href="https://www.playandlearnlab.com" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;"> lab's website</a> for more details on our research and our <a href="https://playandlearnlab.itch.io" target="_blank" rel="noopener noreferrer" style="color: #1A1A1A; text-decoration: underline; font-weight: bold;">itch.io page</a> to play our games!`,
    
    sections: [
      {
        title: "The Learning Problem",
        text: "Co-designing with youth is an amazing framework, but it introduces a distinct challenge: student designers frequently harbor deep domain misconceptions about complex topics (like Al or physics), which can accidentally manifest as flawed mechanics. Our research focuses heavily on refining our prompting and facilitation techniques, guiding youth design sessions effectively without overstepping or dampening their creative ownership.",
        // image: "/assets/images/pllab-problem.jpg",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "Because this represents an umbrella research portfolio, mechanics vary wildly across our library-spanning narrative branching systems, data dashboards, strategy elements, and simulation loops. Every single mechanic is engineered as a telemetry-catching node, tracking student choices, mistake frequencies, and systemic progression to gather empirical data on player behavior.",
        // image: "/assets/images/pllab-mechanics.jpg",
        imagePosition: "left"
      },
      {
        title: "Technical Architecture",
        text: "To support a growing portfolio, I established a standardized, modular technical framework across all lab games. This includes reusable Ul layout templates, centralized data-logging modules for academic evaluation, and highly optimized WebGL build settings. This structure ensures that new games can be rapidly prototyped, hosted on our central research portal, and evaluated without rewriting foundational code.",
        // image: "/assets/images/pllab-tech.jpg",
        imagePosition: "right"
      },
      {
        title: "Playtesting & Iteration",
        text: "Our methodology follows a strict seasonal cycle. In the autumn, we host structured workshops teaching high schoolers core technical concepts, collaborating closely to map out game ideas. During the winter and spring, I translate these concepts into clean code, subjecting the games to multi-tiered evaluation sessions with teachers, university students, and K-12 target users to refine usability before deployment.",
        image: "/projects_images/BridgeUp1.jpeg",
        imagePosition: "left"
      },
      {
        title: "Current Status & Key Takeaway",
        text: "The lab's portal currently hosts 5 fully deployed, operational games, with an additional 4 currently in active development available to play here: <a href=\"https://playandlearnlab.itch.io\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color: #1A1A1A; text-decoration: underline; font-weight: bold;\">itch.io</a>. This extended experience completely reshaped my engineering and design habits. It taught me that when building for education, the learning objective must remain the absolute center of gravity; it is incredibly easy to get swept away by a fun mechanic and inadvertently compromise your educational goals.",
        // image: "/assets/images/pllab-status.jpg",
        imagePosition: "right"
      }
    ]
  },

  digischool: {
    title: "digiSchool (Gamification Internship)",
    category: "uxui",
    role: "UX Engineering Intern",
    techStack: ["Figma", "Octalysis Framework", "JTBD Framework"],
    heroImage: "/projects_images/digischool/digischool_tanuki_course.png",
    quickPitch: "Planning and executing a multi-platform gamification strategy across web and mobile ecosystems to boost user retention through behavioral design.",
    
    sections: [
      {
        title: "Project Overview & Objective",
        text: "During an intensive 6-month UX engineering internship, I was tasked with planning and executing a comprehensive gamification framework across digiSchool's flagship web platforms and mobile applications. The platform served a massive, highly diverse user base spanning middle schoolers to adult learners across numerous academic disciplines. The primary business and design challenge was boosting low user retention by leveraging behavioral design to turn self-paced learning into an engaging habit.",
        
        imagePosition: "right"
      },
      {
        title: "UX Research & User Personas",
        text: "I initiated the project by conducting extensive user interviews across our core demographic segments. To map out journeys and uncover structural pain points, I utilized the Jobs-to-Be-Done (JTBD) framework, paired with a comprehensive competitive benchmark analysis structured around the Yu-kai Chou Octalysis Gamification Framework. Crucially, I ran internal alignment workshops across every corporate department-including UI designers, curriculum authors, product managers, and marketing executives-to balance user desires with business goals.",
        images: [
          "/projects_images/digischool/Digischool_Octalysis.png",
          "/projects_images/digischool/Kartable_Octalysis.png"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Information Architecture & Wireframes",
        text: "Navigating a complex, pre-existing product ecosystem meant that radical, sweeping restructures were technically impossible due to a massive engineering backlog. I focused on mapping out a pragmatic, phased implementation roadmap. Working directly with the engineering team, I broke down the broad gamification strategy into lean, high-impact 'quick wins' that could be seamlessly woven into the existing layout without disrupting operational stability.",
        images: [
          "/projects_images/digischool/digi3.png",
          "/projects_images/digischool/digi2.png",
          "/projects_images/digischool/digi1.png"
        ],
        layout: "vertical",
        imagePosition: "right"
      },
      {
        title: "Key Interface Features",
        text: "• Gamified Mascot Integration: Introduced a central, reactive platform companion to provide immediate feedback and emotional support during difficult study modules, increasing visual continuity across separate apps. (Special thank you to Karl-Elliott Jouffroy (graphic designer) for all the illustrations)\n• Playful Quiz Restructuring: Re-engineered standard, dry multiple-choice assessments into dynamic, low-stakes mini-games, reducing test anxiety while protecting the core educational validation data.\n• Social Connection Hub: Designed personalized user profiles and lightweight peer connection systems to foster an organic sense of community and accountability directly within the platform.",
        image: "/projects_images/digischool/digischool_tanuki_medaille (1).png",
        imagePosition: "left"
      },
      // {
      //   title: "The Proof (Data-Driven Results)",
      //   text: "The strategic, phased integration of these core gamification features successfully drove a 10% boost in user retention across our primary web and mobile platforms.",
      //   // image: "/assets/images/digischool-proof.jpg",
      //   imagePosition: "right"
      // },
      {
        title: "Reflections",
        text: "This project provided an invaluable lesson in corporate product management. As a UX professional, success isn't just about designing a clean layout; it's about clear communication. Navigating competing corporate priorities and a development team focused on bug fixing taught me how to present data persuasively, demonstrating how small Ul adjustments could yield tangible user engagement and business value.",
        // image: "/projects_images/digischool/digischool_tanuki_course.png",
        imagePosition: "left"
      }
    ]
  },

  creatinder: {
    title: "CreaTinder",
    category: "uxui",
    role: "HCI Designer & Prototyper",
    techStack: ["Figma"],
    heroImage: "/projects_images/creaTinder/logo.png",
    quickPitch: "An artifact-first mobile networking prototype engineered to spark cross-department campus creative collaborations while lowering outreach anxiety.",
    
    sections: [
      {
        title: "Project Overview & Objective",
        text: "Developed during an intensive Human-Computer Interaction (HCI) seminar, CreaTinder is a mobile app prototype built to spark organic community building on campus. Recognizing that student artists, designers, and musicians frequently struggle to find collaborators across siloed academic departments, we designed a familiar card-swiping interface-re-engineered entirely to connect creatives based on their artistic medium and ongoing projects.",
        // image: "/assets/images/creatinder-overview.jpg",
        imagePosition: "right"
      },
      {
        title: "UX Research & User Personas",
        text: "We began with user interviews inside the university's creative communities to identify collaboration bottlenecks. Using affinity mapping, we grouped qualitative insights, revealing that students felt intimidated by cold outreach and lacked visibility into what peers were making. We built low-fidelity paper prototypes to map user journeys, validated them through rapid testing, and then advanced to high-fidelity design to study how visual layouts affected perceived trust and platform utility.",
        image: "/projects_images/creaTinder/affinityMappingInterviews.png",
        imagePosition: "left"
      },
      {
        title: "Information Architecture & Wireframes",
        text: "Moving from low-fi sketches to a fully dynamic prototype required multiple testing cycles. We focused heavily on the user profile flow, ensuring the setup process was friction-free while gathering enough project data to drive meaningful connections. Every step was iterated in Figma, allowing us to test micro-interactions and transitions in a highly realistic mobile frame. Figma link: <a href='https://www.figma.com/design/dOvLfFSNWbNe8VHSW6EAVe/CreaTinder?node-id=3203-1581&t=tEm3ukKm0mlRiudO-1' target='_blank' rel='noopener noreferrer' style='color: #1A1A1A; text-decoration: underline; font-weight: bold;'>CreaTinder Prototype</a>",
        image: "/projects_images/creaTinder/lowfi_prototype.png",
        imagePosition: "right"
      },
      {
        title: "Key Interface Features",
        text: "• Artifact-First Swiping: The main discovery feed showcases a large, central visual asset of a user's creation, shifting focus away from personal photos to lower social anxiety and prioritize creative merit.\n• Centralized Campus Event Hub: A unified dashboard displaying active artistic pop-ups, gallery open-calls, and jam sessions, allowing students to RSVP and find events in a single spot rather than tracking scattered social accounts.",
        images: [
          "/projects_images/creaTinder/profile1.png",
          "/projects_images/creaTinder/profile2.png"
        ],
        layout: "horizontal",
        imagePosition: "left"
      },
      {
        title: "The Proof (Data-Driven Results)",
        text: "High-fidelity user testing validated that our artifact-first layout significantly reduced outreach anxiety compared to traditional social networks. Users reported a much higher willingness to message strangers when the conversation was anchored directly to a shared piece of art or project.",
        images: [
          "/projects_images/creaTinder/getinspo_page.png",
          "/projects_images/creaTinder/chat_page.png",
          "/projects_images/creaTinder/my_gallery_page.png"
        ],
        layout: "horizontal",
        imagePosition: "right"
      },
      {
        title: "Reflections",
        text: "CreaTinder was a major milestone in my design journey, opening my eyes to the power of Figma for complex, variable-driven prototyping. It also delivered a classic UX lesson: several initial assumptions we made about what student creators wanted were completely debunked during our first round of user interviews, proving that authentic user research must always guide design choices.",
        // image: "/assets/images/creatinder-reflections.jpg",
        imagePosition: "left"
      }
    ]
  },

  myjourneyattech: {
    title: "My Journey at Tech",
    category: "uxui",
    role: "Mobile/Telemetry Developer & Interaction Designer",
    techStack: ["Android Studio", "Java", "Python", "Google Maps API"],
    heroImage: "/projects_images/MyJourneyAtTech/style12.png",
    quickPitch: "A mobile application parsing passive geographic telemetry to systematically transform daily college commutes into striking, abstract generative artwork.",
    
    sections: [
      {
        title: "Project Overview & Objective",
        text: "Built during a Mobile and Ubiquitous Computing class, this project explores emotional design on mobile devices. The app challenges the standard paradigm of higher education-which prioritizes the final diploma over the personal growth achieved along the way-by gathering passive geographic telemetry to transform a student's daily campus travels into striking, personalized abstract digital art.",
        image: "/projects_images/MyJourneyAtTech/finalUI.png",
        imagePosition: "right"
      },
      {
        title: "UX Research & User Personas",
        text: "We conducted comparative user research, interviewing current university students alongside established alumni. This uncovered a fascinating divergence: current undergraduates focused heavily on short-term stresses like finding open study desks or navigating crowded paths, whereas alumni expressed a deep, nostalgic appreciation for the campus spaces they used to inhabit. The challenge was balancing these perspectives into a single interface that felt relevant in the moment while capturing long-term emotional depth.",
        // image: "/assets/images/myjourney-research.jpg",
        imagePosition: "left"
      },
      {
        title: "Information Architecture & Wireframes",
        text: "The technical prototype was built natively using Android Studio, pulling real-time location data via the Google Maps API from a group of student testing volunteers. This raw coordinate data was then processed through custom Python script libraries to convert location streams into abstract geometric art forms. We mapped out the interface from rough concepts to a fully operational mobile application, utilizing intermediate testing phases to ensure smooth data logging and a clear user flow.",
        images: [
          "/projects_images/MyJourneyAtTech/permissions.png",
          "/projects_images/MyJourneyAtTech/iteration1.png"
        ],
        layout: "horizontal",
        imagePosition: "right"
      },
      {
        title: "Key Interface Features",
        text: "• Real-Time Generative Dashboard: A live interface screen where students view their geographic foot-traffic over a day, week, month, or year, selecting different aesthetic rendering styles to transform their data into art.\n• Community Canvas Templates (Design Concept): A planned feature allowing users to customize the underlying mathematical formulas of their art and share these templates with the community, turning individual paths into a shared visual language.",
        image: "/projects_images/MyJourneyAtTech/style3.png",
        imagePosition: "left"
      },
      {
        title: "The Proof (Data-Driven Results)",
        text: "Live deployment with student volunteers proved the system could successfully translate complex location histories into high-fidelity generative art without draining device batteries. Slower, highly frequented spaces naturally created dense visual clusters, beautifully mirroring a student's real-world habits.",
        // image: "/assets/images/myjourney-proof.jpg",
        imagePosition: "right"
      },
      {
        title: "Reflections",
        text: "This project redefined how I approach user experience. It pushed me past pure utility to focus on creating a deep emotional impact. Crafting a system that evokes genuine pride and reflection taught me how to use data storytelling to give users a meaningful sense of self-recognition.",
        images: [
          "/projects_images/MyJourneyAtTech/style2.png",
          "/projects_images/MyJourneyAtTech/style11.png"
        ],
        imagePosition: "left"
      }
    ]
  },

  happinessproject: {
    title: "Happiness Project",
    category: "uxui",
    role: "Data Visualization & Interface Developer",
    techStack: ["Tableau", "GitHub Pages"],
    // heroImage: "/projects_images/HappinessProject/The Happiness Project - Tanvi Shanbhag (1080p).mp4",
    heroVideo: "/projects_images/HappinessProject/The Happiness Project - Tanvi Shanbhag (1080p).mp4",
    // cardImage: "/projects_images/HappinessProject/The Happiness Project - Tanvi Shanbhag (1080p).mp4",
    quickPitch: "An open-access dashboard portal mapping the distinct correlations between global happiness report metrics and localized human lifestyle habits.",
    
    sections: [
      {
        title: "Project Overview & Objective",
        text: "A data visualization project designed to cut through the noise of self-help trends by exploring the measurable relationship between daily lifestyle choices and overall emotional well-being. By cross-referencing global metrics from the World Happiness Report with distinct datasets tracking daily human habits, the project translates dense statistical records into an accessible, interactive visual narrative.",
        // image: "/assets/images/happiness-overview.jpg",
        imagePosition: "right"
      },
      {
        title: "UX Research & User Personas",
        text: "To ensure the dashboard was intuitive for a general audience, we conducted preliminary interviews with a highly diverse sample group. We explored their personal definitions of well-being and asked what habits they wished they could analyze objectively. Through affinity mapping, we organized these user questions to structure our data pipeline, filtering out overly dense statistical noise to focus on the habits our audience cared about most.",
        // image: "/assets/images/happiness-research.jpg",
        imagePosition: "left"
      },
      {
        title: "Information Architecture & Wireframes",
        text: "We structured the project's delivery around an open-access web portal hosted on GitHub Pages, ensuring clean navigation. The core data architecture flows directly into an interactive dashboard built using Tableau, optimized to handle multi-layered data arrays smoothly.",
        // image: "/assets/images/happiness-architecture.jpg",
        imagePosition: "right"
      },
      {
        title: "Key Interface Features",
        text: "• Personalized Factor Filtering: Built an interactive filtering system that lets users isolate specific variables-such as sleep patterns, exercise frequencies, or coffee consumption to evaluate their correlation with regional happiness scores.\n• Comparative Living Charts: A dynamic interface that allows users to view the data through a deeply personal lens, comparing their own daily lifestyle metrics directly against global trends.",
        // image: "/assets/images/happiness-features.jpg",
        imagePosition: "left"
      },
      {
        title: "The Proof (Data-Driven Results)",
        text: "User evaluation showed that adding interactive filtering drastically increased data comprehension. Instead of feeling overwhelmed by rows of statistics, users were able to independently discover patterns, such as the point of diminishing returns for specific daily habits across different cultures.",
        // image: "/assets/images/happiness-proof.jpg",
        imagePosition: "right"
      },
      {
        title: "Reflections",
        text: "Diving deep into data visualization fundamentally reshaped my perspective on instructional design. Visualizing information clearly is its own form of teaching. Balancing aesthetic clarity with statistical integrity taught me how to present intricate data in ways that are highly engaging yet strictly accurate.",
        // image: "/assets/images/happiness-reflections.jpg",
        imagePosition: "left"
      }
    ]
  },

  learnbyplay: {
    title: "Learn By Play",
    category: "uxui", // Map to uxui context under Research Foundations category boundary
    role: "Co-Design Workshop Facilitator & Researcher",
    techStack: ["Participatory Design Frameworks"],
    heroImage: "/projects_images/LearnByPlay/lbp_logo.png",
    quickPitch: "A year-long educational co-design research initiative mapping intrinsic game design mechanics against structural learning objectives with middle school cohorts.",
    
    sections: [
      {
        title: "Abstract/Executive Summary",
        text: "Learn By Play was a year-long educational research initiative and co-design study aimed at exploring the balance between game mechanics and formal learning objectives. Conducted by a cross-functional 9-person research team in collaboration with an afterschool organization, the project investigated how active co-design partnerships with middle school students influence their engagement and knowledge retention. Over an academic year, we designed, built, and evaluated a series of educational board and video games targeting core curriculum topics.",
        // image: "/assets/images/learnbyplay-summary.jpg",
        imagePosition: "right"
      },
      {
        title: "Theoretical Frameworks",
        text: "The study was grounded in participatory design and co-design frameworks, which champion the user as an active expert in the design process. We focused heavily on balancing intrinsic fantasy-where game mechanics are directly tied to learning content-with the high-energy gameplay demands of middle schoolers, navigating the tension between entertainment value and pedagogical intent.",
        // image: "/assets/images/learnbyplay-frameworks.jpg",
        imagePosition: "left"
      },
      {
        title: "Methodology & Data Collection",
        text: "The research team facilitated weekly 2-hour co-design workshops with middle and elementary school students waiting for parental pickup. Data collection used a mixed-methods approach: qualitative observation during design sessions, structural playtesting feedback forms, and active tracking of student misconceptions during gameplay. These weekly sessions allowed us to catch usability issues and conceptual misunderstandings immediately.",
        images: [
          "/projects_images/LearnByPlay/7pays.png",
          "/public/projects_images/LearnByPlay/historyCubes.png"
        ],
        layout: "vertical",
        imagePosition: "right"
      },
      {
        title: "Key Findings & Contributions",
        text: "Initial student-led concepts often skewed heavily toward pure entertainment, viewing educational elements as boring roadblocks. To solve this, we negotiated a structured co-design boundary: students maintained complete creative freedom over the core gameplay loops, while our research team guided the integration of the educational content. This resulted in 5 highly successful game adaptations, including:\n• The Election Bluff Game: A social deduction and bluffing game where players deploy special character abilities and run for office, powered by answering school trivia questions.\n• History Story Cubes: A generative storytelling game where players roll custom dice to determine a historical era, grammatical tense, and character archetype, collaborating to build or draw a shared story under time constraints.",
        images: [
          "/projects_images/LearnByPlay/loupGarou.png",
          "/projects_images/LearnByPlay/qui_etait_ce.jpg"
        ],
        layout: "vertical",
        imagePosition: "left"
      },
      {
        title: "Publications & Presentations",
        text: "The insights gained from this year-long study regarding youth agency, boundary setting, and co-design dynamics have been integrated into our lab's broader research publications on educational game design and instructional scaffolding.",
        // image: "/assets/images/learnbyplay-publications.jpg",
        imagePosition: "right"
      },
      {
        title: "Reflections",
        text: "Working with youth for an entire year was incredibly rewarding, but it highlighted the challenges of participatory design. It taught me the importance of setting clear design boundaries. Without firm, pre-established guardrails, it is easy to get carried away by what your users are excited about and accidentally lose sight of your core educational goals.",
        image: "/projects_images/LearnByPlay/storycubes2.jpg",
        imagePosition: "left"
      }
    ]
  }
};


// // projects.js

// export const CATEGORIES_DATA = {
//   // Accessibiliy, Games, UX/UI
//   games: {
//     title: "Educational Games",
//     description: "Designing playful mechanics that transform complex learning science and technical concepts into high-engagement interactive learning environments.",
//     heroImage: "/assets/images/games-category-hero.jpg"
//   },
//   accessibility: {
//     title: "Accessibility Projects",
//     description: "Bridging human-computer interaction, tangible hardware, and accessible design to build intuitive physical-digital artifacts and seamless application workflows.",
//     heroImage: "/assets/images/design-category-hero.jpg"
//   },
//   uxui: {
//     title: "UX/UI Design",
//     description: "Designing intuitive, user-centered interfaces and experiences that enhance usability, accessibility, and overall user satisfaction.",
//     heroImage: "/assets/images/uxui-category-hero.jpg"
//   }
// };


// export const PROJECTS_DATA = {
//   aquarium: {
//     title: "Aquarium Prototypes",
//     category: "accessibility",
//     role: "Sole Technical Developer & Designer",
//     techStack: ["Python", "OpenCV", "MediaPipe", "JavaScript"],
//     heroImage: "/assets/images/aquarium-hero.jpg", // The large background image
//     quickPitch: "Developing interactive, computer-vision driven tangible maps to make complex ocean data fully accessible to blind and visually impaired (BVI) museum visitors.",
    
//     // Explicitly group content blocks into sections with an image and an alignment orientation
//     sections: [
//       {
//         title: "The Challenge & Context",
//         text: "Developed under a Georgia Sea Grant in partnership with the UGA Aquarium and Gray’s Reef National Marine Sanctuary, this ongoing project addresses the steep accessibility barriers BVI visitors face when interacting with complex ocean data in traditional museum and aquarium settings.",
//         image: "/assets/images/aquarium-challenge.jpg",
//         imagePosition: "right" // Text on Left, Image on Right
//       },
//       {
//         title: "The Inclusive Vision",
//         text: "The concept centers on a 3D physical map representing various ocean habitats. By deploying a depth camera, 3D mapping, and ArUco markers, a custom computer vision system—built using Python (OpenCV) and Microsoft’s MediaPipe—tracks the physical coordinates of a user’s index finger as they touch the map to trigger localized spatial sound design.",
//         image: "/assets/images/aquarium-vision.jpg",
//         imagePosition: "left" // Image on Left, Text on Right (Flipped like image3.jpg.webp)
//       },
//       {
//         title: "Co-Design Methodology",
//         text: "True inclusion requires diverse expertise. Our multidisciplinary team consists of oceanographers managing the core scientific data, learning specialists, a dedicated sound designer, and a researcher who is both an active scientist and a BVI individual to ensure authentic accessibility requirements are met.",
//         image: "/assets/images/aquarium-codesign.jpg",
//         imagePosition: "right"
//       },
//       {
//         title: "Technical Implementation",
//         text: "To dynamically identify changing physical layouts, ArUco markers are affixed directly to the 3D maps, allowing the overhead camera to instantly determine which specific exhibit map is present. MediaPipe continuously tracks coordinates, and a homography matrix maps camera pixels directly onto spatial map boundaries.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       },
//       {
//         title: "Exhibition & Testing",
//         text: "We utilized an iterative testing cycle that spanned four progressive prototype phases. Initial development relied on deep, qualitative user interviews with BVI individuals to establish basic usability and refine tactile feedback. Once validated, we deployed a full exhibition at the UGA Aquarium with everyday visitors, analyzing broader public engagement and confirming that the system creates an intuitive, shared learning experience for both sighted and BVI guests.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       },
//       {
//         title: "Impact & Recognition",
//         text: "This technology has been selected for permanent installation at the Gray’s Reef National Marine Sanctuary pavilion. Furthermore, this system serves as the foundational architecture for a massive 6' x 6' interactive exhibition table currently in development for a museum in Florida, and has generated multiple scientific papers detailing its contributions to the learning sciences.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       }
//     ]
//   },

//   barrs: {
//     title: "Braille BARRS",
//     category: "accessibility",
//     role: "Designer & Sole Technical Developer",
//     techStack: ["Python", "Figma"],
//     heroImage: "/assets/images/aquarium-hero.jpg", // The large background image
//     quickPitch: "Developing interactive, computer-vision driven tangible maps to make complex ocean data fully accessible to blind and visually impaired (BVI) museum visitors.",
    
//     // Explicitly group content blocks into sections with an image and an alignment orientation
//     sections: [
//       {
//         title: "The Challenge & Context",
//         text: "Originating as an educational technology classroom initiative, Braille BARRS evolved into a formal partnership with the High Museum of Art in Atlanta. The project confronts a major spatial barrier: younger BVI children are frequently isolated from exploring open museum and gallery spaces independently, as they lack an intuitive orientation anchor to help them navigate before crowds of sighted children enter the space.",
//         image: "/assets/images/aquarium-challenge.jpg",
//         imagePosition: "right" // Text on Left, Image on Right
//       },
//       {
//         title: "The Inclusive Vision",
//         text: "Braille BARRS is an interactive 3D orientation map paired with a responsive hardware sonification device. The base map features physical pathways winding through the museum layout, interrupted by dedicated slots where children can insert distinct 3D-printed elements. Designed as a collaborative tool, it allows BVI children—either independently or alongside sighted peers and educators—to complete the physical map as a puzzle, listening to custom spatial descriptions and audio cues to safely internalize the layout of a real-world environment before stepping foot into it.",
//         image: "/assets/images/aquarium-vision.jpg",
//         imagePosition: "left" // Image on Left, Text on Right (Flipped like image3.jpg.webp)
//       },
//       {
//         title: "Co-Design Methodology",
//         text: "To build an authentic orientation tool, we executed a rigorous series of user interviews and usability testing sessions exclusively with BVI individuals. The core insight gained was that interview design is vital; structuring sessions around highly tactile, puzzle-like activities rather than abstract verbal questions drastically shifted the depth of the feedback we received, directly shaping the mechanical tolerances and auditory pacing of the final device.",
//         image: "/assets/images/aquarium-codesign.jpg",
//         imagePosition: "right"
//       },
//       {
//         title: "Technical Implementation",
//         text: "The prototype relies on an integrated hardware-software architecture using Python to manage physical inputs and audio delivery. The tactile puzzle slots contain embedded electronic switches or sensor nodes that detect when a specific 3D-printed building or artifact is correctly inserted along the pathway. Upon activation, the software parses the spatial node ID and triggers high-fidelity auditory descriptions that match the kid's physical progress across the layout.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       },
//       {
//         title: "Exhibition & Testing",
//         text: "We conducted live, real-world user testing with five BVI children directly inside the youth spaces of the High Museum of Art. The children treated the spatial orientation process as an engaging game, appreciating the playful, puzzle-like interaction loops and the descriptive audio feedback. It successfully served as a reliable cognitive anchor, proving that physical-digital maps can drastically lower the anxiety of exploring unfamiliar architectural layouts.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       },
//       {
//         title: "Impact & Recognition",
//         text: "Braille BARRS was awarded Best Project of the Semester at Georgia Tech. The research, methodologies, and deployment results were compiled into a peer-reviewed scientific paper and presented as an interactive poster session at the ACM SUI (Spatial User Interaction) conference in Montreal.",
//         image: "/assets/images/aquarium-tech.jpg",
//         imagePosition: "left"
//       }
//     ]
//   },
  
//   wherearemypeople: {
//     title: "Where Are My People",
//     category: "games",
//     role: "Lead Game Designer and Developer",
//     techStack: ["Unity", "C#", "Blender", "Git"],
//     heroImage: "/assets/images/wamp-hero.jpg",
//     quickPitch: "A narrative-driven educational video game designed for middle and high school students that unmasks the hidden complexities, data pipelines, and systemic biases of artificial intelligence.",
    
//     sections: [
//       {
//         title: "The Learning Problem",
//         text: "Students frequently treat artificial intelligence as an infallible, magical 'black box' that implicitly knows everything. The pedagogical objective of this game is to dispel this misconception, illustrating that machine learning models are heavily dependent on human data curation and are highly prone to reproducing human bias.",
//         image: "/assets/images/wamp-problem.jpg",
//         imagePosition: "right"
//       },
//       {
//         title: "Core Gameplay Mechanics",
//         text: "The player is directly responsible for curating the training datasets for a spaceship’s AI; any classification error directly impacts whether the AI can find your family. By swapping perspectives and playing from the AI's literal viewpoint, students experience firsthand how features that human brains perceive instantly require thousands of inputs to parse.",
//         image: "/assets/images/wamp-mechanics.jpg",
//         imagePosition: "left"
//       },
//       {
//         title: "Playtesting & Iteration",
//         text: "Adhering to strict co-design frameworks, we conducted 6 extensive rounds of iterative playtesting, deliberately alternating between middle schoolers, high schoolers, college students, and active educators to refine usability and learning outcomes.",
//         image: "/assets/images/wamp-testing.jpg",
//         imagePosition: "right"
//       }
//     ]
//   }
// };
