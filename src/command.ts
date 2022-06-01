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
  {
    default: "alt+c",
    description: "Focus new comment textarea",
    name: "focusNewCommentField",
  },
];

export { commands };
