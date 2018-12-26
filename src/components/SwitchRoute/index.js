import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {MainPage} from '../../pages/MainPage';
import {AboutContacts} from '../../pages/AboutContacts';
import {AboutHistory} from '../../pages/AboutHistory';
import {AboutAchievements} from '../../pages/AboutAchievements';
import Squad from '../../pages/Squad';
import {CalendarFuture} from '../../pages/CalendarFuture';
import {CalendarPast} from '../../pages/CalendarPast';
import {NewsPage} from '../../pages/NewsPage';
import {MediaPhoto} from '../../pages/MediaPhoto';
import {MediaVideo} from '../../pages/MediaVideo';
import PublicationPage from '../../pages/PublicationPage';

export const SwitchRoute = () => {
  return (
    <React.Fragment>
      <Switch>
          <Route exact path='/team_site_standart_1' component={MainPage}/>
          <Route exact path='/about/contacts' component={AboutContacts}/>
          <Route exact path='/about/history' component={AboutHistory}/>
          <Route exact path='/about/achievements' component={AboutAchievements}/>
          <Route exact path='/squad' component={Squad}/>
          <Route exact path='/calendar/future' component={CalendarFuture}/>
          <Route exact path='/calendar/past' component={CalendarPast}/>
          <Route exact path='/news' component={NewsPage}/>

          <Route exact path='/media/photo' component={MediaPhoto}/>
          <Route exact path='/media/video' component={MediaVideo}/>
          <Route exact path='/news/:id' component={PublicationPage} />
      </Switch>
    </React.Fragment>
  )
}