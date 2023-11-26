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
    imageUrl: "/projects/imdb-clone.png",
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
];
