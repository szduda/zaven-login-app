import React from "react";
import { Button, Navbar } from 'reactstrap';
import { useCookies } from 'react-cookie'

const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const signOut = () => {
    removeCookie('token')
    document.location.reload()
  }

  return (
    <Navbar color="dark" className="w-100 justify-content-end">
      <Button onClick={signOut}>Sign out</Button>
    </Navbar>
  );
};

export default Dashboard;
