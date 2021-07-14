import React, { useState, useContext, useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Col, Row } from "react-bootstrap"
import ServerServiceContext from "../../contexts/ServerServiceContext"
import FullSpinner from "../spinners/FullSpinner"
import UserAvatar from "./UserAvatar"
import UserInfo from "./UserInfo"

const UserContent = () => {
    const ServerService = useContext(ServerServiceContext);
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState("");

    const fetchUser = useCallback(async () => {
        setIsLoading(true);
        const { hasError, data } = await ServerService.getUser();
        if (hasError) {
          console.log("Ошибка с сервером", hasError);
        } else {
          setUser(data);
        }
        setIsLoading(false);
      }, [ServerService]);

      console.log(user)

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

    return (
        <div>
        <UserAvatar user={user}/>
        <UserInfo user={user} setUser={setUser}/>
        </div>
    )
}
export default UserContent