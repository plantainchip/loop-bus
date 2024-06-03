import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'


function convertTimeToToday(timeString) {
  const today = new Date();
  const [hours, minutes, period] = timeString.split(/:| /);
  let hours24 = parseInt(hours);
  if (period.toLowerCase() === 'pm' && hours24 !== 12) {
    hours24 += 12;
  } else if (period.toLowerCase() === 'am' && hours24 === 12) {
    hours24 = 0;
  }
  const dateObject = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours24, parseInt(minutes));
  return dateObject;
}



function Stop({name, location, times}) {
  const timelist = times.map(function(time){
    const date = convertTimeToToday(time);
    const now = new Date();

    if (now < date) {
      return <li key={time}>
        <b>{time}</b>
      </li>
    }

    return <li key={time}>{time}</li>
  })
  return <Marker
    position={location}>
    <Popup>
      <b>{name}</b> <br />
      <div>
        {timelist}
      </div>
    </Popup>
  </Marker>
  
}
export default Stop;