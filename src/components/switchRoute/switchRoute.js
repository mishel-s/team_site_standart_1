import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import { generatePath } from "react-router";

import MainPage from '../../pages/mainPage/mainPage.js';
import AboutContacts from '../../pages/aboutContacts/aboutContacts.js';
import AboutHistory from '../../pages/aboutHistory/aboutHistory.js';
import AboutAchievements from '../../pages/aboutAchievements/aboutAchievements.js';
import AboutRegistration from '../../pages/aboutRegistration/aboutRegistration.js';
import Squad from '../../pages/squad/squad.js';
import CalendarFuture from '../../pages/calendarFuture/calendarFuture.js';
import CalendarPast from '../../pages/calendarPast/calendarPast.js';
import NewsPage from '../../pages/newsPage/newsPage.js';
import MediaPhoto from '../../pages/mediaPhoto/mediaPhoto.js';
import MediaVideo from '../../pages/mediaVideo/mediaVideo.js';
import PublicationPage from '../../pages/publicationPage/publicationPage.js';


class SwitchRoute extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
            <Route exact path='/team_site_standart_1' component={MainPage}/>
            <Route exact path='/about/contacts' component={AboutContacts}/>
            <Route exact path='/about/history' component={AboutHistory}/>
            <Route exact path='/about/achievements' component={AboutAchievements}/>
            <Route exact path='/about/registration' component={AboutRegistration}/>
            <Route exact path='/squad' component={Squad}/>
            <Route exact path='/calendar/future' component={CalendarFuture}/>
            <Route exact path='/calendar/past' component={CalendarPast}/>
            <Route exact path='/news' component={NewsPage}/>

            <Route exact path='/media/photo' component={MediaPhoto}/>
            <Route exact path='/media/video' component={MediaVideo}/>
            <Route exact path='/news/:id' component={PublicationPage} />
            
            {/* 
            {
              publications.length
              ? (publications.map((publication)=> (
                  <Route exact path={'/news/' + publication.id} component={PublicationPage} key={publication.id} />
                )))
              : true
            }

            generatePath("/user/:id/:entity(posts|comments)", { id: 1, entity: "posts" })
            <Route path='/news/:id' component={PublicationPage}/>
            */}
        </Switch>
      </React.Fragment>
    )
  }
}

export default SwitchRoute;