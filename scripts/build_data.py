"""Build static JSON for the story app.

Reads raw files from data/raw/ (never edits them) and writes pre-computed JSON
to app/public/data/. Every output file carries its sources and pull dates.

Values with no source yet are written as null. Do not fill them with guesses.
"""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "app" / "public" / "data"

# Each chapter file: list of fields the app reads. Null = awaiting data.
CHAPTER_FILES: dict[str, dict] = {
    "site.json": {
        "address": "76 Delancey St, New York, NY 10002",
        "closed_year": 1956,
        "sources": ["LESCC proposal deck (Rd2_LESCulturalCenter_Deck.pdf), p.2"],
    },
    "baseline.json": {
        "units_in_inner_ring": None,
        "units_in_outer_ring": None,
        "revenue_per_unit_range": None,
        "sources": ["DPR Eateries feed (8792-ebcp), pending pull", "DOHMH mobile food vendor permits, ID to find"],
    },
    "proposal.json": {
        "coffee_concession_per_day": 1000,
        "programming_per_month": 2000,
        "urban_gardening_per_year": 6000,
        "direct_costs": 260000,
        "fixed_costs": 95000,
        "buildout_range": [4000000, 4000000],
        "sources": ["LESCC proposal deck, financial projections slide (applicant model, unverified)"],
    },
    "map.json": {
        "inner_ring_miles": 0.5,
        "outer_ring_miles": 1.0,
        "complaints_by_period": None,
        "control_blocks": None,
        "sources": ["311 Service Requests (Socrata ID to verify)"],
    },
    "who.json": {
        "institutions_inner_ring": None,
        "sources": ["To be compiled: DCLA cultural list, settlement houses, schools"],
    },
}


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    stamp = date.today().isoformat()
    for name, payload in CHAPTER_FILES.items():
        doc = {"generated": stamp, "status": "placeholder", **payload}
        (OUT_DIR / name).write_text(json.dumps(doc, indent=2) + "\n", encoding="utf-8")
        print(f"wrote {OUT_DIR / name}")


if __name__ == "__main__":
    main()
