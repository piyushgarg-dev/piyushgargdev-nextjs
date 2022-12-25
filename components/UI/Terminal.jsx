import { ReactTerminal, TerminalContextProvider } from "react-terminal";

const commands = {
  whoami: {
    help: "Tells you who are you",
    action: "piyushgarg",
  },

  "get-location": {
    help: "Gets your current location",
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

const Terminal = () => {
  return (
    <TerminalContextProvider>
      <ReactTerminal
        prompt="$ piyushgarg-dev >> "
        welcomeMessage={
          <p>
            Welcome to my website! Get started by typing `help` command below
          </p>
        }
        themes={{
          darkDefault: {
            themeBGColor: "",
            themeToolbarColor: "",
            themeColor: "#38CC77",
            themePromptColor: "#fff",
          },
        }}
        theme="darkDefault"
        commands={{
          ...Object.keys(commands).reduce(
            (b, key) => ({ ...b, [key]: commands[key].action }),
            {}
          ),
          help: (
            <div>
              <p>Available Commands:</p>
              {Object.keys(commands).map((key) => (
                <p key={key}>
                  <span style={{ color: "#38CC77" }}>{key}:</span>{" "}
                  {commands[key].help}
                </p>
              ))}
            </div>
          ),
        }}
      />
    </TerminalContextProvider>
  );
};

export default Terminal;
