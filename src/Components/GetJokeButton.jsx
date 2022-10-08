import axios from 'axios';
import React, { Fragment, useState } from 'react';

const GetJokeButton = () => {
    const [setupState, setSetupState] = useState('');
    const [punchLine, setPunchLine] = useState('');
    // const [getJoke, setGetJoke] = useState(true);
    const [isPunchLine, setIsPunchLine] = useState(false)



    const setupClickHandler = () => {

        // setGetJoke(!getJoke);
        // setIsPunchLine(!isPunchLine)

        axios
            .get('https://v2.jokeapi.dev/joke/Any')
            .then((res) => {
                console.log(res.data.delivery)
                let setupJoke = res.data.setup
                let punchLineJoke = res.data.delivery
                setSetupState(setupJoke)
                setPunchLine(punchLineJoke)

                //nsfw handler
                console.log(res.data.flags.nsfw)

                if (res.data.flags.nsfw || res.data.flags.religious || res.data.flags.political || res.data.flags.racist || res.data.flags.sexist || res.data.flags.explicit) {
                    alert('WARNING: This joke contains content for users 18+')
                }


                for (let i = 0; i < res.data.flags; i++) {
                    if (res.data.flags[i].value === true) {
                        alert(`This joke contains ${res.data.flags[i]} content`)
                    }
                }
            })
            .catch(err => console.log(err))
    }

    const punchLineHandler = () => {
        setIsPunchLine(true);
    }

    const resetHandler = () => {
        setSetupState('')
        setPunchLine('')
        setIsPunchLine(false)
    }


    return (
        <Fragment>
            <button onClick={setupClickHandler}>Get Joke</button>
            <div>
                {setupState} <br />
                <button onClick={punchLineHandler}>Punch Line</button> <br />
                {isPunchLine ? punchLine : ''}
            </div>
            <button onClick={resetHandler}>Rest</button>
        </Fragment>
    )
}

export default GetJokeButton;