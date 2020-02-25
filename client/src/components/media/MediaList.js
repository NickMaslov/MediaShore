import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

export const MediaList = ({ media }) => {
  return (
    <div className="section section-popular scrollspy">
      <div className="container">
        <div className="row">
          {media.map((tile, i) => (
            <div className="col s12 m4">
              {/* <div className="card">
                <div className="card-image">
                  <Link to={"/media/" + tile._id}>
                    <ReactPlayer
                      url={
                        "http://mediastream.mernbook.com/api/media/video/5b07061a4f3f5b001486b8ad"
                      }
                      width="100%"
                      height="inherit"
                      style={{ maxHeight: "100%" }}
                    />
                    <span className="card-title card-title-custom">
                      Endeavour Final Lift-off
                    </span>
                  </Link>
                </div>
              </div> */}

              {/* <div class="col m6"> */}
              <div class="card">
                <div class="card-image">
                  {/* <img src="img/gallery/gaming1.jpg" alt="" /> */}
                  <ReactPlayer
                    url={
                      "http://mediastream.mernbook.com/api/media/video/5b07061a4f3f5b001486b8ad"
                    }
                    width="100%"
                    height="inherit"
                    style={{ maxHeight: "100%" }}
                  />
                  <span class="card-title flow-text ">
                    Endeavour Final Lift-off
                  </span>
                  <a
                    href="#gaming1"
                    class="btn-floating halfway-fab waves-effect waves-light purple  modal-trigger"
                  >
                    <i class="material-icons">pageview</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star</i>
                    <i class="material-icons">star_half</i>
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
