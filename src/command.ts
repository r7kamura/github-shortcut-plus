export type Command = {
  default: string;
  description: string;
  name: string;
};

const commands: Array<Command> = [
  {
    default: "alt+e",
    description: "Edit issue description",
    name: "editIssueDescription",
  },
];

export { commands };
