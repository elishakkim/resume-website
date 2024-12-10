export const JOB_DESCRIPTION = {
  homeDepotII: [
    'Served as the primary contributor to developing the cross-sell up-sell feature, integrating 100,000+ SKUs across general merchandise and major appliance categories. Designed and implemented swap and remove functionally, enabling customizable product bundles and driving add-on sales.',
    'Authored Architectural Decision Records (ADRs) to document critical decisions on web traffic management, SEO strategy, core web vitals optimization, and long-term engineering scalability, providing stakeholders with clear technical justifications and actionable recommendations.',
    'Conducted technical interviews to evaluate software engineering candidates’ expertise in React, version control, core web vitals, JavaScript, TypeScript, HTML, CSS, and algorithms.',
    '​​Leveraged New Relic and Quantum Metric to build dashboards and enhance web performance by reducing core web vitals (CLS, LCP, INP, TTFB) and addressing issues with server-side rendering, JavaScript, and component errors.',
    'Led innovation weeks with engineers, product managers, and UX designers to create a new cart drawer feature, employing AB testing, and leading the feature to production.',
    'Streamlined the release process and boosted deployment efficiency by adopting A/B/C audience segmentation during beta testing and leveraging GitHub Actions to automate performance regression scenarios, optimizing SSR and Core Web Vitals metrics.'
  ],
  homeDepotI: [
    'Led a major frontend refactor of an in-house calculator for 300,000+ SKUs using Java and React, integrating new IDM objects into the API, improving data consistency, and expanding bulk purchasing workflows on the front end.',
    'Served as release captain on a monthly basis, overseeing code reviews and deployments to production and beta while collaborating with SREs and stakeholders to resolve issues and improve Core Web Vitals. Facilitated war rooms during critical incidents and conducted post-mortems to drive continuous improvement.',
    'Refactored React code for key components supporting product variant selection and multi-product package displays, widely used across most Home Depot’s item categories, enhancing modularity and maintainability.',
    'Facilitated the adoption of Tailwind for streamlined styling, performed a major version bump for Node.js while resolving dependency issues, and integrated Contentful for scalable content management, deprecating legacy systems.',
    'Led a documentation task force to consolidate sources and create new guidelines to establish a single source of truth. Authored key documentation to streamline onboarding across the organization.'
  ],
  aCloserLook: [
    'Modernized 20+ client and employee portal pages by migrating from ASP.Net to React and Redux, resulting in a 30% faster page load time and improved user experience.',
    'Harnessed Node.js and SQL Server to build a highly scalable REST service, enlisting efficient data retrieval and seamless integration for significantly improved application performance and reliability',
    'Implemented advanced security features, including role-based access controls, in ACL’s client and employee portals to enhance data security and ensure compliance with industry standards.',
    'Built a shopper sign-up page, handling functionality from the front end to the database; integrated email and password validation, email verification, and secure password encryption to protect user data and adhere to security best practices.',
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
    timeframe: '2023 - Current',
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