require('dotenv').config()

const myenv = process.env
const DBURL = `mongodb://${myenv.DB_USER}:${myenv.DB_PASS}@${myenv.DB_URI}`

export const config = {
  secrets: {
    jwt: 'learneverything'
  },
  dbUrl: DBURL
}
