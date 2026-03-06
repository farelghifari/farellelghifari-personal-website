// Portfolio Data - Static structure for all portfolio content
// Update this file to customize your portfolio

export interface SupportingDocument {
  id: string;
  title: string;
  type: "pdf" | "youtube" | "link" | "external";
  url: string;
}

export interface IEducation {
  id: string;
  school: string;
  degree: string;
  field: string;
  logo?: string;
  startDate: string;
  endDate: string;
  description: string;
  tags: string[];
  images: string[];
  supportingDocuments?: SupportingDocument[];
  volunteering?: IVolunteering[];
  achievements?: IAchievement[];
}

export interface IExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  tags: string[];
  images: string[];
  logo?: string;
  pdf?: string;
  supportingDocuments?: SupportingDocument[];
}

export interface IOrganization {
  id: string;
  name: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  images: string[];
  logo?: string;
  supportingDocuments?: SupportingDocument[];
}

export interface ICertification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description: string;
  tags: string[];
  images: string[];
  skills?: string[];
  logo?: string;
  pdf?: string;
  supportingDocuments?: SupportingDocument[];
  group?: string;
}

export interface IVolunteering {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  cause: string;
  description: string;
  logo?: string;
  impact: string[];
  tags: string[];
  images: string[];
}

export interface IAchievement {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  logo?: string;
  details: string[];
  tags: string[];
  images: string[];
  externalLink?: string;
}

export interface IPortfolioData {
  profile: {
    name: string;
    title: string;
    bio: string;
    profileImage: string;
  };
  education: IEducation[];
  experience: IExperience[];
  organization: IOrganization[];
  certification: ICertification[];
  volunteering: IVolunteering[];
  achievement: IAchievement[];
}

