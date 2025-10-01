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

#### Printing

Margins:

```
0.50  Top
0.50  Left
0.88    Right
0.50  Bottom
```

#### Cosmere Characters

```
<span class=".dingbats">cors01238*</span>
<span class=".opp" />
```

| Char | Class | Description   |
| :--: | :---: | :-----------: |
| c    | comp  | Complication  |
| o    | opp   | Opportunity   |
| r    | react | Reaction      |
| s    | storm | Stormlight    |
| 0    | act0  | Free Action   |
| 1    | act1  | Action        |
| 2    | act2  | Double Action |
| 3    | act3  | Triple Action |
| 8    | inf   | Always On     |
| *    | star  | Special       |

