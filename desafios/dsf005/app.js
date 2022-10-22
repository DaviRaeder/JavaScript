const form = document.querySelector('#form')
const searchInput = document.querySelector('#search')
const songsContainer = document.querySelector('#songs-container')
const prevAndNextContainer = document.querySelector('#prev-and-next-container')

const apiUrl = `https://api.lyrics.ovh`

const fetchData = async url => {
  const response = await fetch(url)
  return await response.json()
}

const getMoreSongs = async url => {
  const data = await fetchData(`https://cors-anywhere.herokuapp.com/${url}`)
  insertSongsIntoPage(data)
}

const insertSongsIntoPage = ({ data, prev, next }) => {
  songsContainer.innerHTML = data
    .map(({ artist: { name } , title }) => `
    <li class="song">
        <span class="song-artist"><strong>${name}</strong> - ${title}</span>
        <button class="btn" data-artist="${name}" data-song-title="${title}">Ver letra</button>
    </li>
    `
    )
    .join('')

  const insertNextAndPrevButtons = ({ prev, next }) => {
    prevAndNextContainer.innerHTML = `
    ${
      songsInfo.prev
        ? `<button class="btn" onClick="getMoreSongs('${prev}')">Anteriores</button>`
        : ''
    }
    ${
      songsInfo.next
        ? `<button class="btn" onClick="getMoreSongs('${next}')">Próximas</button>`
        : ''
    }
`
  }

  if (songsInfo.prev || songsInfo.next) {
    insertNextAndPrevButtons(songsInfo)
    return
  }

  prevAndNextContainer.innerHTML = ''
}

const fetchSongs = async term => {
  const data = await fetchData(
    `https://cors-anywhere.herokuapp.com/${apiUrl}/suggest/${term}`
  )
  insertSongsIntoPage(data)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const searchTerm = searchInput.value.trim()

  if (!searchTerm) {
    songsContainer.innerHTML = `<li class="warning-message">Por favor, digite um termo válido.</li>`
    return
  }

  fetchSongs(searchTerm)
})

const insertLyricsIntoPage = ({ lyrics, artist, songTitle }) => {
  songsContainer.innerHTML = `
    <li class="lyrics-container">
        <h2><strong>${songTitle}</strong> - ${artist}</h2>
        <p class="lyrics">${lyrics}</p>
    </li>    
`
}

const fetchLyrics = async (artist, songTitle) => {
  const data = await fetchData(`${apiUrl}/v1/${artist}/${songTitle}`)
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>')
  insertLyricsIntoPage({ lyrics, artist, songTitle })
}

songsContainer.addEventListener('click', event => {
  const clickedElement = event.target

  if (clickedElement.tagName === 'BUTTON') {
    const artist = clickedElement.getAttribute('data-artist')
    const songTitle = clickedElement.getAttribute('data-song-title')

    prevAndNextContainer.innerHTML = ''

    fetchLyrics(artist, songTitle)
  }
})
