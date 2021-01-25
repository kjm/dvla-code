import './App.css';
import Cars from './Cars';

const cars = [
  {
    regNumber: 'AA57BBB',
    make: 'Ford',
    model: 'Focus',
    keeperForename: 'Tom',
    keeperSurname: 'Smith',
    keeperFromDate: new Date('2020-02-01'),
    keeperToDate: new Date('2020-05-20'),
  },
  {
    regNumber: 'AA57BBB',
    make: 'Ford',
    model: 'Focus',
    keeperForename: 'Bert',
    keeperSurname: 'White',
    keeperFromDate: new Date('2020-05-21'),
    keeperToDate: new Date('2020-08-15'),
  },
  {
    regNumber: 'AA57BBB',
    make: 'Ford',
    model: 'Focus',
    keeperForename: 'Tom',
    keeperSurname: 'Smith',
    keeperFromDate: new Date('2020-08-16'),
    keeperToDate: null,
  },
  {
    regNumber: 'CC58CCC',
    make: 'Mercedes',
    model: 'SLK',
    keeperForename: 'Sarah',
    keeperSurname: 'Brown',
    keeperFromDate: new Date('2020-02-10'),
    keeperToDate: null,
  },
];

const details = cars.find((el) => el.regNumber);

function App() {
  return (
    <div className="App">
      <Cars cars={cars} />
    </div>
  );
}

export default App;
