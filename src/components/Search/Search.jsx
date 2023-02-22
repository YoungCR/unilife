import React from 'react';
import './Search.css';

function Search() {
  return (
    <form>
      <fieldset>
        <select id="city" name="city">
          <option value="leeds">Leeds</option>
          <option value="Newcastle">Newcastle</option>
          <option value="Sheffield">Sheffield</option>
          <option value="Southhampton">Southhampton</option>
        </select>
        <select id="beds" name="beds">
          <option value="1">1 bed</option>
          <option value="2">2 beds</option>
          <option value="3">3 beds</option>
          <option value="4">4 beds</option>
        </select>
      </fieldset>
      <a href="" className="button">
        Find Homes
      </a>
    </form>
  );
}

export default Search;
