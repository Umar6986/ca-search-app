// import React from "react";
// const SearchResultList = ({ results }) => {
//   return (
//     <div className="results-list">
//       {results.map((result, id) => {
//         return <div key={id}>{result.name}</div>;
//       })}
//     </div>
//   );
// };

// export default SearchResultList;
import React from "react";
import { SearchResult } from "./SearchResult";

const SearchResultList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult results={results} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList;
