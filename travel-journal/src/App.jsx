import Entry from './components/Entry';
import Header from './components/Header';
import data from './assets/data';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        {data.map(data => {
          return <Entry key={data.id} {...data} />;
        })}
      </main>
    </>
  );
}

export default App;
