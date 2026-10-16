export const JOB_DESCRIPTION = {
  nicheSocial: [
    'Built and shipped Niche, an Atlanta events marketplace with 75+ hosts and 100+ events, as one of two engineers. Owned the architecture, data model (41-model PostgreSQL schema), and production infrastructure from the first commit.',
    'Led a zero-downtime production migration from Vercel and Neon to AWS (Amplify, RDS, Lambda, EventBridge, S3, CloudFront, SES, Route 53). Moved scheduled jobs to Lambda on EventBridge Scheduler to get around Amplify’s 30-second request limit.',
    'Built an automated event-discovery pipeline that has found 600+ local events from Eventbrite and Partiful. It drops events outside a set radius around Atlanta and never overwrites admin decisions. Added an “add from link” tool that turns any event URL into a draft listing using schema.org data, with LLM extraction as a fallback.',
    'Built the host dashboard: per-event analytics with view, click, and UTM attribution tracking, team roles and permissions, recurring event series, guest messaging, and invite-only onboarding.',
    'Designed the ticketing system: capacity enforcement, QR tickets, and idempotent order fulfillment driven by Stripe checkout and webhook events.',
    'Built authentication for three user types (admins, hosts, and guests): Google OAuth (NextAuth v5), email/password with verification and reset, HMAC-signed session cookies, role-based access control, and open-redirect protection.',
    'Built transactional email (confirmations, receipts, host application decisions, automated review reminders) and an admin panel for curation, host approval, RSVP management, site analytics, and server-error logging.'
  ],
  homeDepotII: [
    'Lead engineer on the Bundle Information Page (BIP), a new page type built from scratch that now serves $1.3B in online bundled sales. Led a ~15-person team of engineers and contractors through implementation, partnering with the staff engineer on overall architecture.',
    'Implemented four bundle experience types end-to-end: configuration layer, component orchestration, pricing/promo service integration, and responsive desktop/mobile rendering. Standardized fragmented legacy infrastructure into a single architecture, eliminating $1–2M/year in operational overhead and speeding up new bundle launches.',
    'Shipped the BIP roadmap iteratively across multiple launches: stood up the MVP renderer for 66 combo SKUs, integrated a new in-cart promo type (“Preset Bundle”) with the pricing service, migrated 52 legacy kitchen packages to the BIP platform, and built PLP pod components with bundle-aware fulfillment messaging. Owned the stack from SEO markup and SSR hydration through cart/checkout API integration and promo-stacking logic.',
    'Brought the General Merchandise team’s React/TypeScript pages into the Home Depot iOS and Android app and drove mobile test parity with desktop in Jest: converted desktop test cases for mobile, fixed the React Native bugs that failing tests exposed, and wrote new mobile-specific tests to keep app and site behavior consistent.',
    'Served as the primary contributor to the cross-sell/up-sell feature, integrating 100,000+ SKUs across general merchandise and major appliance categories. Designed and implemented swap and remove functionality, enabling customizable product bundles and driving add-on sales.',
    'First team to adopt audience-segmented beta releases (A/B/C cohorts), using GitHub Actions to automate performance-regression scenarios; caught bugs or Core Web Vitals regressions in roughly 1 in 5 releases before they reached production.',
    'Leveraged New Relic and Quantum Metric to build dashboards and improve Core Web Vitals (CLS, LCP, INP, TTFB), addressing issues with server-side rendering, JavaScript, and component errors.',
    'Authored Architectural Decision Records (ADRs) documenting decisions on web traffic management, SEO strategy, Core Web Vitals optimization, and long-term engineering scalability.',
    'Led innovation weeks with engineers, product managers, and UX designers to create a new cart drawer feature, employing AB testing, and leading the feature to production.',
    'Onboarded 10+ new hires, mentored a graduate of the Home Depot apprenticeship program, and conducted technical interviews evaluating candidates in React, TypeScript, JavaScript, Core Web Vitals, and algorithms.'
  ],
  homeDepotI: [
    'Led a major refactor of an in-house calculator for 300,000+ SKUs across the React frontend and Java APIs, integrating new IDM objects, cutting bugs, and making it reusable in more product categories, which increased bulk orders.',
    'Served as monthly release captain for the General Merchandise experience (~80% of homedepot.com traffic), overseeing code reviews and deployments to production and beta while collaborating with SREs and stakeholders to resolve issues and improve Core Web Vitals. Facilitated war rooms during critical incidents and conducted post-mortems to drive continuous improvement.',
    'Refactored React code for key components supporting product variant selection and multi-product package displays, used by the majority of Home Depot’s online products, enhancing modularity and maintainability.',
    'Integrated Contentful CMS so PMs and other non-engineers could change production content without a code deploy, and releases could bump individual components instead of shipping full builds, streamlining the release process. Also drove Tailwind adoption and a major Node.js upgrade, deprecating legacy systems.',
    'Led a documentation task force to consolidate sources and create new guidelines to establish a single source of truth. Authored key documentation to streamline onboarding across the organization.'
  ],
  aCloserLook: [
    'Modernized 20+ client and employee portal pages by migrating from ASP.NET to React and Redux, resulting in a 30% faster page load time and improved user experience.',
    'Wrote C# ASP.NET Web API endpoints returning JSON to power the new React pages, and fixed bugs across legacy ASP.NET pages using Visual Studio and Microsoft SQL Server.',
    'Harnessed Node.js and SQL Server to build a highly scalable REST service, enabling efficient data retrieval and seamless integration for significantly improved application performance and reliability.',
    'Implemented advanced security features, including role-based access controls, in ACL’s client and employee portals to enhance data security and ensure compliance with industry standards.',
    'Built a shopper sign-up page, handling functionality from the front end to the database; integrated email and password validation, email verification, and secure password hashing to protect user data and adhere to security best practices.',
    'Utilized SQL to construct triggers, design tables, and implement robust stored procedures, enhancing database performance, reliability, and management efficiency.',
  ],
  // chiefOfStaff: [
  //   'Recruited and onboarded a diverse team, supervised daily operations, oversaw salary administration, and fostered a collaborative work environment to meet the office\'s goals.',
  //   'Composed resolutions for the Georgia State House, and wrote speeches for the Representative, effectively communicating and representing the Representative\'s office and engaging with the people of Georgia.',
  //   'Engaged with leaders at local, state, and national levels to advocate for our constituent groups and built strategic relationships with key organizations and offices to collaborate on Get Out the Vote (GOTV), legislation, census, and other key initiatives.',
  // ],
  // deputyCampaignManager: [
  //   'Directed successful fundraising campaigns, securing substantial contributions to support organizational initiatives, with a significant portion allocated to our fellowship program. Our race ranked 6th in fundraising among the 472 candidates who ran for the Georgia State House.',
  //   'Started a fellowship program, providing training and mentorship in voter outreach, policy planning, social media blasts, and event planning. Organized one of the largest canvassing efforts in the county.',
  //   'Drafted campaign literature, wrote candidate speeches, and assisted with policy points to clearly communicate the candidate\'s platform.',
  //   'Set up key meetings through town halls and one-on-ones with constituents and local leaders to discuss policy matters, gather support, and forge relationships, ensuring that the campaign represented the voices of the people in District 101.'
  // ]
}

export const JOBS = [
  {
    timeframe: '2026 - Current',
    title: 'Lead Software Engineer',
    location: 'Niche-Social | Atlanta, GA',
    experience: 'nicheSocial'
  },
  {
    timeframe: '2023 - 2026',
    title: 'Software Engineer II',
    location: 'The Home Depot | Atlanta, GA',
    experience: 'homeDepotII'
  },
  {
    timeframe: '2021 - 2023',
    title: 'Software Engineer I',
    location: 'The Home Depot | Atlanta, GA',
    experience: 'homeDepotI'
  },
  {
    timeframe: '2019 - 2021',
    title: 'Software Engineer',
    location: 'A Closer Look | Norcross, GA',
    experience: 'aCloserLook'
  },
  // {
  //   timeframe: '2019 - 2020',
  //   title: 'Chief of Staff',
  //   location: 'GA State House Rep. Sam Park | Atlanta, GA',
  //   experience: 'chiefOfStaff'
  // },
  // {
  //   timeframe: '2018 - 2019',
  //   title: 'Dep. Campaign Manager',
  //   location: 'GA State House Rep. Sam Park | Lawrenceville, GA',
  //   experience: 'deputyCampaignManager'
  // }
]