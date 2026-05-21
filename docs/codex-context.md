# WP Indy Site Context for Codex

This file captures project context from the main ChatGPT planning chat so future Codex sessions can continue the WP Indy site without restarting the strategy.

## Current Situation

This is an existing Astro + Tailwind site for WP Indy. Do not rebuild it from scratch.

The site already has:

- a dark header/hero visual system
- a warm beige/off-white body background
- serif display typography
- clean sans body/nav typography
- a blue primary CTA
- a thin multicolor stripe accent
- a homepage
- a For Agencies page
- a Services structure
- a Work page with Alpine-powered filtering
- case study detail pages started
- an Indianapolis local SEO landing page started
- reusable data/content files from earlier Copilot work

Continue polishing and finishing the site. Do not restart the design.

## Business Positioning

WP Indy is the business site for Tommy Day, an Indianapolis-based senior WordPress developer.

Core positioning:

> Senior WordPress development for complex builds, custom plugins, API integrations, ecommerce logic, Commerce7 integration, and technical rescue work.

This should not feel like:

- a cheap freelancer site
- a generic web design agency
- a page-builder/template shop
- a broad marketing agency
- a SaaS startup landing page

It should feel:

- senior
- technical
- calm
- practical
- trustworthy
- editorial
- premium but not corporate
- a little vintage/software-inspired
- handmade/custom without being artsy or distracting

## Target Audiences

### Agencies

Small-to-mid-size creative, marketing, and digital agencies that need a senior WordPress developer for:

- white-label WordPress development
- custom plugin work
- API integrations
- WooCommerce customization
- Commerce7 / ecommerce integration
- debugging inherited builds
- rescue work
- overflow development
- technical implementation behind the scenes

Agency visitors should feel like Tommy can plug into their workflow without drama, hand-holding, or client-poaching.

### Growing Brands / Internal Teams

Businesses and marketing teams with WordPress sites that have outgrown basic plugins and need:

- custom functionality
- ecommerce logic
- third-party platform integration
- data sync
- admin tools
- reporting
- site cleanup
- maintainable technical implementation

### Indianapolis Businesses and Agencies

The site should lightly target Indianapolis WordPress searches, but without making the business feel local-only or cheap.

Use messaging like:

> Based in Indianapolis, working with agencies and teams anywhere.

## Brand Voice

Use plain, confident language.

Use "I" when talking about experience, process, and direct working style.

Use "WP Indy" when talking about the business, services, or brand.

Avoid fake large-agency "we" language unless referring to collaboration with a client/team.

Good language:

- "I help teams solve the WordPress work that gets complicated."
- "Custom plugins, API integrations, ecommerce logic, and inherited codebases."
- "Senior WordPress development for projects where the details matter."
- "White-label support when your agency needs another experienced developer in the room."
- "Clean, maintainable solutions that fit the business problem."
- "I'm usually brought in when the work is too custom, too integrated, or too important to hand to a generalist."

Avoid:

- "cutting-edge"
- "bespoke digital experiences"
- "unlock your potential"
- "seamless solutions"
- "leverage"
- "pixel-perfect"
- "affordable websites"
- "budget-friendly"
- "cheap"
- "passionate about helping brands"
- "full-service digital agency"
- generic agency filler copy

The site should imply senior-level value through specificity, judgment, complexity, and credibility, not by listing prices.

Do not add public pricing or hourly rates.

## Navigation

Use this nav:

- Services
- Work
- For Agencies
- About
- Contact
- Start a Project

"Start a Project" is the primary CTA.

The Services dropdown should include:

- Custom WordPress Plugin Development
- WordPress API Integrations
- WooCommerce Customization
- Commerce7 + WordPress Integration
- Debugging, Refactoring & Rescue Work

Do not put "Indianapolis WordPress Development" in the main nav. Link it from the footer and maybe About/Home.

## Site Map Goal

```txt
/
  Home

/services/
  Services overview

/services/custom-wordpress-plugin-development/
/services/wordpress-api-integrations/
/services/woocommerce-customization/
/services/commerce7-wordpress-integration/
/services/debugging-refactoring-rescue-work/

/work/
  Filterable work / case study index

/work/st-julian-commerce7-wordpress-build/
/work/ai-search-plugin-admin-reporting/
/work/custom-woocommerce-checkout-flow/
/work/woocommerce-loop-course-extension/
/work/finish-line-gutenberg-build/
/work/vetbloom-wordpress-woocommerce-loop-build/
/work/service-business-custom-checkout-flow/

/for-agencies/
/about/
/contact/
/indianapolis-wordpress-development/
```

