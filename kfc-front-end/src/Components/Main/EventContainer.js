import React from 'react'

class EventContainer extends React.Component {
    renderEvents = () => {
        return this.props.eventsfromBACKEND.eventsfromBACKEND.map((content) => {
        return (<li key={content} text-align="left">{content}</li>)
        }
        )
    }
    render() {

        return (
            <div>
            <div className="uk-child-width-1@s uk-text-left" uk-grid='true'>
                <dl className="uk-description-list uk-description-list-divider">
                <div className="uk-background-default uk-padding uk-panel">
                <span className="uk-label uk-label-success"> Events </span>


                    
                    <ul>{this.renderEvents()}</ul>

                    
                    </div>
                </dl>
                </div>
            </div>
        )
    }


}

export default EventContainer