interface Choice {
    choiceTitle: string;
    choiceDescription: string;
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
            choiceTitle: 'Capsule',
            choiceDescription: 'Compatible with Nespresso systems and similar brewers',
        },
        choice02: {
            choiceTitle: 'Filter',
            choiceDescription: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        choice03: {
            choiceTitle: 'Espresso',
            choiceDescription: 'Dense and finely ground beans for an intense, flavorful experience',
        },
    },
    'option02': {
        optionHeader: 'What type of coffee?',
        choice01: {
            choiceTitle: 'Single Origin',
            choiceDescription: 'Distinct, high quality coffee from a specific family-owned farm',
        },
        choice02: {
            choiceTitle: 'Decaf',
            choiceDescription: 'Just like regular coffee, except the caffeine has been removed',
        },
        choice03: {
            choiceTitle: 'Blended',
            choiceDescription: 'Combination of two or three dark roasted beans of organic coffees',
        },
    },
    'option03': {
        optionHeader: 'How much would you like?',
        choice01: {
            choiceTitle: '250 gr.',
            choiceDescription: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        choice02: {
            choiceTitle: '500 gr.',
            choiceDescription: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        choice03: {
            choiceTitle: '1000 gr.',
            choiceDescription: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
    },
    'option04': {
        optionHeader: 'Want us to grind them?',
        choice01: {
            choiceTitle: 'Wholebean',
            choiceDescription: 'Best choice if you cherish the full sensory experience',
        },
        choice02: {
            choiceTitle: 'Filter',
            choiceDescription: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        choice03: {
            choiceTitle: 'Cafetiére',
            choiceDescription: 'Course ground beans specially suited for french press coffee',
        },
    },
    'option05': {
        optionHeader: 'How often should we deliver?',
        choice01: {
            choiceTitle: 'Every week',
            choiceDescription: '$7.20 per shipment. Includes free first-class shipping.',
        },
        choice02: {
            choiceTitle: 'Every 2 weeks',
            choiceDescription: '$9.60 per shipment. Includes free priority shipping.',
        },
        choice03: {
            choiceTitle: 'Every month',
            choiceDescription: '$12.00 per shipment. Includes free priority shipping.',
        },
    },
}

export default OptionsData;