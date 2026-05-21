Yep. I’d do **three Markdown files** instead of one giant blob:

```txt
COPILOT_CONTEXT.md
CONTENT_PLAN.md
WORK_CASE_STUDIES.md
```

Put them in the project root or in a `/docs/` folder. My vote: project root for now so Copilot notices them immediately.

Here’s the full starter set.

---

## `COPILOT_CONTEXT.md`

````md
# WP Indy Copilot Context

## Project status

This Astro + Tailwind site already exists. Do not rebuild it from scratch.

Current known structure:

```txt
src/
  components/
    Header.astro
  layouts/
    Layout.astro
  pages/
    index.astro
    for-agencies.astro
  styles/
    global.css
````

The site currently has a dark premium hero, a warm beige section, a small multicolor stripe accent, serif display typography, and a clean technical/editorial style.

The goal is to finish the WP Indy website this week by expanding the existing site into a complete marketing site with service pages, a work/case-study section, and refined brand/content consistency.

## Brand summary

WP Indy is a senior independent WordPress development studio focused on complex WordPress work:

* custom WordPress plugin development
* API integrations
* WooCommerce customization
* Commerce7 + WordPress integration
* debugging, refactoring, and rescue work
* white-label agency support
* custom theme builds when needed

WP Indy should not feel like a cheap freelancer site, a generic web design agency, or a template-install WordPress shop.

Position the business as a senior technical partner for agencies and growing brands that need custom WordPress work done cleanly.

## Core positioning

WP Indy helps agencies, marketing teams, and growing businesses solve WordPress work that gets too custom, too integrated, too brittle, or too risky for a generalist.

The site should communicate:

* 15+ years of hands-on WordPress experience
* senior-level technical judgment
* comfort with agency workflows and white-label work
* ability to work directly with growing brands
* deep experience with custom plugins, integrations, ecommerce, and inherited codebases
* calm, practical communication
* strong technical ownership without unnecessary process bloat

## Primary audiences

### 1. Agencies

Small-to-mid-sized creative, marketing, and digital agencies that need a senior WordPress developer for:

* white-label development
* complex backend functionality
* custom plugin work
* API integrations
* WooCommerce edge cases
* inherited site cleanup
* overflow development
* technical rescue work

Agency visitors should feel that WP Indy can help without creating client drama, overstepping, or needing hand-holding.

### 2. Growing brands and marketing teams

Businesses with WordPress sites that have outgrown basic pages and plugins. They may need:

* custom functionality
* ecommerce customization
* platform integrations
* data sync
* internal admin tools
* performance improvements
* checkout logic
* content architecture cleanup

### 3. Niche ecommerce / winery clients

Especially wineries and DTC brands using Commerce7 and WordPress.

Commerce7 + WordPress is a strategic niche and should be treated as a strong service area.

## Voice and tone

Use a direct, experienced, calm, practical voice.

The copy should feel like it was written by a senior developer who has seen messy real-world projects and knows how to solve them.

Use plain language. Avoid generic agency fluff.

### Good tone examples

* “Senior WordPress development for projects where the details matter.”
* “I’m usually brought in when the work is too custom, too integrated, or too important to hand to a generalist.”
* “Custom plugins, API integrations, ecommerce logic, and inherited codebases.”
* “White-label support when your team needs another experienced developer in the room.”
* “Clean, maintainable solutions that fit the business problem.”
* “I help teams stabilize fragile builds, connect systems, and make WordPress work the way the business actually needs it to work.”

### Avoid

Do not use phrases like:

* cutting-edge
* bespoke digital experiences
* unlock your potential
* seamless solutions
* leverage
* robust, unless truly necessary
* passionate about helping brands
* pixel-perfect
* affordable websites
* budget-friendly
* cheap
* quick websites
* simple WordPress sites

Do not overhype.

Do not write like a SaaS landing page.

Do not write as a fake large agency.

## First-person vs company voice

Use “I” when talking about experience, process, judgment, and direct working relationships.

Use “WP Indy” when talking about services, pages, or the business as a brand.

Avoid fake “we” language unless referring to collaboration between WP Indy and the client/team.

Good:

> I work with agencies and in-house teams when WordPress projects need senior technical support.

Also good:

> WP Indy focuses on custom WordPress development, API integrations, and complex ecommerce functionality.

Avoid:

> Our team of experts delivers transformative digital experiences.

## Visual direction

Keep the current design direction.

Style should feel:

* premium
* technical
* calm
* editorial
* slightly retro/vintage software-inspired
* warm but not cute
* polished but not corporate

Current visual ingredients:

* dark hero
* warm beige/off-white content sections
* serif display type
* clean sans body/nav
* blue primary CTA
* red underline/highlight accent
* thin multicolor stripe accent
* soft cards
* rounded corners
* restrained shadows
* lots of breathing room

Do not make the design overly colorful, gimmicky, or “startup cartoon.”

## Main navigation

Use this top-level nav:

```txt
Services ▾
Work
For Agencies
About
Contact
Start a Project
```

`Start a Project` should remain the primary CTA.

## Services dropdown

Use these service items:

```txt
Custom WordPress Plugin Development
Purpose-built functionality beyond off-the-shelf plugins.