// Sample data - Replace with your own
export const portfolioData: IPortfolioData = {
  profile: {
    name: "Farell Elghifari Putratama",
    title: "Multidisciplinary Engineer Bridging Engineering, Technology & Business",
    bio: "Multidisciplinary graduate with a background in naval architecture and experience across engineering, energy systems, and technology-driven environments. Developed analytical, technical, and problem-solving skills through academic projects, internships, and professional training. Interested in exploring the intersection of engineering, technology, and business to contribute to innovative and impactful solutions across industries.",
    profileImage: "/images/profile-picture.png",
  },
  education: [
    {
      id: "edu-1",
      school: "Diponegoro University",
      logo: "/logo/diponegoro-university.png",
      degree: "Bachelor of Naval Architecture",
      field: "Engineering",
      startDate: "2019",
      endDate: "2024",
      description:
        "Studied naval architecture with a focus on engineering analysis, marine systems, and technical design. The program emphasized problem-solving, computational analysis, and practical engineering applications within maritime and industrial environments.",
      tags: [
        "Computational Fluid Dynamics",
        "Engineering Design (2D & 3D Modelling)",
        "Marine System",
        "Technical Drafting",
      ],
      images: [
        "/images/education/edu-1/img1.jpg",
        "/images/education/edu-1/img2.jpg",
        "/images/education/edu-1/img3.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-edu-1-1",
          title: "Degree Certificate",
          type: "pdf",
          url: "/documents/educational/degree-certificate.pdf",
        },
        {
          id: "doc-edu-1-2",
          title: "Bachelor Degree Diploma Suplement (SKPI)",
          type: "pdf",
          url: "/documents/educational/bachelor-degree-diploma-suplement-skpi.pdf",
        },
        {
          id: "doc-edu-1-3",
          title: "Academic Transcript",
          type: "pdf",
          url: "/documents/educational/transcript.pdf",
        },
      ],
      volunteering: [
        {
          id: "vol-1",
          organization: "KKN Program – Diponegoro University",
          logo: "/logo/diponegoro-university.png",
          role: "Village-Level Head Coordinator & Sub-District Deputy Coordinator",
          startDate: "Januari 2023",
          endDate: "Februari 2023",
          cause: "Social",
          description:
            "Led community development initiatives in Giriwoyo Village, Wonogiri, focusing on environmental sustainability, safety awareness, and agricultural innovation.",
          impact: [
            "Organized occupational safety (K3) and fire prevention workshops",
            "Developed insectarium and biopond systems for Black Soldier Fly cultivation",
            "Introduced sustainable feed alternatives for local poultry and fish farmers",
            "Coordinated community development programs with village authorities",
          ],
          tags: [
            "Community Development","Environmental Sustainability","Safety Awareness Training","Program Coordination",
          ],
          images: ["/images/volunteering/vol-1/img1.jpg"],
        },
        // {
        //   id: "vol-2",
        //   organization: "Youth Tech Mentorship",
        //   logo: "/images/logos/mentorship.png",
        //   role: "Lead Mentor",
        //   startDate: "2022",
        //   endDate: "Present",
        //   cause: "Education",
        //   description: "Mentoring high school and college students interested in pursuing tech careers.",
        //   impact: [
        //     "Mentored 50+ young developers",
        //     "Helped 15 students land their first tech jobs",
        //     "Created learning curriculum for 200+ students",
        //     "Organized 10+ workshops and seminars",
        //     "Established scholarship fund raising $50K",
        //   ],
        //   tags: ["Mentoring", "Education", "Youth Development"],
        //   images: ["/images/volunteering/vol-2/img1.jpg"],
        // },
      ],
      achievements: [
        {
          id: "ach-1",
          title: "Innovation Prize (Upcycling For The Ocean) on Monaco Energy Boat Challenge 2023",
          date: "2023",
          category: "Project Excellence",
          description: "RMT Solar Boat Team is one of the solar boat teams from Indonesia, Namely from the Diponegoro University, With the solar-powered ship prototype project that we developed and prepared for Monaco Solar & Energy Boat Challenge.",
          details: [
            // "Maintained 3.8+ GPA throughout program",
            // "Published research paper on web optimization",
            // "Awarded scholarship for academic excellence",
            // "Selected as student mentor for incoming cohort",
          ],
          tags: ["Electrical System Design", "BLDC Motor Analysis","Circuit Engineering"],
          images: ["/images/achievement/ach-1/award.jpg"],
        },
        {
          id: "ach-2",
          title: "Competition Finalist of Kontes Kapal Cepat Tidak Berawak Nasional (KKCTBN) 2022",
          date: "2022",
          category: "Project Excellence",
          description: "Finalist of Kontes Kapal Cepat Tidak Berawak Nasional (KKCTBN) 2022, contributing to the design and development of an autonomous fast vessel prototype.",
          details: [
            // "Built real-time collaborative web platform",
            // "Received first place among 50+ projects",
            // "Featured in university tech showcase",
            // "Later commercialized as successful startup",
          ],
          tags: ["Project", "Innovation", "Circuit Engineering"],
          images: ["/images/achievement/ach-2/award.jpg"],
        },
         {
          id: "ach-3",
          title: "Competition Finalist of Boat Race Competition COMET 3.0 Nasional 2022",
          date: "2022",
          category: "Project Excellence",
          description: "Finalist of Boat Race Competition COMET 3.0 Nasional 2022, competing in a national boat design and racing competition.",
          details: [
            // "Built real-time collaborative web platform",
            // "Received first place among 50+ projects",
            // "Featured in university tech showcase",
            // "Later commercialized as successful startup",
          ],
          tags: ["Project", "Innovation", "Circuit Engineering", "Electrical System Design"],
          images: ["/images/achievement/ach-2/award.jpg"],
        },
        {
          id: "ach-4",
          title: "Appointed as the Head of The Project in the Anniversary Event of the Naval Engineering Department in 2020, impacting 200+ students and lecturers and reach 1.340+ viewers on Youtube",
          date: "2020",
          category: "Project Excellence",
          description: "Served as Project Head for the 2020 Naval Engineering Department Anniversary Event, leading the event planning and execution while engaging 200+ participants and reaching 1,340+ viewers on YouTube.",
          details: [
            // "Built real-time collaborative web platform",
            // "Received first place among 50+ projects",
            // "Featured in university tech showcase",
            // "Later commercialized as successful startup",
          ],
          tags: ["Leadership", "Innovation", "Project Coordination", "Team Collaboration", "Public Communication  "],
          images: ["/images/achievement/ach-2/award.jpg"],
        },
      ],
    },
    {
      id: "edu-2",
      school: "Senior High School 1",
      logo: "/logo/logo-sman-1-semarang.png",
      degree: "High School",
      field: "Sciences",
      startDate: "2016",
      endDate: "2019",
      description:
        "Completed secondary education with strong academic performance and early involvement in engineering, technology, and leadership activities.",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      images: [
        "/images/education/edu-2/img1.jpg",
        "/images/education/edu-2/img2.jpg",
        "/images/education/edu-2/img3.jpg",
      ],
      // supportingDocuments: [
      //   {
      //     id: "doc-edu-2-1",
      //     title: "Bootcamp Certificate",
      //     type: "pdf",
      //     url: "/documents/education/bootcamp-certificate.pdf",
      //   },
      //   {
      //     id: "doc-edu-2-2",
      //     title: "Capstone Project Demo",
      //     type: "youtube",
      //     url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      //   },
      //   {
      //     id: "doc-edu-2-3",
      //     title: "Skill Assessment Results",
      //     type: "pdf",
      //     url: "/documents/education/skill-assessment.pdf",
      //   },
      // ],
      // volunteering: [
      //   {
      //     id: "vol-3",
      //     organization: "Women in Tech Initiative",
      //     role: "Program Coordinator",
      //     startDate: "2021",
      //     endDate: "Present",
      //     cause: "Diversity & Inclusion",
      //     description: "Supporting and promoting women in technology through mentorship and community programs.",
      //     impact: [
      //       "Coordinated programs for 500+ women developers",
      //       "Connected 100+ mentors with mentees",
      //       "Organized annual conference with 1000+ attendees",
      //       "Helped 40+ women transition into tech roles",
      //       "Raised awareness through 20+ social campaigns",
      //     ],
      //     tags: ["Diversity", "Women in Tech", "Inclusion"],
      //     images: ["/images/volunteering/vol-3/img1.jpg"],
      //   },
      //   {
      //     id: "vol-4",
      //     organization: "Digital Literacy Program",
      //     role: "Curriculum Developer",
      //     startDate: "2023",
      //     endDate: "Present",
      //     cause: "Digital Inclusion",
      //     description: "Creating and delivering digital literacy programs for underserved communities.",
      //     impact: [
      //       "Taught digital skills to 300+ community members",
      //       "Created curriculum for 5 different skill levels",
      //       "Achieved 90% completion rate",
      //       "Helped 80+ people find employment",
      //       "Expanded program to 3 additional communities",
      //     ],
      //     tags: ["Digital Literacy", "Community Service", "Education"],
      //     images: ["/images/volunteering/vol-4/img1.jpg"],
      //   },
      // ],
      // achievements: [
      //   {
      //     id: "ach-3",
      //     title: "Bootcamp Valedictorian",
      //     date: "2023",
      //     category: "Academic Excellence",
      //     description: "Graduated as top student with perfect attendance and highest project scores.",
      //     details: [
      //       "Graduated top 1% of cohort",
      //       "Completed all projects with A+ grades",
      //       "Selected to be teaching assistant",
      //       "Landed job offer before graduation",
      //     ],
      //     tags: ["Bootcamp", "Excellence", "Achievement"],
      //     images: ["/images/achievement/ach-3/award.jpg"],
      //   },
      //   {
      //     id: "ach-4",
      //     title: "Best Capstone Application",
      //     date: "2023",
      //     category: "Project Excellence",
      //     description: "Developed an innovative project management application used by bootcamp alumni.",
      //     details: [
      //       "Built full-stack project management tool",
      //       "Won bootcamp capstone competition",
      //       "Used by 500+ bootcamp alumni",
      //       "Attracted investor interest",
      //     ],
      //     tags: ["Project", "Application", "Innovation"],
      //     images: ["/images/achievement/ach-4/award.jpg"],
      //   },
      // ],
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "PT Adaro Indonesia",
      logo: "/logo/logo-adaro-energy.png",
      position: "Export Shipment Supervisor",
      startDate: "October 2024",
      endDate: "January 2025",
      description:
        "Supported coal export operations by managing shipment documentation and coordinating with internal teams, shipping agents, and financial stakeholders to ensure smooth export processes and compliance with Letter of Credit requirements",
      achievements: [
        "Prepared export documentation including PEB, SI, IMSBC Code, TML, SAI, and PVEB for nominated vessels",
        "Coordinated documentation flow between shipping agents, surveyors, and internal departments",
        "Maintained shipment schedules and export logbooks to monitor operational progress",
        "Ensured Letter of Credit documentation readiness prior to Board of Directors approval",
        "Managed submission of export documents to banks and international courier services",
        "Monitored coal quality reports, vessel data, and export transaction records",
      ],
      tags: [
        "Export Operations",
        "Coal Logistics",
        "Export Documentation",
        "Vessel Operations",
        "Document Management",
      ],
      images: [
        "/images/experience/exp-1/img1.jpg",
        "/images/experience/exp-1/img2.jpg",
        "/images/experience/exp-1/img3.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-exp-1-1",
          title: "Work Certificate",
          type: "pdf",
          url: "/documents/experience/sertifikat-pt-adaro-andalan-indonesia.pdf",
        },
        // {
        //   id: "doc-exp-1-2",
        //   title: "Team Project Walkthrough",
        //   type: "youtube",
        //   url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        // },
      ],
    },
    {
      id: "exp-2",
      company: "Biro Klasifikasi Indonesia (BKI)",
      logo: "/logo/logo-bki.png",
      position: "Junior Surveyor Internship",
      startDate: "March 2023",
      endDate: "April 2023",
      description:
        "Assisted classification surveyors in vessel inspections and certification processes, gaining practical exposure to maritime safety standards and shipyard operations..",
      achievements: [
        " Participated in annual surveys of passenger vessels operated by PT Pelni",
        "Assisted inspection processes for Pertamina vessels to support seaworthiness certification",
        "Observed ship repair activities during docking operations",
        "Monitored construction and maintenance activities within shipyard facilities",
      ],
      tags: [
        "Marine Survey",
        "Vessel Classification",
        "Ship Inspection",
        "Maritime Engineering",
      ],
      images: [
        "/images/experience/exp-2/img1.jpg",
        "/images/experience/exp-2/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-exp-2-1",
          title: "Internship Certificate",
          type: "pdf",
          url: "/documents/experience/sertifikat-pt-biro-klasifikasi-indonesia.pdf",
        },
      ],
    },
    {
      id: "exp-3",
      company: "Zenius Education",
      position: "UI/UX Designer",
      logo: "/logo/logo-zenius-education.png",
      startDate: "August 2022",
      endDate: "December 2022",
      description:
        "Contributed to user experience improvements for education technology platforms by supporting interface design, usability enhancements, and feature refinement.",
      achievements: [
        "Designed user flows and wireframes for application features",
        "Assisted usability improvements based on user feedback and product testing",
        "Identified interface issues affecting application performance",
        "Collaborated with product and engineering teams during feature development",
      ],
      tags: [
        "User Interface Design",
        "Web Design",
        "UX Design",
        "Figma",
        "Front-End UI",
      ],
      images: ["/images/experience/exp-3/img1.jpg"],
      supportingDocuments: [
        {
          id: "doc-exp-3-1",
          title: "Internship Certificate",
          type: "pdf",
          url: "/documents/experience/sertifikat-msib-zenius-education.pdf",
        },
      ],
    },
    {
      id: "exp-4",
      company: "Generasi GIGIH 2.0 – GoTo & YABB",
      position: "Front-End Developer",
      logo: "/logo/logo-goto.png",
      startDate: "February 2022",
      endDate: "July 2022",
      description:
        "Developed front-end web interfaces using React.js as part of a national technology program focused on digital product development and community solutions.",
      achievements: [
        "Built responsive user interfaces using React.js",
        "Implemented reusable front-end components for web applications",
        "Collaborated with development teams on capstone projects",
        "Contributed to prototype solutions aimed at community use cases",
      ],
      tags: [
        "React.js",
        "Javascript",
        "MongoDB",
        "Front-End Development",
        "Git",
        "Github",
      ],
      images: [
        "/images/experience/exp-4/img1.jpg",
        "/images/experience/exp-4/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-exp-4-2",
          title: "Internship Certificate",
          type: "pdf",
          url: "/documents/experience/sertifikat-msib-yabb-dan-goto-group.pdf",
        },
        // {
        //   id: "doc-exp-4-1",
        //   title: "E-Commerce Platform Demo",
        //   type: "youtube",
        //   url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        // },
        // {
        //   id: "doc-exp-4-2",
        //   title: "Internship Certificate",
        //   type: "pdf",
        //   url: "/documents/experience/freelance-portfolio.pdf",
        // },
      ],
    },
    {
      id: "exp-5",
      company: "PT Dok dan Perkapalan Kodja Bahari",
      position: "Field Supervisor Internship",
      logo: "/logo/logo-dkb.png",
      startDate: "July 2021",
      endDate: "August 2021",
      description:
        "Supported shipyard engineering operations through field inspections, repair monitoring, and technical design assistance during ship maintenance projects.",
      achievements: [
        "Conducted ship pre-docking inspections and repair planning",
        "Monitored shipyard work progress and operational workflow",
        "Assisted design of ship components including ramp doors",
        " Supported engineering documentation for ship maintenance activities",
      ],
      tags: [
        "Naval Architecture",
        "Shipyard Operations",
        "Engineering Survey",
        "2D CAD Drawing",
      ],
      images: [
        "/images/experience/exp-5/img1.jpg",
        "/images/experience/exp-5/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-exp-5-1",
          title: "Internship Certificate",
          type: "pdf",
          url: "/documents/experience/sertifikat-pt-dok-dan-perkapalan-kodja-bahari.pdf",
        },
      ],
    },
  ],
  organization: [
    {
      id: "org-1",
      name: "Research of Marine Technology",
      role: "Senior Electrical Engineer & Safety Consultant",
      logo: "/logo/logo-rmt.png",
      startDate: "March 2022",
      endDate: "July 2024",
      description:
        "RMT Solar Boat Team is one of the solar boat teams from Indonesia, Namely from the Diponegoro University, With the solar-powered ship prototype project that we developed and prepared for Monaco Solar & Energy Boat Challenge.",
      responsibilities: [
        "Designed vessel electrical wiring diagrams and integrated sensor systems to ensure operational reliability",
        "Advised on vessel safety and fail-safe systems, ensuring compliance with international competition standards",
        "Optimized energy efficiency by calculating BLDC motor power needs, battery consumption, and solar input",
      ],
      tags: [
        "Electrical System Design",
        "BLDC Motor Analysis",
        "Circuit Engineering",
      ],
      images: [
        "/images/organization/org-5/img1.jpg",
        "/images/organization/org-5/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-org-5-1",
          title: "Innovation Prize On Monaco Energy Boat Challenge 2023",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=a3uoXBL9tQA&t=4096s",
        },
        {
          id: "doc-org-5-2",
          title: "Event Video",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=94-Yd6y8OzU&list=PLwljkw28MCzef1DbQnO5ezM7wBehMC4xu&index=51",
        },
        {
          id: "doc-org-5-3",
          title: "Press Coverage",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=bkf9z7RegCA",
        },
        {
          id: "doc-org-5-4",
          title: "Press Coverage 2",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=gqqTYTQr9Zw",
        },
        {
          id: "doc-org-5-5",
          title: "RMT Company Profile",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=shirSxIPGEA",
        },
        {
          id: "doc-org-5-6",
          title: "Diponegoro 1.0 Launching",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=lTz4VWA_v6Q",
        },
        {
          id: "doc-org-5-7",
          title: "Official Sponsorship",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=0YK2a0b12G0",
        },
      ],
    },
    {
      id: "org-2",
      name: "Student Executive Board – Naval Architecture UNDIP",
      logo: "/logo/logo-himaspal.jpg",
      role: "Head of Media & Information Unit",
      startDate: "January 2022",
      endDate: "May 2023",
      description:
        "Led the media and information division responsible for managing organizational communication systems and digital content strategies.",
      responsibilities: [
        "Designed structured media workflow systems",
        "Managed media team coordination and communication strategy",
        " Supervised media publication and content production",
      ],
      tags: ["Media Strategy", "Leadership", "Organizational Communication"],
      images: [
        "/images/organization/org-1/img1.jpg",
        "/images/organization/org-1/img2.jpg",
        "/images/organization/org-1/img3.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-org-2-1",
          title: "Organization Certificate",
          type: "pdf",
          url: "/documents/organizational/himaspal-2022.pdf",
        },{
          id: "doc-org-2-2",
          title: "Company Profile",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=mXN4tNHHJvA",
        },
      ],
    },
    {
      id: "org-3",
      name: "Student Executive Board – Naval Architecture UNDIP",
      logo: "/logo/logo-himaspal.jpg",
      role: "Staff of Interest and Talent",
      startDate: "October 2020",
      endDate: "January 2022",
      description:
        "Contributed to the Interest and Talent Division in supporting student development initiatives and organizational activities within the Naval Architecture Student Executive Board. The role involved assisting in the implementation of internal media systems and supporting team coordination for various organizational programs.",
      responsibilities: [
        "Assisted in implementing the organizational media flow system according to the established plan.",
"Carried out assigned tasks related to media and communication activities under division supervision.",
"Supported coordination efforts among team members to facilitate effective collaboration and achieve organizational objectives.",
      ],
      tags: ["Media Strategy", "Leadership", "Organizational Communication"],
      images: [
        "/images/organization/org-1/img1.jpg",
        "/images/organization/org-1/img2.jpg",
        "/images/organization/org-1/img3.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-org-3-1",
          title: "Organization Certificate",
          type: "pdf",
          url: "/documents/organizational/himaspal-2021.pdf",
        },
      ],
    },
    {
      id: "org-4",
      name: "Head - Education Division (Research & Science)",
      role: "Student Executive Board - Diponegoro University",
      logo: "/logo/logo-bem-undip.jpg",
      startDate: "February 2021",
      endDate: "January 2022",
      description:
        "Led initiatives to promote student participation in research programs and academic competitions.",
      responsibilities: [
        "Developed concepts and ensured project delivery by managing deadlines and adjusting workflows",
        "Coordinated information flow on competitions and research, ensuring all students received timely updates",
        "Supported student growth by providing platforms to develop research and scientific potential",
      ],
      tags: [
        "Project Coordination",
        "Academic Program Development",
        "Leadership",
      ],
      images: [
        "/images/organization/org-3/img1.jpg",
        "/images/organization/org-3/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-org-3-1",
          title: "Curriculum Overview",
          type: "pdf",
          url: "/documents/organization/curriculum.pdf",
        },
      ],
    },
    {
      id: "org-5",
      name: "Head - Education Division (Research & Science)",
      role: "Student Executive Board - Diponegoro University",
      logo: "/logo/logo-bem-undip.jpg",
      startDate: "February 2021",
      endDate: "January 2022",
      description:
        "Led initiatives to promote student participation in research programs and academic competitions.",
      responsibilities: [
        "Developed concepts and ensured project delivery by managing deadlines and adjusting workflows",
        "Coordinated information flow on competitions and research, ensuring all students received timely updates",
        "Supported student growth by providing platforms to develop research and scientific potential",
      ],
      tags: [
        "Project Coordination",
        "Academic Program Development",
        "Leadership",
      ],
      images: [
        "/images/organization/org-3/img1.jpg",
        "/images/organization/org-3/img2.jpg",
      ],
      supportingDocuments: [
        {
          id: "doc-org-3-1",
          title: "Curriculum Overview",
          type: "pdf",
          url: "/documents/organization/curriculum.pdf",
        },
      ],
    },
    {
      id: "org-6",
      name: "Maritime Festival Universitas Diponegoro",
      role: "Vice Chief – Media & Creative",
      logo: "/logo/logo-marifest.jpg",
      startDate: "September 2021",
      endDate: "July 2022",
      description:
        "Led creative media strategy and digital engagement initiatives for maritime festival events.",
      responsibilities: [
        "Boosted engagement by creating targeted media concepts and campaigns",
        "RLed media strategy as conceptor for large-scale organizational events",
        "Optimized social media content flow to expand reach and visibility",
      ],
      tags: [
        "Creative Strategy",
        "Social Media Management",
        "Brand Communication",
      ],
      images: [
        "/images/organization/org-2/img1.jpg",
        "/images/organization/org-2/img2.jpg",
      ],
      supportingDocuments: [
        // {
        //   id: "doc-org-2-1",
        //   title: "GitHub Contribution Report",
        //   type: "pdf",
        //   url: "/documents/organization/github-report.pdf",
        // },
        {
          id: "doc-org-6-2",
          title: "Event Record",
          type: "youtube",
          url: "https://www.youtube.com/watch?v=Ybauke2tqMI&t=701s",
        },
      ],
    },
    {
      id: "org-7",
      name: "Maritime Festival Universitas Diponegoro",
      role: "Staff of Media Division",
      logo: "/logo/logo-marifest.jpg",
      startDate: "January 2020",
      endDate: "September 2021",
      description:
        "Supported the media division in developing and executing digital communication strategies for Maritime Festival events organized by the Naval Architecture student organization at Diponegoro University. The role focused on creating engaging media content and supporting event promotion across digital platforms. Maritime Festival itself is an annual event organized by the Naval Architecture student community at Diponegoro University.",
      responsibilities: [
        "Assisted in developing and implementing creative media concepts to increase audience engagement.",
        "Created and managed social media content aligned with the division’s communication strategy.",
        "Supported digital promotion and publication needs across multiple event activities.",
        "Coordinated with the media team to ensure consistent messaging and timely content delivery.",
      ],
      tags: [
        "Digital Communication",
        "Social Media Management",
        "Content Creation",
        "Event Promotion",
        "Team Collaboration",
      ],
      images: [
        "/images/organization/org-2/img1.jpg",
        "/images/organization/org-2/img2.jpg",
      ],
      supportingDocuments: [
        // {
        //   id: "doc-org-2-1",
        //   title: "GitHub Contribution Report",
        //   type: "pdf",
        //   url: "/documents/organization/github-report.pdf",
        // },
        // {
        //   id: "doc-org-2-2",
        //   title: "Community Talk: Open Source Best Practices",
        //   type: "youtube",
        //   url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        // },
      ],
    },
    {
      id: "org-8",
      name: "Ksatria Hydros – Diponegoro University",
      role: "Electrical Division Staff",
      logo: "/logo/logo-ksatria-hydros.jpg",
      startDate: "November 2019",
      endDate: "March 2022",
      description:
        "Worked on electrical engineering systems for autonomous maritime vehicle development.",
      responsibilities: [
        // "Advised on product roadmap and features",
        // "Conducted user interviews with 50+ developers",
        // "Provided technical guidance on implementation",
        // "Connected startup with investor network",
        // "Helped achieve 10K+ active users",
      ],
      tags: [
        "Electrical System Design",
        "BLDC Motor Analysis",
        "Circuit Engineering",
      ],
      images: [
        "/images/organization/org-4/img1.jpg",
        "/images/organization/org-4/img2.jpg",
      ],
      supportingDocuments: [
        // {
        //   id: "doc-org-4-1",
        //   title: "Product Case Study",
        //   type: "pdf",
        //   url: "/documents/organization/devtools-case-study.pdf",
        // },
      ],
    },
  ],
  certification: [
    // 1. Engineering & Energy Systems
    {
      id: "cert-1",
      title: "Basic Intermediate Level Piping Stress Analysis",
      logo: "/logo/logo-ea.png",
      issuer: "Engineering Academy",
      issueDate: "2026",
      description:
        "Completion of a professional training program in Basic–Intermediate Level Piping Stress Analysis using CAESAR II and Pipe Data Pro, conducted by Engineering Academy. The program provided a comprehensive foundation in piping stress engineering, covering fundamental theory, system modeling, load case development, and stress evaluation using industry-standard software for pressure equipment and piping systems. The training emphasized hands-on simulation and analytical problem-solving, including load analysis (sustained, thermal, and occasional loads), flexibility assessment, and code compliance principles within multidisciplinary engineering projects.",
      tags: ["Piping", "Stress Analysis", "CAESAR II"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/engineer-general/piping-stress-analysis-caesar2/image-1.jpg","/documents/skills/engineer-general/piping-stress-analysis-caesar2/image-2.jpg"],
      skills: [
        "CAESAR II",
        "Pipe Data Pro",
        "Stress Analysis",
        "Piping Design",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-1-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/piping-stress-analysis-caesar2/basic-intermediate-level-piping-stress-analysis-using-caesar-2-and-pipe-data-pro.pdf",
        },
      ],
    },
    {
      id: "cert-2",
      title: "Geothermal Power Plant Performance Analysis",
      issuer: "Skill Engineer",
      logo: "/logo/logo-se.jpeg",
      issueDate: "2025",
      description:
        "Professional training and certification in Geothermal Power Plant Performance Analysis, awarded with an Excellent result. The program provided a comprehensive understanding of geothermal energy systems, focusing on thermodynamics, steam behavior, and performance evaluation of geothermal power plants. The training covered geothermal energy fundamentals, water–steam phase diagrams, thermodynamic properties, and interpretation of P–T and T–s diagrams. It also addressed single-flash geothermal power plant concepts, steam conditions across the power cycle, and the application of thermodynamic principles to analyze and optimize geothermal power plant performance.",
      tags: ["Geothermal", "Power Plants", "Performance Analysis"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/geothermal/geothermal-power-plant-performance-analysis/geothermal-power-plant-performance-analysis-certificate-page-1.jpg","/documents/skills/geothermal/geothermal-power-plant-performance-analysis/geothermal-power-plant-performance-analysis-certificate-page-2.jpg"],
      skills: [
        "Geothermal Systems",
        "Performance Analysis",
        "Energy Efficiency",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-2-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/geothermal/geothermal-power-plant-performance-analysis/geothermal-power-plant-performance-analysis-certificate.pdf",
        },
      ],
    },
    {
      id: "cert-3",
      title: "Fundamentals of Geothermal Energy",
      issuer: "Geological Society",
      logo: "/logo/logo-geoeneris.jpg",
      issueDate: "2025",
      description:
        "Technical training covering the core principles of geothermal energy systems, resources, and their applications in power generation and heating. The program explored key aspects of geothermal project development, including resource assessment, classification systems, preliminary surveys and desktop studies, 3G surveys and conceptual modeling, well targeting, drilling processes, and project economics. It strengthened foundational knowledge in renewable energy systems and geothermal project planning, from exploration and resource evaluation to economic feasibility analysis.",
      tags: ["Geothermal", "Energy Systems", "Fundamentals"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/geothermal/geothermal-international-workshop-certificate/certificate-fundamentals-of-geothermal-energy-page-1.jpg","/documents/skills/geothermal/geothermal-international-workshop-certificate/certificate-fundamentals-of-geothermal-energy-page-2.jpg"],
      skills: [
        "Geothermal Resources",
        "Energy Conversion",
        "Thermal Engineering",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-3-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/geothermal/geothermal-international-workshop-certificate/certificate-fundamentals-of-geothermal-energy.pdf",
        },
      ],
    },
    {
      id: "cert-4",
      title: "Introduction to Ocean and Geothermal Energy",
      issuer: "Alison",
      logo: "/logo/logo-alison.jpg",
      issueDate: "2025",
      description:
        "Examined geothermal resource characterization, exploration methodologies, and power generation technologies including dry steam, flash, and binary cycle systems. Analyzed reinjection strategies for sustainable reservoir management and evaluated Ocean Thermal Energy Conversion (OTEC) and biomass energy principles in the context of thermodynamic efficiency and environmental sustainability.",
      tags: ["Ocean Energy", "Geothermal", "Renewable Energy"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/geothermal/introduction-to-ocean-and-geothermal-energy/introduction-to-ocean-and-geothermal-energy-page-1.jpg","/documents/skills/geothermal/introduction-to-ocean-and-geothermal-energy/introduction-to-ocean-and-geothermal-energy-page-2.jpg","/documents/skills/geothermal/introduction-to-ocean-and-geothermal-energy/introduction-to-ocean-and-geothermal-energy-page-3.jpg"],
      skills: ["Ocean Energy", "Geothermal Energy", "Renewable Technology"],
      supportingDocuments: [
        {
          id: "doc-cert-4-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/geothermal/introduction-to-ocean-and-geothermal-energy/introduction-to-ocean-and-geothermal-energy.pdf",
        },
      ],
    },
    {
      id: "cert-5",
      title: "Petroleum Engineering: Specialization",
      issuer: "L&T EduTech",
      logo: "/logo/logo-lnt.jpg",
      issueDate: "2025",
      description:
        "Comprehensive specialization covering petroleum extraction, production, and downstream processing technologies within the petroleum engineering sector. The program provided a broad overview of upstream and midstream oil and gas operations, including exploration, reservoir assessment, drilling, recovery methods, gas extraction, transportation, storage, and utilities management. It also highlighted the role of safety and sustainability in energy operations, while introducing the application of AI-driven approaches to optimize decision-making, operational workflows, and risk management in the oil and gas industry.",
      tags: ["Petroleum", "Engineering", "Oil & Gas"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/oil-and-gas/oil-and-gas-pecialization/oil-and-gas-coursera.jpg"],
      skills: [
        "Petroleum Systems",
        "Drilling",
        "Production",
        "Reservoir Engineering",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-5-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/oil-and-gas/oil-and-gas-pecialization/oil-and-gas-coursera.pdf",
        },
      ],
    },
    {
      id: "cert-6",
      title: "IWCF Level 1 – Well Control Awareness",
      issuer: "International Well Control Forum",
      logo: "/logo/logo-iwcf.jpg",
      issueDate: "2025",
      description:
        "Certification in IWCF (International Well Control Forum) covering fundamental well control principles and operational safety in drilling activities. The program addressed key aspects of well control, including drilling and well intervention techniques, pressure control, blowout preventer (BOP) systems, and safety management practices. It emphasized operational integrity, risk mitigation, and compliance with international oil and gas industry standards.",
      tags: ["Well Control", "Safety", "Drilling"],
      group: "Engineering & Energy Systems",
      images: ["/documents/skills/oil-and-gas/iwcf/iwcf-lvl1.jpg"],
      skills: ["Well Control", "Safety Procedures", "Drilling Safety"],
      supportingDocuments: [
        {
          id: "doc-cert-6-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/oil-and-gas/iwcf/iwcf-lvl1.pdf",
        },
      ],
    },

    // 2. Safety, Quality & Compliance
    {
      id: "cert-7",
      title: "K3 (Occupational Health & Safety) Certification",
      logo: "/logo/logo-bnsp.png",
      issuer: "Badan Nasional Sertifikasi Profesi",
      issueDate: "2025",
      description:
        "Indonesian national certification in Occupational Safety and Health (Ahli K3 Umum) recognized by BNSP. The program covered key aspects of workplace safety management, including hazard identification, risk assessment, safety audits, and incident investigation. It also emphasized preventive safety frameworks and the management of high-risk work through systems such as Permit-to-Work (PTW), Job Safety Analysis (JSA), and incident control to support safe and sustainable operations.",
      tags: ["Safety", "K3", "Compliance"],
      group: "Safety, Quality & Compliance",
      images: ["/documents/skills/engineer-general/k3-occupational-health-and-safety-certification/k3-bnsp.jpg","/documents/skills/engineer-general/k3-occupational-health-and-safety-certification/laporan-asesmen.jpg"],
      skills: ["Occupational Safety", "Health Management", "Risk Assessment"],
      supportingDocuments: [
        {
          id: "doc-cert-7-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/k3-occupational-health-and-safety-certification/k3-bnsp.pdf",
        },
        {
          id: "doc-cert-7-2",
          title: "Assessment Report",
          type: "pdf",
          url: "/documents/skills/engineer-general/k3-occupational-health-and-safety-certification/laporan-asesmen.pdf",
        },
      ],
    },
    {
      id: "cert-8",
      title: "ISO 45001:2018",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification in Occupational Health and Safety Management Systems based on the ISO 45001:2018 standard. The program introduced the principles of establishing and implementing an effective OH&S management system, including hazard identification, risk assessment, legal compliance, and continuous improvement practices. It emphasized systematic approaches to managing workplace safety risks and promoting a safe and healthy working environment in accordance with international occupational safety standards.",
      tags: ["ISO 45001", "Safety", "Management Systems"],
      group: "Safety, Quality & Compliance",
      images: ["/documents/skills/engineer-general/iso-certificate/iso-45001-2018-occupational-health-and-safety-management-system)-awareness.jpg"],
      skills: ["ISO 45001", "Safety Management", "Compliance"],
      supportingDocuments: [
        {
          id: "doc-cert-8-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/iso-certificate/iso-45001-2018-occupational-health-and-safety-management-system)-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-9",
      title: "ISO 9001:2015",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification in Quality Management Systems based on the ISO 9001:2015 standard. The program introduced the principles of quality management, including process-based approaches, risk-based thinking, customer focus, and continuous improvement. It emphasized the implementation of structured quality management systems to improve operational efficiency, ensure consistent product and service quality, and enhance organizational performance in accordance with international standards.",
      tags: ["ISO 9001", "Quality", "Management Systems"],
      group: "Safety, Quality & Compliance",
      images: ["/documents/skills/engineer-general/iso-certificate/iso-9001-2015-quality-management-system-awareness.jpg"],
      skills: ["Quality Management", "Process Improvement", "ISO Compliance"],
      supportingDocuments: [
        {
          id: "doc-cert-9-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/iso-certificate/iso-9001-2015-quality-management-system-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-10",
      title: "ISO 14001:2015",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification in Environmental Management Systems (EMS) based on the ISO 14001:2015 standard. The program introduced the principles of environmental management, including environmental impact identification, regulatory compliance, risk-based thinking, and continuous improvement practices. It emphasized systematic approaches to managing environmental responsibilities, improving resource efficiency, and supporting sustainable organizational operations in accordance with international environmental management standards.",
      tags: ["SMK3", "Safety", "Indonesian Standards"],
      group: "Safety, Quality & Compliance",
      images: ["/documents/skills/engineer-general/iso-certificate/iso-14001-2015-environmental-management-system-awareness.jpg"],
      skills: [
        "Indonesian Safety Standards",
        "Management Systems",
        "Compliance",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-10-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/iso-certificate/iso-14001-2015-environmental-management-system-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-11",
      title: "SMK3 PP No. 50 Tahun 2012",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification in Occupational Safety and Health Management Systems based on Indonesian Government Regulation (SMK3 – PP No. 50 Tahun 2012). The program introduced the principles of implementing a structured workplace safety management system, including hazard identification, risk control, regulatory compliance, and continuous improvement. It emphasized systematic approaches to preventing workplace accidents, promoting safe work practices, and ensuring occupational safety performance within organizational operations.",
      tags: ["SMK3", "Safety", "Indonesian Standards"],
      group: "Safety, Quality & Compliance",
      images: ["/documents/skills/engineer-general/iso-certificate/sistem-manajemen-keselamatan-dan-kesehatan-kerja-smk-3-awareness.jpg"],
      skills: [
        "Indonesian Safety Standards",
        "Management Systems",
        "Compliance",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-11-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/iso-certificate/sistem-manajemen-keselamatan-dan-kesehatan-kerja-smk-3-awareness.pdf",
        },
      ],
    },

    // 3. Project, Supply Chain & Operations
    {
      id: "cert-12",
      title: "Google Project Management: Specialization",
      issuer: "Google Career Certificates",
      logo: "/logo/logo-google.svg.png",
      issueDate: "2025",
      description:
        "Comprehensive project management specialization covering project planning, execution, and delivery methodologies. The program consisted of seven courses developed by Google, including Foundations of Project Management, Project Initiation, Project Planning, Project Execution, Agile Project Management, and a capstone project applying project management in real-world scenarios. It emphasized hands-on, practice-based learning to build practical skills in initiating, planning, and managing both traditional and agile projects, while strengthening competencies in stakeholder communication, project coordination, and effective project delivery.",
      tags: ["Project Management", "Google", "Leadership"],
      group: "Project, Supply Chain & Operations",
      images: ["/documents/skills/project-management-specialization/project-management-coursera.jpg","/documents/skills/project-management-specialization/google-professional-project-management-badge.jpg","/documents/skills/project-management-specialization/badge.jpg"],
      skills: ["Project Planning", "Team Management", "Agile Methodology"],
      supportingDocuments: [
        {
          id: "doc-cert-12-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/project-management-specialization/project-management-coursera.pdf",
        },
        {
          id: "doc-cert-12-2",
          title: "Credly PM Badge",
          type: "pdf",
          url: "/documents/skills/project-management-specialization/google-professional-project-management-badge.pdf",
        },
      ],
    },
    {
      id: "cert-13",
      title: "Procurement Management",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Professional certification in procurement management covering procurement strategies, vendor management, and supply chain optimization. The program explored procurement as a strategic organizational function, including needs identification, supplier selection and evaluation, contract negotiation, and sourcing strategies. It also emphasized ethical and sustainable procurement practices and the integration of procurement decisions with organizational objectives to optimize value and supply chain performance.",
      tags: ["Procurement", "Supply Chain", "Operations"],
      group: "Project, Supply Chain & Operations",
      images: ["/documents/skills/engineer-general/purchasing-and-procurement-management/procurement-management-awareness.jpg"],
      skills: [
        "Vendor Management",
        "Procurement Strategy",
        "Cost Optimization",
      ],
      supportingDocuments: [
        {
          id: "doc-cert-13-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/purchasing-and-procurement-management/procurement-management-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-14",
      title: "Purchasing Management",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification covering purchasing strategies, supplier relationship management, and procurement process optimization. The program focused on operational purchasing activities, including purchase requisition processes, supplier communication, purchase order handling, goods receipt, and invoice verification. It emphasized efficient, accurate, and compliant purchasing practices to support smooth day-to-day procurement operations within supply chain management.",
      tags: ["Purchasing", "Supply Chain", "Management"],
      group: "Project, Supply Chain & Operations",
      images: ["/documents/skills/engineer-general/purchasing-and-procurement-management/procurement-management-awareness.jpg"],
      skills: ["Purchasing Strategy", "Supplier Relations", "Procurement"],
      supportingDocuments: [
        {
          id: "doc-cert-14-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/purchasing-and-procurement-management/procurement-management-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-15",
      title: "Warehouse Management",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Professional training in warehouse operations, inventory control, and logistics management systems. The program covered key warehouse management functions including receiving, inspection, storage, picking, packing, and shipping processes. It also emphasized the importance of efficient warehouse layout design, safety practices, and the use of Warehouse Management Systems (WMS) to improve operational efficiency, inventory accuracy, and material flow within the supply chain.",
      tags: ["Warehouse", "Logistics", "Operations"],
      group: "Project, Supply Chain & Operations",
      images: ["/documents/skills/engineer-general/warehouse-and-inventory-management/warehouse-management-awareness.jpg"],
      skills: ["Warehouse Operations", "Inventory Control", "Logistics"],
      supportingDocuments: [
        {
          id: "doc-cert-15-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/warehouse-and-inventory-management/warehouse-management-awareness.pdf",
        },
      ],
    },
    {
      id: "cert-16",
      title: "Inventory Management",
      issuer: "PT. Interstrada Solutrindo",
      logo: "/logo/logo-iss.jpeg",
      issueDate: "2025",
      description:
        "Certification in inventory control, stock management, and optimization of supply chain resources. The program covered key inventory management principles including stock classification and control methods such as EOQ, ROP, ABC analysis, and FIFO/LIFO. It emphasized maintaining optimal inventory levels, minimizing holding costs, and ensuring material availability through data-driven planning, performance monitoring, and efficient inventory control practices.",
      tags: ["Inventory", "Supply Chain", "Operations"],
      group: "Project, Supply Chain & Operations",
      images: ["/documents/skills/engineer-general/warehouse-and-inventory-management/inventory-management-awareness.jpg"],
      skills: ["Inventory Control", "Stock Management", "Supply Chain"],
      supportingDocuments: [
        {
          id: "doc-cert-16-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/engineer-general/warehouse-and-inventory-management/inventory-management-awareness.pdf",
        },
      ],
    },

    // 4. Digital & Technical Tools (Supporting)
    {
      id: "cert-17",
      title: "HTML & CSS Fundamentals",
      issuer: "Prograte",
      logo: "/logo/logo-progate.webp",
      issueDate: "2022",
      description:
        "Foundational course covering HTML markup and CSS styling for responsive web design and development. The program focused on building a solid foundation in semantic HTML and modern CSS layout techniques such as Flexbox and Grid. It emphasized creating accessible, mobile-friendly web pages, styling reusable components, and applying responsive design principles to develop clean and maintainable front-end user interfaces.",
      tags: ["HTML", "CSS", "Web Development"],
      group: "Digital & Technical Tools",
      images: ["/documents/skills/it-and-programming-language/html.jpg"],
      skills: ["HTML", "CSS", "Responsive Design"],
      supportingDocuments: [
        {
          id: "doc-cert-17-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/it-and-programming-language/html.pdf",
        },
      ],
    },
    {
      id: "cert-18",
      title: "Git Fundamentals",
      logo: "/logo/logo-progate.webp",
      issuer: "Prograte",
      issueDate: "2022",
      description:
        "Essential training in Git version control, covering branching strategies and collaborative development practices. The program focused on core source control workflows including branching, merging, pull requests, and conflict resolution. It emphasized maintaining clean commit histories, collaborating within team-based development environments (GitHub/GitLab), and applying best practices for version control and code review.",
      tags: ["Git", "Version Control", "Development Tools"],
      group: "Digital & Technical Tools",
      images: ["/documents/skills/it-and-programming-language/git.jpg"],
      skills: ["Git", "Version Control", "Collaboration"],
      supportingDocuments: [
        {
          id: "doc-cert-18-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/it-and-programming-language/git.pdf",
        },
      ],
    },
    {
      id: "cert-19",
      title: "JavaScript Fundamentals",
      logo: "/logo/logo-progate.webp",
      issuer: "Progate",
      issueDate: "2022",
      description:
        "Foundational course covering core concepts of JavaScript programming, including variables, functions, DOM manipulation, and modern ES6 features. The program emphasized fundamental programming logic and practical scripting for interactive web development. It also introduced techniques for building dynamic web interfaces and understanding basic front-end application behavior.",
      tags: ["JavaScript", "Web Development", "Programming"],
      group: "Digital & Technical Tools",
      images: ["/documents/skills/it-and-programming-language/js.jpg"],
      skills: ["JavaScript", "DOM", "ES6", "Web Development"],
      supportingDocuments: [
        {
          id: "doc-cert-19-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/it-and-programming-language/js.pdf",
        },
      ],
    },

    // 5. Language & Communication
    {
      id: "cert-20",
      title: "TOEFL",
      issuer: "Educational Testing Service",
      logo: "/logo/logo-toefl.png",
      issueDate: "2025",
      description:
        "TOEFL ITP certification issued by Educational Testing Service (ETS), demonstrating English proficiency for academic and professional contexts. The Test of English as a Foreign Language (TOEFL) evaluates key language skills including listening comprehension, structure and written expression, and reading comprehension. Achieved a TOEFL ITP score of 583, reflecting strong English communication abilities for academic study and professional environments.",
      tags: ["TOEFL", "English", "Language"],
      group: "Language & Communication",
      images: ["/documents/skills/language-certificate/toefl-itp-page-3.jpg","/documents/skills/language-certificate/toefl-itp-page-1.jpg","/documents/skills/language-certificate/toefl-itp-page-2.jpg"],
      skills: ["English", "Communication", "Academic Writing"],
      supportingDocuments: [
        {
          id: "doc-cert-20-1",
          title: "Certificate",
          type: "pdf",
          url: "/documents/skills/language-certificate/toefl-itp.pdf",
        },
      ],
    },
  ],
  volunteering: [
    {
      id: "vol-1",
      organization: "KKN Program – Diponegoro University",
      logo: "/logo/diponegoro-university.png",
      role: "Village-Level Head Coordinator & Sub-District Deputy Coordinator",
      startDate: "Januari 2023",
      endDate: "Februari 2023",
      cause: "KKN Program",
      description:
        "Led community development initiatives in Giriwoyo Village, Wonogiri, focusing on environmental sustainability, safety awareness, and agricultural innovation.",
      impact: [
        "Organized occupational safety (K3) and fire prevention workshops",
        "Developed insectarium and biopond systems for Black Soldier Fly cultivation",
        "Introduced sustainable feed alternatives for local poultry and fish farmers",
        "Coordinated community development programs with village authorities",
      ],
      tags: [
        "Environmental Sustainability",
        "Environmental Sustainabilityt",
        "Program Coordination",
      ],
      images: ["/images/volunteering/vol-1/img1.jpg"],
    },
    // {
    //   id: "vol-2",
    //   organization: "Youth Tech Mentorship",
    //   role: "Lead Mentor",
    //   startDate: "2022",
    //   endDate: "Present",
    //   cause: "Education",
    //   description:
    //     "Mentoring high school and college students interested in pursuing tech careers.",
    //   impact: [
    //     "Mentored 50+ young developers",
    //     "Helped 15 students land their first tech jobs",
    //     "Created learning curriculum for 200+ students",
    //     "Organized 10+ workshops and seminars",
    //     "Established scholarship fund raising $50K",
    //   ],
    //   tags: ["Mentoring", "Education", "Youth Development"],
    //   images: [
    //     "/images/volunteering/vol-2/img1.jpg",
    //     "/images/volunteering/vol-2/img2.jpg",
    //     "/images/volunteering/vol-2/img3.jpg",
    //   ],
    // },
    // {
    //   id: "vol-3",
    //   organization: "Women in Tech Initiative",
    //   role: "Program Coordinator",
    //   startDate: "2021",
    //   endDate: "Present",
    //   cause: "Diversity & Inclusion",
    //   description:
    //     "Supporting and promoting women in technology through mentorship and community programs.",
    //   impact: [
    //     "Coordinated programs for 500+ women developers",
    //     "Connected 100+ mentors with mentees",
    //     "Organized annual conference with 1000+ attendees",
    //     "Helped 40+ women transition into tech roles",
    //     "Raised awareness through 20+ social campaigns",
    //   ],
    //   tags: ["Diversity", "Women in Tech", "Inclusion"],
    //   images: ["/images/volunteering/vol-3/img1.jpg"],
    // },
    // {
    //   id: "vol-4",
    //   organization: "Digital Literacy Program",
    //   role: "Curriculum Developer",
    //   startDate: "2023",
    //   endDate: "Present",
    //   cause: "Digital Inclusion",
    //   description:
    //     "Creating and delivering digital literacy programs for underserved communities.",
    //   impact: [
    //     "Taught digital skills to 300+ community members",
    //     "Created curriculum for 5 different skill levels",
    //     "Achieved 90% completion rate",
    //     "Helped 80+ people find employment",
    //     "Expanded program to 3 additional communities",
    //   ],
    //   tags: ["Digital Literacy", "Community Service", "Education"],
    //   images: ["/images/volunteering/vol-4/img1.jpg"],
    // },
    // {
    //   id: "vol-5",
    //   organization: "Environmental Tech Solutions",
    //   role: "Volunteer Developer",
    //   startDate: "2022",
    //   endDate: "2024",
    //   cause: "Environmental",
    //   description:
    //     "Building web applications to track and reduce environmental impact.",
    //   impact: [
    //     "Developed carbon tracking web application",
    //     "Used by 500+ organizations for sustainability",
    //     "Helped reduce reported carbon emissions by 1000+ tons",
    //     "Created educational content on climate tech",
    //     "Collaborated with 10+ environmental NGOs",
    //   ],
    //   tags: ["Environment", "Sustainability", "Tech for Good"],
    //   images: ["/images/volunteering/vol-5/img1.jpg"],
    // },
  ],
  achievement: [
    // {
    //   id: "ach-1",
    //   title: "Developer of the Year 2024",
    //   date: "2024",
    //   category: "Awards",
    //   description:
    //     "Recognized by Tech Community Indonesia for outstanding contributions to web development and open source.",
    //   details: [
    //     "Selected from 500+ nominees",
    //     "Recognized for innovation and community leadership",
    //     "Featured in major tech publications",
    //     "Received award at annual tech summit",
    //     "Joined hall of fame with previous winners",
    //   ],
    //   tags: ["Award", "Recognition", "Developer Excellence"],
    //   images: ["/images/achievement/ach-1/award.jpg"],
    //   externalLink: "https://example.com/award",
    // },
    // {
    //   id: "ach-2",
    //   title: "Open Source Contributor of the Month",
    //   date: "2023",
    //   category: "Open Source",
    //   description:
    //     "Honored 6 times for significant contributions to popular open source projects.",
    //   details: [
    //     "Contributed 50+ merged pull requests",
    //     "Fixed critical security vulnerabilities",
    //     "Improved project performance by 30%",
    //     "Mentored 10+ new contributors",
    //     "Featured in project documentation and social media",
    //   ],
    //   tags: ["Open Source", "Contributions", "Recognition"],
    //   images: ["/images/achievement/ach-2/award.jpg"],
    //   externalLink: "https://github.com",
    // },
    // {
    //   id: "ach-3",
    //   title: "Fastest Growing Tech Influencer",
    //   date: "2024",
    //   category: "Social Impact",
    //   description:
    //     "Recognized as fastest growing tech content creator with 100K+ followers across platforms.",
    //   details: [
    //     "Grew audience from 0 to 100K in 18 months",
    //     "Published 200+ educational content pieces",
    //     "Reached 5M+ monthly views",
    //     "Launched successful online course with 5K+ students",
    //     "Built engaged community of developers",
    //   ],
    //   tags: ["Influencer", "Content Creation", "Community"],
    //   images: ["/images/achievement/ach-3/award.jpg"],
    //   externalLink: "https://twitter.com",
    // },
    // {
    //   id: "ach-4",
    //   title: "Hackathon Winner - National Tournament",
    //   date: "2023",
    //   category: "Competition",
    //   description:
    //     "Won first place in prestigious national hackathon with innovative tech solution.",
    //   details: [
    //     "Competed against 200+ teams",
    //     "Built AI-powered web application in 48 hours",
    //     "Received $50K prize",
    //     "Solution adopted by corporate sponsor",
    //     "Featured in tech news and media coverage",
    //   ],
    //   tags: ["Hackathon", "Competition", "Innovation"],
    //   images: ["/images/achievement/ach-4/award.jpg"],
    //   externalLink: "https://hackathon.example.com",
    // },
    // {
    //   id: "ach-5",
    //   title: "Published Tech Book Author",
    //   date: "2024",
    //   category: "Publications",
    //   description:
    //     "Published comprehensive guide on modern web development practices.",
    //   details: [
    //     "Wrote 400+ page technical book",
    //     "Published by major tech publisher",
    //     "Sold 10K+ copies worldwide",
    //     "5-star rating on review platforms",
    //     "Translated into 3 languages",
    //   ],
    //   tags: ["Author", "Publishing", "Education"],
    //   images: ["/images/achievement/ach-5/award.jpg"],
    //   externalLink: "https://amazon.com",
    // },
  ],
};

// Helper function to get item by ID
export const getItemById = (category: string, id: string) => {
  const categoryKey = category as keyof Omit<IPortfolioData, "profile">;
  if (
    categoryKey === "education" ||
    categoryKey === "experience" ||
    categoryKey === "organization" ||
    categoryKey === "certification" ||
    categoryKey === "volunteering" ||
    categoryKey === "achievement"
  ) {
    return portfolioData[categoryKey].find((item: any) => item.id === id);
  }
  return null;
};

// Get all items in a category
export const getCategoryItems = (category: string) => {
  const categoryKey = category as keyof Omit<IPortfolioData, "profile">;
  if (
    categoryKey === "education" ||
    categoryKey === "experience" ||
    categoryKey === "organization" ||
    categoryKey === "certification" ||
    categoryKey === "volunteering" ||
    categoryKey === "achievement"
  ) {
    return portfolioData[categoryKey];
  }
  return [];
};
