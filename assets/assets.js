import logo from "./logo.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.png";
import img6 from "./img6.jpg";
import img7 from "./img7.png";
import img8 from "./img8.jpg";
import my_picture from "./my_picture.png";
import arrow_right from "./arrow_right.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import github from "./github.png";

export const assets = {
  logo,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  my_picture,
  arrow_right,
  instagram,
  linkedin,
  github,
};

export const blog_data = [
  {
    id: 1,
    title: "Ako vytvorit blog za pomoci Next.js ako tento?",
    description:
      "V dnešnej dobe v svete YouTube je všetko oveľa dostupnejšie a ja vám sem uložím návod ako na to...",

    steps: [
      {
        heading: "Krok 1 - vytvorenie appky",
        article:
          "Nainštalujeme si axios ktorý nám slúži na fetch našich dát. Axios slúži na posielanie HTTP požiadaviek z prehliadača alebo Node.js. Je to populárna knižnica, ktorá uľahčuje komunikáciu s API. Následne si nainštalujeme toastify na pekné zobrazenie chybových hlášok a mongoose na prepojenie s naším back-endom.",
      },
      {
        heading: "Krok 2 - layout a css",
        article: "Tu bude tvoj text pre krok 2...",
      },
      {
        heading: "Krok 3 - header komponenta",
        article: "Tu bude tvoj text pre krok 3...",
      },
      {
        heading: "Krok 4 - blog list a blog item",
        article: "Tu bude tvoj text pre krok 4...",
      },
      {
        heading: "Krok 5 - page rendering a filtrovanie",
        article: "Tu bude tvoj text pre krok 5...",
      },
      {
        heading: "Krok 6 - back-end",
        article: "Tu bude text pre krok 6...",
      },
    ],

    image: img1,
    date: "2025-01-12",
    category: "Testing",
    author: "Juraj Golian",
    author_img: my_picture,
  },
  {
    id: 2,
    title: "Learning React: From Confusion to Clarity",
    description:
      "React vyzeral na začiatku strašidelne — komponenty, props, hooks... No po pár malých projektoch začalo všetko dávať zmysel.",
    image: img2,
    date: "2025-02-03",
    category: "React",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Prvé pochopenie komponentov",
        article:
          "Komponenty sú základné stavebné bloky Reactu. Keď si uvedomíš, že ide len o funkcie vracajúce JSX, začne to byť jednoduché.",
      },
      {
        heading: "Krok 2 - Props a ich úloha",
        article:
          "Props sú len dáta, ktoré posielaš do komponentu. Najprv ma mýlili, ale dnes si bez nich neviem predstaviť žiaden komponent.",
      },
      {
        heading: "Krok 3 - Hooky a moment 'Aha!'",
        article:
          "Použitie useState a useEffect bolo prelomové. Zrazu som vedel pracovať so stavom a efektami elegantne.",
      },
    ],
  },

  {
    id: 3,
    title: "Understanding State and Props Like a Pro",
    description:
      "State a props ma v Reacte najviac mýlili. Tu je spôsob, ako som ich konečne pochopil — a ako ich využívam dnes.",
    image: img3,
    date: "2025-03-10",
    category: "React",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Čo sú props?",
        article:
          "Props sú hodnoty, ktoré komponentom posiela ich rodič. Sú nemenné a slúžia na prenos dát.",
      },
      {
        heading: "Krok 2 - Čo je state?",
        article:
          "State je interný stav komponentu. Mení sa v čase a pri jeho zmene sa komponent automaticky prekreslí.",
      },
      {
        heading: "Krok 3 - Kedy použiť čo",
        article:
          "Jednoducho: props sú vstup, state je vnútorný stav. Keď ich pochopíš, React začne byť logický a predvídateľný.",
      },
    ],
  },

  {
    id: 4,
    title: "Diving Into Next.js: My First Full-Stack Project",
    description:
      "Po Reacte som chcel viac. Next.js mi otvoril dvere k server-side renderingu, API routam a oveľa lepšiemu DX.",
    image: img4,
    date: "2025-05-22",
    category: "Next.js",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Prechod z Reactu",
        article:
          "Next.js stavia na Reacte, takže som mohol využiť všetko, čo som už vedel, no s veľkými výhodami navyše.",
      },
      {
        heading: "Krok 2 - API Routes",
        article:
          "Možnosť vytvárať backend priamo v projekte bola pre mňa nová. Zrazu som nemusel riešiť samostatný server.",
      },
      {
        heading: "Krok 3 - SSR a SSG",
        article:
          "Keď som pochopil rozdiely medzi server-side a static generovaním, vedel som lepšie optimalizovať svoj web.",
      },
    ],
  },

  {
    id: 5,
    title: "Styling v Reacte: Od CSS súborov po Tailwind Magic",
    description:
      "Začínal som s klasickým CSS, skúšal styled-components a nakoniec som si zamiloval Tailwind CSS.",
    image: img5,
    date: "2025-07-08",
    category: "Tailwind",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Klasické CSS",
        article:
          "Na začiatku som písal veľké CSS súbory, ktoré sa rýchlo menili na chaos.",
      },
      {
        heading: "Krok 2 - Moderné riešenia",
        article:
          "Styled-components mi ukázali silu komponentového štýlovania, ale mali aj svoje nevýhody.",
      },
      {
        heading: "Krok 3 - Tailwind CSS",
        article:
          "Tailwind bol ako superpower — rýchly, konzistentný a bez starostí so súbormi. Všetko píšem priamo v HTML.",
      },
    ],
  },

  {
    id: 6,
    title: "Práca s API v Reacte a Next.js",
    description:
      "Fetchovanie dát ma kedysi desilo — kým som nepochopil async/await, SWR a čisté data-fetching patterny.",
    image: img6,
    date: "2025-08-18",
    category: "API",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Async/Await",
        article:
          "Keď som prestal používať then() a prešiel na async/await, kód bol čitateľný a kvalitnejší.",
      },
      {
        heading: "Krok 2 - SWR a react-query",
        article:
          "Tieto knižnice mi automatizovali caching, revalidáciu a optimalizovali fetchovanie.",
      },
      {
        heading: "Krok 3 - API v Next.js",
        article:
          "API routes mi umožnili vytvoriť backend bez samostatného servera — stačí jedna funkcia.",
      },
    ],
  },

  {
    id: 7,
    title: "Prečo mi TypeScript zmenil spôsob kódovania",
    description:
      "TypeScript ma najskôr spomaľoval — no dnes si bez typovej kontroly neviem predstaviť žiaden projekt.",
    image: img7,
    date: "2025-09-05",
    category: "TypeScript",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Pochopenie typov",
        article:
          "Základné typy, interface a typy funkcií mi priniesli poriadok a menej chýb.",
      },
      {
        heading: "Krok 2 - Type inference",
        article:
          "TS vie veľa typov doplniť automaticky, čo zlepšuje autocomplete a DX.",
      },
      {
        heading: "Krok 3 - Migrácia projektov",
        article:
          "Keď som migroval prvý React projekt na TypeScript, okamžite som videl rozdiel v stabilite.",
      },
    ],
  },

  {
    id: 8,
    title: "Budovanie osobného blogu v Next.js a Tailwind",
    description:
      "Projekt, ktorý spojil všetko — routovanie, komponenty, fetchovanie dát a štýlovanie.",
    image: img8,
    date: "2025-10-20",
    category: "Frontend",
    author: "Juraj Golian",
    author_img: my_picture,

    steps: [
      {
        heading: "Krok 1 - Základné rozloženie",
        article:
          "Vytvoril som layout, header, footer a štruktúru celého blogu.",
      },
      {
        heading: "Krok 2 - Blog data model",
        article:
          "Pripravil som si štruktúru dát a komponenty pre blog list a detail.",
      },
      {
        heading: "Krok 3 - Tailwind styling",
        article:
          "Tailwind mi umožnil rýchlo vytvoriť moderný dizajn bez písania CSS súborov.",
      },
    ],
  },
];
