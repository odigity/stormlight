## Paper Colors

| Type           | Paper Color       | Hex    |
| :------------: | :---------------: | :----: |
| Conditions     | Venus Violet      | #6868fc |
| Costly Actions | ~~~Terra Green~~<br/>**Solar Yellow** | ~~~#9cfc00~~~<br/>#fcd402 |
| Effects        | Terrestrial Teal  | #05db8f |
| Infusions      | **Fireball Fuchsia**  | #ff13fc |
| Items          | Solar White       | #ffffff |
| Magic Items    | Stardust White    | #ffffff |
| Free Actions   | Lift-Off Lemon    | #f0ff0c |
| Reactions      | **Cosmic Orange**     | #fe7b25 |
| Skills         | ~~~Outrageous Orchid~~~<br/>Purple Planetary | ~~#e54eff~~<br/>d249ff |

**Sources**

| Product                                                      | Cost    | Colors |
| :----------------------------------------------------------: | :-----: | :----: |
| [Astrobrights "Bright"](https://walmart.com/ip/x/44796991)   | $0.54ea | Lunar Blue, Solar Yellow, Terra Green, Cosmic Orange, Fireball Fuschia |
| [Astrobrights "Spectrum"](https://amazon.com/dp/B01GUUARV0/) | $0.55ea | All |


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


## Terminology

- front vs back (aka cover, aka reverse)
- double-card:  double-wide
- two-page card:  card with two pages of text
- twin card:  Malignant


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

