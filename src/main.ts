import 'dotenv/config'

import app from './app'

const { PORT } = process.env
const port = PORT || 3000

app.listen(port, () => {
  console.log(`🍟 Api listening at http://localhost:${port} 🍩`)
})
