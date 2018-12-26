import React from 'react';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

import { teamData } from '../../api/teamData.js';

import './styles.css';

const MenuHeader = ( {name} ) => {
  return (
    <React.Fragment>
      <div className="header-adv d-flex flex-column flex-md-row justify-content-around">
        <nav className="navbar navbar-expand-md navbar-dark w-100">
          <div className="navbar-brand ml-3 d-md-none" >
            <img src={teamData.logo} width="50" height="50" style={{opacity: "0.7"}} alt="zdvyzh" onClick={()=> { this.props.history.push('/team_site_standart_1') }} />
          </div>
          <h1 className="text-center d-md-none">{name}</h1>
          <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="container px-0">
              <ul className="navbar-nav mr-auto align-items-start ml-3 mr-3">
                <li className="nav-item">
                  <NavLink to="/team_site_standart_1" className="nav-link">Главная</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/about/" className="nav-link dropdown-toggle text-left"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">О Команде</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/about/contacts" className="dropdown-item">Контакты</NavLink>
                    <NavLink to="/about/history" className="dropdown-item">История</NavLink>
                    <NavLink to="/about/achievements" className="dropdown-item">Достижения</NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/squad" className="nav-link dropdown-toggle text-left"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Состав</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/squad" className="dropdown-item">Здвиж</NavLink>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/calendar/" className="nav-link dropdown-toggle text-left"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Календарь</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/calendar/future" className="dropdown-item">Предстоящие события</NavLink>
                    <NavLink to="/calendar/past" className="dropdown-item">Прошедшие события</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to="/news" className="nav-link">Новости</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/media/" className="nav-link dropdown-toggle text-left"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Медиа</NavLink>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink to="/media/photo" className="dropdown-item">Фото</NavLink>
                    <NavLink to="/media/video" className="dropdown-item">Видео</NavLink>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default withRouter(MenuHeader);