import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";

const Terminal = () => {

  const theme = useSelector((state) => state.themeReducer?.theme);

  const { data } = useSession();

  const isLoggedIn = React.useMemo(() => Boolean(data && data.user), [data]);

  const terminalCommands = React.useMemo(() => {
    return {
      whoami: {
        help: <span className="text-white">Tells you who you are</span>,
        action: isLoggedIn ? (
          `${data.user.name} <${data.user.email}>`
        ) : (
          <div>
            <p className="text-white">You need to be signed in to use this command!</p>
            <span style={{ color: "#38CC77" }}>Just type `sign-in`</span>
          </div>
        ),
      },

      "sign-in": {
        help: <span className="text-white">Redirects you to the login page</span>,
        action: signIn,
      },

      "sign-out": {
        help: <span className="text-white">Sign out the current user</span>,
        action: signOut,
      },

      "get-location": {
        help: <span className="text-white">Gets your current location</span>,
        action: async () =>
          new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(
              (pos) =>
                resolve(
                  `Your current position is ${pos.coords.latitude}, ${pos.coords.longitude}`
                ),
              (error) => resolve(`Error: ${error.message}`)
            )
          ),
      },
    };
  }, [data?.user?.email, data?.user?.name, isLoggedIn]);

  return (
    <TerminalContextProvider>
      <ReactTerminal
        prompt={
          data && data.user ? `$ ${data.user.name} >> ` : "$ piyushgarg-dev >> "
        }
        welcomeMessage={
          <div>
            <p style={{color : "#fff"}}>
              Welcome to my website! Get started by typing `help` command below
            </p>
            {/* <p>
              <span style={{ color: "#38CC77" }}>Pro Tip:</span> Hack this
              terminal and you{"'"}ll get FREE access to my courses :)
            </p> */}
          </div>
        }
        themes={{
          darkDefault: {
            themeBGColor: "",
            themeToolbarColor: theme === "light" ? "#0e1630" : "",
            themeColor: "#38CC77",
            // themePromptColor: "#fff",
          },
        }}
        theme="darkDefault"
        commands={{
          ...Object.keys(terminalCommands).reduce(
            (b, key) => ({ ...b, [key]: terminalCommands[key].action }),
            {}
          ),
          help: (
            <div style={{ marginTop: "5px" }}>
              <p style={{color : "#fff"}}>Available Commands:</p>
              {Object.keys(terminalCommands).map((key) => (
                <p key={key}>
                  <span style={{ color: "#38CC77" }}>{key}:</span>{" "}
                  {terminalCommands[key].help}
                </p>
              ))}
              <p>
                <span style={{ color: "#38CC77" }}>clear:</span> <span className="text-white"> clears out
                everything on screen!</span>
              </p>
            </div>
          ),
        }}
      />
    </TerminalContextProvider>
  );
};

export default Terminal;
