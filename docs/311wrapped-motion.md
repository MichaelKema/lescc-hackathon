# 311 Wrapped: motion timing (measured from motion.mov)

Source: local screen recording, `motion.mov` (69 s, 2438×1702, 60 fps, H.264). The file is gitignored. Values below are measured from the video. They are pattern values for our own CSS. We do not copy their visuals or content.

## Sound

- The audio track is effectively silent: mean −50.8 dB, max −19.4 dB (ffmpeg volumedetect).
- Decision for us: no sound by default. Any sound must be opt-in.

## Card pacing

- Card changes land about every 3 s (scene-change timestamps: 5.0, 8.1, 10.8, 13.6, 16.2, 19.2, 21.8, 24.8, 27.8, 31.3, 35.4, 39.5, 42.4, 51.9, 53.9, 57.3, 60.5, 64.1, 65.0 s).
- Gaps of about 8–10 s between 42 s and 52 s show a longer hold on one card.

## Motion per transition

Method: 30 fps frame-difference on a 160 px grayscale copy. Motion counts as active above a threshold of 0.3. Accuracy is about ±0.1 s.

| Start (s) | Length (s) | Note |
|---|---|---|
| 5.03 | 1.77 | Intro → next card |
| 7.53 | 0.23 | Small settle |
| 8.07 | 1.67 | Volume: number counts up, map zooms out |
| 10.77 | 0.93 | Card change |
| 13.63 | 0.87 | Card change |
| 16.17 | 0.90 | Card change |
| 19.17 | 0.93 | Card change |
| 21.77 | 0.57 | Card change |
| 24.60 | 1.20 | Card change |
| 27.83 | 1.17 | Card change |
| 31.33 | 0.23 | Small settle |
| 31.93 | 0.30 | Small settle |
| 35.40 | 1.50 | Card change |
| 39.47 | 0.53 | Card change |
| 42.40 | 0.83 | Card change |
| 51.93 | 0.87 | Card change |
| 53.87 | 1.03 | Card change |
| 57.27 | 1.67 | Card change |
| 60.53 | 1.63 | Card change |
| 64.07 | 1.83 | Card change |

Typical card transition: about 0.9 s of motion, followed by a hold of about 2 s.

## What moves (verified frames)

Contact sheet of 8 frames at 0.3 s intervals, 7.9–10.3 s (volume card):
1. **Intro (dark background, teal shape):** a map outline and a headline. Dark theme.
2. **Volume (yellow background):** the big number counts up with a rolling-digit effect, from 00,000 to 14,957 in about 1.5 s.
3. **Map:** starts zoomed in on one area and zooms out to the citywide choropleth over the same window as the count-up.
4. **Bar chart** at the bottom grows in during the count-up (direction not verified).
5. **Progress bar** at the top: a segment appears to fill as the card advances (not verified frame by frame).
6. **Pin/icon** on the map appears after the zoom settles.

Not yet verified: the easing curve of each move, and the animation on the other 17 cards. Those need the same frame sheets.

## Patterns to build

- **Count-up numbers:** roll digits from 0 to the value over about 1.5 s. Matches the "headline number" rule in the README.
- **Map zoom:** animate from the local area out to the wider view. Use the same time window as the count-up so the story reads as one motion.
- **Card hold:** about 2 s of stillness after each transition, so the reader can read the card.
- **Pacing:** about 0.9 s motion per transition. Keep to 150–350 ms for small UI moves, 0.9 s or less for card changes.
- **Reduced motion:** all of the above turns off under `prefers-reduced-motion`. Show final values immediately.

## Next steps

1. Frame sheets for each of the other transitions, to confirm the easing and the order of moves per card.
2. Use the count-up and zoom timings above as the starting values in `app/src/App.css`.
