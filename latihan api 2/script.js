const content = document.querySelector('#content')
const url = './data.json'
const hitAPI = async (url) => {
  const api = await fetch(url)
  const data = api.json()
  return data
}
url = "https://kitsu.io/api/edge/anime?filter[categories]=adventure"
document.addEventListener('DOMContentLoaded', async () => {
  let data = await hitAPI(url);
  data = data.data
  console.log(data)
  let teks = '<ul class="animek"'
  data.forEach(element => {
    let attr = element.attributes
    teks += `<li> <h3>${attr.titles.en}</h3>`;
    teks += `<img src="${attr.posterImage.tiny}"><br>`
    teks += `<a href="https://youtu.be/watch?v=${attr.youtubeVideold}"
    target="_blank">Link Youtube</a>`;
    //console.log(element.none)
  });
  teks += `<ul>`
  content.innerHTML = teks
})