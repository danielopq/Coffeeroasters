


interface Choice {
    choiceTitle: string;
    choiceDescription: string;
}

interface Option {
    option01: Choice;
    option02: Choice;
    option03: Choice;
}

interface OptionsList {
    [optionTitle: string]: Option;
}

const OptionsData: OptionsList = {
    'How do you drink your coffee?': {
        option01: {
            choiceTitle: 'Capsule',
            choiceDescription: 'Compatible with Nespresso systems and similar brewers',
        },
        option02: {
            choiceTitle: 'Filter',
            choiceDescription: 'For pour over or drip methods like Aeropress, Chemex, and V60',
        },
        option03: {
            choiceTitle: 'Espresso',
            choiceDescription: 'Dense and finely ground beans for an intense, flavorful experience',
        },
    },
    'What type of coffee?': {
        option01: {
            choiceTitle: 'Single Origin',
            choiceDescription: 'Distinct, high quality coffee from a specific family-owned farm',
        },
        option02: {
            choiceTitle: 'Decaf',
            choiceDescription: 'Just like regular coffee, except the caffeine has been removed',
        },
        option03: {
            choiceTitle: 'Blended',
            choiceDescription: 'Combination of two or three dark roasted beans of organic coffees',
        },
    },
    'How much would you like?': {
        option01: {
            choiceTitle: '250 gr.',
            choiceDescription: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
        },
        option02: {
            choiceTitle: '500 gr.',
            choiceDescription: 'Perfect option for a couple. Yields about 40 delectable cups.',
        },
        option03: {
            choiceTitle: '1000 gr.',
            choiceDescription: 'Perfect for offices and events. Yields about 90 delightful cups.',
        },
    },
    'Want us to grind them?': {
        option01: {
            choiceTitle: 'Wholebean',
            choiceDescription: 'Best choice if you cherish the full sensory experience',
        },
        option02: {
            choiceTitle: 'Filter',
            choiceDescription: 'For drip or pour-over coffee methods such as V60 or Aeropress',
        },
        option03: {
            choiceTitle: 'Cafetiére',
            choiceDescription: 'Course ground beans specially suited for french press coffee',
        },
    },
    'How often should we deliver?': {
        option01: {
            choiceTitle: 'Every week',
            choiceDescription: '$7.20 per shipment. Includes free first-class shipping.',
        },
        option02: {
            choiceTitle: 'Every 2 weeks',
            choiceDescription: '$9.60 per shipment. Includes free priority shipping.',
        },
        option03: {
            choiceTitle: 'Every month',
            choiceDescription: '$12.00 per shipment. Includes free priority shipping.',
        },
    },
};
export default OptionsData;