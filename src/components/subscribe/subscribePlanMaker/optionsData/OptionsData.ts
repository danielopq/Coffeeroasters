interface Choice {
    title: string;
    description: string;
    value:number;
}

interface Option {
    optionHeader: string;
    choice01: Choice;
    choice02: Choice;
    choice03: Choice;
}

interface OptionsList {
    [optionTitle: string]: Option;
}

const OptionsData: OptionsList = {
    'option01': {
        optionHeader: 'How do you drink your coffee?',
        choice01: {
            title: 'Capsules',
            description: 'Compatible with Nespresso systems and similar brewers',
            value:1,
        },
        choice02: {
            title: 'Filter',
            description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
            value:0,
        },
        choice03: {
            title: 'Espresso',
            description: 'Dense and finely ground beans for an intense, flavorful experience',
            value:0,
        },
    },
    'option02': {
        optionHeader: 'What type of coffee?',
        choice01: {
            title: 'Single Origin',
            description: 'Distinct, high quality coffee from a specific family-owned farm',
            value:0,
        },
        choice02: {
            title: 'Decaf',
            description: 'Just like regular coffee, except the caffeine has been removed',
            value:0,
        },
        choice03: {
            title: 'Blended',
            description: 'Combination of two or three dark roasted beans of organic coffees',
            value:0,
        },
    },
    'option03': {
        optionHeader: 'How much would you like?',
        choice01: {
            title: '250 gr. ',
            description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
            value:5,
        },
        choice02: {
            title: '500 gr. ',
            description: 'Perfect option for a couple. Yields about 40 delectable cups.',
            value:8,
        },
        choice03: {
            title: '1000 gr. ',
            description: 'Perfect for offices and events. Yields about 90 delightful cups.',
            value:14,
        },
    },
    'option04': {
        optionHeader: 'Want us to grind them?',
        choice01: {
            title: 'Wholebean',
            description: 'Best choice if you cherish the full sensory experience',
            value:0,
        },
        choice02: {
            title: 'Filter',
            description: 'For drip or pour-over coffee methods such as V60 or Aeropress',
            value:2,
        },
        choice03: {
            title: 'Cafetiére',
            description: 'Course ground beans specially suited for french press coffee',
            value:2,
        },
    },
    'option05': {
        optionHeader: 'How often should we deliver?',
        choice01: {
            title: 'Every week',
            description: '$7.20 per shipment. Includes free first-class shipping.',
            value:7.20,
        },
        choice02: {
            title: 'Every 2 weeks',
            description: '$9.60 per shipment. Includes free priority shipping.',
            value:9.60,
        },
        choice03: {
            title: 'Every month',
            description: '$12.00 per shipment. Includes free priority shipping.',
            value:12.00,
        },
    },
}

export default OptionsData;