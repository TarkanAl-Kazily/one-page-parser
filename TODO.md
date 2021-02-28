# Stuff to do

[ ] Modify "Create Scene" initial UI:
  [X] Add button next to "Create Scene" that says "Import"
  [X] Button creates a dialog
  [ ] Import will perform dummy scene creation actions
  [ ] Import must be one-time action, after which normal scene edit UI should work

[X] Button Dialog UI - extends FormApplication (or SceneConfig or BaseEntitySheet)
  [X] Field to give name to scene
  [X] Button to select import PNG
  [/] Button to select import JSON - need to account for multiple possible import dialogs at once
  [X] Field to set grid pixel size
  [X] Default grid pixel size 70
  [X] Button to "Save Changes" ("Create One Page Dungeon")

[ ] Dummy scene creation actions
  [X] Create new scene object
  [X] Define the scene background with a dummy image artifact
  [ ] Define the scene dimensions according to the image dimensions
  [X] Define the grid size based on a constant
  [ ] Add a square wall system in the middle of the map
  [ ] Set the lighting to dynamic
  [ ] Set the default camera view to center the map

[ ] Smart scene creation actions
  [X] Set scene background to imported PNG
  [X] Set grid size dimension
  [ ] Create walls from JSON
