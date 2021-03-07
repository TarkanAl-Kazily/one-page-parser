# Stuff to do

 - [X] Modify "Create Scene" initial UI:
   - [X] Add button next to "Create Scene" that says "Import"
   - [X] Button creates a dialog
   - [X] Import will perform dummy scene creation actions
   - [X] Import must be one-time action, after which normal scene edit UI should work

 - [X] Button Dialog UI - extends FormApplication (or SceneConfig or BaseEntitySheet)
   - [X] Field to give name to scene
   - [X] Button to select import PNG
   - [x] Button to select import JSON
   		- [ ] need to account for multiple possible import dialogs at once
   - [X] Field to set grid pixel size
   - [X] Default grid pixel size 70
   - [X] Button to "Save Changes" ("Create One Page Dungeon")

 - [ ] Dummy scene creation actions
   - [X] Create new scene object
   - [X] Define the scene background with a dummy image artifact
   - [X] Define the scene dimensions according to the image dimensions
   - [X] Define the grid size based on a constant
   - [X] Add a square wall system in the middle of the map
   - [X] Set the lighting to dynamic (default)
   - [ ] Set the default camera view to center the map

 - [X] Smart scene creation actions
   - [X] Set scene background to imported PNG
   - [X] Set grid size dimension
   - [X] Create walls from JSON

---

Feature improvements:
 - [X] Add (some) instructions to the Import form (/u/revgizmo)
 - [X] Offset the walls from the art for some visual padding (/u/revgizmo)
 - [X] Add door support using JSON data
 - [ ] Add note support using JSON data
 - [X] Default scene name from JSON data (/u/revgizmo)
 - [ ] Call out u/baileywiki and the Token Attacher module for extra awesome
	https://www.reddit.com/r/FoundryVTT/comments/lw872j/foundry_module_highlight_onepage_dungeons_watabou/

