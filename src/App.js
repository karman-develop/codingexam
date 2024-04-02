import { useState, useEffect } from "react";
import { getPref } from "./script/getPref";
import { getPerson } from "./script/getPerson";
import { Title } from "./components/Title";
import { List } from "./components/List";
import { Tab } from "./components/Tab";
import { Chart } from "./components/Chart";

function App() {
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);
  const [name, setName] = useState("北海道");
  const [code, setCode] = useState(1);

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
    setName(item.prefName);
    setCode(item.prefCode);
  };

  const handleFilter = async (text) => {
    const result = await getPerson(code);
    if (text === "総人口") {
      setData(result.result.data[0].data);
    } else if (text === "年少人口") {
      setData(result.result.data[1].data);
    } else if (text === "生産年齢人口") {
      setData(result.result.data[2].data);
    } else if (text === "老年人口") {
      setData(result.result.data[3].data);
    }
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
              name={name}
              onChange={handleChange}
            />
          ))}
        </div>

        <Tab handleFilter={handleFilter} />

        <Chart data={data} />
      </div>
    </>
  );
}

export default App;
