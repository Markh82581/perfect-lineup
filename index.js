function calculateTotalSalary(lineup) {
    return lineup.reduce((salary, player) => { 
        return salary + player.salary
    }, 0)
}

function getTeamCount(lineup) {
    return lineup.reduce((teamCounts, player) => {
        teamCounts[player.teamId] = teamCounts[player.teamId] === undefined ? 
        1 : teamCounts[player.teamId] + 1
        return teamCounts
    }, {})
 }

function getGameCount(lineup) {
    return lineup.reduce((gameCounts, player) => {
        gameCounts[player.gameId] = gameCounts[player.gameId] === undefined ? 
        1 : gameCounts[player.gameId] + 1
        return gameCounts
    }, {})
 }

function getPositionCount(lineup) {
     return lineup.reduce((positionCounts, player) => {
        positionCounts[player.position] = positionCounts[player.position] === undefined ? 
        1 : positionCounts[player.position] + 1
        return positionCounts
    }, {})
 }

function violatesSalary(lineup) {
    return calculateTotalSalary(lineup) > 45000
}

function violatesTeamCount(teamCounts) {
    return Object.values(teamCounts).some((count) => { return count > 2 })
}
 
function violatesGameCount(gameCounts) {
    return Object.values(gameCounts).some((count) => { return count > 3 })
}

function violatesPositioncount(positionCounts) {
    return positionCounts['P'] !== 1 || positionCounts['C'] !== 1 || positionCounts['1B'] !== 1
    || positionCounts['2B'] !== 1 || positionCounts['3B'] !== 1 || positionCounts['SS'] !== 1
    || positionCounts['OF'] !== 3 
}

function validateLineup(lineup) {
    const teamCounts = getTeamCount(lineup)
    const gameCounts = getGameCount(lineup)
    const positionCounts = getPositionCount(lineup)

    return !violatesSalary(lineup) && !violatesTeamCount(teamCounts)
    && !violatesGameCount(gameCounts) && !violatesPositioncount(positionCounts)
}

module.exports = validateLineup
