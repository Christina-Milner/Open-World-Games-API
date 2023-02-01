
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const games = {
    'skyrim': {
        'title': "The Elder Scrolls V: Skyrim",
        'release': 2011,
        'pc': true,
        'xbox': true,
        'switch': true,
        'playstation': true,
        'metacritic': 94
    },
    'rdr2': {
        'title': "Red Dead Redemption 2",
        'release': 2018,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 93
    },
    'botw': {
        'title': "The Legend of Zelda: Breath of the Wild",
        'release': 2017,
        'pc': false,
        'xbox': false,
        'switch': true,
        'playstation': false,
        'metacritic': 97
    },
    'gta5': {
        'title': "Grand Theft Auto V",
        'release': 2013,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 96
    },
    'witcher': {
        'title': "The Witcher 3: Wild Hunt",
        'release': 2015,
        'pc': true,
        'xbox': true,
        'switch': true,
        'playstation': true,
        'metacritic': 93
    },
    'eldenRing': {
        'title': "Elden Ring",
        'release': 2022,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 94
    },
    'noMansSky': {
        'title': "No Man's Sky",
        'release': 2016,
        'pc': true,
        'xbox': true,
        'switch': true,
        'playstation': true,
        'metacritic': 61
    },
    'mgs5': {
        'title': "Metal Gear Solid V: The Phantom Pain",
        'release': 2015,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 91
    },
    'hzd': {
        'title': "Horizon Zero Dawn",
        'release': 2017,
        'pc': true,
        'xbox': false,
        'switch': false,
        'playstation': true,
        'metacritic': 89
    },
    'spiderman': {
        'title': "Marvel's Spider-Man",
        'release': 2018,
        'pc': true,
        'xbox': false,
        'switch': false,
        'playstation': true,
        'metacritic': 87
    },
    'deathStranding': {
        'title': "Death Stranding",
        'release': 2019,
        'pc': true,
        'xbox': false,
        'switch': false,
        'playstation': true,
        'metacritic': 82
    },
    'fallout4': {
        'title': "Fallout 4",
        'release': 2015,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 84
    },
    'daysGone': {
        'title': "Days Gone",
        'release': 2019,
        'pc': true,
        'xbox': false,
        'switch': false,
        'playstation': true,
        'metacritic': 76
    },
    'cyberpunk': {
        'title': "Cyberpunk 2077",
        'release': 2020,
        'pc': true,
        'xbox': true,
        'switch': false,
        'playstation': true,
        'metacritic': 86
    },
    'ghost': {
        'title': "Ghost of Tsushima",
        'release': 2020,
        'pc': false,
        'xbox': false,
        'switch': false,
        'playstation': true,
        'metacritic': 83
    },

}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(games)
})


app.get('/api/rating/:score', (req, res) => {
    const score = Number(req.params.score)
    if (!score) {res.json(games); return} // Just list everything if zero or not a number
    let result = {}
    for (let game in games) {
        if (games[game]['metacritic'] >= score) {
            result[game] = games[game]
        }
    }
    res.json(result)
})

app.get('/api/platform/:platform', (req, res) => {
    const platform = req.params.platform.toLowerCase()
    let result = {}
    for (let game in games) {
        if (games[game][platform]) {
            result[game] = games[game]
        }
    }
    res.json(result)
})

app.get('/api/release/:year', (req, res) => {
    const year = Number(req.params.year)
    if (!year) {res.json(games); return} // Just list everything if zero or not a number
    let result = {}
    for (let game in games) {
        if (games[game]['release'] >= year) {
            result[game] = games[game]
        }
    }
    res.json(result)
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})