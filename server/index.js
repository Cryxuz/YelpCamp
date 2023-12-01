import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3000
app.use(cors())

app.get('/', (req,res) => {
  res.render(app)
})

app.listen(PORT, () =>
  console.log('listening to port: ', PORT)
)