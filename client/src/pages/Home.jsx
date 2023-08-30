import { HeroCTA, HomeCard } from "../components/exportComponents";
import {
  hero,
  uberLogo,
  vanguardLogo,
  remaxLogo,
  weworkLogo,
  harvardUniversityLogo,
  quote1,
} from "../assets/exportAssets";
import { useMediaQuery } from "@mui/material";
import { homeData } from "../data/exportData";

//array of data for the workspace chips
const { homeCardChip } = homeData;

const Home = () => {
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const isLarge = useMediaQuery("(min-width: 1025px)");

  //to style the client icons uber,vanguard, e.t.c
  const clientIconsStyle = ` w-[24%] mr-3 sm:mr-5 900:mr-7  lgsm:w-[28%] 600:w-[25%] 700:mr-2 700:w-[20%] 1000:w-[15.5%] 1000:mr-9 xl:mr-18 xl:w-[13.5%]`;

  return (
    // {/*template is used in css to center the website*/}

    <section className="template flex flex-col mt-10 500:mt-16 700:mt-24 lg:mt-16 ">
      <header className=" flex flex-col">
        <h1 className="place-self-center text-center md:w-full lg:w-2/3 text-[1.775rem] sm:text-[1.8rem] lgsm:text-[2rem] md:text-[3.5rem] 600:text-[2rem] 600:w-2/3 700:text-[2.3rem] 1000:text-[3.3rem] font-bold leading-none">
          One simple todo list for you
          <span className="relative mx-[0.31rem] sm:mx-2 lgsm:mx-3 lg:mx-4">
            <span className=" absolute left-0 w-full bottom-1 h-[.25rem] lgsm:bottom-[.2rem] lgsm:h-[.35rem] md:h-[.5rem] lg:h-[.4rem] lg:bottom-2 bg-[--pri-color] rounded-md" />
            and
          </span>
          your team
        </h1>

        {isLarge && <HeroCTA />}

        <img
          src={hero}
          alt="Hero Bg"
          className="w-full md:w-11/12 1000:w-full lg:w-5/6 xl:w-4/6 object-contain  place-self-center mt-10 md:mt-14 lg:mt-16 xl:mt-20"
        />
      </header>

      <main className="flex flex-col mt-7 md:mt-10 xl:mt-28 1xl:mt-16">
        {isSmall && <HeroCTA />}
        <h1 className=" mt-16 500:mt-24 lg:mt-0 text-[1.35rem] sm:text-[1.4rem] lgsm:text-[1.36rem] md:text-[1.4rem] lg:text-[1.5rem] xl:text-[1.4rem] 1xl:text-[1.8rem] text-center font-semibold">
          Join +30,000,000 highly effective people and teams
        </h1>

        <span
          id="client-logos"
          className="
          flex flex-wrap justify-center w-full items-center
           mt-8 gap-3 2xl:gap-12"
        >
          <img
            src={uberLogo}
            alt="Uber logo"
            loading="lazy"
            decoding="async"
            className={`${clientIconsStyle} lgsm:w-[23%] 600:w-[14%] 700:w-[12%] 1000:w-[9%] xl:w-[9%]`} //theres no repetition here img not so good leave the "xl"
          />

          <img
            src={vanguardLogo}
            loading="lazy"
            decoding="async"
            alt="Vanguard logo"
            className={clientIconsStyle}
          />

          <img
            src={remaxLogo}
            loading="lazy"
            decoding="async"
            alt="Remax logo"
            className={clientIconsStyle}
          />

          <img
            src={weworkLogo}
            loading="lazy"
            decoding="async"
            alt="WeWork logo"
            className={`mr-8 md:mr-0 ${clientIconsStyle}`} //margin right here
          />

          <img
            src={harvardUniversityLogo}
            loading="lazy"
            decoding="async"
            alt="Harvard University logo"
            className={` ${clientIconsStyle} 1000:w-[13.5%]`}
          />
        </span>

        <div className="flex place-self-center w-full flex-col mt-20 gap-8 600:mt-24 600:px-[1rem] 700:px-[1.1rem] 1000:mt-28 1000:gap-9 lg:px-[2.3rem] xl:mt-32 xl:px-[4rem] 1xl:px-[3.5rem] 2xl:px-[5rem]">
          <HomeCard homeCardChip={homeCardChip} />

          <div className=" flex items-center gap-6 800:gap-12 900:w-11/12 900:place-self-center 900:gap-[3.1rem] 1000:w-10/12 1000:gap-[3.4rem] lg:w-9/12 xl:w-[72%]">
            <img src={quote1} alt="Nathan W. Morris" className=" w-[30%]  sm:w-[25%] lgsm:w-[14.5%] 700:w-[14%] 800:w-[20%]"
            />

            <h1
              className=" flex flex-col gap-4 flex-wrap text-[.9rem] w-[70%] font-bold  sm:w[75%] lgsm:w-[76%] 600:text-[1.13rem] 600:gap-5 600:leading-snug 700:w-[79.5%] 700:text-[1.05rem] 800:text-[1.03rem] 2xl:text-[1.38rem]"
            >
              “Productivity is being able to do things that you were never able to do before.”

              <span 
                className=" font-light text-[.72rem] lgsm:text-[.87rem] 800:text-[.825rem] 2xl:text-[1.1rem]"
              >
                Nathan W. Morris, author and finance expert
              </span>
            </h1>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Home;
