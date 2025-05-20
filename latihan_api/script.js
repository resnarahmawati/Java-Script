const content = document.querySelector('#content')
const url = 'ff14aaccba6b9dd7ac668aff19eddb1e'
const hitAPI = async (url) => {
  const api = await fetch(url)
  const data = api.json()
  return data
}
hitAPI()

document.addEventListener('DOMContentLoaded', async () => {
  let data = await hitAPI(url)
  let dataHTML = "<ul>"
    data.forEach(e => {
      dataHTML += `
      <li>
        <p>Nama : ${e.name}</p>
        <p>Jenis kelamin : ${e.gender}</p>
        <p>Umur : ${e.age}</p>
      </li>`;
    })
    dataHTML +- "</ul>"
    content.innerHTML = dataHTML
})