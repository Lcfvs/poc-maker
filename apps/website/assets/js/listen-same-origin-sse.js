import express from 'content-handler-express/express.js'
import ContentHandler from 'content-handler/content-handler.js'
import sse from 'content-handler/controllers/sse/sse.js'
import withCredentials from 'content-handler/controllers/sse/configuration/with-credentials.js'
import input from 'content-handler/controllers/sse/input.js'
import app from '../../app.js'

ContentHandler
  .getByDocument()
  .addEventListener(sse.selector, sse.listen([
    input.dataset,
    withCredentials.include,
    express(app)
  ]))
