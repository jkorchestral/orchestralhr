// Where the contact form posts.
//
// The site is static (GitHub Pages), so it cannot send mail itself. The form
// posts to Formspree, which emails the enquiry to Valerie.
//
// TO GO LIVE: create the form at formspree.io under Valerie's address, then
// replace the empty string below with the endpoint it gives you, e.g.
//   const FORMSPREE = "https://formspree.io/f/abcdwxyz";
// The endpoint is public by design (it sits in the page HTML), so it is safe
// to commit. With it blank, the form posts to the local test receiver instead
// (scripts/test-form-server.mjs) so the flow can be tried without sending mail.
const FORMSPREE = "https://formspree.io/f/xrpbqwbw";

export const FORM_ENDPOINT =
  FORMSPREE || import.meta.env.PUBLIC_FORM_ENDPOINT || "http://localhost:8787/test-form";

export const FORM_IS_LIVE = Boolean(FORMSPREE || import.meta.env.PUBLIC_FORM_ENDPOINT);

// Shown to the visitor if the send fails, so an enquiry is never simply lost.
export const FORM_TO = "Valerie@orchestralhr.ca";
