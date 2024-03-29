import { useState, useEffect } from "react";
import { getPref } from "./script/getPref";
import { getPerson } from "./script/getPerson";
import { Title } from "./components/Title";
import { List } from "./components/List";
import { Chart } from "./components/Chart";

function App() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [val, setVal] = useState("北海道");

  useEffect(() => {
    const obj = async () => {
      const result = await getPref();
      setItems(result.result);
    };
    obj();
  }, []);

  useEffect(() => {
    const obj = async () => {
      const result = await getPerson(1);
      setData(result.result.data[0].data);
    };
    obj();
  }, []);

  const handleChange = async (item) => {
    const result = await getPerson(item.prefCode);
    setData(result.result.data[0].data);
    setVal(item.prefName);
  };

  return (
    <>
      <div className="container">
        <Title />

        <div className="row row-cols-6 mb-2">
          {items.map((item, index) => (
            <List
              key={index}
              item={item}
              index={index}
              val={val}
              onChange={handleChange}
            />
          ))}
        </div>

        <Chart data={data} />
      </div>
    </>
  );
}

export default App;
