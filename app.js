const express = require('express')
const app = express()
const port = 3000

var list = []

function getContent() {
    var content = ""
    for (var i = 0; i < list.length; i++) {
        content += `<div>${list[i]}</div>`
    }
    return content
}

app.get('/', (req, res) => {
  res.send(`
<html>
    <body>
        ${getContent()}
    </body>
</html>
  `)
})

app.post('/', (req, res) => {
    var value = req.query.value
    list.push(value)
    res.send()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})