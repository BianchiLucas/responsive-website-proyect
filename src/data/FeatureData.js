import React from "react"
import { SiStarship } from 'react-icons/si'
import { GiSpaceship, GiBolterGun, GiAutogun, GiMechanicalArm } from 'react-icons/gi'
import { GoTelescope } from 'react-icons/go'



const iconStyle = (Icon) => <Icon size='60px' color='#0f0f0f' />

export const FeatureData = [
    {
        name: 'Fly',
        description: 'Teavel through the stars',
        icon: iconStyle(SiStarship),
        imgClass: 'one'
    },
    {
        name: 'Discover',
        description: 'Be part of the first men in the limits of the galaxy',
        icon: iconStyle(GiSpaceship),
        imgClass: 'two'
    },
    {
        name: 'Train',
        description: "Be part of the Emperor's Army",
        icon: iconStyle(GiBolterGun),
        imgClass: 'three'
    }, 
    {
        name: 'Figth',
        description: 'Confront the Xenos races enemies of the Imperium',
        icon: iconStyle(GiAutogun),
        imgClass: 'four'
    },
    {
        name: 'Search',
        description: 'Find the lost tecnologies from the Dark Ages',
        icon: iconStyle(GoTelescope),
        imgClass: 'five'
    },
    {
        name: 'Create',
        description: 'Forge the new Worlds',
        icon: iconStyle(GiMechanicalArm),
        imgClass: 'six'
    }

]