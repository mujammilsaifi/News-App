import React from 'react';

// export class NewsItem extends Component {
const NewsItem=(props)=>{

    // render() {
        // let {title,description,imageUrl,newsUrl,author,date,source}=this.props
        let {title,description,imageUrl,newsUrl,author,date,source}=props
        return (
            <div>
                <div className="card my-2" >
                <h5 className="card-title"><span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '85%', zIndex: '1'}}> {source} </span></h5>
                    <img src={imageUrl} className="card-img-top" alt="..." height={'200px'}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?'Unkown ':author} on {date}</small></p>
                        <a  rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default NewsItem;