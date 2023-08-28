const createChronicPathologyGroup = (name) => {
  const pathology = name.toUpperCase();
  const routeName = name.split(" ").join("-").toLowerCase();

  return [
    {
      name,
      type: "group",
      slug: `cronicità-prevalenza-${routeName}`,
      menu: "Cronicità",
      dashboards: [`malattie-croniche-${routeName}`],
    },
    {
      id: 58,
      slug: `malattie-croniche-${routeName}`,
      uuid: "9ba83516-752c-480f-af2e-1094604a9ad2",
      //filter: [`patologia = '${pathology}'`],
      filter: [`patologia = 'BPCO'`],
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
    id: 57,
    uuid: "1cf1e7d5-d550-4334-9394-319f7ff4d4a9",
    name: "Demografia",
    slug: "demografia-sintesi",
    menu: "Popolazione e Demografia",
  },
  {
    id: 53,
    uuid: "e6c603ff-998b-4763-804b-13116571b68d",
    name: "Popolazione",
    slug: "popolazione-sintesi",
    menu: "Popolazione e Demografia",
  },
  {
    id: 58,
    uuid: "9ba83516-752c-480f-af2e-1094604a9ad2",
    name: "BPCO",
    slug: "bpco-sintesi",
    menu: "Cronicità",
  },
  {
    id: 61,
    uuid: "4dc2d2a3-fc4f-4f83-9421-f854096defca",
    name: "Diabete",
    slug: "diabete-sintesi",
    menu: "Cronicità",
  },
  {
    id: 59,
    uuid: "3140a5eb-64d3-4c93-97b8-6d1c2f606f19",
    name: "Ipertensione",
    slug: "ipertensione-sintesi",
    menu: "Cronicità",
  },
  {
    id: 60,
    uuid: "554d3f86-06c3-45dc-8102-d28e0b0cbe52",
    name: "Scompenso cardiaco",
    slug: "scompenso-cardiaco-sintesi",
    menu: "Cronicità",
  },
];
