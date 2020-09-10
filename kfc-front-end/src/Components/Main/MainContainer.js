import React from 'react'
import CommentForm from './CommentForm'
import CommentsComponent from './CommentsComponent'
import EventContainer from './EventContainer'


class MainContainer extends React.Component {
    
    render() {
        return (
        <>
            <section>
                
                    <CommentsComponent />
                    <EventContainer eventsfromBACKEND={this.props}/>
                    <CommentForm />
            </section>
        </>
    )
    }
}

export default MainContainer