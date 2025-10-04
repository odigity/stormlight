## Design

### Terminology

- "sleeve" = laminate
- front vs back (aka cover, aka reverse)
- double-card:  double-wide
- two-page card:  card with two pages of text
- twin card:  two related (parent/child?) cards put together

### Decisions

Communicated Elements
- type  ->  paper color
- action cost  ->  paper size
- FP/IP/Ch cost  ->  header bubbles
- Stormlight-related  ->  decorated corners
  - gold highlights -> "radiant set": 4 stormlight + 2 surge + radiant shardblade/shardplate-related

- presence of art depends entirely on whether anyone's motivated to provide it

- cards are mostly for combat  (scene-specific information)
- what goes where and why?
- when to have a reverse
- rules wordings
- items can have charge boxes
- fabrial effects are classified like path talents - custom, not standard
- uses of Note field:
  - Stacking
  - action usage limit
  - weapon type

## Architecture

### Physical

#### Files & Folders

- `archive/`                — stuff sourced from the web
- `archive/originals/`      — originals for all art/ and chrome/ files

- `src/App.tsx`             — App component (root)
- `src/App.scss`            — app-wide styles (component styles go in styles/*.scss)
- `src/main.tsx`            — loads and renders App component

- `src/assets/`             — fonts & media
- `src/assets/art/`         — processed SVGs for watermarks / covers (uppercase = Card Name, lowercase = shared art)
- `src/assets/chrome/`      — icons, whiteboards, decorative corners
- `src/assets/fonts/`       — especially Cosmere Dingbats

- `src/types/cardType.ts`   — enum of card types
- `src/types/types.ts`      — CardData, SheetData, gold_set

- `src/cards/`              — card data in tsx files (instances of CardData)
- `src/sheets/`             — sheet data in tsx files (instances of SheetData)

- `src/pages/`              — pages
- `src/components/`         — components
- `src/styles/*.scss`       — component styles (app-wide styles go in App.scss)

### Logical

NavBar component at top of each page.

#### Pages

- DashboardPage
  - Stats
  - SheetList
- CardsPage
  - Query Bar
      - Source: All, Sheet1, Sheet2...
  - Mode Selector  (data | preview | front | back)
  - Body
    - CardDataTable
    - CardPreviewer

#### Card Box Model

```
Sleeve     Width  =  ~2.5"
Bordered   Width  =  2 3/8"
Unbordered Width  =  ?"
Margin Thickness  =  ?"
Border Thickness  =  ?"
Sleeve Thickness  =  1/16"

┌─Sleeve Width──────────────────┐
│ ┌─Bordered Width────────────┐ │
│ │ ┌─Unbordered Width──────┐ │ │
│ │X│ ┌─Content Width─────┐ │X│ │ 
│ │X│ │ Header            │ │X│ │ 
│ │X│ │-------------------│ │X│ │ 
│ │X│ │ Body (rules)      │ │X│ │ 
│ │X│ │                   │ │X│ │ 
│ │X│ │ Footer            │ │X│ │ 
│ │X│ └───────────────────┘ │X│ │ 
│ │X└───────────────────────┘X│ │
│ │XXXXXXXXXXXXXXXXXXXXXXXXXXX│ │
│ └───────────────────────────┘ │
└───────────────────────────────┘
```

## Reference

### Paper & Colors

| Hex       | Ord | Name                 | Notes |
| :-------: | :-: | :------------------: | :---: |
| #FFD000 |   1 | **Solar Yellow**     | - |
| #FFFFFF |   2 | Stardust White       | - |
| #FFAC00 |   3 | Galaxy Gold          | Free Actions<br/>6 + 6 + 12 |
| #FF8C40 |   4 | **Cosmic Orange**    | - |
| #F86129 |   5 | Orbit Orange         | Actions<br/>6 + 6 + 12 |
| #FF5E63 |   6 | Rocket Red           | - |
| #DB3B4A |   7 | Re-Entry Red         | Reactions<br/>6 + 6 + 12 |
| #FF567C |   8 | Plasma Pink          | - |
| #FF80A4 |   9 | Pulsar Pink          | - |
| #FF3C9C |  10 | **Fireball Fuchsia** | Infusions<br/>6 + 6 + 12 + 20 |
| #D573AF |  11 | Outrageous Orchid    | Conditions<br/>6 + 6 |
| #B9719E |  12 | Planetary Purple     | - |
| #8A6C9E |  13 | Gravity Grape        | - |
| #867BC6 |  14 | Venus Violet         | - |
| #3F3831 |  15 | Eclipse Black        | - |
| #FFFFFF |  16 | Solar White          | - |
| #4C6393 |  17 | Blast-Off Blue       | - |
| #3697AE |  18 | Celestial Blue       | Magic Items<br/>6 + 6 + 12 |
| #64B9BC |  19 | **Lunar Blue**       | Items<br/>6 + 6 + 12 + 20 |
| #27A89A |  20 | Terrestrial Teal     | Effects<br/>6 + 6 |
| #98DE5A |  21 | Martian Green        | - |
| #BCE844 |  22 | Vulcan Green         | - |
| #3C9E56 |  23 | Gamma Green          | - |
| #BDD832 |  24 | **Terra Green**      | - |
| #FFFA3C |  25 | Lift-Off Lemon       | - |

_Hex codes sourced from: https://convertingcolors.com/list/neenah.html_

**Sources**

| Product                                                      | Cost    | Colors |
| :----------------------------------------------------------: | :-----: | :----: |
| [Astrobrights "Bright"](https://walmart.com/ip/x/44796991)   | $0.54ea | Lunar Blue, Solar Yellow, Terra Green, Cosmic Orange, Fireball Fuschia |
| [Astrobrights "Spectrum"](https://amazon.com/dp/B01GUUARV0/) | $0.55ea | All |

