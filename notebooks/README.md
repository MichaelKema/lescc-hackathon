# Impact analysis: food trucks and the Cultural Arts Center

This folder holds the Jupyter analysis behind the project. It compares two scenarios for the same Allen Street Mall premises over the 25-year license term:

- **Baseline:** the status quo food truck concession.
- **Proposal:** a Cultural Arts Center (museum) operating the same premises.

The result of interest is **incremental value**: proposal minus baseline, per year, on three measures: revenue, social capital, and cultural capital.

## Part A: The food truck market in New York

What the baseline needs to answer: how many mobile food units operate, what they earn, what the permit system allows, and how much of the market is legal.

Current findings (secondary sources, to be checked against primary data):

| Measure | Figure | Source |
|---|---|---|
| Street vendors citywide | About 23,000, of which about 20,500 are mobile food vendors | Immigration Research Institute, via search summary |
| Mobile food vendor (MFV) permit cap | Capped at 3,000 in 1983; about 5,100 today | Same, via search summary |
| Share of MFV operators holding a permit | About 25% | Same, via search summary |
| Average annual profit, mobile food vendors | About $40,000 (2019) | IBO, Jan 2024, revised April 2025 |
| Average annual profit, all vendors | About $35,000 (2019) | Same |
| Weekly earnings, mobile food vendors | $250 to $1,000, varying by season | Secondary study, via search summary |
| Waitlists | Over 20,000 people | Immigration Research Institute, via search summary |
| Resale price of permits | Up to $30,000 for a food truck; up to $20,000 for a hot dog cart | Secondary reporting, via search summary |
| Supervisory licenses | 2,200 new per year for five years, starting July 1, 2026, offered to people on the 2022 waitlists | NYC Business, via search summary |

Gaps:
- No reliable dollar figure for total NYC food truck revenue. The IBISWorld estimate is paywalled, and the national figure found is from an older source.
- The Parks eateries feed counts only food carts and trucks on Parks property (see `data/README.md`). It does not show citywide units.
- Revenue per unit is not published by the city. Parks' financials cover cafés and a parkhouse, not trucks.

Modeling approach:
- Build the baseline from unit count × revenue per unit × operating days, with each input cited.
- Use the Parks permit dates to measure how long units stay in a location.
- Show the permit-compliance gap as a sensitivity range. Legal and unpermitted units earn differently, and the model should not treat them as one group.

## Part B: The Cultural Arts Center's impact

What the proposal needs to answer: what the center adds in spending, visitors, and community value beyond what a food truck does.

Current findings (national and regional benchmarks, not a site-specific study):

| Measure | Figure | Source |
|---|---|---|
| National arts and culture economic activity (2022) | $73.3 billion | Americans for the Arts, AEP6 (2024) |
| National arts nonprofit spending (2015) | $166.3 billion, of which $102.5 billion is audience spending | AEP5 |
| Method | Input-output modeling (IMPLAN), customized per study region | Americans for the Arts |
| Closest local analog | Grand Rapids arts and cultural organizations: $73.8 million direct spending by all primary visitors, $60.7 million by nonlocal visitors (2024) | Grand Rapids economic impact study |

Gaps:
- No measured foot traffic or spending for a single neighborhood cultural center was found.
- The Roosevelt Row (Phoenix) example reports increased pedestrian traffic, but it is a qualitative case, not a measured study.
- The Ashé Cultural Arts Center (New Orleans) is listed as a community arts hub, with no impact numbers found.

Modeling approach:
- Use the national and regional multipliers only as ranges, and say so in the output.
- Estimate visitor counts from assumptions that are stated in one place, with a source for each.
- Set a neighborhood spillover assumption (nearby restaurants and retail) as a separate, sensitivity-tested input.
- Keep the social and cultural capital proxies explicit and documented before any result is shown in the app.

## Combining the two

Incremental value = Proposal − Baseline, per year, for the 25-year term:

- **Revenue:** proposal fees and sales against the food truck baseline. Compare to the café and parkhouse comparables in the project `README.md`, and say that the comparison is imperfect.
- **Social capital:** proxies to be defined (for example, 311 civic-engagement signals before and after). Each proxy needs a source.
- **Cultural capital:** proxies to be defined (for example, program and venue activity). Each proxy needs a source.

Report results as ranges (low, base, high), not single values.

## Open questions

- Food truck revenue source: vendor receipts, permit records, or published estimates. Still open.
- Visitor and revenue assumptions for the museum: no source yet.
- Study-area boundary around Allen Street Mall: needed before any counts are run.
- Whether to use an AEP-style local study or a visitor intercept survey for the center's own impact.
- Whether the operator is a new entity or a DBA, which affects who is named in the model.

## Sources

- Americans for the Arts, Arts & Economic Prosperity studies: https://www.americansforthearts.org/
- Immigration Research Institute, *Street Vendors of New York*: https://immresearch.org/publications/street-vendors-of-new-york
- Independent Budget Office, street vending (January 2024, revised April 2025): https://www.ibo.nyc.ny.us/pressreleases/street-vending-january-2024-pr.pdf
- NYC Food Policy Center, *Food by the Numbers: Food Trucks*: https://www.nycfoodpolicy.org/?p=3633
- NYC Business, street vending: https://nyc-business.nyc.gov/nycbusiness/business-services/initiatives/street-vending-in-nyc
- NYC Parks Directory of Eateries: https://data.cityofnewyork.us/Recreation/Directory-of-Eateries/8792-ebcp/about_data
