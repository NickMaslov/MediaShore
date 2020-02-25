import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { AuthPage } from "./components/AuthPage/AuthPage";
import { HomePage } from "./components/HomePage/HomePage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { UsersPage } from "./components/UsersPage/UsersPage";
import { EditProfilePage } from "./components/EditProfilePage/EditProfilePage";

import { NewMedia } from "./components/media/NewMedia";
import { PlayMedia } from "./components/media/PlayMedia";
import { EditMedia } from "./components/media/EditMedia";

export const useRoutes = isAuthentificated => {
  if (isAuthentificated) {
    return (
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/users" exact>
          <UsersPage />
        </Route>
        <Route path="/profile" exact>
          <ProfilePage />
        </Route>
        <Route path="/profile/edit" exact>
          <EditProfilePage />
        </Route>
        //private
        <Route path="/media/new" exact component={NewMedia} />
        <Route path="/media/edit/:mediaId" exact component={EditMedia} />
        //public
        <Route
          path="/media/:mediaId"
          render={props => <PlayMedia {...props} data={this.data} />}
        />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/login" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
