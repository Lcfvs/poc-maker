import ContentHandler from 'content-handler/content-handler.js'

ContentHandler
  .getByDocument()
  .addEventListener('.sse-message', ({element, source}) => {
    source.appendChild(element)
  })
