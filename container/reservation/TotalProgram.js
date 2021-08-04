import React from "react";
import ServiceItem from "../../components/reservation/ServiceItem";
import { useSelector } from "react-redux";

function TotalProgram() {
  const { consulting } = useSelector((state) => state.product);
  return consulting.map((item) => <ServiceItem item={item} />);
}

export default TotalProgram;
