import React from 'react';

class SearchMovie extends React.Component {
    render() {
        return (
            <div class="ui right aligned category search item">
                <div class="ui icon input">
                    <input class="prompt" type="text" placeholder="Search Movies..." />
                    <i class="search icon"></i>
                </div>
                <div class="results"></div>
            </div>
        );
    }
}

export default SearchMovie;