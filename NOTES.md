## Files

- `assets/`         — sourced from the web
- `assets/art/`     — original SVGs
- `src/assets/art/` — customized SVGs
- `src/carddata`    — card data in tsx files
- `src/types/itemType.ts` — ?
- `src/types/types.ts` — ?


## Terminology

- front vs back (aka cover, aka reverse)
- double-card:  double-wide
- two-page card:  card with two pages of text
- twin card:  two related (parent/child?) cards put together


## Design

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


## App Structure

NavBar component at top of each page.

Structure:
- Page
  - Component

**Pages**

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

## Card Box Model

```



```

## Paper & Colors

| Hex       | Ord | Name                 | Notes |
| :-------: | :-: | :------------------: | :---: |
| #FFD000 |   1 | **Solar Yellow**     | Costly Actions |
| #FFFFFF |   2 | Stardust White       | Magic Items |
| #FFAC00 |   3 | Galaxy Gold          | - |
| #FF8C40 |   4 | **Cosmic Orange**    | Reactions |
| #F86129 |   5 | Orbit Orange         | - |
| #FF5E63 |   6 | Rocket Red           | - |
| #DB3B4A |   7 | Re-Entry Red         | - |
| #FF567C |   8 | Plasma Pink          | - |
| #FF80A4 |   9 | Pulsar Pink          | - |
| #FF3C9C |  10 | **Fireball Fuchsia** | Infusions |
| #D573AF |  11 | Outrageous Orchid    | ~~Skills~~ |
| #B9719E |  12 | Planetary Purple     | Skills |
| #8A6C9E |  13 | Gravity Grape        | - |
| #867BC6 |  14 | Venus Violet         | Conditions |
| #3F3831 |  15 | Eclipse Black        | - |
| #FFFFFF |  16 | Solar White          | Items |
| #4C6393 |  17 | Blast-Off Blue       | - |
| #3697AE |  18 | Celestial Blue       | - |
| #64B9BC |  19 | **Lunar Blue**       | - |
| #27A89A |  20 | Terrestrial Teal     | Effects |
| #98DE5A |  21 | Martian Green        | - |
| #BCE844 |  22 | Vulcan Green         | - |
| #3C9E56 |  23 | Gamma Green          | - |
| #BDD832 |  24 | **Terra Green**      | ~~Costly Actions~~ |
| #FFFA3C |  25 | Lift-Off Lemon       | Free Actions |

_Hex codes sourced from: https://convertingcolors.com/list/neenah.html_

**Sources**

| Product                                                      | Cost    | Colors |
| :----------------------------------------------------------: | :-----: | :----: |
| [Astrobrights "Bright"](https://walmart.com/ip/x/44796991)   | $0.54ea | Lunar Blue, Solar Yellow, Terra Green, Cosmic Orange, Fireball Fuschia |
| [Astrobrights "Spectrum"](https://amazon.com/dp/B01GUUARV0/) | $0.55ea | All |
