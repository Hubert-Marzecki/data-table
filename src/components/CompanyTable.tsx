import React from "react";
import { Company } from "../Model";
import { CompanyInfo } from "./CompanyInfo";

export function CompanyTable(props: { companies: Company[] | undefined}): JSX.Element {

  return (


    <div className="table__container">
      <table className="table">
<thead>
          <tr className="table__head__row">
            <th data-column="id" data-order="desc" className="table__head__item">ID</th>
            <th data-column="name" data-order="desc" className="table__head__item">Name</th>
            <th data-column="city" data-order="desc" className="table__head__item">City</th>
            <th data-column="total" data-order="desc" className="table__head__ item"> Total income</th>
            <th data-column="average" data-order="desc" className="table__head__item"> Average income</th>
            <th data-column="lastMonth" data-order="desc" className="table__head__item"> Last month income </th>
          </tr>

</thead>
        <tbody>
          {props.companies?.map((item, index) => {
            return [
              <tr className="table__row" key={index}>
                <th className="table__column">{item.id}</th>
                <th className="table__column">{item.name}</th>
                <th className="table__column">{item.city}</th>
                <th className="table__column">{item.totalIncome}</th>
                <th className="table__column">{item.averageIncome}</th>
                <th className="table__column">{item.lastMonthIncome}</th>
              </tr>,
            ];
          })}
        </tbody>
      </table>
    </div>
  );
}
