function Card() {
  let timeObj = new Date();
  let time = timeObj.toString();
  console.log(time, typeof time);
  // console.log(getMonth());


  return (
    <div className="card mx-3 my-3">
      <div className="card-header">
        {time}
      </div>
      <div className="card-body d-flex justify-content-between" >
        <div>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
            With supporting text below as a natural lead-in to additional content.
          
          </p>
          <div className="container d-flex">
            <a href="#" className="btn btn-primary mx-1">View more</a>
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Action
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Delete</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          Positive
        </div>
      </div>
    </div>
  )
}

export default Card;