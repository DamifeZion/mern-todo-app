import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const HeroCTA = () => {
  return (
    <div className=" w-fit flex items-center justify-center flex-col mt-5 md:mt-8 lg:mt-10 1xl:mt-12 1xl:w-[67%] place-self-center text-center">
      <h1 className=" text-[--txt-color] w-11/12 sm:text-[.87rem] lgsm:text-[.9rem] lgsm:w-full 600:text-[1.1rem] 700:w-11/12 800:w-9/12 800:text-[1rem] lg:w-[75%] lg:text-[1.1rem] md:text-[1.1rem] 1xl:w-[73%] 1xl:text-[1.4rem]">
        Over 30 million people organize their tasks, lists and manage their
        team’s projects with Task.flow
      </h1>

      <Link to='/login'>
        <button className="mt-6 md:mt-8 lg:mt-10 xl:mt-14 flex gap-2 bg-[--pri-color] w-fit place-self-center px-6 py-4 rounded-full lg:px-9 lg:py-[1.2rem] lg:text-[1.05rem] md:text-[1.4rem] 1xl:text-[1.5rem] 1xl:px-10 1xl:py-[.85rem] text-[--bg-color] font-medium tracking-wider group ">
          Get Started
          <BsArrowRight className=" place-self-center group-hover:translate-x-[0.35rem] ease duration-200" />
        </button>
      </Link>

      <small className="uppercase mt-2 md:text-[.85rem] lg:text-[.95rem] 1xl:text-[1rem] font-light text-[--txt-color]">
        Free Forever. No credit card.
      </small>
    </div>
  );
};

export default HeroCTA;
