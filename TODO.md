# TODO

- sheets should allow duplicates (two knives on same sheet)
- "Once per scene"  ->  whiteboard checkbox?
- replace yellow hands
- standardize fonts
- design QueryBar
- add flip icon to indicate card on back?
- how to support two-page cards
- add support for:
    - Whiteboard element
            Exhausted (-qty)
            Enhanced* (+qty)
            Infusions (qty + target)
    - Charge Boxes element  (charged items)

Design
- since we're allowing text to flow to the back side on Skills, should we just make that an option across the board, when appropriate?  (a very complicated action or magic item)

Lint:
- tsx files: in object definitions, add a space between key and colon

#### QueryBar

 - Cards by name
 - Cards with reverse
 - Cards with type
 - Cards with cost
   - action
   - focus
   - investiture
 - Items with charges
 - text search (vs card name)


## Nick's Items
 
 - add "type" field to cards in src/carddata/index.ts
 - Sorting
   - Alphabetical
   - Type
     - +alpha
 - Bold card names in data view if it has an icon
 - "Ready" action hack
 - components for CardTypes (especially Infusions and Items - or Weapons specifically?)
 - corner adornment for stormlight-related cards ("magic" boolean)

#### Views
 
 - Dashboard
 - Library
   - Swap to Live Preview
 - Status (Data View)
   - with filters
 - Twin Cards
 - Sheets
   - Advanced Queries


## INBOX

Questions:
  - front vs back (smaller)?  still makes sense?
      - if so, indicate front vs back on table
  - how to deal with:
        p.270 Quick Activation - 1/scene 1 FP -> reduce activation cost (▶▶ -> ▶ -> ▷)

