import { Link } from "react-router-dom";

const PcMenu = () => {
  return (
    <div className={`text-[--accent1] select-none`}>
      <ul
        className={`flex items-center text-[1rem] lg:text-[.9rem] xl:text-[1rem] 1xl:text-[1.2rem]`}
      >
        <ol className="flex items-center gap-8 font-medium w-full text-center mr-9">
          <Link to="/" className="text-[--txt-color] hover:text-black">
            Home
          </Link>
        </ol>

        <Link to="/login" className="">
          <button className="px-[1.8rem] py-[.4rem] xl:px-[2rem] rounded-3xl border border-[--pri-color] hover:bg-[--pri-color] text-[--pri-color] hover:text-[--bg-color] ease duration-300 font-medium tracking-wider">
            Login
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default PcMenu;
