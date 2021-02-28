# One Page Parser for Foundry VTT

Create instant scenes for Foundry VTT from Watabou's [One Page Dungeon](https://watabou.itch.io/one-page-dungeon).

Manifest URL: https://github.com/TarkanAl-Kazily/foundryvtt-one-page-parser/releases/latest/download/module.json

# Usage

First, generate a map you like from [One Page Dungeon](https://watabou.itch.io/one-page-dungeon). From the context menu (right click the map) select "Export PNG", choosing a reasonable pixel size (70 is default). Do the same for "Export JSON". 

In the Scenes tab, click the new "OnePageParser Import Scene" button.

In the form that pops up, provide a Scene Name, select the PNG you exported for the Background Image, and the JSON you exported for Import JSON. Finally, make sure the grid size matches the exported grid size. Click Save.

The scene will be created in the sidebar. Activate it, then switch to the Walls layer. Toggle "Snap to Grid" (the + symbol). Select all the walls with Ctrl+A (Command+A on Mac), and align the walls to your map. You're done!
