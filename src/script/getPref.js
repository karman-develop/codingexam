export const getPref = async () => {
  const response = await fetch(
    "https://opendata.resas-portal.go.jp/api/v1/prefectures",
    {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
      },
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
