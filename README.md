## Files

- `react/src/assets/art` — watermark SVGs
- `react/src/carddata` — card data in tsx files

## Commands

#### Getting Started

```
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

### QueryBar

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
 
 - Sorting
   - Alphabetical
   - Type
     - +alpha
 - Bold card names in data view if it has an icon

### Views
 
 - Dashboard
 - Library
   - Swap to Live Preview
 - Status (Data View)
   - with filters
 - Twin Cards
 - Sheets
   - Advanced Queries
