import React from "react";
import {
  StyleSheet,
} from "react-native";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";

const Chart = (props) => {
  const data = [
    {
      key: 1,
      amount: props.engineInfo.thrust_to_weight,
      svg: { fill: "#551" },
    },
    {
      key: 2,
      amount: props.engineInfo.thrust_vacuum.kN,
      svg: { fill: "#669" },
    },
    {
      key: 3,
      amount: props.engineInfo.thrust_vacuum.lbf / 1000,
      svg: { fill: "#778" },
    },
  ];

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { pieCentroid, data} = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill={"#fff"}
          textAnchor={"middle"}
          alignmentBaseline={"middle"}
          fontSize={10}
          stroke={"#fff"}
          strokeWidth={0.2}
          display={"flex"}
        >
          {data.amount}
        </Text>
      );
    });
  };

  return (

      <PieChart
        style={{ height: 200 }}
        valueAccessor={({ item }) => item.amount}
        data={data}
        spacing={0}
        outerRadius={"95%"}
      >
        <Labels />
      </PieChart>
  );
};

export default Chart;
