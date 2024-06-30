"use client";

import { ChangeEvent, useState } from "react";
interface Props {
  placeholder: string;
  setFilter: (content: string) => void;
  filter: string;
}

export default function SearchBar(props: Props) {
  const [filter, setFilter] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };
  return (
    <div className="searchbar">
      <img src="./icon-search.svg" alt="nav icon" className="search" />

      <input
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") props.setFilter(filter);
        }}
        type="text"
        name="search-bar"
        placeholder={props.placeholder}
        value={filter}
      />
    </div>
  );
}
