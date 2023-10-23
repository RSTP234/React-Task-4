import React from "react";
import "./styles.css";

function ViewTableRow(props) {
  return (
    <tr>
      <td>{props.obj.id}</td>
      <td>
        <img src="{props.obj.image}" />
      </td>
      <td>{props.obj.firstName}</td>
      <td>{props.obj.lastName}</td>
      <td>{props.obj.gender}</td>
      <td>{props.obj.email}</td>
      <td>{props.obj.username}</td>
      <td>{props.obj.domain}</td>
      <td>{props.obj.ip}</td>
      <td>{props.obj.university}</td>
    </tr>
  );
}

export default ViewTableRow;
