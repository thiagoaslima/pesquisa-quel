export const questions = [
    {
        type: 'input',
        title: 'Nome'
    },
    {
        type: 'yes-no',
        title: 'Servidor Público',
    },
    {
        type: 'yes-no',
        title: 'Trabalha no setor de RH',
    },
    {
        type: 'radio',
        title: 'Idade',
        questions: [
            {
                text: '20 a 30 anos',
                value: '20-30'
            },
            {
                text: '31 a 40 anos',
                value: '31-40'
            },
            {
                text: '41 a 50 anos',
                value: '41-50'
            },
            {
                text: '51 a 60 anos',
                value: '51-60'
            },
            {
                text: '61 anos ou mais',
                value: '61+'
            }
        ]
    },
    {
        type: 'rating-order',
        title: 'Teste Texto 1'
    }
];

