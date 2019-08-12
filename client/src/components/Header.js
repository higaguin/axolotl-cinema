import React from 'react';
import SearchMovie from './SearchMovie';

const Header = () => {
    return (<div class="ui purple inverted large top attached menu">
                <div class="ui container">
                    <img src={require('../resources/logo.png')} />
                    <div class="right menu">
                        <SearchMovie></SearchMovie>
                    </div>
                </div>
            </div>);
};

export default Header;