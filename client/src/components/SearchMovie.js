import React from 'react';

class SearchMovie extends React.Component {
    render() {
        return (
            <div className="ui right aligned category search item">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search Movies..." />
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </div>
        );
    }
}

export default SearchMovie;