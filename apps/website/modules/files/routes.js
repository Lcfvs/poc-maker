import app from '../../app.js'

const template = '/files/index.html'

app.get(template, (request, response) => {
  response.render(template, (error, html) => {
    if (error) {
      throw error
    }

    response.send(html)
  })
})
