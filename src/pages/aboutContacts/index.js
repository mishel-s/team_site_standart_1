import React from 'react';

import { teamData } from '../../api/teamData.js';

import './styles.css';

export const AboutContacts = () => {
  return (
    <div className="contacts col-12 d-flex flex-column px-0 pb-3">
      <div className="contacts-title col-12 d-flex justify-content-center align-items-center px-0 py-2">
        <h5>Контакты</h5>
      </div>
      <div className="contacts_info">
        <div className="contacts_name py-2">
          <h3>{ teamData.name }</h3>
        </div>
        <div className="contacts_logo">
          <img src={teamData.logo} width="150" height="150" alt={teamData.name} />
        </div>
        { teamData.country ? <div><span>Страна: </span> {teamData.country}</div> : '' }
        { teamData.city ? <div><span>Город: </span> {teamData.city}</div> : '' }
        { teamData.contact_person ? <div><span>Контактное лицо: </span> {teamData.contact_person}</div> : '' }
        { teamData.phone ? <div><span>Телефон: </span> {teamData.phone}</div> : '' }
        { teamData.email ? <div><span>Email: </span> {teamData.email}</div> : '' }
        { teamData.description ? <div><span>Описание: </span> {teamData.description}</div> : '' }
      </div>
    </div>
  )
}