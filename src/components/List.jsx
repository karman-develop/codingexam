export const List = ({ item, index, val, onChange }) => {
  const handleChange = () => {
    onChange(item);
  };

  return (
    <>
      <div>
        <label key={index} className="p-1">
          <input
            className="me-2"
            type="radio"
            name="pref"
            checked={item.prefName === val}
            onChange={handleChange}
          />
          {item.prefName}
        </label>
      </div>
    </>
  );
};
