import React from 'react';
import { format } from 'date-fns';

const Cars = (props) => {
  const carList = props.cars || [];
  const cars = carList.map((el) => {
    return (
      <tr>
        <td>{el.regNumber}</td>
        <td>{el.make}</td>
        <td>{el.model}</td>
        <td>{el.keeperForename}</td>
        <td>{el.keeperSurname}</td>
        {/* <td>{el.keeperFromDate}</td>
        <td>{el.keeperToDate}</td> */}
      </tr>
    );
  });

  const searchNumber = '';

  const keeperDetails = carList.find((el) => el.regNumber === searchNumber);

  const tmpSetOfKeepers = new Set();

  carList.forEach((el) => {
    tmpSetOfKeepers.add(el.keeperForename + el.keeperSurname);
  });

  let distinctCountKeepers = tmpSetOfKeepers.size;

  return (
    <section>
      <div>
        <p>Number of cars in registry: {cars.length}</p>
        <p>Number of unique keepers: {distinctCountKeepers}</p>
      </div>
      <table>
        <th>
          <td>regNumber</td>
          <td>make</td>
          <td>model</td>
          <td>keeperForename</td>
          <td>keeperSurname</td>
          <td>keeperFromDate</td>
          <td>keeperToDate</td>
        </th>
        {cars}
      </table>
    </section>
  );
};

export default Cars;
