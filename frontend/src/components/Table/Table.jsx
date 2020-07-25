import React, { useState, useEffect } from "react";

import api from '../../services/api';

import './Table.scss';
import '../../global.scss';

export default function Table() {

  const [participants, setParticipants] = useState({});  

  useEffect(() => {
    api.get('/participant').then(
      response => {
        setParticipants(response.data);
      });
  }, []);

  console.log(participants);

  return (
    <div className="table-container">
      <table className="table">
        <tr>
          <th></th>
          <th className="text-center">First name</th>
          <th className="text-center">Last name</th>
          <th className="text-center">Participation</th>
        </tr>
        {Object.values(participants).map(participant => 
        <tr key = {participant.id}>
          <td>{participant.id}</td>
          <td>{participant.firstName}</td>
          <td>{participant.lastName}</td>
          <td className="text-center">{`${participant.participation}%`}</td>
        </tr>)}
      </table>
    </div>
  );
}
