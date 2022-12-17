import React from "react";
import { SubImgStyled, SubContainerStyled } from "./Sub.styled";
import { Link, useLocation, useParams } from "react-router-dom";
import { DashboardMiddlePartStyled } from "../../pages/User/UserStyled";
import { UserStyled } from "../../pages/User/UserStyled";
import { IUser } from "../../store/userSlice";

interface SubProps {
  userInfo: IUser;
}

export const Sub: React.FC<SubProps> = (props) => {
  const params = useParams();
  const location = useLocation();

  return (
    <DashboardMiddlePartStyled>
      <UserStyled>
        {location.pathname == `/user/${params.id}/subscriptions` ? (
          <h3>Subscriptions</h3>
        ) : (
          <h3>Subscribers</h3>
        )}

        <SubContainerStyled>
          {location.pathname == `/user/${params.id}/subscriptions`
            ? props.userInfo.subscriptions.map((user) => (
                <SubImgStyled>
                  <Link to={`/user/${user.id}`}>
                    <img src={user.avatar} />
                  </Link>
                </SubImgStyled>
              ))
            : props.userInfo.subscribers.map((user) => (
                <SubImgStyled>
                  <Link to={`/user/${user.id}`}>
                    <img src={user.avatar} />
                  </Link>
                </SubImgStyled>
              ))}
        </SubContainerStyled>
      </UserStyled>
    </DashboardMiddlePartStyled>
  );
};
