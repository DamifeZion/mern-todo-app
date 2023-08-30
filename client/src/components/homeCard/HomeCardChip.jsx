

const HomeCardChip = ({chipStyle ,chipTxt}) => {
  return (
    <button className={`${chipStyle} px-4 py-[0.4rem] rounded-3xl tracking-wide border border-[red]  800:py-[.5rem]`}>
      {chipTxt}
    </button>
  )
}

export default HomeCardChip