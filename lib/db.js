import fetch from 'axios'

async function getResults () {
  const apiURL = `/api/server`

  try {
    const result = await fetch(apiURL)
    return result.data.items
  } catch (err) {
    console.log(`Shoot! You hit an error: ${err}`)
  }
}

export { getResults }
