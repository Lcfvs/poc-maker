import app from '../../app.js'

const template = '/events/index.html'

function send (html, response) {
  const clone = html.cloneNode(true)
  const items = clone.querySelectorAll('li')
  const key = Math.floor(Math.random() * items.length)

  items.forEach((item, index) => {
    if (index !== key) {
      item.parentNode.removeChild(item)
    }
  })

  response.send(clone)
}

app.get(template, (request, response) => {
  response.render(template, (error, html) => {
    if (error) {
      throw error
    }

    setInterval(send, 1000, html, response)
  })
})
