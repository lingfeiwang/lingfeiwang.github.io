// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-people",
          title: "People",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-software",
          title: "Software",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/software/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-misc",
          title: "Misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "misc-game-emberforge-depths",
          title: 'Game Emberforge Depths',
          description: "A test for Claude Fable 5",
          section: "Misc",handler: () => {
              window.location.href = "/misc/emberforge.html";
            },},{id: "news-the-wang-lab-officially-opens",
          title: 'The Wang Lab officially opens!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-23.html";
            },},{id: "news-lingfei-presents-dictys-at-ccbsb-in-qingdao-china",
          title: 'Lingfei presents Dictys at CCBSB in Qingdao, China',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-28.html";
            },},{id: "news-lingfei-presents-dictys-at-frontiers-in-single-cell-genomics-cold-spring-harbor-asia-in-suzhou-china",
          title: 'Lingfei presents Dictys at Frontiers in Single Cell Genomics, Cold Spring Harbor Asia...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-12-07.html";
            },},{id: "news-presentation-plans-for-lingfei-this-fall",
          title: 'Presentation plans for Lingfei this fall',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-08-01.html";
            },},{id: "news-big-welcome-to-zixuan-ye-joining-us-as-a-rotation-ph-d-student",
          title: 'Big WELCOME to Zixuan Ye joining us as a rotation Ph.D. student!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-13.html";
            },},{id: "news-big-welcome-to-matthew-funk-joining-us-as-a-rotation-ph-d-student",
          title: 'Big WELCOME to Matthew Funk joining us as a rotation Ph.D. student!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-09-24.html";
            },},{id: "news-big-welcome-to-yuhe-wang-joining-us-as-a-research-associate",
          title: 'Big WELCOME to Yuhe Wang joining us as a Research Associate!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-11-25.html";
            },},{id: "news-latest-preprint-on-single-cell-eqtl-mapping-and-causal-grn-inference",
          title: 'Latest preprint on single-cell eQTL mapping and causal GRN inference',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-01-17.html";
            },},{id: "news-our-method-dictys-had-top-performance-in-independent-benchmarks",
          title: 'Our method Dictys had top performance in independent benchmarks.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-01.html";
            },},{id: "news-lecture-and-workshop-on-gene-regulatory-network",
          title: 'Lecture and workshop on gene regulatory network',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-03-03.html";
            },},{id: "news-new-funding-from-nih",
          title: 'New funding from NIH',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-08-25.html";
            },},{id: "news-big-welcome-to-matthew-funk-joining-us-as-a-ph-d-student",
          title: 'Big WELCOME to Matthew Funk joining us as a Ph.D. student!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-09-01.html";
            },},{id: "news-big-welcome-to-yu-chen-liu-joining-us-as-a-postdoc",
          title: 'Big WELCOME to Yu-Chen Liu joining us as a postdoc!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-20.html";
            },},{id: "news-our-lab-39-s-first-paper-airqtl-is-published-in-nature-communications",
          title: 'Our lab&amp;#39;s first paper airqtl is published in Nature Communications!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-12-10.html";
            },},{id: "news-big-welcome-to-chen-fu-joining-us-as-a-senior-research-scientist",
          title: 'Big WELCOME to Chen Fu joining us as a senior research scientist!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-01-01.html";
            },},{id: "news-do-you-have-a-position-for-chen-fu",
          title: 'Do you have a position for Chen Fu?',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-04-08.html";
            },},{id: "news-congratulations-to-phd-candidate-matthew-funk-for-passing-his-phd-qualifying-exam",
          title: 'Congratulations to PhD candidate Matthew Funk for passing his PhD qualifying exam!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-05-14.html";
            },},{id: "research-analysis",
          title: 'Analysis',
          description: "Gene regulatory network analysis and visualization",
          section: "Research",handler: () => {
              window.location.href = "/research/analysis.html";
            },},{id: "research-causality",
          title: 'Causality',
          description: "Novel causal models for gene regulatory networks",
          section: "Research",handler: () => {
              window.location.href = "/research/causality.html";
            },},{id: "research-inference",
          title: 'Inference',
          description: "Gene regulatory network inference from single-cell multi-omics",
          section: "Research",handler: () => {
              window.location.href = "/research/inference.html";
            },},{id: "teaching-2025-bbs-764",
          title: '2025 BBS 764',
          description: "Systems and Computational Biology",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/2025_BBS764.html";
            },},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/lingfeiwang.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%4C%69%6E%67%66%65%69.%57%61%6E%67@%75%6D%61%73%73%6D%65%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/lingfeiwang", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1120904", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/lfwang", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9175-7006", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_PbQRA4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/__wang__", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
