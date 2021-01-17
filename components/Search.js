import SearchIcon from "icons/search";

export const Search = () => {
  return (
    <div className="w-full px-4 flex">
      <input
        className="w-full border bg-peach border-indigo-500 rounded-l-full h-12 p-4 text-xl font-light text-gray placeholder-gray"
        type="text"
        placeholder="Search..."
      />
      <button
        className="button rounded-r-full border-r border-t border-b border-indigo-500 px-2 bg-indigo-500"
        type="button"
        value="Search"
      >
        <SearchIcon className="h-7" color="#FDCEBD" />
      </button>
    </div>
  );
};

export default Search;
