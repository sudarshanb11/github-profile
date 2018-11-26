import React from 'react';
import Octicon, {IssueOpened, IssueClosed} from '@githubprimer/octicons-react'
import Moment from 'react-moment';
const IssueTabContent = ({login, issues}) => {
    return issues.filter(l => l.state === "OPEN").map(t => {
        const {title, number, closed, updatedAt} = t
        return (
            <div className='list-item'>
                <div className='status'>{ closed ? <Octicon icon={IssueClosed} className='state-close' /> : <Octicon icon={IssueOpened} className='state-open' />}</div>
                <div className='content'>
                    <div className='main'> {title}</div>
                    <div className='sub'>#{number} { closed ? "closed" : "opened" } <Moment fromNow>{updatedAt}</Moment> by {login}</div>
                </div>
            </div>
        )
    })
}

export default IssueTabContent