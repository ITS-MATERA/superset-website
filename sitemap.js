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
    id: 53,
    uuid: "e6c603ff-998b-4763-804b-13116571b68d",
    name: "Popolazione",
    slug: "popolazione-sintesi",
    menu: "Popolazione e Demografia",
  },
  {
    id: 57,
    uuid: "1cf1e7d5-d550-4334-9394-319f7ff4d4a9",
    name: "Demografia",
    slug: "demografia-sintesi",
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
    id: 63,
    uuid: "bda6ea87-1c65-4734-afab-56d2c020cecf",
    name: "Diabete",
    slug: "diabete-sintesi",
    menu: "Cronicità",
  },
  {
    id: 64,
    uuid: "2295b18b-c20e-4e38-bfac-59223e5ba9d9",
    name: "Ipertensione",
    slug: "ipertensione-sintesi",
    menu: "Cronicità",
  },
  {
    id: 65,
    uuid: "3419f7cf-ccff-44c4-9109-6dee11657228",
    name: "Scompenso cardiaco",
    slug: "scompenso-cardiaco-sintesi",
    menu: "Cronicità",
  },
];
