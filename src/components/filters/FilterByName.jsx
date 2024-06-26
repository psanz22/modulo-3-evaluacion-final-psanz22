function FilterByName({ onChangeName, filterName }) {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };
  return (
    <form>
      <label htmlFor="name">Por nombre</label>
      <input
        id="name"
        type="text"
        value={filterName}
        onChange={handleChangeName}
        onKeyDown={handleKeyDown}
      />
    </form>
  );
}

export default FilterByName;
