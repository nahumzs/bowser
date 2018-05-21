import { configure } from "@storybook/react";
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Aqua Accessible',
  url: '#',
  goFullScreen: true,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  hierarchySeparator: /\/|\./,
});


const req = require.context("../src/components", true, /\.storybook\.js$/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
