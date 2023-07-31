const createChronicPathologyGroup = (name) => {
  const pathology = name.toUpperCase();
  const routeName = name.split(" ").join("-").toLowerCase();

  return [
    {
      name,
      type: "group",
      slug: `cronicità-prevalenza-${routeName}`,
      menu: "Cronicità",
      dashboards: [
        `malattie-croniche-prevalenza-regione-comuni-${routeName}`,
        `malattie-croniche-prevalenza-regione-distretti-${routeName}`,
        `malattie-croniche-prevalenza-regione-provincie-${routeName}`,
        `malattie-croniche-prevalenza-provincie-${routeName}`,
        `malattie-croniche-prevalenza-distretti-${routeName}`,
        `malattie-croniche-trend-prevalenza-area-geografica-${routeName}`,
        `malattie-croniche-prevalenza-eta-genere-${routeName}`,
        `malattie-croniche-trend-prevalenza-eta-${routeName}`,
        `malattie-croniche-trend-prevalenza-genere-${routeName}`,
      ],
    },
    {
      id: 37,
      slug: `malattie-croniche-prevalenza-regione-puglia-comuni-${routeName}`,
      uuid: "c95c3af0-e3e1-4e84-af85-5ee301ca0f68",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 38,
      slug: `malattie-croniche-prevalenza-regione-puglia-distretti-${routeName}`,
      uuid: "3439c290-b025-4db2-bdb5-22558d4b94b2",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 39,
      slug: `malattie-croniche-prevalenza-regione-puglia-provincie-${routeName}`,
      uuid: "72385dac-26f5-4f5c-ae5d-ee8c20ec3283",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 31,
      slug: `malattie-croniche-prevalenza-provincie-${routeName}`,
      uuid: "c87e16e1-e374-4d65-bfea-81947bbd33c6",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 40,
      slug: `malattie-croniche-prevalenza-distretti-${routeName}`,
      uuid: "002615d3-243d-45de-9a45-9b4fa7d497e5",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 34,
      slug: `malattie-croniche-trend-prevalenza-area-geografica-${routeName}`,
      uuid: "c550453f-ad0c-4812-a1f6-36280df1b8d9",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 32,
      slug: `malattie-croniche-prevalenza-eta-genere-${routeName}`,
      uuid: "beb54683-70e8-428f-b3e4-774d122f89ef",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 35,
      slug: `malattie-croniche-trend-prevalenza-eta-${routeName}`,
      uuid: "67b187e2-f0c5-4379-8f26-c24cba09389c",
      filter: [`patologia = '${pathology}'`],
    },
    {
      id: 33,
      slug: `malattie-croniche-trend-prevalenza-genere-${routeName}`,
      uuid: "9cda65fe-9393-4bd6-8601-33453e500705",
      filter: [`patologia = '${pathology}'`],
    },
  ];
};
export default [
  {
    id: 3,
    uuid: "53740556-c6dc-4ab2-953e-f33917e07dbf",
    name: "Home Page",
    slug: "home-page",
    home: true,
  },
  {
    id: 18,
    uuid: "e6c603ff-998b-4763-804b-13116571b68d",
    name: "Popolazione",
    slug: "popolazione-sintesi",
    menu: "Popolazione e Demografia",
  },
  {
    id: 19,
    uuid: "1cf1e7d5-d550-4334-9394-319f7ff4d4a9",
    name: "Demografia",
    slug: "demografia-sintesi",
    menu: "Popolazione e Demografia",
  },
  ...createChronicPathologyGroup("BPCO"),
  ...createChronicPathologyGroup("Diabete"),
  ...createChronicPathologyGroup("Ipertensione"),
  ...createChronicPathologyGroup("Scompenso Cardiaco"),
];
