import React, { useEffect } from "react";
import { Button, Navbar, NavbarText } from 'reactstrap';
import { useCookies } from 'react-cookie'
import { useUser } from "./user.context";
import axios from "axios";

const userEndpoint = `${process.env.REACT_APP_API_BASE_URL}/user`

const Dashboard = () => {
  const [, , removeCookie] = useCookies(['token']);
  const { user, setUser } = useUser()

  useEffect(() => {
    const asyncEff = async () => {
      const response = await axios.get(userEndpoint)
      if (response.data) {
        const { firstName, lastName } = response.data
        setUser({ firstName, lastName })
      }
    }; asyncEff();
  })

  const signOut = () => {
    removeCookie('token')
    document.location.reload()
  }

  return (
    <Navbar color="dark" dark className="w-100 justify-content-between">
      <NavbarText>
        Hello {user.firstName} {user.lastName}!
      </NavbarText>
      <Button onClick={signOut}>
        Sign out
      </Button>
    </Navbar>
  );
};

export default Dashboard;
