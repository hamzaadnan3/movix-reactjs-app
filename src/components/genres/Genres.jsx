import React from "react";
import { useSelector } from "react-redux";

import "./genresStyle.scss";

const Genres = ({ data }) => {
  const { genre } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genre[g]?.name) return;
        return (
          <div key={g} className="genre">
            {genre[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
