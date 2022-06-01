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
