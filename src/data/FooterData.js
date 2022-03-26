import React from "react"
import { FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'

const iconStyle = (Icon) => <Icon />

export const footerSocialData = [
    {
        name: 'Youtube',
        icon: iconStyle(FaYoutube),
    },
    {
        name: 'Twitter',
        icon: iconStyle(FaTwitter),
    },
    {
        name: 'LinkedIn',
        icon: iconStyle(FaLinkedin),
    }
]

export const footerData = [
    {
        title: 'Main',
		links: ['Blog', 'FAQs', 'Support', 'About us'],
    },
    {
        title: 'Press',
		links: ['Logos', 'Events', 'Stories', 'Office'],
    },
    {
        title: 'Legal',
		links: ['GDPR', 'Privacy Policy', 'Terms of Service', 'Disclaimer'],
    }
]