## Homepage Goals

The homepage should quickly communicate:

- what WP Indy does
- who it helps
- why Tommy is senior/credible
- what kinds of technical WordPress problems he solves
- where to go next

Core homepage message:

> WordPress development, API integrations, and advanced plugin architecture for agencies and growing brands.

Preserve this idea even if the wording is refined.

The homepage should have:

- dark hero
- strong headline
- "Start a Project" CTA
- secondary "View Services" CTA
- section about senior support for agencies/in-house teams
- service teaser cards
- selected case studies/work preview
- agency CTA
- final CTA
- footer

## Work Page Goals

The Work page is a portfolio/case-study hybrid.

Use "Work" as the nav label.

Individual items can be called case studies.

Many projects are white-label, agency partner work, old/legacy, partially anonymized, custom technical pieces inside larger sites, or private/internal systems. Do not force every work item to behave like a traditional portfolio item with a public URL and screenshot.

Work page headline:

> Selected Work

Intro:

> Custom WordPress builds, plugins, integrations, and ecommerce systems from 15+ years of hands-on development.

The Work page should use Alpine-powered filtering with visible chip filters on desktop. Do not hide filters behind a button on desktop.

The filters are partly functional and partly positioning. Seeing "Custom Plugins," "API Integrations," "WooCommerce," "Commerce7," etc. immediately communicates what WP Indy does.

On mobile, filters can collapse behind a simple "Filter work" disclosure if needed, but do not use native select dropdowns unless absolutely necessary.

Recommended Work filters:

- All
- Site Builds
- Custom Plugins
- API Integrations
- WooCommerce
- Commerce7
- Checkout Flows
- Internal Tools
- Gutenberg

Stack filters:

- WordPress
- PHP
- JavaScript
- REST APIs
- ACF
- Gutenberg
- WooCommerce
- Commerce7
- Loop

Keep filter chips small, calm, and editorial:

- muted inactive state
- clear active state
- not oversized app-dashboard buttons

Move the private/anonymized disclaimer below the Work grid, not above it.

Disclaimer copy:

> Note: Some projects are anonymized or described without a public URL because they were completed as white-label agency work, involved private systems, or supported a larger client build.

Make that note visually quiet.

## Work Card Goals

Work cards should feel like case study previews, not generic blog cards.

Preferred card order:

- 16:10 featured image / mockup
- eyebrow/category
- title
- short summary
- tags
- "View Case Study" link

Featured images may be placeholders for now, but they should feel intentional, not like empty broken boxes.

Temporary placeholder direction:

- browser window style
- subtle UI blocks
- small project labels
- 16:10 ratio
- calm, technical, branded

Future image direction:

Use a consistent case-study image system with stylized technical mockups. These may later include custom scanned collage/technical ephemera.

## Case Study Detail Page Goals

Case study detail pages should be reusable and substantial, but not fake corporate case studies.

Do not invent metrics, conversion lifts, fake testimonials, or fake results.

Each detail page should include:

- dark hero
- Back to Work link
- category/eyebrow
- H1
- short summary
- tags
- optional 16:10 featured image/mockup on desktop
- Project snapshot
- Client
- Role
- Context
- Work
- Stack
- The problem
- plain English explanation
- What I built
- specific bullet list
- Why it mattered
- practical business/operational value without fake numbers
- Technical notes
- specific, credible implementation details
- Related services
- links to service pages
- final CTA
- "Need something similar?"
- "Start a Project"

The current case study hero may feel too empty if it is only a large dark section with a title. Prefer either reducing hero height or using a two-column desktop layout with content left and featured image/mockup right.

## Launch Case Studies

### St. Julian Commerce7 + WordPress Build

- Named client: St. Julian Winery
- Context: direct client project / ecommerce migration
- Role: lead WordPress developer
- Summary: custom WordPress rebuild and Commerce7 integration connecting product data, club functionality, event tickets, and storefront content.

Key work:

- Commerce7 product data integration
- WordPress product/category/taxonomy mapping
- ACF/custom fields
- event ticket handling
- club join button/template support
- storefront templates
- product availability/status logic

Related services:

- Commerce7 + WordPress Integration
- WordPress API Integrations
- Custom WordPress Plugin Development

