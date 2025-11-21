import { Image } from "expo-image";
import colors from "./colors";

const mini_alpine = require("../../assets/images/teams/mini_alpine.png");
const mini_astonmartin = require("../../assets/images/teams/mini_astonmartin.png");
const mini_ferrari = require("../../assets/images/teams/mini_ferrari.png");
const mini_haas = require("../../assets/images/teams/mini_haas.png");
const mini_kicksauber = require("../../assets/images/teams/mini_sauber.png");
const mini_mclaren = require("../../assets/images/teams/mini_mclaren.png");
const mini_mercedes = require("../../assets/images/teams/mini_mercedes.png");
const mini_racingbulls = require("../../assets/images/teams/mini_racingbulls.png");
const mini_redbull = require("../../assets/images/teams/mini_redbull.png");
const mini_williams = require("../../assets/images/teams/mini_williams.png");



export type Pilot = {
    name: string;
    teamId: string;
};

export const pilots: Pilot[] = [
    {
        name: 'Max Verstappen', teamId: 'redbull',

    },
    {
        name: 'Fernando Alonso',
        teamId: 'astonmartin',
    },
    { name: 'George Russell', teamId: 'mercedes' },
    { name: 'Yuki Tsunoda', teamId: 'redbull' },
    { name: 'Lando Norris', teamId: 'mclaren' },
    { name: 'Oscar Piastri', teamId: 'mclaren' },
    { name: 'Lance Stroll', teamId: 'astonmartin' },
    { name: 'Kimi Antonelli', teamId: 'mercedes' },
    { name: 'Charles Leclerc', teamId: 'ferrari' },
    { name: 'Esteban Ocon', teamId: 'haas' },
    { name: 'Oliver Bearman', teamId: 'haas' },
    { name: 'Pierre Gasly', teamId: 'alpine' },
    { name: 'Franco Colapinto', teamId: 'alpine' },
    { name: 'Nico Hulkenberg', teamId: 'kicksauber' },
    { name: 'Gabriel Bortoleto', teamId: 'kicksauber' },
    { name: 'Liam Lawson', teamId: 'racingbulls' },
    { name: 'Isaac Hadjar', teamId: 'racingbulls' },
    { name: 'Alex Albon', teamId: 'williams' },
    { name: 'Carlos Sainz', teamId: 'williams' },
    { name: 'Lewis Hamilton', teamId: 'ferrari' },
];

export type Team = {
    name: string;
    color: string;
    mini: Image;
};

export const teams: Record<string, Team> = {
    mercedes: { name: 'Mercedes', color: colors.team_mercedes, mini: mini_mercedes },
    redbull: { name: 'Red Bull Racing', color: colors.team_redbull, mini: mini_redbull },
    ferrari: { name: 'Ferrari', color: colors.team_ferrari, mini: mini_ferrari },
    mclaren: { name: 'Mclaren', color: colors.team_mclaren, mini: mini_mclaren },
    alpine: { name: 'Alpine', color: colors.team_alpine, mini: mini_alpine },
    racingbulls: { name: 'Racing Bulls', color: colors.team_racingbulls, mini: mini_racingbulls },
    astonmartin: { name: 'Aston Martin', color: colors.team_astonmartin, mini: mini_astonmartin },
    williams: { name: 'Williams', color: colors.team_williams, mini: mini_williams },
    kicksauber: { name: 'Kick Sauber', color: colors.team_kicksauber, mini: mini_kicksauber },
    haas: { name: 'Haas', color: colors.team_hass, mini: mini_haas },
}

type Circuit = {
    name: string;
    country: string;
    image: Image;
}

export const circuits: Record<string, Circuit> = {
    australia: {
        name: 'Albert Park Circuit',
        country: 'Australia',
        image: require('../../assets/images/circuits/f1_2024_abu_outline.png'),
    },
    abu_dhabi: {
        name: 'Yas Marina Circuit',
        country: 'UAE',
        image: require('../../assets/images/circuits/f1_2024_abu_outline.png'),
    },
    austria: {
        name: 'Red Bull Ring',
        country: 'Austria',
        image: require('../../assets/images/circuits/f1_2024_aut_outline.png'),
    },
    azerbaijan: {
        name: 'Baku City Circuit',
        country: 'Azerbaijan',
        image: require('../../assets/images/circuits/f1_2024_aze_outline.png'),
    },
    belgium: {
        name: 'Circuit de Spa-Francorchamps',
        country: 'Belgium',
        image: require('../../assets/images/circuits/f1_2024_bel_outline.png'),
    },
    bahrain: {
        name: 'Bahrain International Circuit',
        country: 'Bahrain',
        image: require('../../assets/images/circuits/f1_2024_bhr_outline.png'),
    },
    brazil: {
        name: 'Interlagos Circuit',
        country: 'Brazil',
        image: require('../../assets/images/circuits/f1_2024_bra_outline.png'),
    },
    canada: {
        name: 'Circuit Gilles Villeneuve',
        country: 'Canada',
        image: require('../../assets/images/circuits/f1_2024_can_outline.png'),
    },
    china: {
        name: 'Shanghai International Circuit',
        country: 'China',
        image: require('../../assets/images/circuits/f1_2024_chn_outline.png'),
    },
    imola: {
        name: 'Imola Circuit',
        country: 'Italy',
        image: require('../../assets/images/circuits/f1_2024_ero_outline.png'),
    },
    greatbritain: {
        name: 'Silverstone Circuit',
        country: 'Great Britain',
        image: require('../../assets/images/circuits/f1_2024_gbr_outline.png'),
    },
    hungary: {
        name: 'Hungaroring',
        country: 'Hungary',
        image: require('../../assets/images/circuits/f1_2024_hun_outline.png'),
    },
    italy: {
        name: 'Monza Circuit',
        country: 'Italy',
        image: require('../../assets/images/circuits/f1_2024_ita_outline.png'),
    },
    japan: {
        name: 'Suzuka Circuit',
        country: 'Japan',
        image: require('../../assets/images/circuits/f1_2024_jap_outline.png'),
    },
    lasvegas: {
        name: 'Las Vegas Street Circuit',
        country: 'USA',
        image: require('../../assets/images/circuits/f1_2024_lve_outline.png'),
    },
    monaco: {
        name: 'Circuit de Monaco',
        country: 'Monaco',
        image: require('../../assets/images/circuits/f1_2024_mco_outline.png'),
    },
    mexico: {
        name: 'Autódromo Hermanos Rodríguez',
        country: 'Mexico',
        image: require('../../assets/images/circuits/f1_2024_mex_outline.png'),
    },
    netherlands: {
        name: 'Circuit Zandvoort',
        country: 'Netherlands',
        image: require('../../assets/images/circuits/f1_2024_nld_outline.png'),
    },
    quatar: {
        name: 'Losail International Circuit',
        country: 'Qatar',
        image: require('../../assets/images/circuits/f1_2024_qat_outline.png'),
    },
    saudiarabia: {
        name: 'Jeddah Corniche Circuit',
        country: 'Saudi Arabia',
        image: require('../../assets/images/circuits/f1_2024_sau_outline.png'),
    },
    singapore: {
        name: 'Marina Bay Street Circuit',
        country: 'Singapore',
        image: require('../../assets/images/circuits/f1_2024_sgp_outline.png'),
    },
    spain: {
        name: 'Circuit de Barcelona-Catalunya',
        country: 'Spain',
        image: require('../../assets/images/circuits/f1_2024_spn_outline.png'),
    },
    usa: {
        name: 'Circuit of the Americas',
        country: 'USA',
        image: require('../../assets/images/circuits/f1_2024_usa_outline.png'),
    },
};
