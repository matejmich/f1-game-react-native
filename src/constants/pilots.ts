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