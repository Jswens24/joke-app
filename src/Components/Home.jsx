import React, { Fragment } from 'react';
import GetJokeButton from './GetJokeButton';

const Home = () => {
    return (
        <Fragment>
            <h1>Home</h1>
            <div>
                <GetJokeButton />
            </div>
        </Fragment>
    )
}

export default Home;