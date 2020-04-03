const axios = require('axios')

const endpoint = 'https://www.codewars.com/api/v1'

async function getWarriorData(warrior_uid) {
  return axios
    .get(`${endpoint}/users/${warrior_uid}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function getWariorCompletedKatas(warrior_uid, page) {
  return axios
    .get(`${endpoint}/users/${warrior_uid}/code-challenges/completed?page=${page}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

async function getKataData(kata_id) {
  return axios
    .get(`${endpoint}/code-challenges/${kata_id}`)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error)
      return null
    })
}

module.exports = {
  getWarriorData,
  getWariorCompletedKatas,
  getKataData
}
