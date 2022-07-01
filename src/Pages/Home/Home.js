import React, { useEffect, useState } from 'react';

const Home = () => {
    const [lists, setState] = useState([])
    console.log(lists);
    useEffect(() => {
        fetch("http://localhost:5000/list")
            .then(res => res.json())
            .then(data => setState(data))
    }, [])
    return (
        < div className="container mx-auto" >
            <h2 className="text-4xl font-bold text-warning text-center border-warning mb-10">LISTS</h2>
            {
                lists.map(list => <div className="border py-5 pl-5 mb-5 flex">
                    <input type="checkbox" class="default:ring-2 ..." />
                    <p className="pl-5">{list.example}</p>
                </div>)
            }
        </div >
    );
};

export default Home;