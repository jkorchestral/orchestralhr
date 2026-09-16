# Image credits

All photos are Unsplash under the [Unsplash License](https://unsplash.com/license): free for
commercial use, no attribution required. Each was individually checked to confirm it is **not**
an Unsplash+ (paid-tier) photo.

## Supplied by Jamie (2026-09-16)

| File | Used for | Photographer | Source |
|---|---|---|---|
| `hero-team-meeting.jpg` | Home hero - two colleagues in warm conversation | charlesdeluvio | [rRWiVQzLm7k](https://unsplash.com/photos/person-sitting-in-a-chair-in-front-of-a-man-rRWiVQzLm7k) |
| `band-bright-office.jpg` | Home band - two women working in a bright loft office | TheStandingDesk | [exbWFnMcoI0](https://unsplash.com/photos/two-women-sitting-on-a-bed-using-laptops-exbWFnMcoI0) |
| `about-advisory-meeting.jpg` | About 'Why Orchestral' - advisory meeting | Vitaly Gariev | [RbYg6fKSfcY](https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-RbYg6fKSfcY) |
| `about-band.jpg` | About band - collaborative working session | sarah b | [BJqzjxwQhK8](https://unsplash.com/photos/a-few-people-working-at-a-table-BJqzjxwQhK8) |
| `services-working-session.jpg` | Services hero - hands-on work at a laptop | Priscilla Du Preez 🇨🇦 | [nNMBa7Y1Ymk](https://unsplash.com/photos/two-people-sitting-at-a-table-with-laptops-nNMBa7Y1Ymk) |
| `services-planning.jpg` | Services section 03 - planning on a glass board | Blackcreek Corporate | [LMwJ8QZzDZA](https://unsplash.com/photos/man-in-black-shirt-holding-smartphone-LMwJ8QZzDZA) |
| `cta-backdrop.jpg` | CTA band background, darkened - conductor and orchestra | Kazuo ota | [tch7GUtzM4Q](https://unsplash.com/photos/a-conductor-and-orchestra-performing-in-a-concert-tch7GUtzM4Q) |

## Kept from the earlier selection

| File | Used for | Photographer | Source |
|---|---|---|---|
| `review-session.jpg` | Home, beside the pull-quote | Christina @ wocintechchat.com | [4PU-OC8sW98](https://unsplash.com/photos/4PU-OC8sW98) |
| `lunchroom-coffee-chat.jpg` | Home 'Who We Work With' | Maurice Sardison | [TTvedfJt08U](https://unsplash.com/photos/TTvedfJt08U) |
| `contact-conversation.jpg` | Contact band | The Jopwell Collection | [GB4ScXwxNGI](https://unsplash.com/photos/GB4ScXwxNGI) |

`valerie-khan.jpg` is Valerie's own portrait and is deliberately left unchanged.

## Important: these files are pre-cropped

Unlike the earlier batch, these were downloaded already cropped to their slot ratio (600x400 for
3:2 slots, 1200x500 for bands, 1600x900 for the CTA backdrop). Four of the supplied originals were
portrait, which would have wasted most of the file in a landscape slot. The upside is that what
ships is exactly what was previewed; the downside is there is no spare frame to shift into, so
`object-position` has little room to move. To re-crop, go back to the Unsplash source above.

## Sizes

| Class | Where | Size on screen |
|---|---|---|
| `.hero-figure` | Top right, beside a page headline | 25% of the row (~250px), 3:2 |
| `.split-figure` | Beside a block of copy | 25% of the row (~250px), 3:2 |
| `.band` | Centred break | max 600px wide, 12:5 |

**Band photos need a wide composition.** A band crops to 12:5, keeping roughly the middle 60% of
a normal photo's height. Check any candidate at 600x250 first: two earlier photos lost their
subjects' heads entirely at this ratio.

## Swapping in your own photos

Every slot uses `aspect-ratio` + `object-fit:cover`, so a replacement can be any size or shape and
will crop to fit. Drop the new file into `assets/` with the same filename. The CTA background is
set in `styles.css` (`.cta-band::before`), not in the HTML.
