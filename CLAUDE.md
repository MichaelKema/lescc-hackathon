# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Current state

The repo is at scaffold stage. Tracked content: `README.md` (the project spec), plus empty `data/` and `notebooks/` folders kept with `.gitkeep`. There is no app code, no notebooks, no scripts, no `requirements.txt`, no test suite, and no lint or build config. Do not assume any of these exist.

## Commands

None are defined yet. The README's Setup section lists planned Python tooling (`venv`, `pip install -r requirements.txt` with pandas, numpy, jupyter, matplotlib, and `jupyter lab`), but none of it is in the repo. Add the files before documenting or running those commands.

## Architecture (planned, per README.md)

Read `README.md` before making design decisions. It is the source of truth for scope. Two linked deliverables:

1. **Storytelling app**: scroll-driven, 311 Wrapped-style narrative built from 311 service-request data for the Allen Street Mall area. Static-first: the built app reads pre-computed JSON and never queries raw 311 data at page load.
2. **Model**: Jupyter-based comparison of a baseline scenario (food truck concession) against a proposal scenario (Cultural Arts Center), measured as incremental value (proposal minus baseline) on revenue, social capital, and cultural capital over the 25-year license term.

Data flow is one-directional: raw data feeds the model, the model writes processed outputs, and the app reads only those processed outputs. Keep the app decoupled from raw data.

## Constraints from the spec

- Raw inputs in `data/` should not be edited in place.
- Revenue comparables in the README are café and parkhouse concessions, not food trucks. Do not present them as food truck benchmarks.
- The food truck revenue baseline, social and cultural capital proxies, museum assumptions, and study-area boundary are unresolved. Mark them as assumptions with sources; do not invent values.
- The McCarren Parkhouse row labeled `6/2023–5/2023` is a source typo. Flag it rather than using it silently.
