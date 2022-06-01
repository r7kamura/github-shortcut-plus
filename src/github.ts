export function editIssueDescription() {
  const dropdownButton = findIssueDropdownButton();
  if (!dropdownButton) {
    return;
  }

  const observer = new MutationObserver(() => {
    observer.disconnect();
    findIssueCommentEditButton()?.click();
  });
  observer.observe(dropdownButton.parentElement!, { attributes: true });
  dropdownButton.click();
}

export function focusNewCommentField() {
  findNewCommentField()?.focus();
}

function findIssueDropdownButton() {
  return (document.querySelector(
    '.js-command-palette-issue-body *[aria-haspopup="menu"]'
  ) ||
    document.querySelector(
      '.js-command-palette-pull-body *[aria-haspopup="menu"]'
    )) as HTMLElement | null;
}

function findIssueCommentEditButton() {
  return document.querySelector(
    ".dropdown-menu .js-comment-edit-button"
  ) as HTMLElement | null;
}

function findNewCommentField() {
  return document.querySelector("#new_comment_field") as HTMLElement | null;
}
