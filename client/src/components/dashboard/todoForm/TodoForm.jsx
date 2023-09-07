const TodoForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the form field values
    const title = e.target.elements.title.value;
    const subtitle = e.target.elements.subtitle.value;

    // Perform any necessary actions with the submitted data
    console.log("Title:", title);
    console.log("Subtitle:", subtitle);

    // Reset the form fields
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col h-screen pt-64 text-[#e4e4e4]"
    >
      <div className="py-8 rounded-lg px-5 bg-[#252525]">
        <div className="flex flex-col">
          <label htmlFor="title" className="font-bold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="px-4 py-2  bg-[--dash-bg-color2] border border-gray-300 rounded outline-none"
          />
        </div>

        <div className="mt-6 w-full">
          <label htmlFor="subtitle" className="font-bold">
            Subtitle
          </label>
          <input
            type="text"
            id="subtitle"
            name="subtitle"
            required
            className="w-full px-4 outline-none py-2 bg-[--dash-bg-color2] border border-gray-300 rounded"
          />
        </div>

        <button
          type="submit"
          className="mt-10 font-medium px-4 py-2 w-full bg-[--pri-color] text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
