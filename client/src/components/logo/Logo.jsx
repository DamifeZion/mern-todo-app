

const Logo = ({ divClass, spanClass }) => {
  return (
    <span className={`${divClass} inline-flex items-center justify-center leading-none gap-0`}>
      Task<span className={`${spanClass} w-[5px] h-[5px] rounded-full bg-[--pri-color] mt-[.35rem] mx-[1px]`} />flow
    </span>
  );
};

export default Logo;