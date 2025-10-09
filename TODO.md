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

 - Cards with cost (currently supports boolean check, but not value check)
   - focus
   - investiture
 - Items with charges (currently supports boolean check, but not value check)
 - Card name multi-select


## Nick's Items
 
### Big Items

 - Templates for different types
 - Side-by-side view (front/back)
 - ...

### Medium Items
 - Whiteboards
 - corner adornment for stormlight-related cards ("magic" boolean)

### Little Items
 - Fix data view column width
 - Handle non-numeric for ip/fp/ch (specifically *)
 - Partial borders for radiant cards
 - "Ready" action hack
 - if no "rules" field, display "intentionally blank" rules block (ex: End Grapple)

### Things to think about
 - Charge boxes?

### Phase 2:
 - Character Card


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
    - User can deal with this - this is an excessive edge case
    - ▶▶ -> ▶ : tap card (will take up only one action tray slot)
    - ▶ -> ▷ : No change necessary, just use the free action row instead of the action tray

Tests:
  - test aesthetics of twin card with inset back (Grapple | End Grapple)
  - test magnetic
  - test dry erase


## Wacky

Click on page number (source field) to open the locally-stored handbook PDF (if not already open) and jump to that page.
https://grok.com/share/bGVnYWN5_e9aa717c-28c6-4b20-afae-93b960cccc10