WordPress API Integrations
Sync data cleanly between WordPress and external systems.

WooCommerce Customization
Checkout flows, subscription logic, renewals, and edge cases.

Commerce7 + WordPress Integration
Advanced storefront work for wineries and DTC brands.

Debugging, Refactoring & Rescue Work
Stabilize fragile builds and clean up inherited codebases.
```

Do not put “Custom Theme Builds” in the main dropdown for now. Theme work can appear on the services overview, work filters, and relevant case studies, but it should not be the main positioning.

## Final sitemap

Build toward this structure:

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
  Filterable case study / portfolio hybrid

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
```

## Page implementation guidance

Use existing components and styles where possible.

Do not rewrite the site from scratch.

Prefer reusable Astro components for repeated page sections:

* page hero
* service card
* case study card
* tag/pill
* CTA block
* section eyebrow
* feature grid
* work filter controls
* related services section

Alpine.js can be used for the filterable Work page.

Do not over-engineer a CMS. Static data files are fine.

Suggested data approach:

```txt
src/data/services.ts
src/data/work.ts
```

or similar.

## Technical stack assumptions

This is an Astro site using Tailwind.

Use Astro pages/components first.

Use Alpine.js only where interactivity is useful, especially on `/work/`.

Keep the site static and Cloudflare Pages-friendly.

Do not introduce a database.

Do not add a CMS unless specifically requested.

Do not add unnecessary dependencies.

## CTA language

Primary CTA:

```txt
Start a Project
```

Secondary CTA examples:

```txt
View Services
View Work
Talk Through a Build
See Related Work
```

Contact page language should be lower-pressure:

```txt
Tell me what you’re working on.
```

Avoid overly aggressive sales language.

## Pricing

Do not list public prices or hourly rates.

Instead, imply senior-level value through language around risk, complexity, judgment, and ownership.

Good copy direction:

* “Senior WordPress development for projects where the details matter.”
* “A fit for custom functionality, integrations, ecommerce logic, and technical cleanup — not basic commodity site builds.”
* “For agencies, I can step in as a white-label senior developer without needing hand-holding or creating client drama.”

## Indianapolis / local positioning

Mention Indianapolis lightly.

The name WP Indy implies local roots, but the site should not position the business as local-only.

Good framing:

> Based in Indianapolis, working with agencies and teams anywhere.

Do not make the homepage primarily about Indianapolis SEO right now.

## Important content priorities

The site should emphasize these types of work:

* complex WordPress builds
* custom plugins
* WordPress + external API integrations
* WooCommerce checkout and subscription logic
* Commerce7 integrations
* agency white-label development
* inherited code cleanup
* admin tools and reporting interfaces
* Gutenberg/content architecture work

The site should not emphasize:

* cheap brochure sites
* page builders
* “any small business website”
* generic design services
* logo/branding work
* social media marketing

````

---

## `CONTENT_PLAN.md`

```md
# WP Indy Content Plan

## Site goal

The WP Indy site should convince agencies and growing brands that WP Indy is a senior technical WordPress partner for complex builds, integrations, plugins, ecommerce logic, and inherited codebases.

The site should make visitors think:

> This is the person I bring in when WordPress gets complicated.

## Core message

WP Indy provides senior WordPress development for custom functionality, API integrations, WooCommerce logic, Commerce7 storefronts, debugging, refactoring, and white-label agency support.

## Homepage

### Goal

Quickly explain what WP Indy does, who it helps, and why the work is senior-level.

### Suggested homepage sections

1. Hero
2. Senior WordPress support section
3. Core services teaser
4. Selected work teaser
5. For agencies teaser
6. Commerce7 / ecommerce niche teaser
7. Final CTA

### Current hero direction

The current hero is close. Keep the general structure.

Current idea:

```txt
WordPress development,
API integrations
& advanced plugin architecture
for agencies and growing brands.
````

Possible refined version:

```txt
Senior WordPress development
for custom plugins, API integrations
& complex builds.
```

Subline direction:

```txt
15+ years of hands-on WordPress problem-solving, from custom functionality and technical architecture to complex integrations and advanced implementation.
```

CTA:

```txt
Start a Project
View Services
```

### Homepage positioning copy

Use language like:

```txt
I help agencies and growing brands solve the WordPress work that gets too custom, too integrated, or too risky for a generalist.
```

```txt
From plugin architecture and API integrations to WooCommerce logic and inherited codebases, WP Indy focuses on the parts of WordPress projects where senior technical judgment matters.
```

### Homepage service teaser cards

Use these cards:

#### Custom WordPress Plugins

Purpose-built functionality when off-the-shelf plugins cannot handle the business rules.

#### API Integrations

Connect WordPress cleanly to ecommerce platforms, CRMs, internal tools, and third-party systems.

#### WooCommerce Customization

Checkout flows, subscription logic, payment rules, customer sync, and ecommerce edge cases.

#### Commerce7 + WordPress

Advanced storefront and product-data integration for wineries and DTC brands.

#### Debugging & Rescue Work

