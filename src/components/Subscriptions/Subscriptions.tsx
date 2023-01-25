import React from "react";
import {
  DashboardMiddlePartStyled,
  UserStyled,
} from "../../pages/User/User.styled";
import { SubContainerStyled, SubImgStyled } from "./Subscriptions.styled";
import { Link, useLocation } from "react-router-dom";
import { IUser } from "../../types/general.types";
import { SubProps } from "./Subscriptions.types";

export const Subscriptions: React.FC<SubProps> = (props) => {
  const location = useLocation();
  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        {location.pathname == `/user/${props.params.id}/subscriptions` ? (
          <h3>Subscriptions</h3>
        ) : (
          <h3>Subscribers</h3>
        )}

        <SubContainerStyled>
          {location.pathname == `/user/${props.params.id}/subscriptions`
            ? props.userInfo.subscriptions.map((user: IUser) => (
                <SubImgStyled>
                  <Link to={`/user/${user.id}`}>
                    <img src={user.avatar} alt={""} />
                  </Link>
                </SubImgStyled>
              ))
            : props.userInfo.subscribers.map((user: IUser) => (
                <SubImgStyled>
                  <Link to={`/user/${user.id}`}>
                    <img src={user.avatar} alt={""} />
                  </Link>
                </SubImgStyled>
              ))}
        </SubContainerStyled>
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
