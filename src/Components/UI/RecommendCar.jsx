import React from "react";

const RecommendCar = (props) => {
    const {carName,retweet,imgUrl,rentPrice,percentage} = props.item;
  return (
      <div className="recommend__car-card">
        <div className="recommend__car-top">
          <h5>
            <span>
              <i className="ri-refresh-line"></i>
            </span>
            {percentage}% Recommended
          </h5>
        </div>
        <div className="recommend__car-img">
          <img src={imgUrl} alt="car 1" />
        </div>
        <div className="recommend__car-bottom">
          <h4>{carName}</h4>
          <div className="recommend__car-other">
            <div>
              <p>
                <span>
                  <i className="ri-repeat-line"></i>
                </span>
                {retweet}k
              </p>
              {/* <p>
                <span>
                  <i className="ri-time-flash-line"></i>
                </span>
                130k
              </p> */}
            </div>
            <span>{rentPrice}/H</span>
          </div>
        </div>
      </div>
  );
};

export default RecommendCar;