Stabilize inherited builds, clean up fragile code, and get projects back on track.

### Homepage work teaser

Headline options:

```txt
Selected work solving real WordPress problems.
```

```txt
A few examples of the work I get brought in for.
```

Use 3 featured work items on the homepage:

1. St. Julian Commerce7 + WordPress Site Build
2. AI Search Plugin with Admin Reporting
3. Custom WooCommerce / API Checkout Flow

### Homepage agency teaser

Headline:

```txt
Senior backup for agency WordPress projects.
```

Copy:

```txt
I work with agencies as a white-label technical partner for complex builds, integrations, ecommerce logic, inherited sites, and overflow development.
```

CTA:

```txt
See How I Work With Agencies
```

### Homepage final CTA

Headline:

```txt
Have a WordPress project that needs senior technical help?
```

Copy:

```txt
Tell me what you’re building, fixing, integrating, or trying to rescue.
```

CTA:

```txt
Start a Project
```

## Services overview page

### URL

```txt
/services/
```

### Goal

Route visitors to the right service page and reinforce that WP Indy handles advanced WordPress work.

### Hero headline options

```txt
Custom WordPress development for complicated requirements.
```

```txt
Senior WordPress development for the work plugins cannot solve cleanly.
```

### Hero copy

```txt
WP Indy focuses on custom WordPress functionality, API integrations, WooCommerce logic, Commerce7 storefronts, and technical cleanup for agencies and growing brands.
```

### Service cards

Include:

1. Custom WordPress Plugin Development
2. WordPress API Integrations
3. WooCommerce Customization
4. Commerce7 + WordPress Integration
5. Debugging, Refactoring & Rescue Work
6. Custom WordPress Theme Builds

Theme builds should appear here, but not in the main nav dropdown.

### Custom Theme Builds card

```txt
Clean, maintainable WordPress theme development for custom designs, agency builds, and content-heavy sites.
```

### Services overview CTA

```txt
Not sure which bucket your project fits into?
Tell me what you’re working on and I’ll help identify the cleanest path forward.
```

CTA:

```txt
Start a Project
```

## Service page template

Use the same structure for every service detail page.

### Sections

1. Hero
2. What this is for
3. Common problems I solve
4. What I can build or fix
5. Related work
6. Final CTA

### Generic CTA

```txt
Need this kind of WordPress help?
Start a Project
```

## Service: Custom WordPress Plugin Development

### URL

```txt
/services/custom-wordpress-plugin-development/
```

### Hero headline

```txt
Custom WordPress plugin development for business-specific functionality.
```

### Hero copy

```txt
When an off-the-shelf plugin cannot handle the rules, workflow, or integration your project needs, I build custom WordPress functionality that fits the actual problem.
```

### What this is for

* custom admin tools
* internal workflows
* frontend functionality
* reporting screens
* editorial tools
* ecommerce logic
* data import/export tools
* integration bridges
* custom Gutenberg or block-related functionality

### Common problems

* plugin stacks that almost work but create edge cases
* business rules that do not fit existing plugins
* fragile custom code living in theme files
* internal staff needing a cleaner admin workflow
* agencies needing reliable functionality for client-specific requirements

### Related work

* AI Search Plugin with Admin Reporting
* WooCommerce Loop Course Extension
* St. Julian Commerce7 + WordPress Build

## Service: WordPress API Integrations

### URL

```txt
/services/wordpress-api-integrations/
```

### Hero headline

```txt
WordPress API integrations that connect your site to the systems around it.
```

### Hero copy

```txt
I help teams sync data between WordPress and external platforms, from ecommerce systems and course platforms to CRMs, internal APIs, and custom business tools.
```

### What this is for

* Commerce7 integrations
* WooCommerce integrations
* third-party REST APIs
* customer/account sync
* product data sync
* course/platform sync
* custom dashboards
* import/export workflows
* scheduled sync jobs

### Related work

* St. Julian Commerce7 + WordPress Build
* WooCommerce Loop Course Extension
* Service Business Custom Checkout Flow

## Service: WooCommerce Customization

### URL

```txt
/services/woocommerce-customization/
```

### Hero headline

```txt
WooCommerce customization for checkout flows, subscriptions, and edge cases.
```

### Hero copy

```txt
WooCommerce is flexible, but real businesses often need logic that goes beyond default settings and plugin combinations. I customize WooCommerce around the way the business actually sells.
```

### What this is for

* custom checkout flows
* subscription renewal logic
* coupon automation
* payment plans
* product/course sync
* customer creation
* invoice creation
* membership or course access logic
* custom order metadata
* integration with external systems

### Related work

* Custom WooCommerce Checkout Flow
* WooCommerce Loop Course Extension
* VetBloom WordPress + WooCommerce Loop Build

## Service: Commerce7 + WordPress Integration

### URL

```txt
/services/commerce7-wordpress-integration/
```

### Hero headline

```txt
Commerce7 + WordPress integration for wineries and DTC brands.
```

### Hero copy

```txt
I help wineries and ecommerce teams make WordPress and Commerce7 work together more cleanly, from product data and storefront architecture to club functionality and custom frontend experiences.
```

