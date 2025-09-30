## Files

- `react/src/assets/art` — watermark SVGs
- `react/src/carddata` — card data in tsx files

## Commands

#### Getting Started

```
$ cd react
$ npm install
$ npm run dev

$ npm run lint
```

## How-Tos

#### Making a Sheet

1. Define a component (e.g. Foo.tsx) in the "pages" dir.
2. Create an array with the list of cards you want to show
3. Map over the array, returning a `<Card />` element for each card, passing in the associated data
	* Note: Each one will need a unique 'key' attribute (typically the index) per React standards.
4. in "App.tsx", import your component and replace the `<Library />` component with your component
	* TODO: improve support for pages by determining the rendered component via URL instead of hardcoding it

## TODO

- add flip icon to indicate card on back?
- how to support two-page cards
- add support for:
    - Whiteboard element
            Exhausted (-qty)
            Enhanced* (+qty)
            Infusions (qty + target)
    - Charge Boxes element  (charged items)
- how to produce sheet of full-opacity watermarks?
- NOTE: "end grapple" is a free action, but has action cost 2 to define card width.
  - Should we use a separate "width" option (1 by default, or set to 2 or 3) to define width, or just accept that some 
    "action" costs are not necessarily the same as the actual cost?

Design
- since we're allowing text to flow to the back side on Skills, should we just make that an option across the board, when appropriate?  (a very complicated action or magic item)

Lint:
- tsx files: in object definitions, add a space between key and colon

### Filters / Search queries

 - Cards by name
 - Cards with reverse
 - Cards with type
 - Cards with cost
   - action
   - focus
   - investiture
 - Items with charges





## Nick's Items
 
 - Sorting
   - Alphabetical
   - Type
     - +alpha
     - 

### Views
 
 - Dashboard
 - Library
   - Swap to Live Preview
 - Status (Data View)
   - with filters
 - Twin Cards
 - Sheets
   - Advanced Queries
