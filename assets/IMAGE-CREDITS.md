# Image credits

All photos come from Unsplash under the [Unsplash License](https://unsplash.com/license):
free for commercial and non-commercial use, no permission or attribution required. Each was
individually checked to confirm it is **not** an Unsplash+ (paid-tier) photo.

| File | Used for | Photographer | Source |
|---|---|---|---|
| `hero-team-meeting.jpg` | Homepage hero, beside headline (~250px, 3:2) | LinkedIn Sales Solutions | [IjkIOe-2fF4](https://unsplash.com/photos/four-women-chatting-at-cafe-table-IjkIOe-2fF4) |
| `services-working-session.jpg` | Services hero, beside headline (~250px, 3:2) | LinkedIn Sales Solutions | [AhirGl0nhww](https://unsplash.com/photos/man-and-woman-sitting-at-table-AhirGl0nhww) |
| `band-bright-office.jpg` | Homepage band under 'How We Work' (max 600px, 12:5) | Elena Golubeva | [uFL-uZ_qDJw](https://unsplash.com/photos/a-diverse-group-of-people-in-a-modern-meeting-room-uFL-uZ_qDJw) |
| `about-band.jpg` | About band, after 'What Sets Orchestral Apart' | The Jopwell Collection | [rO7eGpwfHbE](https://unsplash.com/photos/a-group-of-people-sitting-around-a-living-room-rO7eGpwfHbE) |
| `contact-conversation.jpg` | Contact band | The Jopwell Collection | [GB4ScXwxNGI](https://unsplash.com/photos/a-woman-sitting-at-a-table-talking-to-another-woman-GB4ScXwxNGI) |
| `review-session.jpg` | Homepage pull-quote, accent left (~250px) | Christina @ wocintechchat.com M | [4PU-OC8sW98](https://unsplash.com/photos/two-women-taking-to-each-other-while-holding-pens-4PU-OC8sW98) |
| `lunchroom-coffee-chat.jpg` | Homepage 'Who We Work With', accent right (~250px) | Maurice Sardison | [TTvedfJt08U](https://unsplash.com/photos/three-people-drinking-tea-in-kitchen-TTvedfJt08U) |
| `about-open-office.jpg` | About 'Why Orchestral', accent right (~250px) | AllGo - An App For Plus Size People | [--tCTIja3_4](https://unsplash.com/photos/two-smiling-woman-inside-room---tCTIja3_4) |
| `coaching-conversation.jpg` | Services 'How Support Is Delivered', accent left | Centre for Ageing Better | [K8uzzu6wBKc](https://unsplash.com/photos/woman-talking-to-person-across-table-K8uzzu6wBKc) |
| `cta-backdrop.jpg` | CTA band background, darkened (all pages) | Ninthgrid | [wCfWNod54JU](https://unsplash.com/photos/a-group-of-people-standing-around-a-table-wCfWNod54JU) |

## Sizes

| Class | Where | Size on screen |
|---|---|---|
| `.hero-figure` | Top right, beside a page headline | 25% of the row (~250px), 3:2 |
| `.split-figure` | Beside a block of copy | 25% of the row (~250px), 3:2 |
| `.band` | Centred break | max 600px wide, 12:5 |

Hero and side photos are deliberately the same size, so the pages stay balanced top to bottom.

## Layout per page

```
Home      hero photo top right  ->  quote photo left  ->  band  ->  checklist photo right
About     'Why Orchestral' photo right (beside the opening paragraphs)  ->  band
Services  hero photo top right  ->  'How Support Is Delivered' photo left
Contact   band
```

Side photos alternate: add `split--media-first` to the `.split` div to put the photo on the
left, or leave it off for the right.

**Band photos need a wide composition.** A band crops to 12:5, keeping roughly the middle 60%
of a normal photo's height. Pick shots where people have headroom and are spread across the
frame, or heads get cut off. Check a candidate at 600x250 before committing to it.

## Swapping in your own photos

Every slot uses `aspect-ratio` + `object-fit:cover`, so a replacement can be any size or shape
and will crop to fit. Drop the new file into `assets/` with the same filename.

If a crop cuts off the wrong part, add `object-position` to that one `<img>` — lower percentages
show more of the top of the frame:

```html
<img class="photo" src="assets/about-band.jpg" style="object-position: center 35%" ...>
```

Suggested exports: ~900px wide for bands, ~600px for hero and side photos, JPEG quality 72-78.
The CTA background is set in `styles.css` (`.cta-band::before`), not in the HTML.
