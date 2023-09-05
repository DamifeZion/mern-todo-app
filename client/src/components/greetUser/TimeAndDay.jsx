const TimeAndDay = () => {
  const dateMethod = new Date();
  const day = dateMethod.getDay();
  const date = dateMethod.getDate();
  const month = dateMethod.getMonth();

  const dayOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thurs",
    "Fri",
    "Sat",
  ];

  const monthOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const DOW = dayOfWeek[day]
  const MOY = monthOfYear[month]

  return (
    <div className=" flex flex-col w-fit items-center">
      <p className="font-semibold uppercase leading-tight">
        {DOW}
      </p>

      <p className=" text-[2.7rem] text-[#e4e4e4] font-semibold leading-none">
        {date}
      </p>

      <p className="text-[.85rem] tracking-wide leading-tight capitalize">
        {MOY}
      </p>
    </div>
  );
};

export default TimeAndDay;
