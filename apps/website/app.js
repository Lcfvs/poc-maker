import ContentApplication from 'content-handler-express/content-application.js'
import html from 'content-handler-express/engines/html.js'

const document = window.document
const app = new ContentApplication()

export default app
  .engine('html', html(app, document))
  .set('origin', document.location.origin)
