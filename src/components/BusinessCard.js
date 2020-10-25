import React from "react";

const BusinessCard = ({ Values }) => {
  const { Name, Designation, Phone, Email } = Values;
  return (
    <article className="BusinessCard">
      <h3>{Name}</h3>
      <p>{Designation}</p>
      <p className="phone">{Phone}</p>
      <p>{Email}</p>
    </article>
  );
};

export default BusinessCard;
