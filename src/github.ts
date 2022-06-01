export function editIssueDescription() {
  const dropdownButton = findIssueDropdownButton();
  if (!dropdownButton) {
    return;
  }

  dropdownButton.click();

  setTimeout(() => {
    findIssueCommentEditButton()?.click();
  }, 400);
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
