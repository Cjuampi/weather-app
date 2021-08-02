import React from 'react';
import {Switch, Route} from 'react-router-dom';
import WeatherM from '../../pages/WeatherMain/WeatherMain';

const Main = ()=>{
    return(
        <section>
            <Switch>
                <Route path='/' component={WeatherM} exact/>
            </Switch>
        </section>
    );
}

export default Main;