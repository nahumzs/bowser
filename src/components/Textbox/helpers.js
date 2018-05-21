export const getCursorOffset = () => {
  const sel = window.getSelection();
  const offset = sel.focusOffset;
  return offset;
};

export const setFocusOffset = (childNode, index) => {
  // create empty instance
  const range = document.createRange();
  // get actual instance
  const sel = window.getSelection();

  range.setStart(childNode, index);
  range.collapse(true);

  // only require for firefox https://stackoverflow.com/a/16933718/196038
  sel.removeAllRanges();
  sel.addRange(range);
};
