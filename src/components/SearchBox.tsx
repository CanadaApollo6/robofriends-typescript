import React, { ChangeEvent } from "react";

export interface SearchBoxProps {
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ onSearchChange }: SearchBoxProps) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search Robots..."
        className="pa3 ba b--green bg-lightest-blue"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
