import React from "react";
import "./alumni.css";
import { CommiteeTable } from "./CommiteeTable";
import { MEETSandACTIVITIES } from "./Almuni meets/MEETSandACTIVITIES";

export const AlumniDisplayAlgo = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
          <div id="Ass">
            {index == 0 && (
              <>
                <p className="content">{item.line0}</p>
                <p className="title">{item.title}</p>
                <p className="content">{item.content.line1}</p>
                <p className="content">{item.content.line2}</p>
                <p className="content">{item.content.line3}</p>
                <p className="content">{item.content.line4}</p>
                <p className="content">{item.content.line5}</p>
              </>
            )}
          </div>
          <div className="comm">
            {index == 1 && (
              <>
                <p className="title">{item.title}</p>
                <p className="content">{item.content.line1}</p>
                <CommiteeTable />
              </>
            )}
          </div>
          <div className="resp">
            {index == 2 && (
              <>
                <p className="title">{item.title}</p>
                <ul>
                  <li className="content">{item.content.line1}</li>
                  <li className="content">{item.content.line2}</li>
                  <li className="content">{item.content.line3}</li>
                  <li className="content">{item.content.line4}</li>
                  <li className="content">{item.content.line5}</li>
                  <li className="content">{item.content.line6}</li>
                  <li className="content">{item.content.line7}</li>
                </ul>
              </>
            )}
          </div>

          <div className="func">
            {index == 3 && (
              <>
                <p className="title">{item.title}</p>
                <p className="content">{item.content.line}</p>
                <p className="content">{item.content.line1}</p>
                <p className="content">{item.content.line2}</p>
                <ul>
                  <li className="content">{item.content.li1}</li>
                  <li className="content">{item.content.li2}</li>
                  <li className="content">{item.content.li3}</li>
                  <li className="content">{item.content.li4}</li>
                  <li className="content">{item.content.li5}</li>
                  <li className="content">{item.content.li6}</li>
                  <li className="content">{item.content.li7}</li>
                  <li className="content">{item.content.li8}</li>
                  <li className="content">{item.content.li9}</li>
                </ul>
              </>
            )}
          </div>
          <div className="meets">
            {index == 4 && (
              <>
                <p className="title">{item.title}</p>
                <MEETSandACTIVITIES />
              </>
            )}
          </div>
          <div className="mem">
            {index == 5 && (
              <>
                <p className="title">{item.title}</p>
                <p className="content">{item.content}</p>
                <p>
                  <a href={item.linkto.link1}>
                    ALUMNI DETAILS OF 2009-2013 BATCH
                  </a>
                </p>
                <p>
                  <a href={item.linkto.link2}>
                    ALUMNI DETAILS OF 20010-2014 BATCH
                  </a>
                </p>
                <p>
                  <a href={item.linkto.link3}>
                    ALUMNI DETAILS OF 20011-2015 BATCH
                  </a>
                </p>
                <p className="title">{item.title2}</p>
                <div className="pict">
                <img src={item.img1} alt="img1" />
                <img src={item.img2} alt="img2" />
                </div>
                <p className="content">{item.lastline}</p>
              </>
            )}
          </div>
        </>
      ))}
    </>
  );
};
