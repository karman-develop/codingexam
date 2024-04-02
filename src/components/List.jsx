export const List = ({ item, index, name, onChange }) => {
  const handleChange = () => {
    onChange(item);
  };

  return (
    <>
      <label key={index} className="p-1">
        <input
          className="me-2"
          type="radio"
          name="pref"
          checked={item.prefName === name}
          onChange={handleChange}
        />
        {item.prefName}
      </label>
    </>
  );
};