### AI Search Plugin with Admin Reporting

- Client name withheld
- Context: custom plugin / AI search integration
- Summary: custom WordPress plugin integrating a client's proprietary AI search system into the site, with admin reporting and export tools.

Key work:

- frontend search integration
- external AI/search API connection
- WordPress admin reporting screen
- search activity visibility
- exports

Related services:

- Custom WordPress Plugin Development
- WordPress API Integrations

### Custom WooCommerce Checkout Flow

- Client name withheld
- Context: WooCommerce customization / checkout logic
- Summary: custom checkout path guiding users through service/add-on/payment choices before purchase.

Related services:

- WooCommerce Customization
- Custom WordPress Plugin Development

### WooCommerce Extension for Maestro + Loop

- Agency partner: Maestro + Loop
- Context: reusable WooCommerce extension
- Summary: custom WooCommerce extension allowing clients to import/sell Loop courses through WooCommerce and sync users/course data.

Use careful language:

- "Agency partner project with Maestro"
- "Built in partnership with Maestro"

Do not imply WP Indy owned the full agency/client relationship unless the content says so.

### Finish Line Gutenberg Build

- Named client: Finish Line
- Legacy project
- Context: content platform / Gutenberg build
- Summary: WordPress/Gutenberg build for a large retail content platform, focused on flexible publishing.

Avoid overclaiming current status.

### VetBloom WordPress + WooCommerce Loop Build

- Named client: VetBloom
- Agency partner: Maestro
- Summary: custom WordPress site build completed in partnership with Maestro, including theme development and integration of the custom WooCommerce + Loop course plugin.

### Service Business Custom Checkout Flow

- Client name withheld
- Context: custom checkout / service scheduling / API integration
- Summary: custom PHP/JS flow where users entered ZIP, saw eligible services/add-ons, selected payment plans, and completed a flow that created customers, invoices, and scheduled services through an external API.

Emphasize:

- ZIP lookup
- service availability logic
- add-ons
- payment plans
- API customer creation
- invoice creation
- scheduled service creation

## Services Overview Goals

The Services page should route visitors to the right service.

Include cards for:

- Custom WordPress Plugin Development
- WordPress API Integrations
- WooCommerce Customization
- Commerce7 + WordPress Integration
- Debugging, Refactoring & Rescue Work
- Custom WordPress Theme Builds

Theme builds can appear on Services overview, but should not be a main nav/dropdown focus.

## Individual Service Page Goals

Each service page should follow a reusable pattern:

- Hero
- What this is for
- Common problems I solve
- What I can build/fix
- Related work
- CTA

Service page tone should be specific and technical without becoming too dense.

## Indianapolis Local Page Goals

Page:

```txt
/indianapolis-wordpress-development/
```

This page is for local SEO, but it should not feel like a thin doorway page or cheap local website vendor page.

H1:

> Indianapolis WordPress development for complex sites, plugins, and integrations.

Intro:

> WP Indy is an Indianapolis-based WordPress development studio focused on custom plugins, API integrations, WooCommerce customization, Commerce7 integration, and technical support for agencies and growing teams.

The page should:

- mention Indianapolis naturally
- target "Indianapolis WordPress development" and "Indianapolis WordPress developer"
- emphasize senior technical work
- include service cards
- include selected related work cards
- include a "Local but not limited" section
- include a strong final CTA

Do not add this page to main nav. Footer is the right place.

Local page positioning:

- local, but not local-only
- available for local project conversations when useful
- most development happens remotely through GitHub, staging sites, email, project management tools, and documentation

Avoid:

- keyword stuffing
- "affordable local web design"
- sounding like a generic local SEO page

## Footer Goals

The site needs a reusable footer component:

```txt
src/components/Footer.astro
```

Footer should be included globally in the layout.

Footer should be a dark end-cap matching the header/hero, not beige.

Include:

- WP Indy logo/wordmark
- short brand blurb
- location line
- services links
- site links
- local SEO page link
- contact email
- Start a Project CTA
- copyright

Footer copy:

> Senior WordPress development for custom plugins, API integrations, ecommerce logic, and technical rescue work.

Location line:

> Based in Indianapolis, working with agencies and teams anywhere.

Email:

> tommy@wpindy.com

Footer columns:

Services:

