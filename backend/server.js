import express from 'express';

const app = express();

// app.get('/', (_, res) => {
//     res.send('Server is ready');
// });

app.get('/api/Shayari', (_, res) => { 
    const Shayari = [
        {
            id: 1,
            title: "Nothing is better than your smile,",
            content: "It brings peace to my heart every day."
        },
        {
            id: 2,
            title: "I know how to play with hearts,",
            content: "But I don’t break the toy that I love."
        },
        {
            id: 3,
            title: "Every gesture of yours feels like love,",
            content: "Even a moment of separation feels like a catastrophe."
        },
        {
            id: 4,
            title: "Love isn’t about making you mine,",
            content: "Love is about not letting you belong to anyone else."
        },
        {
            id: 5,
            title: "She says she remembers me every day,",
            content: "I said, 'This is love, not a habit.'"
        }
    ];

    res.json(Shayari);  
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:3000`);
});
