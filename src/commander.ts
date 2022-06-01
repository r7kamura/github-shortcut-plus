import { editIssueDescription, focusNewCommentField } from "./github";

const commandFunctionByName = {
  editIssueDescription,
  focusNewCommentField,
} as { [key: string]: Function };

export function runCommands(commandNames: string[]) {
  commandNames.forEach((commandName) => {
    const commandFunction = commandFunctionByName[commandName];
    if (commandFunction) {
      commandFunction();
    }
  });
}