- Custom WordPress Plugins -> /services/custom-wordpress-plugin-development/
- API Integrations -> /services/wordpress-api-integrations/
- WooCommerce Customization -> /services/woocommerce-customization/
- Commerce7 + WordPress -> /services/commerce7-wordpress-integration/
- Debugging & Rescue Work -> /services/debugging-refactoring-rescue-work/

Site:

- Work -> /work/
- For Agencies -> /for-agencies/
- About -> /about/
- Contact -> /contact/

Local:

- Indianapolis WordPress Development -> /indianapolis-wordpress-development/

Footer bottom:

- © 2026 WP Indy
- optional subtle "Built with Astro."

Do not invent phone number, physical address, social profiles, certifications, or legal links.

## Custom Collage / Editorial Imagery Direction

Tommy may later create scanned collage-style imagery using vintage technical/computer/office ephemera.

Examples:

- old computers
- keyboards
- CRTs
- manuals
- disks
- cables
- diagrams
- interface fragments
- technical/office objects layered over color blocks

For now:

- create optional, tasteful image slots/placeholders where useful
- do not use stock photos
- do not generate final artwork
- do not let placeholders make the site look unfinished
- do not overdo it

The visual concept should feel like:

- editorial technical illustration
- vintage software/computing ephemera
- handmade but polished
- subtle personality

It should not feel:

- goofy
- chaotic
- overly artsy
- like an art portfolio
- distracting from the senior WordPress positioning

Suggested component if useful:

```txt
src/components/EditorialImageSlot.astro
```

Behavior:

- if src is provided, render image
- if no src, render tasteful placeholder or nothing depending on page context
- support future images from public/images/editorial/

Suggested future folder:

```txt
public/images/editorial/
```

Suggested future filenames:

- wpindy-vintage-computer.webp
- wpindy-keyboard-collage.webp
- wpindy-api-diagram-collage.webp
- wpindy-commerce-collage.webp
- wpindy-debugging-tools-collage.webp
- wpindy-about-collage.webp

Use image slots sparingly:

- maybe 1 per major section
- maybe on About
- maybe on service pages
- maybe in CTA/section accents
- not everywhere

The About page can lightly mention Tommy also makes analog collage/art, but keep it secondary.

Possible About copy:

> Outside of development, I make analog collage and other visual work. That background shows up here mostly as a bias toward sites that feel custom, intentional, and a little more human than a default agency template.

Do not turn WP Indy into an art site.

## About Page Goals

About should establish:

- Tommy is a real senior developer
- 15+ years of WordPress experience
- mix of freelance and agency background
- comfortable with agencies and direct clients
- based in Indianapolis
- works remotely
- practical, calm, clear communication
- specializes in complex WordPress builds, integrations, ecommerce, plugins, and cleanup

Can include a light personal note about analog collage/creative work, but keep it relevant to how he approaches custom web work.

## Contact Page Goals

Contact should be simple.

Headline:

> Tell me what you're working on.

Copy:

> Whether you need a custom plugin, an API integration, WooCommerce help, Commerce7 support, or senior backup for an agency project, send over the details and I'll take a look.

Suggested fields:

- Name
- Email
- Company / Agency
- Website
- Project type
- Timeline
- Message

Do not overcomplicate the form for launch.

No public pricing.

## Design Notes

Keep:

- dark hero/header
- warm beige/off-white sections
- serif display font
- clean sans body/nav
- multicolor stripe accent
- blue CTA button
- white/off-white cards
- soft borders
- restrained shadows
- generous spacing
- editorial feel

Avoid:

- generic Tailwind SaaS look
- too many bright colors
- stock-photo style layouts
- excessive decorative blobs
- overly playful design
- dense app-dashboard UI

## Technical Notes

This is an Astro + Tailwind site.

Use existing components and layout where possible.

Do not add unnecessary dependencies.

Use Astro components for reusable UI.

Use Alpine only where interactivity is useful, mainly Work filters.

Static data files are preferred:

```txt
src/data/services.ts
src/data/work.ts
```

Keep the site static and Cloudflare Pages-friendly.

Do not add a CMS, database, or server backend.

## Final Priority List

If continuing the site, prioritize:

1. Make sure global layout/header/footer are solid.
2. Finish Services overview and service detail pages.
3. Polish Work index and case study detail template.
4. Finish About and Contact.
5. Polish Indianapolis landing page.
6. Add footer links and internal linking.
7. Make placeholders for future case study/editorial images feel intentional.
8. Check responsive layouts.
9. Check all links.
10. Check page titles/meta descriptions.
