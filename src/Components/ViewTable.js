import React, { useEffect, useState } from "react";
import ViewTableRow from "./ViewTableRow";
import axios from "axios";
import "./styles.css";

function ViewTable() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function TableData() {
    let i;
    if (users.length != 0) {
      // for (i = 0; i < users.users.length; i++) {
      //   return <ViewTableRow obj={users.users[i]} key={i} />;
      // }
      return users.users.map((res, i) => {
        console.log(res);
        console.log(i);
        return <ViewTableRow obj={res} key={i} />;
      });
    }
  }

  return (
    <div>
      <h1>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>SNo</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>{TableData()}</tbody>
      </table>
    </div>
  );
}

export default ViewTable;
