import React from "react";
import { Link } from "react-router-dom";
import { Alumni } from "./ALUMNI/alumni";
import "./OnClickDisplayStyle.css";
import { NBATable } from "./NBA table/nbaTable";

import NIRFrank from "./NIRF/NIRFRanking";

const Display = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <div className="card">
          <div id="arria">
            {index == 0 && (
              <>
                <p className="title">{item.title}</p>
                <p className="content">{item.content.line1}</p>
                <p className="content">{item.content.line2}</p>
                <p className="content">{item.content.line3}</p>
                <p className="content">{item.content.line4}</p>
              </>
            )}
          </div>

          {index == 1 && (
            <>
              <div id="aishecontent">
                <p className="title">{item.title}</p>
                <a href={item.linkto.link}>
                  <p id="link">{item.linkto.name}</p>
                </a>
                <img src={item.image} id="aishe"></img>
              </div>
            </>
          )}

          <div id="iqac">
            {index == 2 && (
              <>
                <p className="title">{item.title}</p>
                <ul>
                  <li>
                    <h5>{item.content.subtitle}</h5>
                    <p className="content">{item.content.Content}</p>
                  </li>
                  <li>
                    <h5>{item.content.subtitle1}</h5>
                    <p className="content">{item.content.Content1}</p>
                  </li>
                  <li>
                    <h5>{item.content.subtitle2}</h5>
                    <p className="content">{item.content.Content2}</p>
                  </li>
                  <li>
                    <h5>{item.content.subtitle3}</h5>
                    <p className="content">{item.content.Content3}</p>
                  </li>
                </ul>
                <div id="iqacButtons">
                  <button className="iqacButtons">{item.buttons.b1}</button>
                  <button className="iqacButtons">{item.buttons.b2}</button>
                  <button className="iqacButtons">{item.buttons.b3}</button>
                  <button className="iqacButtons">{item.buttons.b4}</button>
                  <button className="iqacButtons">{item.buttons.b5}</button>
                  <button className="iqacButtons">{item.buttons.b6}</button>
                </div>
              </>
            )}
          </div>

          <div id="nirf">
            {index == 3 && (
              <>
                <p className="title">{item.title}</p>
                <NIRFrank />
              </>
            )}
          </div>

          <div id="naac">
            {index == 4 && (
              <>
                <p className="title">{item.title}</p>
                <p className="content">{item.content.line1}</p>
                <p className="content">{item.content.line2}</p>
                <p className="title">{item.title2}</p>
                <div id="naacimages">
                  <img className="naacimg" src={item.img1} />
                  <img className="naacimg" src={item.img2} />
                </div>
              </>
            )}
          </div>

          <div id="nba">
            {index == 5 && (
              <>
                <p className="title">{item.title1}</p>
                <p className="content">{item.content.line1}</p>
                <p className="content">{item.content.line2}</p>
                <NBATable />
                <p className="title">{item.title2}</p>
                <div id="nbaimages">
                  <img className="nbaimg" src={item.img1} />
                  <img className="nbaimg" src={item.img2} />
                </div>
                <p className="title">{item.title3}</p>
                <div id="nbaimages">
                  <img className="nbaimg" src={item.img3} />
                  <img className="nbaimg" src={item.img4} />
                </div>
              </>
            )}
          </div>

          <div id="ugc">
            {index == 6 && (
              <>
                <p className="title">{item.title1}</p>
                <p className="content">{item.content.line1}:</p>
                <p className="content">{item.content.line2}</p>
                <a href={item.linkto.link}>
                  <p id="link">{item.linkto.name}</p>
                </a>
              </>
            )}
          </div>
          <div id="alumni">
            {index == 7 && (
              <>
                <p className="title">{item.title1}</p>
                <img className="AlumniImage" src={item.img} />

                <Alumni />
              </>
            )}
          </div>
          <div id="login">
            {index == 8 && (
              <>
                <Link to="/StudentLogin">
                  <button className="login">{item.buttons.student}</button>
                </Link>

                <Link to="/FacultyLogin">
                  <button className="login">{item.buttons.Faculty}</button>
                </Link>

                <Link to="/MailLogin">
                  <button className="login">{item.buttons.Email}</button>
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Display;
