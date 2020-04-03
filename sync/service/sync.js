/* eslint-disable no-await-in-loop */
const pug = require('pug')
const moment = require('moment')

const codewars_api = require('../model/codewars_api')
const fs_handler = require('../model/fs_handler')
const parser = require('../helper/parser')

require('dotenv').config()

async function getWarriorCustomKatas(fun) {
  let output = []
  let page = 0
  let total
  let currentResponse

  do {
    currentResponse = await fun(process.env.CODEWARS_WARRIOR, page)
    if (currentResponse !== null) {
      output = output.concat(currentResponse.data)
      total = currentResponse.totalPages
    }
    page += 1
  } while (page < total)

  return output
}

async function katasGetAndWrite(arg) {
  const input = arg

  const data = {
    pretty: true,
    moment,
    kata: undefined
  }

  for (let i = 0; i < input.length; i += 1) {
    if (fs_handler.checkFile(`./kata/${input[i].slug}/data.json`)) {
      input[i].data = JSON.parse(fs_handler.readFile(`./kata/${input[i].slug}/data.json`))
    } else {
      data.kata = await codewars_api.getKataData(input[i].id)
      fs_handler.writeFile(`./kata/${input[i].slug}/data.json`, JSON.stringify(data.kata, null, 2))
      input[i].data = data.kata
      fs_handler.writeFile(`./kata/${input[i].slug}/README.MD`, pug.renderFile('./sync/view/kata.pug', data))
    }
  }

  return input
}

async function init() {
  try {
    const warrior = await codewars_api.getWarriorData(process.env.CODEWARS_WARRIOR)
    const completedKatas = await katasGetAndWrite(await getWarriorCustomKatas(codewars_api.getWariorCompletedKatas))

    const completedKatasInfo = parser.getCompletedKatasInfo(warrior, completedKatas)

    const data = {
      pretty: true,
      moment,
      warrior: process.env.CODEWARS_WARRIOR,
      mail: process.env.CONTACT_MAIL,
      overall: parser.getOverall(warrior),
      completedKatas: {
        by_language: completedKatasInfo.by_language,
        by_topic: completedKatasInfo.by_topic
      }
    }

    fs_handler.writeFile('./README.MD', pug.renderFile('./sync/view/main.pug', data))
  } catch (error) {
    console.log(error)
  }
}

module.exports = { init }
