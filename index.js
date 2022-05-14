var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');

var app = express()
app.enable('trust proxy');
app.use(cors())
app.use(secure)
app.use(express.static("public"))

const Loli = require('lolis.life');
const loli = new Loli();

app.get('/', async (req, res, next) => {
    loli.getSFWLoli().then((a) => {
        loli.getSFWShota().then((b) => {
            loli.getNSFWLoli().then((c) => {
                res.json({
                    creator: 'https://zenzapis.xyz',
                    sfwloli: a.url,
                    sfwshota: b.url,
                    nsfwloli: c.url,
                })
            }).catch(e => {
                res.json('OH NO PATRICK HERE')
            })
        }).catch(e => {
            res.json('OH NO PATRICK HERE')
        })
    }).catch(e => {
        res.json('OH NO PATRICK HERE')
    })
})

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080")
})

module.exports = app
