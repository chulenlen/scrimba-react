import Entry from './components/Entry';
import Header from './components/Header';
import data from './assets/data';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map(data => {
          return (
            <Entry
              key={data.id}
              img={data.img}
              country={data.country}
              title={data.title}
              googleMapsLink={data.googleMapsLink}
              dates={data.dates}
              text={data.text}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
