import { HeroCTA, HomeCard } from "../components/exportComponents";
import {
  hero,
  uberLogo,
  vanguardLogo,
  remaxLogo,
  weworkLogo,
  harvardUniversityLogo,
} from "../assets/exportAssets";
import { useMediaQuery } from "@mui/material";

const Home = () => {
  const isSmall = useMediaQuery("(max-width: 1024px)");
  const isLarge = useMediaQuery("(min-width: 1025px)");

  //to style the client icons uber,vanguard, e.t.c
  const clientIconsStyle = ` w-[24%] mr-3 sm:mr-5 900:mr-7  lgsm:w-[28%] 600:w-[25%] 700:mr-2 700:w-[20%] 1000:w-[15.5%] 1000:mr-9 xl:mr-18 xl:w-[13.5%]`


  return (
    // {/*template is used in css to center the website*/}

    <section className="template flex flex-col mt-10 500:mt-16 700:mt-24 lg:mt-16 ">
      <header className=" flex flex-col">
        <h1 className="place-self-center text-center md:w-full lg:w-2/3 text-[1.775rem] sm:text-[1.8rem] lgsm:text-[2rem] md:text-[3.5rem] 600:text-[2rem] 600:w-2/3 700:text-[2.3rem] lg:text-[3.3rem] 1xl:text-[4.2rem] font-bold leading-tight">
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
           mt-8 gap-3"
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

        <div className="flex max-w-[1000px] place-self-center w-full flex-col mt-20 600:mt-24 1000:mt-28 xl:mt-32">
          <HomeCard />
        </div>
      </main>
    </section>
  );
};

export default Home;
