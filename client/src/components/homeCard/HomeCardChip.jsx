/* eslint-disable react/prop-types */


const HomeCardChip = ({chipStyle , txt}) => {
  return (
    <button className={`${chipStyle} cursor-auto px-4 py-[0.4rem] rounded-3xl tracking-wide  border 800:py-[.5rem]`}>
      {txt}
    </button>
  )
}

export default HomeCardChip