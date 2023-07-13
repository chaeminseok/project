import React, { useMemo, useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";
const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logoutAction());
  });
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          짹짹
          <br />0
        </div>,
        <div key="twit">
          짹짹
          <br />0
        </div>,
      ]}
    >
      <Card.Meta title="Chaeminseok" avatar={<Avatar>Chae</Avatar>} />
      <Button onClick={onLogout} style={{ marginTop: 10 }}>
        로그아웃
      </Button>
    </Card>
  );
};
export default UserProfile;
