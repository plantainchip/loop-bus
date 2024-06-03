import { List } from "grommet";





function Schedule({ title, stops }) {
  const stopList = stops.map(stop => {
    return <div key={stop.name}>
      {/* <p>{stop.name}</p>
      <List data={stop.times} /> */}
      <br />
      <details>
        <summary>
          {stop.name}
        </summary>
        <List data={stop.times} />
      </details>


    </div>
  });

  console.log(stopList);

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {stopList}
      </div>
    </div>
  );
}
export default Schedule;