const Search: React.FC = () => {
  return (
    <div className="">
      <input
        className=" border-2 border-gray-400 rounded-l-sm px-3 py-2"
        type="text"
        placeholder="Search for product .."
      />
      <button className="bg-gray-400 text-white border-2 border-gray-400 rounded-r-sm px-3 py-2">
        Search
      </button>
    </div>
  );
};

export default Search;