### What this is for

* wineries using Commerce7 with WordPress
* product catalog integration
* product filtering
* custom product fields
* club join embeds
* event ticket integration
* storefront architecture
* API-powered product sync
* custom templates around Commerce7 data

### Related work

* St. Julian Commerce7 + WordPress Build

## Service: Debugging, Refactoring & Rescue Work

### URL

```txt
/services/debugging-refactoring-rescue-work/
```

### Hero headline

```txt
WordPress debugging, refactoring, and rescue work for fragile builds.
```

### Hero copy

```txt
Inherited WordPress sites can become difficult to change, risky to update, or hard to understand. I help teams stabilize messy builds and create a cleaner foundation for future work.
```

### What this is for

* plugin conflicts
* brittle custom code
* broken templates
* slow or unstable sites
* inherited agency builds
* migrations gone sideways
* confusing theme logic
* WooCommerce bugs
* production issues
* cleanup before a larger rebuild

### Related work

* Rebuilds and migration work
* Agency support projects
* VetBloom WordPress + WooCommerce Loop Build

## Work page

### URL

```txt
/work/
```

### Goal

Create a portfolio/case-study hybrid that can include named clients, unnamed clients, legacy projects, white-label work, and partial-project technical examples.

Use the label “Work” in nav.

Individual items can be called case studies.

### Hero headline

```txt
Selected work solving complex WordPress problems.
```

### Hero copy

```txt
A mix of custom builds, plugin development, API integrations, ecommerce systems, and technical rescue work from 15+ years of WordPress development.
```

### Note about private work

Include a short note somewhere:

```txt
Some work is anonymized or described without a public URL because it was completed as white-label agency work, involved private systems, or supported a larger client project.
```

### Filters

Use Alpine.js for filtering.

Filter groups:

#### Work type

* All
* Site Builds
* Custom Plugins
* API Integrations
* WooCommerce
* Commerce7
* Gutenberg
* Checkout Flows
* Debugging / Rescue
* White-label

#### Platform / stack

* WordPress
* WooCommerce
* Commerce7
* ACF
* Gutenberg
* REST APIs
* PHP
* JavaScript
* Alpine.js
* Tailwind
* WPEngine

#### Visibility / context

* Named Client
* Client Withheld
* Agency Partner
* Legacy Project
* Internal Tool

## Case study detail page template

Each case study should follow this structure.

### Hero

* eyebrow/category
* title
* short summary
* tags
* client visibility note

### Project snapshot

Small facts grid:

* Client
* Role
* Context
* Work
* Stack

### The problem

Plain-English explanation of what needed to be solved.

### What I built

Specific bullets.

### Why it mattered

Explain the business or operational value without inventing fake metrics.

Examples:

* reduced manual work
* made the site easier for staff to manage
* connected ecommerce behavior to real business rules
* gave the agency/client a cleaner foundation
* made WordPress behave like a system instead of a brochure site

### Technical notes

A short section with credible implementation details.

### Related services

Link to relevant service pages.

### CTA

```txt
Need something similar?
Start a Project
```

## For Agencies page

### URL

```txt
/for-agencies/
```

### Goal

Make agency owners, creative directors, PMs, and dev leads feel confident bringing WP Indy in for white-label or behind-the-scenes senior development.

### Core message

```txt
Senior WordPress backup when your team needs extra technical depth.
```

### Things to emphasize

* white-label support
* no client poaching
* clear communication
* can work inside an existing process
* can lead technical implementation when needed
* can support designers, PMs, and internal devs
* useful for complex backend requirements
* useful when a build has gone sideways

### Sections

1. Hero
2. Common agency situations
3. How I can plug in
4. What I can own
5. White-label reassurance
6. Relevant work
7. CTA

### White-label reassurance copy

```txt
I’m comfortable working behind the scenes. I can collaborate directly with your internal team, support your PMs, and help your agency deliver without turning the project into a WP Indy sales pitch.
```

## About page

### URL

```txt
/about/
```

### Goal

Position Tommy as an experienced senior WordPress developer with both freelance and agency experience.

### Content points

* 15+ years hands-on WordPress experience
* mix of freelance and agency work
* experience with custom builds, plugins, integrations, ecommerce, and migrations
* based in Indianapolis
* works with agencies and teams anywhere
* practical communication
* good fit for projects with technical complexity

### Avoid

Do not make the About page overly personal or quirky. It can have some personality, but it should mostly reinforce trust and experience.

## Contact page

### URL

```txt
/contact/
```

### Goal

Make it easy to start a project conversation.

### Headline

```txt
Tell me what you’re working on.
```

### Copy

```txt
Whether you need a custom plugin, an API integration, WooCommerce help, Commerce7 support, or senior backup for an agency project, send over the details and I’ll take a look.
```

### Form fields

Suggested fields:

* Name
* Email
* Company / Agency
* Website
* Project type
* Timeline
* Budget range optional, if desired later
* Message

Do not overcomplicate the form for launch.

````

---

## `WORK_CASE_STUDIES.md`

