import './style.css'
import dayjs from 'dayjs'
import MicroModal from 'micromodal'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)

document.querySelector('#app').innerHTML = `
  <h1>Timezone Clock</h1>

    <p class="current-time">
        Loading...
	  </p>

	    <button
	        class="timezone-btn"
		    data-micromodal-trigger="timezone-modal">
		        Select Timezone
			  </button>

			    <div
			        class="modal micromodal-slide"
				    id="timezone-modal"
				        aria-hidden="true">

					    <div
					          tabindex="-1"
						        data-micromodal-close>

							      <div
							              role="dialog"
								              aria-modal="true">

									              <h2>Select Timezone</h2>

										              <select class="timezone-select">
<option value="Africa/Lagos">Africa/Lagos</option>
<option value="Europe/London">Europe/London</option>
<option value="America/New_York">America/New_York</option>
<option value="Asia/Tokyo">Asia/Tokyo</option>
																              </select>

																	            </div>

																		        </div>

																			  </div>
																			  `

const timeElement =
	  document.querySelector('.current-time')
const timezoneSelect =
	  document.querySelector('.timezone-select')
timezoneSelect.addEventListener('change', () => {
	  selectedTimezone = timezoneSelect.value
  updateTime()
})
let selectedTimezone = 'Africa/Lagos'
function updateTime() {
	  timeElement.textContent =
		    dayjs()
	.tz(selectedTimezone)
 	.format('HH:mm:ss')
}

updateTime()

setInterval(updateTime, 1000)

MicroModal.init()
