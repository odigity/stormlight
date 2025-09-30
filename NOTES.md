## Design

### Terminology

- "sleeve" = laminate
- front vs back (aka cover, aka reverse)
- double-card:  double-wide
- two-page card:  card with two pages of text
- twin card:  two related (parent/child?) cards put together

### Decisions

- cards are mostly for combat  (scene-specific information)
- what goes where and why?
- the 5 communicated elements
    - type                ->  paper color
        - action cost     ->  paper size
    - FP/IP/Ch cost       ->  corner bubble
    - Stormlight-related  ->  gold corners
    - Standard vs Custom  ->  icon
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

- `assets/`         — sourced from the web
- `assets/art/`     — original SVGs
- `src/assets/art/` — customized SVGs
- `src/carddata`    — card data in tsx files
- `src/types/types.ts` — ?

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
Sleeve Width (~2.5")
┌───────────────────────────────┐
│ Bordered Width (2 3/8")       │
│ ┌───────────────────────────┐ │
│ │ Unbordered Width (?")     │ │
│ │ ┌───────────────────────┐ │ │
│ │X│ Content Width         │X│ │ 
│ │X│ ┌───────────────────┐ │X│ │ 
│ │X│ │ Header            │ │X│ │ 
│ │X│ │-------------------│ │X│ │ 
│ │X│ │ Body (rules)      │ │X│ │ 
│ │X│ │                   │ │X│ │ 
│ │X│ │ Footer            │ │X│ │ 
│ │X│ └───────────────────┘ │X│ │ 
│ │X│                       │X│ │  Margin Thickness (?")
│ │X└───────────────────────┘X│ │
│ │XXXXXXXXXXXXXXXXXXXXXXXXXXX│ │  Border Thickness (?")
│ └───────────────────────────┘ │
│                               │  Sleeve Thickeness (1/16")
└───────────────────────────────┘
```

## Reference

### Paper & Colors

| Hex       | Ord | Name                 | Notes |
| :-------: | :-: | :------------------: | :---: |
| #FFD000 |   1 | **Solar Yellow**     | - |
| #FFFFFF |   2 | Stardust White       | - |
| #FFAC00 |   3 | Galaxy Gold          | Free Actions |
| #FF8C40 |   4 | **Cosmic Orange**    | - |
| #F86129 |   5 | Orbit Orange         | Costly Actions |
| #FF5E63 |   6 | Rocket Red           | Reactions |
| #DB3B4A |   7 | Re-Entry Red         | - |
| #FF567C |   8 | Plasma Pink          | - |
| #FF80A4 |   9 | Pulsar Pink          | - |
| #FF3C9C |  10 | **Fireball Fuchsia** | Infusions |
| #D573AF |  11 | Outrageous Orchid    | Conditions |
| #B9719E |  12 | Planetary Purple     | - |
| #8A6C9E |  13 | Gravity Grape        | Skills |
| #867BC6 |  14 | Venus Violet         | - |
| #3F3831 |  15 | Eclipse Black        | - |
| #FFFFFF |  16 | Solar White          | - |
| #4C6393 |  17 | Blast-Off Blue       | - |
| #3697AE |  18 | Celestial Blue       | Magic Items |
| #64B9BC |  19 | **Lunar Blue**       | Items |
| #27A89A |  20 | Terrestrial Teal     | Effects |
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
