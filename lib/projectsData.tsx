export interface IProjectData {
  title: string;
  desc?: React.ReactElement;
  imageUrl: string;
  techs: string[];
  prevLink: string;
  sourceLink: string;
}

export const projectsData: IProjectData[] = [
  {
    title: "Google Clone",
    imageUrl: "/projects/google-clone.png",
    desc: (
      <p>
        Klon wyszukiwarki Google. Pozwala przeszukać sieć i obrazy. Wykorzystuje{" "}
        <abbr title="Google Programmable Search Engine">PSE</abbr> REST API.
      </p>
    ),
    techs: ["nextjs", "react", "tailwindcss", "api"],
    prevLink: "https://google-clone-delta-ochre.vercel.app/",
    sourceLink: "https://github.com/orlowski-dev/google-clone",
  },
  {
    title: "IMDB Clone",
    imageUrl: "/projects/imdb-clone.jpg",
    desc: (
      <p>
        Klon IMDB. Witryna wyświetla nadchodzące, popularne i najwyżej oceniane
        filmy. Kliknięcie w dany film umożliwia uzyskanie szczegółowych
        informacji odnośnie danego filmu. Wykorzystuje{" "}
        <abbr title="themoviedb.org API">TMDB API</abbr> oraz{" "}
        <abbr title="omdbapi.com">OMDB API</abbr>.
      </p>
    ),
    techs: ["nextjs", "react", "tailwindcss", "api"],
    prevLink: "https://imdb-clone-eight-nu.vercel.app/",
    sourceLink: "https://github.com/orlowski-dev/imdb-clone",
  },
  {
    title: "Weather Web App",
    imageUrl: "/projects/weather-web.png",
    desc: <p>Aktualna pogoda i jakość powietrza.</p>,
    techs: ["vite", "react", "scss", "api"],
    prevLink: "https://weather-web-app-gray.vercel.app/",
    sourceLink: "https://github.com/orlowski-dev/weather-web-app",
  },
  {
    title: "Bookmark Landing page",
    imageUrl: "/projects/fm-bookmark-landing-page.png",
    techs: ["nextjs", "react", "scss"],
    prevLink: "https://fm-bookmark-landing-page-omega.vercel.app/",
    sourceLink: "https://github.com/orlowski-dev/fm-bookmark-landing-page",
  },
  {
    title: "Github User Search App",
    imageUrl: "/projects/fm-github-user-search-app.png",
    techs: ["vite", "react", "scss", "api"],
    prevLink: "https://orlowski-dev.github.io/fm-github-user-search-app/",
    sourceLink: "https://github.com/orlowski-dev/fm-github-user-search-app",
  },
  {
    title: "Age Calculator App",
    imageUrl: "/projects/fm-age-calculator.png",
    techs: ["vanilla js", "css"],
    prevLink: "https://orlowski-dev.github.io/fm-age-calculator-app/",
    sourceLink: "https://github.com/orlowski-dev/fm-age-calculator-app",
  },
  {
    title: "Interactive Pricing Component",
    imageUrl: "/projects/fm-interactive-pricing-component.png",
    techs: ["vanilla js", "css"],
    prevLink:
      "https://orlowski-dev.github.io/fm-interactive-pricing-component/",
    sourceLink:
      "https://github.com/orlowski-dev/fm-interactive-pricing-component",
  },
  {
    title: "Clock App",
    imageUrl: "/projects/fm-clock-app.jpeg",
    techs: ["vite", "react", "scss", "api"],
    prevLink: "https://fm-clock-app-orlowski-dev.vercel.app/",
    sourceLink: "https://github.com/orlowski-dev/fm-clock-app",
  },
];
