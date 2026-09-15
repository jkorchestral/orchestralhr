# Image credits

All photos below come from Unsplash and are used under the
[Unsplash License](https://unsplash.com/license): free for commercial and non-commercial use,
no permission or attribution required. Each was checked to confirm it is **not** an Unsplash+
(paid-tier) photo. Credits are recorded here as a courtesy and so any photo can be traced or swapped.

| File | Used for | Photographer | Source |
|---|---|---|---|
| `hero-team-meeting.jpg` | Homepage hero — four colleagues in warm, engaged conversation | LinkedIn Sales Solutions | [IjkIOe-2fF4](https://unsplash.com/photos/four-women-chatting-at-cafe-table-IjkIOe-2fF4) |
| `band-bright-office.jpg` | Homepage full-bleed band — relaxed meeting, floor-to-ceiling windows | Elena Golubeva | [uFL-uZ_qDJw](https://unsplash.com/photos/a-diverse-group-of-people-in-a-modern-meeting-room-uFL-uZ_qDJw) |
| `lunchroom-coffee-chat.jpg` | Homepage 'Who We Work With' — coffee break chat in the office kitchen | Maurice Sardison | [TTvedfJt08U](https://unsplash.com/photos/three-people-drinking-tea-in-kitchen-TTvedfJt08U) |
| `cta-backdrop.jpg` | CTA band background, darkened — all pages | Ninthgrid | [wCfWNod54JU](https://unsplash.com/photos/a-group-of-people-standing-around-a-table-wCfWNod54JU) |
| `services-working-session.jpg` | Services page band — working session, easy smiles | Creatopy | [sgIgF8xKY8o](https://unsplash.com/photos/a-group-of-people-sitting-around-a-laptop-computer-sgIgF8xKY8o) |
| `coaching-conversation.jpg` | Services 'Coaching & L&D' — one-to-one advisory conversation | Centre for Ageing Better | [K8uzzu6wBKc](https://unsplash.com/photos/woman-talking-to-person-across-table-K8uzzu6wBKc) |
| `about-open-office.jpg` | About page band — two colleagues laughing in a bright open office | AllGo - An App For Plus Size People | [--tCTIja3_4](https://unsplash.com/photos/two-smiling-woman-inside-room---tCTIja3_4) |
| `contact-conversation.jpg` | Contact page — two people mid-conversation by a window | The Jopwell Collection | [GB4ScXwxNGI](https://unsplash.com/photos/a-woman-sitting-at-a-table-talking-to-another-woman-GB4ScXwxNGI) |

## Swapping in your own photos

Every slot is sized by CSS (`aspect-ratio` + `object-fit:cover`), so a replacement can be any
size or shape and will still crop to fit. Drop the new file into `assets/` using the same
filename and nothing else needs to change.

If the crop cuts off the wrong part of the frame, add `object-position` to that one `<img>`:

```html
<img class="photo" src="assets/hero-team-meeting.jpg" style="object-position: center 30%" ...>
```

Suggested exports: JPEG, ~1600px wide for the full-width bands, ~1100px for the side-by-side
images, quality 70-75. Keep each file under roughly 250 KB.

The CTA band photo is set in `styles.css` (`.cta-band::before`), not in the HTML.
