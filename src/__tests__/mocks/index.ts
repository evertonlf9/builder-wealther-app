export const apiData = {
  base: "stations",
  clouds: { all: 100 },
  cod: 200,
  coord: { lon: -49.0799, lat: -22.3183 },
  dt: 1639577280,
  id: 3470279,
  main: {
    feels_like: 24.64,
    humidity: 95,
    pressure: 1012,
    temp: 23.73,
    temp_max: 23.73,
    temp_min: 23.73,
  },
  name: "Bauru",
  sys: {
    type: 2,
    id: 53165,
    country: "BR",
    sunrise: 1639556818,
    sunset: 1639605379,
  },
  timezone: -10800,
  visibility: 2162,
  weather: [
    {
      description: "nublado",
      icon: "04d",
      id: 804,
      main: "Clouds",
    },
  ],
  wind: { speed: 3.13, deg: 78, gust: 5.81 },
};

export const apiDataCityLocation = {
  country: "BR",
  lat: -22.3218102,
  local_names: { ru: "Бауру", pt: "Bauru" },
  lon: -49.0705863,
  name: "Bauru",
  state: "São Paulo",
};

export const city = {
  coord: { lon: -49.0606, lat: -22.3147 },
  country: "BR",
  id: 3470279,
  name: "Bauru",
  population: 0,
  timezone: -10800,
};

export const apiDataForecast = [
  {
    date: 1639591200,
    humidity: 94,
    main: { icon: "10d", description: "chuva leve" },
    max: 24.45,
    min: 21.76,
    pressure: 1011,
    speed: 2.66,
    temp: 24.45,
  },
  {
    date: 1639677600,
    humidity: 72,
    main: { icon: "10d", description: "chuva leve" },
    max: 26.88,
    min: 26.88,
    pressure: 1008,
    speed: 2.52,
    temp: 26.88,
  },
  {
    date: 1639764000,
    humidity: 63,
    main: { icon: "10d", description: "chuva leve" },
    max: 28.83,
    min: 28.83,
    pressure: 1008,
    speed: 2.57,
    temp: 28.83,
  },
  {
    date: 1639850400,
    humidity: 41,
    main: { icon: "01d", description: "céu limpo" },
    max: 31.75,
    min: 31.75,
    pressure: 1009,
    speed: 3.13,
    temp: 31.75,
  },
  {
    date: 1639936800,
    humidity: 38,
    main: { icon: "04d", description: "nublado" },
    max: 31.81,
    min: 31.81,
    pressure: 1008,
    speed: 1.66,
    temp: 31.81,
  },
];

export const day = {
  date: 1639580400,
  humidity: 96,
  main: {
    description: "chuva moderada",
    icon: "10d",
  },
  max: 21.02,
  min: 21.02,
  pressure: 1011,
  speed: 3.17,
  temp: 21.02,
};

export const cityLocation = {
  country: "BR",
  lat: -22.3218102,
  local_names: { ru: "Бауру", pt: "Bauru" },
  lon: -49.0705863,
  name: "Bauru",
  state: "São Paulo",
};

export const mockPosition = {
  coords: {
    latitude: 52.3172414,
    longitude: 4.8717809,
    accuracy: 24,
    heading: 90,
    speed: 0,
  },
  timestamp: 1561815013194,
};
