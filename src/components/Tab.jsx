export const Tab = ({ handleFilter }) => {
  const tabName = ["総人口", "年少人口", "生産年齢人口", "老年人口"];

  const handleClick = (text) => {
    handleFilter(text);
  };

  return (
    <>
      <div className="d-flex justify-content-around">
        {tabName.map((name, index) => (
          <div
            key={index}
            onClick={() => handleClick(name)}
            className="btn btn-light fw-bold"
          >
            {name}
          </div>
        ))}
      </div>
    </>
  );
};