```md
# WP Indy Work / Case Study Plan

## Purpose

The Work section should function as a portfolio/case-study hybrid.

Because much of the work is white-label, agency-supported, old, defunct, partial-project, or technically focused, the site should not rely on a traditional portfolio format where every item needs a live URL and public client screenshot.

Use “Work” as the top-level label.

Use “case study” for individual detail pages.

## Work page URL

```txt
/work/
````

## Work page headline

```txt
Selected work solving complex WordPress problems.
```

## Work page intro copy

```txt
A mix of custom builds, plugin development, API integrations, ecommerce systems, and technical rescue work from 15+ years of WordPress development.
```

## Privacy / visibility note

Use this on the Work page:

```txt
Some work is anonymized or described without a public URL because it was completed as white-label agency work, involved private systems, or supported a larger client project.
```

## Featured image direction

Use a consistent editorial mockup system instead of relying only on live screenshots.

### Image ratio

Use a 16:10 aspect ratio.

Recommended source image sizes:

```txt
1600 x 1000
1200 x 750
```

### Image style

Use stylized technical/editorial graphics:

* browser window frames
* WordPress admin-inspired panels
* ecommerce cards
* checkout flow diagrams
* dashboard/reporting mockups
* code/data fragments
* API/data-flow lines
* product cards
* tag pills
* minimal client branding when allowed

This keeps the Work section consistent even when a project cannot use a real screenshot.

### Image format guidance

Use `.webp` or optimized `.jpg/.png`.

Suggested folder:

```txt
public/work/
```

Suggested naming:

```txt
public/work/st-julian-commerce7-wordpress-build.webp
public/work/ai-search-plugin-admin-reporting.webp
public/work/custom-woocommerce-checkout-flow.webp
public/work/woocommerce-loop-course-extension.webp
public/work/finish-line-gutenberg-build.webp
public/work/vetbloom-wordpress-woocommerce-loop-build.webp
public/work/service-business-custom-checkout-flow.webp
```

## Work filters

Use these filter categories.

### Work type

```txt
All
Site Builds
Custom Plugins
API Integrations
WooCommerce
Commerce7
Gutenberg
Checkout Flows
Debugging / Rescue
White-label
```

### Platform / stack

```txt
WordPress
WooCommerce
Commerce7
ACF
Gutenberg
REST APIs
PHP
JavaScript
Alpine.js
Tailwind
WPEngine
```

### Visibility / context

```txt
Named Client
Client Withheld
Agency Partner
Legacy Project
Internal Tool
```

## Case study data model

Use a static data file such as:

```txt
src/data/work.ts
```

Suggested shape:

```ts
export type WorkItem = {
  slug: string;
  title: string;
  shortTitle?: string;
  client: string;
  clientVisibility: 'Named Client' | 'Client Withheld' | 'Agency Partner' | 'Legacy Project' | 'Internal Tool';
  context: string;
  role: string;
  summary: string;
  image: string;
  featured?: boolean;
  workTypes: string[];
  stack: string[];
  services: {
    label: string;
    href: string;
  }[];
  snapshot: {
    label: string;
    value: string;
  }[];
  problem: string;
  built: string[];
  impact: string[];
  technicalNotes: string[];
};
```

## Case study page template

Each detail page should include:

1. Hero
2. Project snapshot
3. The problem
4. What I built
5. Why it mattered
6. Technical notes
7. Related services
8. CTA

## Case study CTA

```txt
Need something similar?
Start a Project
```

## Launch case studies

### 1. St. Julian Commerce7 + WordPress Site Build

#### Slug

```txt
st-julian-commerce7-wordpress-build
```

#### Client

```txt
St. Julian Winery
```

#### Visibility

```txt
Named Client
```

#### Context

```txt
Direct client project / ecommerce migration
```

#### Role

```txt
Lead WordPress developer
```

#### Summary

```txt
A custom WordPress rebuild and Commerce7 integration that connected product data, club functionality, event tickets, and storefront content into a more flexible ecommerce experience.
```

#### Work types

```txt
Site Builds
Custom Plugins
API Integrations
Commerce7
WooCommerce
```

Use Commerce7 instead of WooCommerce if the specific page is C7-focused, but WooCommerce can appear elsewhere on related ecommerce work.

#### Stack

```txt
WordPress
Commerce7
ACF
PHP
JavaScript
WPEngine
```

#### Related services

* Commerce7 + WordPress Integration
* WordPress API Integrations
* Custom WordPress Plugin Development

#### Problem

St. Julian needed to move from its previous ecommerce setup into a more flexible Commerce7 + WordPress architecture while preserving the ability to manage products, product categories, storefront content, event tickets, club functionality, and site content in a way that worked for the internal team.

#### What I built

* Custom WordPress implementation connected to Commerce7 product data
* Product/category mapping between Commerce7 collections and WordPress taxonomies
* Custom field support for product details
* Event ticket product handling
* Commerce7 club button/template support
* Storefront templates and product display logic
* WordPress-side architecture for managing C7-powered content
* Admin-friendly data structures for ongoing site management

#### Why it mattered

