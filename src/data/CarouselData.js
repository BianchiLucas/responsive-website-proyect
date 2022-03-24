export const data = [
    {
        title: 'What out troops say',
        description: 'Our troops happily stay with our services for more several years now. See real reviews from our soldiers',
        image: './assets/ImperialGuard.jpg'
    },
    {
        title: 'Our Planetary Defenses',
        description: 'Learn more about our security systems to make sure your sector is always safe',
        image: './assets/PlanetaryDefences.jpg'
    },
    {
        title: 'Our Space Marines',
        description: "Our Emperor's chosen are the best experts in the industry, learn about them",
        image: './assets/SpaceMarines.jpg'
    },
    {
        title: 'Our Battleships',
        description: 'Find more about the Battleships and Battlebarges used on the Great Crusade',
        image: './assets/Battleship.jpg'
    },
    {
        title: 'Our worlds',
        description: 'More than one million worlds conquered',
        image: './assets/Map.webp'
    }
]

export const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    focusOnselect: false,
    accessability: false,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
}