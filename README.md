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

- add support for:
    - Whiteboard element  (Exhausted, Enhanced*, Infusions)
- how to produce sheet of full-opacity watermarks?
- NOTE: "end grapple" is a free action, but has action cost 2 to define card width.
  - Should we use a separate "width" option (1 by default, or set to 2 or 3) to define width, or just accept that some 
    "action" costs are not necessarily the same as the actual cost?

### Filters / Search queries

 - Cards with reverse
 - Cards with type
 - Cards with cost
   - action
   - focus
   - investiture
 - Items with charges