* Created a more flexible WordPress storefront experience around Commerce7 data
* Helped the client move beyond default embed-only storefront limitations
* Gave internal teams better ways to manage and display product content
* Created a stronger technical foundation for ecommerce, product filtering, and ongoing site updates

#### Technical notes

* Imported and mapped Commerce7 product data into WordPress content structures
* Used ACF fields and taxonomy mapping to support custom product presentation
* Supported Commerce7 club functionality using correct club slugs and embed behavior
* Accounted for product availability and status logic
* Built with future maintainability in mind on WPEngine-hosted WordPress

#### Featured image idea

Use a browser mockup with product grid, Commerce7 + WordPress labels, product data badges, and a subtle winery/ecommerce feel.

---

### 2. AI Search Plugin with Admin Reporting

#### Slug

```txt
ai-search-plugin-admin-reporting
```

#### Client

```txt
Client name withheld
```

#### Visibility

```txt
Client Withheld
```

#### Context

```txt
Custom plugin / AI search integration
```

#### Role

```txt
Lead WordPress developer
```

#### Summary

```txt
A custom WordPress plugin that integrated a client’s proprietary AI search system into their website and added admin reporting, exports, and internal visibility tools.
```

#### Work types

```txt
Custom Plugins
API Integrations
Internal Tool
```

#### Stack

```txt
WordPress
PHP
JavaScript
REST APIs
Custom API
```

#### Related services

* Custom WordPress Plugin Development
* WordPress API Integrations

#### Problem

The client had a proprietary AI-powered search system but needed a clean way to connect it to their WordPress site and give internal users visibility into search activity, behavior, and results.

#### What I built

* Custom WordPress plugin to connect the frontend search experience to the client’s AI search system
* Frontend search integration
* WordPress admin reporting screen
* Search activity visibility for internal users
* Export tools for reporting and review
* Admin UI for reviewing usage and search behavior

#### Why it mattered

* Made a custom AI system usable inside the client’s WordPress site
* Gave internal teams better visibility into search behavior
* Turned a backend integration into a manageable WordPress tool
* Helped bridge proprietary technology with a familiar content/admin environment

#### Technical notes

* Built as a custom WordPress plugin rather than loose theme code
* Connected WordPress to an external AI/search API
* Added admin-side reporting and export functionality
* Structured the integration so internal users could monitor activity without needing developer access

#### Featured image idea

Create a WordPress admin-style dashboard mockup with search queries, result counts, usage rows, charts/tables, and an export button.

---

### 3. Custom WooCommerce Checkout Flow

#### Slug

```txt
custom-woocommerce-checkout-flow
```

#### Client

```txt
Client name withheld
```

#### Visibility

```txt
Client Withheld
```

#### Context

```txt
WooCommerce customization / checkout logic
```

#### Role

```txt
Lead WordPress developer
```

#### Summary

```txt
A custom WooCommerce checkout flow that guided users through service selection, add-ons, and payment options before completing a business-specific purchase path.
```

#### Work types

```txt
WooCommerce
Checkout Flows
Custom Plugins
```

#### Stack

```txt
WordPress
WooCommerce
PHP
JavaScript
```

#### Related services

* WooCommerce Customization
* Custom WordPress Plugin Development

#### Problem

The client needed a checkout experience that did not fit standard WooCommerce behavior. Users needed to move through a custom decision path before checkout, with business-specific logic controlling what they could select and purchase.

#### What I built

* Custom checkout flow logic
* Service/add-on selection UI
* Conditional product or service rules
* WooCommerce integration for final purchase
* Custom PHP and JavaScript behavior around the user journey

#### Why it mattered

* Made WooCommerce fit the client’s real sales process
* Reduced reliance on awkward plugin combinations
* Created a more guided and business-specific checkout experience
* Helped turn a complicated purchase flow into a manageable frontend process

#### Technical notes

* Extended WooCommerce behavior with custom PHP and JavaScript
* Used conditional logic to guide users through eligible options
* Preserved WooCommerce order/payment handling while customizing the pre-checkout experience

#### Featured image idea

Use a checkout flow diagram: Step 1, Step 2, Step 3, payment selection, order confirmation.

---

### 4. WooCommerce Extension for Maestro + Loop

#### Slug

```txt
woocommerce-loop-course-extension
```

#### Client

```txt
Maestro + Loop
```

#### Visibility

```txt
Agency Partner
```

#### Context

```txt
Agency partner project / reusable WooCommerce extension
```

#### Role

```txt
Custom plugin developer
```

#### Summary

```txt
A custom WooCommerce extension built for Maestro that lets clients import and sell Loop courses through WooCommerce while syncing users and course-related data.
```

#### Work types

```txt
Custom Plugins
API Integrations
WooCommerce
White-label
```

#### Stack

```txt
WordPress
WooCommerce
PHP
JavaScript
REST APIs
Loop
```

#### Related services

* Custom WordPress Plugin Development
* WooCommerce Customization
* WordPress API Integrations

#### Problem

Maestro needed a reusable way for client sites to connect WooCommerce with Loop course content so courses could be imported, sold, and synced without rebuilding the integration from scratch for every client.

#### What I built

