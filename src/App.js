import Navbar from "./components/Navbar";
import Spinner from "./components/spinner";
import { filterList, urlApi } from "./data";
import Filter from "./components/Filter";
import { useState, useEffect } from 'react';
import Cards from "./components/Cards";
import { toast } from 'react-toastify'
function App() {
  const [courses, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterList[0].title);
  // const [error,setError] = useState(null);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(urlApi);
      const data = await res.json();
      setCourse(data.data);
    } catch (err) {
      toast.error('Internal Error Please Wait...');
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="App">
      <div> <Navbar /></div>
      <div><Filter filterList={filterList} category={category} setCategory={setCategory} /></div>
      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
        }
      </div>
    </div>
  );
}

export default App;

