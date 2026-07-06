// projects.js

export const CATEGORIES_DATA = {
  games: {
    title: "Educational Games",
    description: "Designing playful mechanics that transform complex learning science and technical concepts into high-engagement interactive learning environments.",
    heroImage: "/assets/images/games-category-hero.jpg"
  },
  design: {
    title: "UX / UI & Tangible Interfaces",
    description: "Bridging human-computer interaction, tangible hardware, and accessible design to build intuitive physical-digital artifacts and seamless application workflows.",
    heroImage: "/assets/images/design-category-hero.jpg"
  }
};


export const PROJECTS_DATA = {
  aquarium: {
    title: "Aquarium Prototypes",
    category: "design",
    role: "Sole Technical Developer & Designer",
    techStack: ["Python", "OpenCV", "MediaPipe", "JavaScript"],
    heroImage: "/assets/images/aquarium-hero.jpg", // The large background image
    quickPitch: "Developing interactive, computer-vision driven tangible maps to make complex ocean data fully accessible to blind and visually impaired (BVI) museum visitors.",
    
    // Explicitly group content blocks into sections with an image and an alignment orientation
    sections: [
      {
        title: "The Challenge & Context",
        text: "Developed under a Georgia Sea Grant in partnership with the UGA Aquarium and Gray’s Reef National Marine Sanctuary, this ongoing project addresses the steep accessibility barriers BVI visitors face when interacting with complex ocean data in traditional museum and aquarium settings.",
        image: "/assets/images/aquarium-challenge.jpg",
        imagePosition: "right" // Text on Left, Image on Right
      },
      {
        title: "The Inclusive Vision",
        text: "The concept centers on a 3D physical map representing various ocean habitats. By deploying a depth camera, 3D mapping, and ArUco markers, a custom computer vision system—built using Python (OpenCV) and Microsoft’s MediaPipe—tracks the physical coordinates of a user’s index finger as they touch the map to trigger localized spatial sound design.",
        image: "/assets/images/aquarium-vision.jpg",
        imagePosition: "left" // Image on Left, Text on Right (Flipped like image3.jpg.webp)
      },
      {
        title: "Co-Design Methodology",
        text: "True inclusion requires diverse expertise. Our multidisciplinary team consists of oceanographers managing the core scientific data, learning specialists, a dedicated sound designer, and a researcher who is both an active scientist and a BVI individual to ensure authentic accessibility requirements are met.",
        image: "/assets/images/aquarium-codesign.jpg",
        imagePosition: "right"
      },
      {
        title: "Technical Implementation",
        text: "To dynamically identify changing physical layouts, ArUco markers are affixed directly to the 3D maps, allowing the overhead camera to instantly determine which specific exhibit map is present. MediaPipe continuously tracks coordinates, and a homography matrix maps camera pixels directly onto spatial map boundaries.",
        image: "/assets/images/aquarium-tech.jpg",
        imagePosition: "left"
      }
    ]
  },
  
  wherearemypeople: {
    title: "Where Are My People",
    category: "games",
    role: "Lead Game Designer and Developer",
    techStack: ["Unity", "C#", "Blender", "Git"],
    heroImage: "/assets/images/wamp-hero.jpg",
    quickPitch: "A narrative-driven educational video game designed for middle and high school students that unmasks the hidden complexities, data pipelines, and systemic biases of artificial intelligence.",
    
    sections: [
      {
        title: "The Learning Problem",
        text: "Students frequently treat artificial intelligence as an infallible, magical 'black box' that implicitly knows everything. The pedagogical objective of this game is to dispel this misconception, illustrating that machine learning models are heavily dependent on human data curation and are highly prone to reproducing human bias.",
        image: "/assets/images/wamp-problem.jpg",
        imagePosition: "right"
      },
      {
        title: "Core Gameplay Mechanics",
        text: "The player is directly responsible for curating the training datasets for a spaceship’s AI; any classification error directly impacts whether the AI can find your family. By swapping perspectives and playing from the AI's literal viewpoint, students experience firsthand how features that human brains perceive instantly require thousands of inputs to parse.",
        image: "/assets/images/wamp-mechanics.jpg",
        imagePosition: "left"
      },
      {
        title: "Playtesting & Iteration",
        text: "Adhering to strict co-design frameworks, we conducted 6 extensive rounds of iterative playtesting, deliberately alternating between middle schoolers, high schoolers, college students, and active educators to refine usability and learning outcomes.",
        image: "/assets/images/wamp-testing.jpg",
        imagePosition: "right"
      }
    ]
  }
};


// export const PROJECTS_DATA = [
//   {
//     id: 'history-quest', 
//     title: "Da Vinci History Quest", 
//     category: "games", 
//     description: "An educational game about history." 
//   },
//   {
//     id: 'braille1',  
//     title: "Braille BARRS", 
//     category: "inclusivity", 
//     description: "Assistive technology for spatial navigation learning." 
//   },
//   { 
//     id: 'where-are-my-people', 
//     title: "Where Are My People", 
//     category: "games", 
//     description: "An educational game about how to train an AI." 
//   },
//   { 
//     id: 'digischool', 
//     title: "digiSchool", 
//     category: "UI/UX", 
//     description: "Gamification of a learning website." 
//   },
//   { 
//     id: 'play-learn-lab', 
//     title: "Play & Learn Lab", 
//     category: "UI/UX",
//     description: "Co-Designing educational games and coding them." 
//   },
//   { 
//     id: 'ocean-vis', 
//     title: "Accessible Oceans", 
//     category: "inclusivity", 
//     description: "Computer vision-driven prototype for museum exhibits to include BVI individuals." 
//   },
//   { 
//     id: 'learn-by-play', 
//     title: "Learn By Play", 
//     category: "games", 
//     description: "Co-Designing educational games with middle-schoolers and animate workshops around them." 
//   },
//   { 
//     id: 'creatinder', 
//     title: "CreaTinder", 
//     category: "UI/UX", 
//     description: "HCI project to help create a sense of community on campus." 
//   },
//   { 
//     id: 'research', 
//     title: "Research", 
//     category: "research", 
//     description: "All my research projects and published papers so far." 
//   },
//   { 
//     id: 'glacou', 
//     title: "Glacou", 
//     category: "games", 
//     description: "An educational game about being mindful of the environment." 
//   },
//   { 
//     id: 'magnusatomus', 
//     title: "Magnuatomus", 
//     category: "games", 
//     description: "An educational game about the periodic table of elements." 
//   },
//   { 
//     id: 'my-journey-at-tech', 
//     title: "My Journey at Tech", 
//     category: "UI/UX", 
//     description: "Mobile Ubiquitous project to help create a sense of accomplishment through the students' days on campus." 
//   },
//   { 
//     id: 'braille-barrs',
//     title: "Braille BARRS", 
//     category: "research", 
//     role: "Lead Instructional Designer & Software Engineer",
//     tools: ["Unity", "C#", "Arduino", "Computer Vision"],
//     outcome: "Award-winning tool for spatial awareness; successfully tested with BVI users.",
    
//     // The "Deep Dive" Content
//     pedagogy: "Applied user-centered pedagogical frameworks to bridge tactile entertainment with spatial education.",
//     testing: "Facilitated iterative user testing at the High Museum of Art to evaluate instructional effectiveness for blind and low-vision visitors.",
//     dataProof: "Analyzed qualitative feedback and navigation patterns to refine the haptic-audio feedback loop.",
//     collaboration: "Collaborated with SMEs in accessibility and orientation-mobility to translate complex spatial concepts into engaging gameplay.",
    
//     images: ["/src/assets/hero.png", "/src/assets/hero.png"]
//   },
  
// ];