import React from 'react';
import Buysell from './Buysell';
import CardAdsList from './CardAdsList';

function Home(props) {
    return (
        <div>
            <Buysell />
            <CardAdsList />
        </div>
    );
}

export default Home;