import React from 'react';


class Content extends React.Component{
  render(){
    return(

      <div className="content">


        <div className="line"></div>
        {/* Timeline item */}
        <div className="item">
          <div className="avatar">
            <img
              alt='Doug'
              src="http://www.croop.cl/UI/twitter/images/doug.jpg" />
                  Adam
          </div>
          <span className="time">

          </span>
          <p>Ate lunch</p>
          <div className="commentCount">
              3
          </div>
        </div>
        {/* ... */}
      </div>
    );
  }
}

export default Content;
