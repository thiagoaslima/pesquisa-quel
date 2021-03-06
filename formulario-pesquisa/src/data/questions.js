export const questions = [
    {
        "type": "text",
        "title": "Dados pessoais"
    },
    {
        "type": "input",
        "title": "Nome"
    },
    {
        "type": "yes-no",
        "title": "Servidor Público",
    },
    {
        "type": "yes-no",
        "title": "Trabalha no setor de RH",
    },
    {
        "type": "radio",
        "title": "Idade",
        "questions": [
            {
                "text": "20 a 30 anos",
                "value": "20-30"
            },
            {
                "text": "31 a 40 anos",
                "value": "31-40"
            },
            {
                "text": "41 a 50 anos",
                "value": "41-50"
            },
            {
                "text": "51 a 60 anos",
                "value": "51-60"
            },
            {
                "text": "61 anos ou mais",
                "value": "61+"
            }
        ]
    },
    {
        "type": "text",
        "title": "Responda as questões abaixo, relacionando as características que mais representam os valores do(a) chefe de maior nível hierárquico do setor de Recursos humanos ou de Gestão de pessoas do órgão/instituição onde você trabalha."
    },
    {
        "type": "rating-order",
        "title": "Classifique os níveis de consciência abaixo de acordo com as características que mais se aproximam do perfil da chefia que ocupa o cargo mais alto do setor de Recurso Humanos/Gestão de Pessoas da sua empresa.",
        "scenarios": ["Atualmente", "Como seria o ideal"],
        "questions": [
            {
                "title": "Apresenta grande preocupação com a responsabilidade social, se preocupa com as gerações futuras, demonstra compaixão e perspectiva de longo prazo."
            },
            {
                "title": "Demonstra grande consciência ambiental, está sempre disposta a colaborar, se preocupa com a realização dos funcionários e está sempre buscando parcerias."
            },
            {
                "title": "Passa grande confiança, comprometimento, honestidade, integridade, entusiasmo e paixão na prática de suas atividades."
            },
            {
                "title": "Possui grande capacidade de adaptação, busca aprendizado contínuo, estimula o trabalho em equipe, o crescimento pessoal e promove accountability."
            },
            {
                "title": "Apresenta alta produtividade, eficiência, excelência, qualidade e está sempre buscando o crescimento profissional. Valoriza o status, a hierarquia e a burocracia."
            },
            {
                "title": "Pratica a comunicação aberta, se preocupa com os outros, favorece as relações de amizade no local de trabalho, estimula a competição interna, e tenta manipular as situações e os outros."
            },
            {
                "title": "Se preocupa com a saúde e segurança dos funcionários e sua própria estabilidade financeira. Visa o crescimento da Instituição, mas foca no curto prazo. Possui aversão a correr risco e busca no controle a solução para barra algumas inovações."
            }
        ]
    }
];

