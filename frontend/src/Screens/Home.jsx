import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import HomeCss from "../css/Screens/Home.module.css"

const Home = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_ENDPOINT}/getAllUser`)
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))
    },[])

    return (
        <div className="largeContainer">
            <header className={HomeCss.head}>
                <Link to="/"><h1>Users Data</h1></Link>
                <Link to="/addUser"><button>Add User
                </button></Link>
            </header>
            <div className={HomeCss.container}>
            {users && users.map((user) => {return <Cards key={user._id} id={user._id} name={user.username} email={user.email} age={user.age} avatar={user.avatar}/>})}
            </div>
        </div>
    );
};

export default Home;