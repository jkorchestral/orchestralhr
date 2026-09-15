# Image credits

All photos come from Unsplash under the [Unsplash License](https://unsplash.com/license):
free for commercial and non-commercial use, no permission or attribution required. Each was
individually checked to confirm it is **not** an Unsplash+ (paid-tier) photo.

| File | Used for | Photographer | Source |
|---|---|---|---|
| `hero-team-meeting.jpg` | Homepage hero, beside the headline (displays ~480px) | LinkedIn Sales Solutions | [IjkIOe-2fF4](https://unsplash.com/photos/four-women-chatting-at-cafe-table-IjkIOe-2fF4) |
| `review-session.jpg` | Homepage pull-quote, small accent left (displays ~310px) | Christina @ wocintechchat.com M | [4PU-OC8sW98](https://unsplash.com/photos/two-women-taking-to-each-other-while-holding-pens-4PU-OC8sW98) |
| `band-bright-office.jpg` | Homepage contained band (displays ~900px) | Elena Golubeva | [uFL-uZ_qDJw](https://unsplash.com/photos/a-diverse-group-of-people-in-a-modern-meeting-room-uFL-uZ_qDJw) |
| `lunchroom-coffee-chat.jpg` | Homepage 'Who We Work With', small accent right | Maurice Sardison | [TTvedfJt08U](https://unsplash.com/photos/three-people-drinking-tea-in-kitchen-TTvedfJt08U) |
| `about-open-office.jpg` | About 'Why Orchestral', small accent right | AllGo - An App For Plus Size People | [--tCTIja3_4](https://unsplash.com/photos/two-smiling-woman-inside-room---tCTIja3_4) |
| `about-band.jpg` | About contained band | Derek Coleman | [jIKxRCInAFA](https://unsplash.com/photos/a-group-of-people-sitting-around-a-table-jIKxRCInAFA) |
| `services-working-session.jpg` | Services contained band | Creatopy | [sgIgF8xKY8o](https://unsplash.com/photos/a-group-of-people-sitting-around-a-laptop-computer-sgIgF8xKY8o) |
| `coaching-conversation.jpg` | Services 'How Support Is Delivered', small accent left | Centre for Ageing Better | [K8uzzu6wBKc](https://unsplash.com/photos/woman-talking-to-person-across-table-K8uzzu6wBKc) |
| `contact-conversation.jpg` | Contact contained band | The Jopwell Collection | [GB4ScXwxNGI](https://unsplash.com/photos/a-woman-sitting-at-a-table-talking-to-another-woman-GB4ScXwxNGI) |
| `cta-backdrop.jpg` | CTA band background, darkened (all pages) | Ninthgrid | [wCfWNod54JU](https://unsplash.com/photos/a-group-of-people-standing-around-a-table-wCfWNod54JU) |

## How the layout works

Three photo sizes, all set in `styles.css`:

| Class | Where | Size on screen |
|---|---|---|
| `.hero-figure` | Homepage headline | ~480px wide, 3:2 |
| `.split-figure` | Beside a block of copy | ~30% of the row, 3:2 |
| `.band` | One per page, centred | max 900px wide, 5:2 |

Side photos alternate: add `split--media-first` to the `.split` div to move the photo to the
left, or leave it off for the right. Bands are capped at 900px and never run edge-to-edge.

## Swapping in your own photos

Every slot uses `aspect-ratio` + `object-fit:cover`, so a replacement can be any size or shape
and will crop to fit. Drop the new file into `assets/` with the same filename; nothing else
needs to change.

If a crop cuts off the wrong part of the frame, add `object-position` to that one `<img>`:

```html
<img class="photo" src="assets/hero-team-meeting.jpg" style="object-position: center 30%" ...>
```

Suggested exports: ~1300px wide for bands, ~1000px for the hero, ~700px for the small side
photos, JPEG quality 70-76. The CTA background is set in `styles.css` (`.cta-band::before`),
not in the HTML.
