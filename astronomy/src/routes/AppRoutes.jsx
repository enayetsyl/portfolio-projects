import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MoonTrek from '../pages/LunarExploration/MoonTrek';
import MoonMosaics from '../pages/LunarExploration/MoonMosaics';
import APOD from '../pages/AstronomySpaceScience/APOD';
import Exoplanets from '../pages/AstronomySpaceScience/Exoplanets';
import NEO from '../pages/AstronomySpaceScience/NEO';
import SpaceWeather from '../pages/AstronomySpaceScience/SpaceWeather';
import SatellitesSituation from '../pages/AstronomySpaceScience/SatellitesSituation';
import TechTransfer from '../pages/AstronomySpaceScience/TechTransfer';
import Earth from '../pages/EarthObservation/Earth';
import EPIC from '../pages/EarthObservation/EPIC';
import EONET from '../pages/EarthObservation/EONET';
import MarsRoverPhotos from '../pages/MarsExploration/MarsRoverPhotos';
import MarsWeather from '../pages/MarsExploration/MarsWeather';
import MarsTrek from '../pages/MarsExploration/MarsTrek';
import VestaTrek from '../pages/VestaExploration/VestaTrek';
import VestaMosaics from '../pages/VestaExploration/VestaMosaics';
import ImageVideoLibrary from '../pages/ImageryVideos/ImageVideoLibrary';
import WMTS from '../pages/ImageryVideos/WMTS';
import Techport from '../pages/SpaceMissionsTechnology/Techport';
import TechTransferReports from '../pages/SpaceMissionsTechnology/TechTransferReports';
import Patents from '../pages/SpaceMissionsTechnology/Patents';
import Software from '../pages/SpaceMissionsTechnology/Software';
import SSDCNEOS from '../pages/SpaceScienceData/SSDCNEOS';
import ExoplanetArchive from '../pages/SpaceScienceData/ExoplanetArchive';
import SpaceScienceData from '../pages/SpaceScienceData/SpaceScienceData';
import GeocentricSpacecraft from '../pages/GeospatialServices/GeocentricSpacecraft';
import EONETGEO from '../pages/GeospatialServices/EONETGEO';
import OpenScienceData from '../pages/Miscellaneous/OpenScienceData';
import DEMGrayscale from '../pages/Miscellaneous/DEMGrayscale';
import ColorHillshade from '../pages/Miscellaneous/ColorHillshade';
import AlbedoMosaic from '../pages/Miscellaneous/AlbedoMosaic';
import InfraredDay from '../pages/Miscellaneous/InfraredDay';
import InfraredNight from '../pages/Miscellaneous/InfraredNight';

const router = createBrowserRouter([

  
{
  path: '/',
  element: <Home/>
},
{
  path: '/astronomy-space-science',
  children:[
    {
      path: 'apod',
      element: <APOD/>
    },
    {
      path: 'exoplanets',
      element: <Exoplanets/>
    },
    {
      path: 'neo',
      element: <NEO/>
    },
    {
      path: 'space-weather',
      element: <SpaceWeather/>
    },
    {
      path: 'satellite-situation',
      element: <SatellitesSituation/>
    },
    {
      path: 'tech-transfer',
      element: <TechTransfer/>
    },

  ]
},
{
  path: '/earth-observation',
  children:[
    {
      path: 'earth',
      element: <Earth/>
    },
    {
      path: 'epic',
      element: <EPIC/>
    },
    {
      path: 'eonet',
      element: <EONET/>
    },
      ]
},
{
  path: '/mars-exploration',
  children:[
    {
      path: 'mars-rover-photos',
      element: <MarsRoverPhotos/>
    },
    {
      path: 'mars-weather',
      element: <MarsWeather/>
    },
    {
      path: 'mars-trek',
      element: <MarsTrek/>
    },
      ]
},
{
  path: '/lunar-exploration',
  children:[
    {
      path: 'moon-trek',
      element: <MoonTrek/>
    },
    {
      path: 'moon-mosaics',
      element: <MoonMosaics/>
    },

  ]
},
{
  path: '/vesta-exploration',
  children:[
    {
      path: 'vesta-trek',
      element: <VestaTrek/>
    },
    {
      path: 'vesta-mosaics',
      element: <VestaMosaics/>
    },

  ]
},
{
  path: '/imagery-videos',
  children:[
    {
      path: 'image-video-library',
      element: <ImageVideoLibrary/>
    },
    {
      path: 'wmts',
      element: <WMTS/>
    },
  ]
},
{
  path: '/space-missions-technology',
  children:[
    {
      path: 'techport',
      element: <Techport/>
    },
    {
      path: 'tech-transfer-reports',
      element: <TechTransferReports/>
    },
    {
      path: 'patents',
      element: <Patents/>
    },
    {
      path: 'software',
      element: <Software/>
    },
  ]
},
{
  path: '/SpaceScienceData',
  children:[
    {
      path: 'ssdcneos',
      element: <SSDCNEOS/>
    },
    {
      path: 'exoplanet-archive',
      element: <ExoplanetArchive/>
    },
    {
      path: 'space-science-data',
      element: <SpaceScienceData/>
    },
  ]
},
{
  path: '/geospatial-services',
  children:[
    {
      path: 'geocentric-spacecraft',
      element: <GeocentricSpacecraft/>
    },
    {
      path: 'eonet-geo',
      element: <EONETGEO/>
    },
  ]
},
{
  path: '/miscellaneous',
  children:[
    {
      path: 'open-science-data',
      element: <OpenScienceData/>
    },
    {
      path: 'DEM-grayscale',
      element: <DEMGrayscale/>
    },
    {
      path: 'color-hillshade',
      element: <ColorHillshade/>
    },
    {
      path: 'albedo-mosaic',
      element: <AlbedoMosaic/>
    },
    {
      path: 'infrared-day',
      element: <InfraredDay/>
    },
    {
      path: 'infrared-night',
      element: <InfraredNight/>
    },
  ]
},

])

export default router