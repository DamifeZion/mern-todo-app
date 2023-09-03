import { loading } from "../../assets/exportAssets";

const Loading = () => {
  return (
    <div className="  flex flex-col gap-5 items-center justify-center  bg-slate-900 h-screen w-full text-[1.2rem] text-[#fff] font-semibold">
      <img src={loading} className=" " />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
