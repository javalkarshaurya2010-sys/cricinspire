# CricInspire

A website that inspires US teens (13-18) to discover cricket, teaches the game, and gives youth-focused media coverage. Tagline: "Your cricket journey starts here."

## Audience and tone
- Primary: teens 13-18. Secondary: parents, coaches, teachers.
- Energetic, welcoming, assumes no cricket knowledge. Compare to baseball/softball where helpful. Never condescending.
- Sentence case for headings and buttons. No "simply", "just", "easy".

## Tech stack
- **Astro** - static site framework; pages and layouts
- **Markdown/MDX + Astro content collections** - stories, lessons, teams as typed files in `src/content/`
- **Tailwind CSS** - styling; design tokens in `tailwind.config`
- **TypeScript** - typed content schemas and components
- **Hosted form service (Formspree or Netlify Forms)** - Teen Reporter submissions, moderated before publishing
- **Vercel or Netlify** - hosting and deploys from `main`
- **Later:** Decap CMS or Sanity (editor for teen contributors), Pagefind (search)

## Structure
```
src/
  pages/          index, learn/, stories/, teams/, la28, reporter, about
  layouts/        BaseLayout, ArticleLayout
  components/     Nav, Footer, StoryCard, LessonCard, TeamCard, FilterPills, Quiz
  content/
    config.ts     collection schemas (zod)
    lessons/      Cricket 101 lessons (.mdx)
    stories/      profiles, match reports, explainers (.md)
    teams/        youth clubs/programs (.json or .md)
public/           images, favicon, og images
```

## Content schemas
- **lesson:** title, order, readMinutes, summary, quiz (question, options, answer)
- **story:** title, author, authorAge (display only if consented), type (profile|report|explainer|quiz), date, state, image, consent (bool), draft
- **team:** name, city, state, zip, ageGroups[], level (beginner|competitive), girls (bool), url, verified (bool), lastChecked

## Design system
- Dark navy base `#0C1B33`; card navy `#1B3358`; gold accent `#FAC775` for primary actions and active nav; blue `#185FA5`, green `#0F6E56`, coral `#993C1D`, red `#E24B4A` for tiles and tags.
- Pill-shaped buttons and tags, rounded cards (14px), bold large headlines.
- Mobile-first. WCAG AA contrast, keyboard navigable, alt text on all images.
- Keep light-theme support in mind; use CSS variables/Tailwind tokens, not hardcoded colors in components.

## Pages
Home, Cricket 101 (8 lessons, progress badges in localStorage), Glossary (searchable), Cricket vs baseball, Gear, Drills, Quizzes, Stories, Find a Team, Where to watch, Events, Road to LA28 (countdown), Teen Reporter, My journey, About/Safety, Search (Pagefind, built by `npm run build`).

## Forms
Reporter, team and event forms use `MailtoForm.astro`: they open the user's email app addressed to the founder. No server, no data stored. Swap for Formspree or Netlify Forms when a real inbox/moderation flow exists.

## Not done yet (needs real input)
Real photos, custom domain, real verified teams, player profiles (need consent), newsletter, analytics, light theme, OG share image, `site` URL in `astro.config.mjs`.

## Rules for safety and legal (non-negotiable)
- All teen submissions are moderated before publishing. Nothing auto-publishes.
- Parental consent required before showing a minor's name, age, or photo. Use first name + age only, with consent flag in the story frontmatter.
- No personal data collected from under-13s (COPPA). No ad or tracking scripts aimed at minors; use privacy-friendly analytics only.
- Do not re-host match footage or copyrighted photos; link or embed official sources.
- Team listings must be verified before `verified: true` shows publicly.
- Unverified claims: don't state stats (fan counts, growth figures) without a cited source. Placeholder data must be marked as sample.

## Facts to keep accurate
- Cricket returns to the Olympics at LA28 as T20, six teams per gender, at Pomona, July 14-30, 2028.
- Olympic eligibility requires US citizenship; ICC eligibility uses residency rules.
- USA Cricket's youth pathway is still being built and the org is in governance turmoil; avoid presenting it as settled.

## Commands
```bash
npm install
npm run dev       # local dev server
npm run build     # production build
npm run preview   # preview the build
```

## Conventions
- Components are small, typed, and Tailwind-styled. Prefer content in Markdown over hardcoded text.
- Add new content types via `src/content/config.ts` first.
- Check mobile width and Lighthouse (aim 90+) before shipping a page.
- Commit messages: short, imperative.
