import React from 'react'

const ProjectDetail = (props) => {
        const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">project Title {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint veniam deserunt architecto quos ipsam. Nulla laborum, quis enim quia architecto iure a similique voluptatem, hic temporibus sunt? Exercitationem, qui adipisci?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By The Net Ninja</div>
                    <div>@nd date</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail

