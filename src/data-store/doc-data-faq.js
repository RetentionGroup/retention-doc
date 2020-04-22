const docDataFAQ = [
    {
        category_id: 1,
        category_name: 'Общие вопросы.',
        category_items: [
            {
                id: 0,
                name_document: 'Вопрос который всех уже задрал N1',
                description: 'Вопрос который всех уже задрал N1',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            },
            {
                id: 1,
                name_document: 'Вопрос который всех уже задрал N2',
                description: 'Вопрос который всех уже задрал N1',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            }
        ]
    },
    {
        category_id: 2,
        category_name: 'RetentionDoc и его оформление.',
        category_items: [
            {
                id: 0,
                name_document: 'Что такое Retention Doc? Зачем он?',
                description: 'Вопрос который всех уже задрал N1',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vR-8fSRxm3_nexPbbchroYUY7emfte24AzzLyL5T5gnBcv4hZ1FcqPud1Oj_0V4f6pgkHAnvInkBwGa/pub?embedded=true'
            },
            {
                id: 1,
                name_document: 'Вопрос который всех уже задрал N2',
                description: 'Вопрос который всех уже задрал N2',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            },
            {
                id: 2,
                name_document: 'Вопрос который всех уже задрал N2',
                description: 'Вопрос который всех уже задрал N2',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            }
        ]
    },
    {
        category_id: 3,
        category_name: 'RetentionDoc Top и его оформление.',
        category_items: [
            {
                id: 0,
                name_document: 'Вопрос который всех уже задрал N1',
                description: 'Вопрос который всех уже задрал N1',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            },
            {
                id: 1,
                name_document: 'Вопрос который всех уже задрал N2',
                description: 'Вопрос который всех уже задрал N2',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            }
        ]
    },
    {
        category_id: 4,
        category_name: 'Чем можем помочь, а чем нет.',
        category_items: [
            {
                id: 0,
                name_document: 'Вопрос который всех уже задрал N1',
                description: 'Вопрос который всех уже задрал N1',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            },
            {
                id: 1,
                name_document: 'Вопрос который всех уже задрал N2',
                description: 'Вопрос который всех уже задрал N2',
                link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
            }
        ]
    }
]

export default docDataFAQ;

    //Альтернатывный Json. Вариант рендеринга прилагается и закоментирован в компоненте.
// const docDataFAQ = [
//     {
//         id: 0,
//         name_document: 'Вопрос который всех уже задрал N1',
//         category: {
//             id: 1,
//             name: 'category 1' 
//         },
//         description: 'Вопрос который всех уже задрал N1',
//         link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
//     },
//     {
//         id: 1,
//         name_document: 'Вопрос который всех уже задрал N2',
//         category: {
//             id: 1,
//             name: 'category 1' 
//         },
//         description: 'Вопрос который всех уже задрал N1',
//         link_document: 'https://docs.google.com/document/d/e/2PACX-1vQ32PuPq5K2JHuzV1sV63CjOrHcza48IqHMk5O9KAYa4EmMrxhWndaknw7w2tf3hJyyzyJYo9G7K0Xt/pub?embedded=true'
//     }
// ]

// export default docDataFAQ;

