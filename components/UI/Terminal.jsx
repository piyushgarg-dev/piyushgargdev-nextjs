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
          <div>
            <p>
              Welcome to my website! Get started by typing `help` command below
            </p>
            <p>
              <span style={{ color: "#38CC77" }}>Pro Tip:</span> Hack this
              terminal and you{"'"}ll get FREE access to my courses :)
            </p>
          </div>
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
            <div style={{ marginTop: "5px" }}>
              <p>Available Commands:</p>
              {Object.keys(commands).map((key) => (
                <p key={key}>
                  <span style={{ color: "#38CC77" }}>{key}:</span>{" "}
                  {commands[key].help}
                </p>
              ))}
              <p>
                <span style={{ color: "#38CC77" }}>clear:</span> clears out
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
