// "use client";

// const SearchBox = () => {
//   return (
//     <form>
//       <input
//         type="text"
//         placeholder="Search movie..."
//         className="text-2xl w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent text-center"
//       />
//       <button
//         type="submit"
//         className="text-amber-600 text-center text-xl w-full disabled:text-gray-400"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchBox;

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gary-500 outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        type="submit"
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}