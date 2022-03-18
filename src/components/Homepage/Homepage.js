import React from 'react';
import Cardlist from '../Card/Cardlist';
import "./Homepage.css";

function Homepage({searchedValue,data,setViewDetail,setView}) {
    // creating fitered array from search value 
    const filteredData=data.filter((item) => {
        return item.name.toLowerCase().includes(searchedValue.toLowerCase())
      })
    
    return (
        <div className='homepage'>
           {data && <Cardlist filteredData={filteredData} setView={setView} setViewDetail={setViewDetail}/>}
        </div>
    );
}

export default Homepage;
