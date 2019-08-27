import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

class MovieFunctions extends React.Component {
    render() {
        const { title, poster_image, functions } = this.props.movie;
        
        return (
            <div className="ui card fluid">
                <div className="content">
                    <img className="ui image left floated tiny" src={poster_image} />
                    <div className="header">{title.translated!='undefined'?title.translated.title_name:title.original_name}</div>
                    <div className="meta">{title.original_name}</div>
                    <div className="ui divider" />
                    <div className="content">
                        {functions.map(_function => {
                            let [ hour, minute ] = _function.function_only_time.split(':');
                            return <Button key={_function.id} size='mini' content={hour+':'+minute} onClick={e => {
                                this.props.history.push(`/function/${_function.id}`) 
                            }}></Button>;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MovieFunctions);