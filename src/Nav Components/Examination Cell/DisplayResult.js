import React from "react";
import { Link } from "react-router-dom";

const DisplayResult = ({ data, index }) => {
  return (
    <>
      {data[index].map((item) => (
        <>
        {/* CSE */}
          {index === 0 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* ECE */}
          {index === 1 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* EEE */}
          {index === 2 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )} 
          {/* IT */}
          {index === 3 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        {" "}
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        {" "}
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        {" "}
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">III YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* civil */}
          {index === 4 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* Mech */}
          {index === 5 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* MBA */}
          {index === 6 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
          {/* M.texh */}
          {index === 7 && (
            <>
              <h4 className="heads">{item.Bname}</h4>
              <div id="resultTable" className="Navtable">
                
                <table>
                  <thead>
                    <tr>
                      <th rowSpan={2}>S.no.</th>
                      <th>Regular Results</th>
                      <th>Supply Results</th>
                      <th>Revaluation Results</th>
                    </tr>
                    <tr>
                      <th>Semester</th>
                      <th>Semester</th>
                      <th>Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">I YEAR II SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">II YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          II YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR I SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          III YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                      <td>
                        <Link to="/Results">IV YEAR I SEM</Link>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                      <td>
                        <Link to="/Results">
                          IV YEAR II SEM
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default DisplayResult;