* Custom WooCommerce extension
* Loop course import functionality
* Product/course mapping
* User sync between WooCommerce and Loop
* Integration logic reusable across client implementations
* Admin-facing functionality for managing imported/synced course data

#### Why it mattered

* Created a reusable integration pattern for Maestro client work
* Helped clients sell course content through WooCommerce
* Reduced repeated custom development across similar projects
* Connected ecommerce, users, and course access into one workflow

#### Technical notes

* Built as a custom WooCommerce extension
* Integrated with Loop data and user/course structures
* Supported client-specific implementation needs while keeping the core integration reusable
* Built for use in agency-supported WordPress projects

#### Featured image idea

Use a system diagram: Loop course data → WordPress/WooCommerce products → checkout → user sync/course access.

---

### 5. Finish Line Gutenberg Build

#### Slug

```txt
finish-line-gutenberg-build
```

#### Client

```txt
Finish Line
```

#### Visibility

```txt
Named Client / Legacy Project
```

#### Context

```txt
Content platform rebuild
```

#### Role

```txt
WordPress developer
```

#### Summary

```txt
A WordPress/Gutenberg build for a large retail content platform, focused on giving editors a more flexible publishing experience.
```

#### Work types

```txt
Site Builds
Gutenberg
Theme Builds
Legacy Project
```

#### Stack

```txt
WordPress
Gutenberg
PHP
JavaScript
Custom Theme
```

#### Related services

* Custom WordPress Plugin Development
* Debugging, Refactoring & Rescue Work
* Custom WordPress Theme Builds

#### Problem

Finish Line needed a modern WordPress publishing experience that could support branded content and editorial workflows more effectively than a rigid template setup.

#### What I built

* WordPress theme/build work around Gutenberg
* Custom editorial/content structures
* Flexible content blocks or block-oriented templates
* Frontend implementation for a retail publishing experience

#### Why it mattered

* Supported a more flexible editorial workflow
* Helped a recognizable retail brand publish content through a modern WordPress editing experience
* Added credibility around larger-scale WordPress implementation

#### Technical notes

* Built around Gutenberg/editorial flexibility
* Focused on maintainable WordPress implementation for content publishing
* Legacy project; describe carefully without overclaiming current status

#### Featured image idea

Use a stylized Gutenberg editor mockup with sports/retail/editorial content blocks. Use client branding only if allowed and appropriate.

---

### 6. VetBloom WordPress + WooCommerce Loop Build

#### Slug

```txt
vetbloom-wordpress-woocommerce-loop-build
```

#### Client

```txt
VetBloom
```

#### Visibility

```txt
Named Client / Agency Partner
```

#### Context

```txt
Agency partner project with Maestro
```

#### Role

```txt
WordPress theme developer and integration developer
```

#### Summary

```txt
A custom WordPress site build for VetBloom, completed in partnership with Maestro, including theme development and integration of the custom WooCommerce + Loop course plugin.
```

#### Work types

```txt
Site Builds
WooCommerce
Custom Plugins
API Integrations
White-label
```

#### Stack

```txt
WordPress
WooCommerce
PHP
JavaScript
Loop
Custom Theme
```

#### Related services

* WooCommerce Customization
* Custom WordPress Plugin Development
* WordPress API Integrations

#### Problem

VetBloom needed a custom WordPress site that could support course and membership selling while integrating with Loop-powered course functionality.

#### What I built

* Custom WordPress theme/build work
* WooCommerce course/membership purchasing experience
* Integration of the custom Maestro + Loop WooCommerce extension
* Frontend templates and content structures
* Support for ecommerce-connected course access

#### Why it mattered

* Connected a polished WordPress site build with deeper ecommerce/course functionality
* Gave the agency/client a custom implementation instead of a generic course-commerce setup
* Demonstrated how reusable plugin work could support real client builds

#### Technical notes

* Built in partnership with Maestro
* Integrated custom WooCommerce + Loop plugin functionality
* Combined custom theme development with ecommerce/course platform integration

#### Featured image idea

Use course cards, membership/product panels, and a WooCommerce checkout/course access visual.

---

### 7. Service Business Custom Checkout Flow

#### Slug

```txt
service-business-custom-checkout-flow
```

#### Client

```txt
Client name withheld
```

#### Visibility

```txt
Client Withheld
```

#### Context

```txt
Custom checkout / service scheduling / API integration
```

#### Role

```txt
Lead WordPress developer
```

#### Summary

```txt
A custom PHP and JavaScript checkout flow that let users enter their ZIP code, view available services and add-ons, choose payment plans, and complete checkout through a third-party service API.
```

#### Work types

```txt
Checkout Flows
API Integrations
WooCommerce
Custom Plugins
```

#### Stack

```txt
WordPress
PHP
JavaScript
REST APIs
Custom API
```

#### Related services

* WordPress API Integrations
* WooCommerce Customization
* Custom WordPress Plugin Development

#### Problem

The client’s sales process could not be handled by a standard ecommerce checkout. Users needed to identify service availability by ZIP code, select eligible services and add-ons, choose payment plans, and trigger customer/service setup in an external platform.

#### What I built

