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

- `src/types/card_type.ts`  — enum of card types
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
| #FFAC00 |   3 | Galaxy Gold          | Free Actions<br/>_inventory: 6 + 6 + 12_ |
| #FF8C40 |   4 | **Cosmic Orange**    | - |
| #F86129 |   5 | Orbit Orange         | Actions<br/>_inventory6 + 6 + 12_ |
| #FF5E63 |   6 | Rocket Red           | - |
| #DB3B4A |   7 | Re-Entry Red         | Reactions<br/>_inventory6 + 6 + 12_ |
| #FF567C |   8 | Plasma Pink          | - |
| #FF80A4 |   9 | Pulsar Pink          | - |
| #FF3C9C |  10 | **Fireball Fuchsia** | Infusions<br/>_inventory6 + 6 + 12 + 20_ |
| #D573AF |  11 | Outrageous Orchid    | Conditions<br/>_inventory6 + 6_ |
| #B9719E |  12 | Planetary Purple     | - |
| #8A6C9E |  13 | Gravity Grape        | - |
| #867BC6 |  14 | Venus Violet         | - |
| #3F3831 |  15 | Eclipse Black        | - |
| #FFFFFF |  16 | Solar White          | - |
| #4C6393 |  17 | Blast-Off Blue       | - |
| #3697AE |  18 | Celestial Blue       | Magic Items<br/>_inventory6 + 6 + 12_ |
| #64B9BC |  19 | **Lunar Blue**       | Items<br/>_inventory6 + 6 + 12 + 20_ |
| #27A89A |  20 | Terrestrial Teal     | Effects<br/>_inventory6 + 6_ |
| #98DE5A |  21 | Martian Green        | - |
| #BCE844 |  22 | Vulcan Green         | - |
| #3C9E56 |  23 | Gamma Green          | - |
| #BDD832 |  24 | **Terra Green**      | - |
| #FFFA3C |  25 | Lift-Off Lemon       | - |

- _Hex codes sourced from: https://convertingcolors.com/list/neenah.html_
- _Order based on "Spectrum" pack._

**Sources**

| Product                                                      | Cost    | Colors |
| :----------------------------------------------------------: | :-----: | :----: |
| [Astrobrights "Bright"](https://walmart.com/ip/x/44796991)   | $0.54ea | Lunar Blue, Solar Yellow, Terra Green, Cosmic Orange, Fireball Fuschia |
| [Astrobrights "Spectrum"](https://amazon.com/dp/B01GUUARV0/) | $0.55ea | All |

### Tools & Supplies

**For Paper**

- [paper cutter](https://amazon.com/dp/B0F4RBXTBN/) — _$24.56_
- [corner cutter](https://amazon.com/dp/B0076FJ7SS/) — _$14.55_
- [triangle hole punch](https://amazon.com/dp/B0FB3TJF3H/) — _$8.99, 1/4"_
- [gold paint marker](https://amazon.com/dp/B00DC4VMQ2/) — _$7.32_
- [paper glue](https://amazon.com/dp/B001B0EXNI/) — _$6.29_
- [laminator](https://amazon.com/dp/B0010JEJPC/) — _$30.20, 3-5mil_
- [laminate](https://amazon.com/dp/B079KL4C91/) — _$12.97, 200pk, 3mil_
- [magazine rack](https://amazon.com/dp/B07RWK43QL/) — _$14.66 ($8.33ea)_

**Dry Erase**

- [dry erase laminate](https://amazon.com/dp/B094YW6LB7/) — _$20.28, 50pk, 3mil_
- [dry erase markers](https://amazon.com/dp/B00I8OBAOU/) — _$7.91, 8pk, ultra-fine_

**Ferrous Sheets** _(8.5"x12.3", self-adhesive, 30mil)_

- [2pk, Standard Strength](https://amazon.com/dp/B0DR2YDLLZ/) — _$12.95 ($6.48ea)_
- [5pk, Standard Strength](https://amazon.com/dp/B0CWHBXG28/) — _$26.95 ($5.39ea)_
- [2pk, High Strength](https://amazon.com/dp/B0DR2WPG78/) — _$14.95 ($7.48ea)_
- [5pk, High Strength](https://amazon.com/dp/B0CWHC1DD4/) — _$30.95 ($6.19ea)_

**Magnetic Sheets** _(8.5"x11")_

- [10pk, Standard Strength](https://amazon.com/dp/B0CW3J1QTL/) — _$23.95 ($2.40ea), 20mil_
- [10pk, Standard Strength](https://amazon.com/dp/B0CW3HR62W/) — _$25.95 ($2.60ea), 20mil, self-adhesive_
- [10pk, Standard Strength](https://amazon.com/dp/B0CW3HR62W/) — _$33.95 ($3.40ea), 30mil, self-adhesive_

**Trays** _(STORi "SimpleSort" clear plastic stackable bins)_

- [3"](https://amazon.com/dp/B0C24K6W7C/) — $9.99 ($1.67ea)
- [6"](https://amazon.com/dp/B01D06SK6G/) — $14.99 ($2.50ea)
- [9"](https://amazon.com/dp/B01BKODXMG/) — $16.99 ($2.83ea)
- [12"](https://amazon.com/dp/B01D06SMUU/) — $18.99 ($3.17ea)

**For Dice**

- [blank dice](https://ebay.com/itm/146797561503) — _$11.99, 50pk, 16mm_
- [color sharpies, fine](https://amazon.com/dp/B019QBPDSM) — _$11.55, 24pk_
- [color sharpies, ultra fine](https://amazon.com/dp/B00105ELEA/) — _$8.19, 8pk_
- [stencils](https://amazon.com/dp/B0DC2WXLYP/) — _$15.99, 5 fonts, 1/4" .. 5/4"_

