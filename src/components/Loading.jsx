export const Loading = () => {
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
