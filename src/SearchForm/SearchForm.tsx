import React from "react";
import Button from "../Button/Button";
import { DietOptions, EatingOptions } from "../common/types";

interface SearchFormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputQuery: string;
  dietOptions: DietOptions;
  eatingOptions: EatingOptions;
  handleDietChange: (diet: string) => void;
  handleEatingStyleChange: (style: string) => void;
}

const SearchForm = ({
  handleSubmit,
  handleSearchChange,
  inputQuery,
  dietOptions,
  eatingOptions,
  handleDietChange,
  handleEatingStyleChange,
}: SearchFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputQuery}
        onChange={handleSearchChange}
        placeholder="Search for recipes..."
      />
      <Button />
      <select onChange={(e) => handleDietChange(e.target.value)}>
        {dietOptions.map((option: string) => (
          <option key={option} value={option}>
            {option || "Select Diet"}
          </option>
        ))}
      </select>
      <select onChange={(e) => handleEatingStyleChange(e.target.value)}>
        {eatingOptions.map((option: string) => (
          <option key={option} value={option}>
            {option || "Select Food Option"}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
