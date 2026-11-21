# Potential data sources

Candidate datasets for the 311 storytelling app and the model. Status is noted for each: **verified** means the metadata or fields were checked directly; **to find** means the dataset is referenced but its listing has not been located yet.

## 1. NYC Parks: Directory of Eateries (verified)

- **Portal page:** https://data.cityofnewyork.us/Recreation/Directory-of-Eateries/8792-ebcp/about_data
- **Socrata ID:** `8792-ebcp`
- **Agency:** Department of Parks and Recreation (DPR)
- **Description:** Eateries on NYC Parks properties, including snack bars, food carts, mobile food trucks, and restaurants.
- **Update frequency:** As needed. Date made public: 8/16/2011.
- **Direct JSON feed:** https://www.nycgovparks.org/bigapps/DPR_Eateries_001.json (XML at http://nycgovparks.org/bigapps/DPR_Eateries_001.xml)
- **Field description:** https://www.nycgovparks.org/bigapps/desc/DPR_Eateries_001.txt

Fields (from the field description and a live JSON sample):

| Field | Meaning |
|---|---|
| `name` | Concession operator or property name |
| `location` | Text location within the park |
| `park_id` | Borough letter plus 3 digits, optional subproperty suffix (`M` Manhattan, `B` Brooklyn, `Q` Queens, `X` Bronx, `R` Staten Island). Joins to the DPR parks feed |
| `start_date`, `end_date` | Permit validity (`YYYY-MM-DD`). Can be null |
| `description` | Free text. Often null |
| `permit_number` | DPR permit ID |
| `lat`, `long` | Coordinates (listed in the field description; not seen in the sample rows) |
| `phone`, `website` | Contact details. Often null |
| `type_name` | Concession type, for example `Food Cart`, `Breakfast Cart` |

Notes:
- The Socrata metadata has no column definitions (`columns.json` returns empty), so the JSON feed and its description file are the reliable schema.
- Permit dates in the sample run into 2025 and 2026, while the portal says the data was last updated as needed. Treat the feed as a live snapshot and record the pull date with every copy.
- Use: count and locate food carts and trucks in the Allen Street Mall area and nearby parks, and check permit start and end dates to track how long each operator has held a space. The Allen Street Mall `park_id` still needs to be confirmed.

## 2. DOHMH Mobile Food Vending licenses and permits (to find)

- Issued by the NYC Department of Health and Mental Hygiene (DOHMH). Program pages: https://www.nyc.gov/site/doh/business/food-operators/mobile-and-temporary-food-vendors.page
- Licenses and permits are tied to a specific unit (cart or truck). Waiting-list status is checked through a separate lookup tool.
- Use: the citywide count of permitted mobile food units, which gives context for the food truck baseline.
- Action: search the NYC Open Data portal for "mobile food vendor" under DOHMH and record the Socrata ID here once found. The search used for this README did not return the Socrata listing.

## 3. Street vending and permit research (reference, not raw data)

- Immigration Research Institute, *Street Vendors of New York*: https://immresearch.org/publications/street-vendors-of-new-york
- Independent Budget Office (IBO) street vending reports, January 2024 (revised April 2025): https://www.ibo.nyc.ny.us/pressreleases/street-vending-january-2024-pr.pdf
- NYC Food Policy Center, *Food by the Numbers: Food Trucks*: https://www.nycfoodpolicy.org/?p=3633
- Use: permit caps, waitlist sizes, and vendor earnings for the baseline. Confirm figures against the primary source before using them, since the IBO revised its profit estimates.

## 4. Neighborhood context (to find)

- **311 Service Requests** (Socrata): needed for the storytelling app. Filter to the study area by location and date. Dataset ID to be recorded.
- **Census / American Community Survey (ACS)** tract data for the blocks around Allen Street Mall: residents, workers, income, and age. Needed to size foot traffic and to frame the neighborhood.
- **NYC DCP PLUTO / tax lot data**: land use and nearby cultural or retail uses. Needed to describe the surrounding context.

## 5. Concession benchmarks (in the project README)

Parks' published financials for the Hunter's Point South Café and McCarren Parkhouse are already in the project `README.md`. They are the only revenue comparables in the solicitation packet. They are café and parkhouse concessions, not food trucks.

## 6. LESCC community bid and financial channels (team-authored, in `data/raw/`)

- **Files:** `raw/lescc-community-bid.json` and `raw/lescc-financial-channels.json`
- **Source:** written by the Lower East Side Cultural Center (LESCC) bid team, 2026-11-21. These are the team's proposal and plan, not third-party data.
- **`lescc-community-bid.json`:** the bid concept (Community Value Capture), the four funding layers (merchant pledge fund, LES BID backstop, Park Improvement District pilot, economic rationale), the team and their roles, coalition expansion, the venue and programming, and a three-phase roadmap.
- **`lescc-financial-channels.json`:** four ways to route revenue to Parks: a direct coalition fee guarantee, an LES BID backstop, a PID pilot, and a closed data loop for renewing pledges.
- **Use:** the proposal scenario in the model (who pays the license fee and the 25% security deposit) and the "what changes" section of the story.
- **Checked 2026-11-21** (centre points are approximate; Parks lists the malls at Allen St and Broome St, but they run from Houston St to Division St):
  - **321 food and beverage vendors:** about right within a 5-minute walk. NYC DOHMH Restaurant Inspection Results (Socrata `43nn-pn8j`, data to 2026-11-19), distinct establishments: 300 m = 216-256, 350 m = 279-303, 400 m = 355-358 (Allen & Broome / Allen & Rivington). The Parks Eateries feed (section 1) cannot check it: it lists 142 concessions on Parks land citywide and none on Allen St. Suggested wording: "about 320-360 food businesses within a 5-minute walk".
  - **8,900 Chinese residents, 36% of households:** ACS 2020-2024 5-year (via Census Reporter), census tracts reaching within 400 m of Allen & Broome (36061 001401, 001402, 001600, 001800, 003001, 003601, 004100, 004300). 36% of households have an Asian householder, which matches the 36%; ACS has no Chinese-only household count. Chinese residents (B02015) 11,903 of 38,830 people (31%); the tracts extend past 400 m, so 8,900 for the walk circle is plausible. Within 600 m: 27,796 Chinese residents (34%), 40% Asian households. Suggested wording: "about 9,000-12,000 Chinese residents within a 5-minute walk; 36% of nearby households are Asian".
- **Still to be sourced:** 400+ LES BID members (LES BID); about 40 frontage property owners on the block and 6 coffee shops within 130 m (both from the longer README in `raw/`).
- **Metrics the bid proposes to track:** foot traffic, storefront vacancy, business openings and closings, and event attendance. These are candidates for the social and cultural capital proxies.

## Open items

- Record the Socrata ID and pull date for each source once located.
- Confirm the Allen Street Mall `park_id` in the DPR parks feed.
- Decide where raw downloads are stored. Files in `data/raw/` stay unedited, per the project README.
