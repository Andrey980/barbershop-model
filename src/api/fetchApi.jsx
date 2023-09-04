import axios from 'axios'

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://virtual-agenda-a31dbadb2002.herokuapp.com/public/blunt`
    )
    const data = response.data
    return data
  } catch (error) {
    // Trate os erros, se necessário
    console.error(error)
    return null
  }
}
