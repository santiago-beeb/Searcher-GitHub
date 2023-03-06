import React from "react";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { Searcher } from "./components/Searcher";
import { UserCard } from "./components/UserCard";

import { getGitHubUser } from "./service/users";

const App = () => {
  const [inputUser, setInputUser] = useState("octocat");
  const [userState, setUserState] = useState("inputUser");
  const [notFound, setNotFound] = useState(false);

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);

    if (userState === "octocat") {
      localStorage.setItem("octocat", userResponse);
    }

    if (userResponse.message === "Not Found") {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
  };

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

    return(
      <Container sx={{
        background: '#dee4e7',
        width: {xs:"90vw", md: "80vw"},
        height: {xs:"100%", md: "80vh", lg:"500px"},
        borderRadius: '16px',
        marginTop: {xs:"15px", md: "30px", lg:"40px"},
        marginBottom: "15px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: {xs:"1rem", sm: "3rem", lg:"0"}
      }}>
        <Searcher setInputUser={setInputUser} />
        <UserCard userState={userState} />
      </Container>
    )
};

export default App;
