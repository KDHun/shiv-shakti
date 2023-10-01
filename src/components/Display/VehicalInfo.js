import React, { useEffect, useState } from "react";
import classes from "./VehicalInfo.module.css"; // Import the separate CSS file for styling
import axios from "axios";
import { useSelector } from "react-redux";

const VehicalInfo = () => {
  const [weightData, setWeighData] = useState([]);

  const auth =
    useSelector((state) => state.auth) | localStorage.getItem("Login");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/allvehicaldata`, {
        headers: {
          authorization: `Barear ${
            auth ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        setWeighData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[auth]);

  const deleteHandler = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/vehicaldata/${id}`, {
        headers: {
          authorization: `Barear ${
            auth ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={classes["data-table"]}>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>TicketNo</th>
            <th>VehicalNo</th>
            <th>Supplier</th>
            <th>Recevier</th>
            <th>Material</th>
            <th>Challan</th>
            <th>Address</th>
            <th>Place</th>
            <th>Gross</th>
            <th>Charges</th>
            <th>Tare</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {weightData.map((entry, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{entry.ticketNo}</td>
              <td>{entry.vehicalNo}</td>
              <td>{entry.supplier}</td>
              <td>{entry.recevier}</td>
              <td>{entry.material}</td>
              <td>{entry.challan}</td>
              <td>{entry.address}</td>
              <td>{entry.place}</td>
              <td>{entry.gross}</td>
              <td>{entry.charges}</td>
              <td>{entry.tare}</td>
              <td>{entry.date}</td>
              <td>{entry.time}</td>
              <td>
                <button
                  onClick={() => {
                    deleteHandler(entry.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicalInfo;
