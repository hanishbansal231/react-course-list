import Navbar from "./components/Navbar";
import { filterList, urlApi } from "./data";
import Filter from "./components/Filter";
import { useState, useEffect } from 'react';
import Cards from "./components/Cards";
function App() {
  const [filterData, setData] = useState(filterList);
  const [courses, setCourse] = useState([]);
  async function fetchData() {
    try {
      const res = await fetch(urlApi);
      const data = await res.json();
      setCourse(data.data);
    } catch (err) {
      console.loge(err);
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Filter filterList={filterData} />
      <Cards courses={courses} />
    </div>
  );
}

export default App;
