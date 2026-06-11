import './style.css'
import dayjs from 'dayjs'

document.querySelector('#app').innerHTML = `
  <h1>Timezone Clock</h1>

  <p class="current-time">
    Loading...
  </p>

  <button class="timezone-btn">
    Select Timezone
  </button>
`

const timeElement =
  document.querySelector('.current-time')

function updateTime() {
  timeElement.textContent =
    dayjs().format('HH:mm:ss')
}

updateTime()

setInterval(updateTime, 1000)