import React from 'react';
import ListArticlesHomePage from '../articles/view/ListArticlesHomePage';
import CardAdsList from './CardAdsList';

function Home(props) {
    return (
        <div>
            <CardAdsList />
            <ListArticlesHomePage />
        </div>
    );
}

export default Home;