* Custom ZIP-code lookup flow
* Service availability logic
* Add-on selection flow
* Payment plan selection
* Custom PHP and JavaScript checkout experience
* API integration to create customers
* API integration to create invoices
* API integration to schedule services
* Custom handoff from the website into the client’s operational system

#### Why it mattered

* Turned a complex service-sales process into a guided online checkout
* Connected the website directly to the client’s operational backend
* Reduced manual follow-up and duplicate data entry
* Made WordPress part of the actual business workflow, not just a marketing site

#### Technical notes

* Built with custom PHP and JavaScript
* Integrated with a third-party API for customer, invoice, and scheduled service creation
* Used conditional logic around ZIP availability, service selection, add-ons, and payment plans
* Client name should remain withheld

#### Featured image idea

Use a generic service checkout diagram: ZIP lookup → service options → add-ons → payment plan → customer/invoice/schedule API.

````

---

## Optional fourth file: `COPILOT_TASKS.md`

This one is useful when you’re ready to tell Copilot exactly what to do next.

```md
# WP Indy Copilot Tasks

## Important

The Astro site already exists. Do not rebuild from scratch.

Work incrementally.

Before making large changes, inspect the current files:

- `src/pages/index.astro`
- `src/pages/for-agencies.astro`
- `src/components/Header.astro`
- `src/layouts/Layout.astro`
- `src/styles/global.css`

Preserve the existing visual direction unless there is a clear reason to improve something.

## Phase 1: Site structure

Create the missing pages:

```txt
src/pages/services/index.astro
src/pages/services/custom-wordpress-plugin-development.astro
src/pages/services/wordpress-api-integrations.astro
src/pages/services/woocommerce-customization.astro
src/pages/services/commerce7-wordpress-integration.astro
src/pages/services/debugging-refactoring-rescue-work.astro

src/pages/work/index.astro
src/pages/work/st-julian-commerce7-wordpress-build.astro
src/pages/work/ai-search-plugin-admin-reporting.astro
src/pages/work/custom-woocommerce-checkout-flow.astro
src/pages/work/woocommerce-loop-course-extension.astro
src/pages/work/finish-line-gutenberg-build.astro
src/pages/work/vetbloom-wordpress-woocommerce-loop-build.astro
src/pages/work/service-business-custom-checkout-flow.astro

src/pages/about.astro
src/pages/contact.astro
````

## Phase 2: Data files

Create data files:

```txt
src/data/services.ts
src/data/work.ts
```

Use the content direction in `CONTENT_PLAN.md` and `WORK_CASE_STUDIES.md`.

## Phase 3: Reusable components

Create or improve reusable components as needed:

```txt
src/components/PageHero.astro
src/components/ServiceCard.astro
src/components/WorkCard.astro
src/components/TagList.astro
src/components/CTASection.astro
src/components/SectionEyebrow.astro
src/components/FeatureGrid.astro
src/components/CaseStudySnapshot.astro
src/components/RelatedServices.astro
```

Do not over-componentize if the current site is simpler. Prefer practical reuse.

## Phase 4: Header/nav

Update `Header.astro` to use this nav:

```txt
Services ▾
Work
For Agencies
About
Contact
Start a Project
```

Services dropdown:

```txt
Custom WordPress Plugin Development
WordPress API Integrations
WooCommerce Customization
Commerce7 + WordPress Integration
Debugging, Refactoring & Rescue Work
```

Make sure dropdown links point to real service pages.

## Phase 5: Work page filtering

Build `/work/` as a filterable case-study grid.

Use Alpine.js if Alpine is already available or easy to add.

Filter groups:

* Work type
* Platform / stack
* Visibility / context

Keep the UI polished but simple.

The Work page should still work if JavaScript fails, meaning cards should be visible by default.

## Phase 6: Case study pages

Each case study page should follow the same layout:

1. Hero
2. Project snapshot
3. The problem
4. What I built
5. Why it mattered
6. Technical notes
7. Related services
8. CTA

Do not invent metrics.

Do not overclaim.

For unnamed work, use “Client name withheld.”

For Maestro-related work, use language like:

```txt
Built in partnership with Maestro.
```

or

```txt
Agency partner project with Maestro.
```

## Phase 7: Featured images

Use placeholder featured images for now if needed.

Recommended folder:

```txt
public/work/
```

Recommended aspect ratio:

```txt
16:10
```

Recommended dimensions:

```txt
1600 x 1000
```

Use simple placeholder blocks until final images are created.

## Phase 8: Polish

After all pages exist:

* check nav active/hover states
* check mobile nav
* check spacing between dark and beige/white sections
* check that CTA language is consistent
* check that no copy sounds cheap, generic, or overly agency-fluffy
* check that all internal links work
* check Lighthouse basics
* check title/meta descriptions per page

## Copy rules

Use “I” for personal experience and process.

Use “WP Indy” for services and brand statements.

Avoid fake “we.”

Avoid generic agency language.

Avoid pricing.

Avoid making WP Indy sound like a basic brochure-site shop.

Keep the tone calm, senior, practical, and specific.

```

That gives Copilot enough to keep moving without treating this like a greenfield build.
```
