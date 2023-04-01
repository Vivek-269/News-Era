import React from "react";

function NewsItem(props) {
  let { title, discription, imgUrl, newsUrl, author, date, source } = props;
  return (
    <div style={{ height: "100%", padding: '10px' }}>
      <div className="card" style={{ height: "100%" }}>
        <span className="position-absolute end-0 translate-middle-y badge rounded-pill bg-danger">{source}</span>
        <img src={!imgUrl ? "https://images.unsplash.com/photo-1557992260-ec58e38d363c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" : imgUrl} className="card-img-top" alt="img" style={{ height: "10rem" }}/>
        <div className="card-body" style={{ paddingTop: "5px", paddingBottom: "0px", display: 'flex', flexDirection:'column'}} >
          <div style={{ height: "25%" }}>
            <h5 className="card-title">{title}</h5>
          </div>
          <div style={{ height: "35%", paddingTop: "5px" }}>
            <p className="card-text">{discription}</p>
          </div>
          <div>
            <p style={{ paddingTop: "10px", marginBottom: "0px" }}>
              <small className="text-muted">
                By {!author ? "Unknown" : author}
              </small>
            </p>
            <span className="card-text">
              <small className="text-muted">
                {new Date(date).toGMTString()}
              </small>
            </span>
            <div style={{ padding:'0.6rem 0rem' }}><a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark"> Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewsItem;
