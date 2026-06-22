import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { ReactTerminal, TerminalContextProvider } from "react-terminal";

const Terminal = ({ theme = "dark" }) => {
  const { data } = useSession();

  const isDark = theme === "dark";
  const accentColor = isDark ? "#38CC77" : "#16a34a";
  const textColor = isDark ? "#ffffff" : "#111827";

  const isLoggedIn = React.useMemo(() => Boolean(data?.user), [data]);

  const terminalCommands = React.useMemo(() => {
    return {
      whoami: {
        help: "Tells you who you are",
        action: isLoggedIn ? (
          `${data.user.name} <${data.user.email}>`
        ) : (
          <div style={{ color: textColor }}>
            <p>You need to be signed in to use this command!</p>
            <span style={{ color: accentColor }}>Just type `sign-in`</span>
          </div>
        ),
      },

      "sign-in": {
        help: "Redirects you to the login page",
        action: isLoggedIn ? (
          <div style={{ color: textColor }}>
            <p>You are already signed in.</p>
          </div>
        ) : (
          signIn
        ),
      },

      "sign-out": {
        help: "Sign out the current user",
        action: !isLoggedIn ? (
          <div style={{ color: textColor }}>
            <p>You need to be signed in to use this command!</p>
            <span style={{ color: accentColor }}>Just type `sign-in`</span>
          </div>
        ) : (
          signOut
        ),
      },

      "get-location": {
        help: "Gets your current location",
        action: async () =>
          new Promise((resolve) =>
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
  }, [accentColor, data?.user?.email, data?.user?.name, isLoggedIn, textColor]);

  return (
    <TerminalContextProvider>
      <ReactTerminal
        prompt={
          data?.user ? `$ ${data.user.name} >> ` : "$ piyushgarg-dev >> "
        }
        welcomeMessage={
          <div style={{ color: textColor }}>
            <p>
              Welcome to my website! Get started by typing `help` command below
            </p>
          </div>
        }
        themes={{
          darkDefault: {
            themeBGColor: "",
            themeToolbarColor: "",
            themeColor: "#38CC77",
            themePromptColor: "#ffffff",
          },
          lightDefault: {
            themeBGColor: "",
            themeToolbarColor: "",
            themeColor: "#111827",
            themePromptColor: "#111827",
          },
        }}
        theme={isDark ? "darkDefault" : "lightDefault"}
        commands={{
          ...Object.keys(terminalCommands).reduce(
            (commands, key) => ({
              ...commands,
              [key]: terminalCommands[key].action,
            }),
            {}
          ),

          help: (
            <div style={{ marginTop: "5px", color: textColor }}>
              <p>Available Commands:</p>

              {Object.keys(terminalCommands).map((key) => (
                <p key={key}>
                  <span style={{ color: accentColor }}>{key}:</span>{" "}
                  {terminalCommands[key].help}
                </p>
              ))}

              <p>
                <span style={{ color: accentColor }}>clear:</span> clears out
                everything on screen!
              </p>
            </div>
          ),
        }}
      />
    </TerminalContextProvider>
  );
};

export default Terminal;