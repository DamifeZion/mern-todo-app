/* eslint-disable react/prop-types */


const HomeMigratingChip = ({img, txt}) => {
  return (
    <div className=" flex items-center justify-center px-[.8rem] py-[.53rem] border border-[#D8D8D8] text-[1.1rem] rounded-[1.5rem] gap-2 
    ">
      <img src={img} alt={`${img} logo`} 
        className=""
      />

      <p>
        {txt}
      </p>
    </div>
  )
}

export default HomeMigratingChip