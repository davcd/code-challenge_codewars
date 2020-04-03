function descNumerCompare(x, y) {
  if (x < y) {
    return 1
  }
  if (x > y) {
    return -1
  }
  return 0
}

function getOverall(warrior) {
  return {
    rank: warrior.ranks.overall.name,
    score: warrior.ranks.overall.score,
    honor: warrior.honor,
    completed_katas: warrior.codeChallenges.totalCompleted,
    authored_katas: warrior.codeChallenges.totalAuthored
  }
}

function getCompletedKatasInfo(warrior, completedKata) {
  let by_language = {}
  const by_topic = {}

  for (let i = 0; i < completedKata.length; i += 1) {
    for (let j = 0; j < completedKata[i].completedLanguages.length; j += 1) {
      if (by_language[completedKata[i].completedLanguages[j]] === undefined) {
        by_language[completedKata[i].completedLanguages[j]] = {
          name: completedKata[i].completedLanguages[j],
          summary: {
            rank: warrior.ranks.languages[completedKata[i].completedLanguages[j]].name,
            completed: [0, 0, 0, 0, 0, 0, 0, 0, 0]
          },
          list: {
            katas: []
          }
        }
      }

      by_language[completedKata[i].completedLanguages[j]].summary.completed[
        completedKata[i].data.rank.id ? completedKata[i].data.rank.id + 9 : 0
      ] += 1

      by_language[completedKata[i].completedLanguages[j]].list.katas.push({
        difficulty: completedKata[i].data.rank.name,
        name: completedKata[i].name,
        slug: completedKata[i].slug,
        date: completedKata[i].completedAt
      })
    }

    for (let j = 0; j < completedKata[i].data.tags.length; j += 1) {
      if (by_topic[completedKata[i].data.tags[j]] === undefined) {
        by_topic[completedKata[i].data.tags[j]] = {
          name: completedKata[i].data.tags[j],
          num: 0
        }
      }
      by_topic[completedKata[i].data.tags[j]].num += completedKata[i].completedLanguages.length
    }
  }

  by_language = Object.values(by_language).sort((a, b) => a.summary.rank.localeCompare(b.summary.rank))
  by_language.forEach((x) => x.list.katas.sort((a, b) => a.difficulty.localeCompare(b.difficulty)))

  return {
    by_language,
    by_topic: Object.values(by_topic)
      .sort((a, b) => descNumerCompare(a.num, b.num))
      .slice(0, 10)
  }
}

module.exports = { getOverall, getCompletedKatasInfo }
