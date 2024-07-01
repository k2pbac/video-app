"use client";

import useMediaStore from "@/state";
import { ChangeEvent, useState } from "react";
import { navigate } from "@/actions";
interface Props {
  placeholder: string;
}

export default function SearchBar(props: Props) {
  const { setFilter, filter } = useMediaStore((state) => state);
  const [showInput, setShowInput] = useState(false);
  const [inputFilter, setInputfilter] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputfilter(e.target.value);
  };

  const handleSearchSubmit = () => {
    setFilter(inputFilter, "");
    navigate();
  };

  return (
    <div className="searchbar">
      <img src="./icon-search.svg" alt="nav icon" className="search" />

      <input
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearchSubmit();
        }}
        onFocus={() => setShowInput(true)}
        onBlur={() => setShowInput(false)}
        type="text"
        name="search-bar"
        placeholder={props.placeholder}
        value={inputFilter}
        autoComplete="off"
      />
      {showInput ? (
        <img src="./line.svg" alt="underline" className="line" />
      ) : null}
    </div>
  );
}
