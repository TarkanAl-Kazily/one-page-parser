# Stuff to do

[ ] Modify "Create Scene" initial UI:
  [X] Add button next to "Create Scene" that says "Import"
  [ ] Button creates a dialog
  [ ] Import will perform dummy scene creation actions
  [ ] Import must be one-time action, after which normal scene edit UI should work

[ ] Button Dialog UI - extends FormApplication (or SceneConfig or BaseEntitySheet)
  [X] Field to give name to scene
  [X] Button to select import PNG
  [X] Button to select import JSON
  [X] Field to set grid pixel size
  [ ] Default grid pixel size 70
  [X] Button to "Save Changes" ("Create One Page Dungeon")

[ ] Dummy scene creation actions
  [ ] Create new scene object
  [ ] Define the scene background with a dummy image artifact
  [ ] Define the scene dimensions according to the image dimensions
  [ ] Define the grid size based on a constant
  [ ] Add a square wall system in the middle of the map
  [ ] Set the lighting to dynamic
  [ ] Set the default camera view to center the map

[ ] Smart scene creation actions
  [ ] Set scene background to imported PNG
  [ ] Set grid size dimension
  [ ] Create walls from JSON
