import { StyleSheet, ScrollView, Text as RNText, View } from "react-native";
import React from "react";
// import SvgComponent from './SvgComponent'

export default function MyChart() {
  return (
    <View style={styles.container}>
      <RNText
        style={{
          fontWeight: "bold",
          color: "orange",
          fontSize: 25,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        AAPL<RNText style={{color: 'black', fontSize: 15}}>.NAS</RNText>
      </RNText>
      <ScrollView style={{ padding: 10 }} horizontal>
        <ScrollView>
          <SvgComponent />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

import Svg, {
  SvgProps,
  Defs,
  ClipPath,
  Path,
  LinearGradient,
  Stop,
  Rect,
  G,
  Text,
  TSpan,
} from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={700}
    height={1084}
    className="highcharts-root"
    style={{
      fontSize: 12,
    }}
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path fill="none" d="M0 0h764v1059H0z" />
      </ClipPath>
      <ClipPath id="d">
        <Path fill="none" d="M3 0h764v1059H3z" />
      </ClipPath>
      <ClipPath id="b" />
      <LinearGradient id="e" x1={0} x2={0} y1={0} y2={1}>
        <Stop offset={0} stopColor="#C7C7C7" stopOpacity={0.5} />
        <Stop offset={1} stopColor="#EDEDED" stopOpacity={0.25} />
      </LinearGradient>
      <LinearGradient id="c" x1={0} x2={0} y1={0} y2={1}>
        <Stop offset={0} stopColor="#09F" stopOpacity={0.6} />
        <Stop offset={1} stopColor="#09F" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <Rect
      width={805}
      height={1084}
      fill="transparent"
      className="highcharts-background"
      rx={0}
      ry={0}
    />
    <Path
      fill="transparent"
      d="M3 0h764v1059H3z"
      className="highcharts-plot-background"
    />
    <Path
      fill="none"
      d="M3 0h764v1059H3z"
      className="highcharts-plot-border"
      data-z-index={1}
    />
    <G
      fill="none"
      stroke="#E7E7E7"
      className="highcharts-grid highcharts-xaxis-grid highcharts-navigator-xaxis"
      data-z-index={1}
    >
      <Path
        d="M656.5 1084.5"
        className="highcharts-grid-line"
        data-z-index={1}
      />
    </G>
    <G
      fill="none"
      stroke="rgba(70, 70, 70, 0.2)"
      className="highcharts-grid highcharts-yaxis-grid"
      data-z-index={1}
    >
      <Path
        d="M3 1008.5h764M3 934.5h764M3 860.5h764M3 786.5h764M3 712.5h764M3 638.5h764M3 564.5h764M3 490.5h764M3 416.5h764M3 342.5h764M3 268.5h764M3 195.5h764M3 121.5h764M3 47.5h764"
        className="highcharts-grid-line"
        data-z-index={1}
      />
    </G>
    <G
      className="highcharts-grid highcharts-yaxis-grid highcharts-navigator-yaxis"
      data-z-index={1}
    >
      <Path
        fill="none"
        d="M3 1084.5h764"
        className="highcharts-grid-line"
        data-z-index={1}
      />
    </G>
    <G
      fill="none"
      stroke="rgba(70, 70, 70, 0.2)"
      className="highcharts-grid highcharts-xaxis-grid"
      data-z-index={1}
    >
      <Path
        d="M100.5 0v1059M201.5 0v1059M303.5 0v1059M405.5 0v1059M507.5 0v1059M609.5 0v1059M711.5 0v1059"
        className="highcharts-grid-line"
        data-z-index={1}
      />
    </G>
    <G
      className="highcharts-axis highcharts-xaxis highcharts-navigator-xaxis"
      data-z-index={2}
    >
      <Path
        fill="none"
        d="M3 1084h764"
        className="highcharts-axis-line"
        data-z-index={7}
      />
    </G>
    <G className="highcharts-axis highcharts-yaxis" data-z-index={2}>
      <Path
        fill="none"
        d="M767 0v1059"
        className="highcharts-axis-line"
        data-z-index={7}
      />
    </G>
    <G
      className="highcharts-axis highcharts-yaxis highcharts-navigator-yaxis"
      data-z-index={2}
    >
      <Path
        fill="none"
        d="M3 1084"
        className="highcharts-axis-line"
        data-z-index={7}
      />
    </G>
    <G className="highcharts-axis highcharts-xaxis" data-z-index={2}>
      <Path
        fill="none"
        stroke="rgba(70, 70, 70, 0.2)"
        d="M3 1059.5h764"
        className="highcharts-axis-line"
        data-z-index={7}
      />
    </G>
    <G className="highcharts-series-group" data-z-index={3}>
      <G
        className="highcharts-series highcharts-series-0 highcharts-candlestick-series highcharts-tracker"
        clipPath="url(#a)"
        data-z-index={20}
        transform="translate(3)"
      >
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M.5 436.5v-2h6v2Zm3-2V421m0 15.5V447"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M9.5 437.5v-3h6v3Zm3-3V423m0 14.5v3.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M17.5 435.5v-1h6v1Zm3-1V422m0 13.5v3.5M26.5 456.5v-22h6v22Zm3-22V433m0 23.5v8.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M34.5 456.5v-11h6v11Zm3-11V444m0 12.5v7.5M43.5 446.5v-8h6v8Zm3-8V433m0 13.5V458M51.5 438.5v-9h6v9Zm3-9V425m0 13.5v6.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M60.5 429.5v-1h6v1Zm3-1V408m0 21.5v5.5M68.5 434.5v-2h6v2Zm3-2V416m0 18.5v7.5M77.5 498.5v-63h6v63Zm3-63V425m0 73.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M85.5 496.5v-12h6v12Zm3 0V515"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M94.5 285.5v-224h6v224Zm3-224V48m0 237.5V300M102.5 324.5v-36h6v36Zm3-36V275m0 49.5V365"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M111.5 318.5v-24h6v24Zm3-24V269m0 49.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M119.5 436.5v-143h6v143Zm3-143V283m0 153.5v2.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M128.5 439.5v-92h6v92Zm3-92V342m0 97.5V457M136.5 345.5v-34h6v34Zm3-34V306m0 39.5V392"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M145.5 312.5v-4h6v4Zm3-4V278m0 34.5V367M153.5 453.5v-142h6v142Zm3-142V309m0 144.5v1.5M162.5 506.5v-51h6v51Zm3-51V446m0 60.5V527M170.5 629.5v-122h6v122Zm3-122V505m0 124.5v5.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M179.5 632.5v-18h6v18Zm3-18V569m0 63.5V651"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M187.5 627.5v-15h6v15Zm3-15V565m0 62.5v1.5M195.5 640.5v-13h6v13Zm3-13V598m0 42.5V652M204.5 661.5v-18h6v18Zm3-18V623m0 38.5v8.5M212.5 674.5v-19h6v19Zm3-19V625m0 49.5V690"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M221.5 680.5v-9h6v9Zm3-9V645m0 35.5V702M229.5 673.5v-38h6v38Zm3-38V631m0 42.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M238.5 675.5v-40h6v40Zm3-40V624m0 51.5v4.5M246.5 715.5v-41h6v41Zm3 0V732M255.5 717.5v-3h6v3Zm3-3V690m0 27.5V742M263.5 723.5v-6h6v6Zm3-6V693m0 30.5V754M272.5 726.5v-1h6v1Zm3-1V708m0 18.5V754M280.5 795.5v-71h6v71Zm3-71V715m0 80.5V811M289.5 810.5v-19h6v19Zm3-19V789m0 21.5V842M297.5 828.5v-16h6v16Zm3-16V794m0 34.5V843M306.5 884.5v-54h6v54Zm3-54V812m0 72.5v1.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M314.5 882.5v-33h6v33Zm3-33V843m0 39.5v3.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M323.5 867.5v-12h6v12Zm3-12V830m0 37.5V883M331.5 891.5v-24h6v24Zm3 0V930M340.5 907.5v-15h6v15Zm3-15V871m0 36.5v7.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M348.5 908.5v-29h6v29Zm3 0v1.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M357.5 881.5h6Zm3 0V854m0 27.5v2.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M365.5 881.5v-37h6v37Zm3 0v1.5M374.5 844.5v-2h6v2Zm3-2V830m0 14.5V863"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M382.5 850.5v-8h6v8Zm3-8V813M391.5 855.5v-7h6v7Zm3-7V829m0 26.5V867"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M399.5 855.5v-11h6v11Zm3-11V833m0 22.5v4.5M408.5 847.5v-32h6v32Zm3-32V810M416.5 815.5v-16h6v16Zm3-16V768m0 47.5v3.5M425.5 798.5v-5h6v5Zm3-5V782m0 16.5V827"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M433.5 809.5v-16h6v16Zm3-16V786m0 23.5v7.5M442.5 827.5v-17h6v17Zm3 0v6.5M450.5 850.5v-24h6v24Zm3-24V819m0 31.5v7.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M459.5 852.5v-39h6v39Zm3-39V809m0 43.5v.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M467.5 820.5v-7h6v7Zm3-7V795m0 25.5v2.5M476.5 843.5v-23h6v23Zm3 0V854M484.5 845.5v-3h6v3Zm3-3V828m0 17.5v4.5M493.5 872.5v-26h6v26Zm3 0v7.5M501.5 879.5v-6h6v6Zm3-6V858m0 21.5v4.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M510.5 881.5v-39h6v39Zm3-39V839m0 42.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M518.5 869.5v-29h6v29Zm3-29V836m0 33.5v.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M527.5 869.5v-14h6v14Zm3-14V828m0 41.5v.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M535.5 877.5v-22h6v22Zm3-22V853m0 24.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M544.5 880.5v-14h6v14Zm3-14V865m0 15.5v6.5M552.5 864.5v-25h6v25Zm3-25V820M561.5 840.5v-12h6v12Zm3-12V819m0 21.5v3.5M569.5 829.5v-9h6v9Zm3-9V810m0 19.5v4.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M577.5 869.5v-46h6v46Zm3-46V821m0 48.5v3.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M586.5 871.5v-11h6v11Zm3-11V851m0 20.5v1.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M594.5 890.5v-28h6v28Zm3 0v5.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M603.5 890.5v-29h6v29Zm3-29V852m0 38.5v-.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M611.5 890.5v-29h6v29Zm3-29V856m0 34.5V903M620.5 922.5v-32h6v32Zm3-32V889m0 33.5v3.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M628.5 921.5h6Zm3 0V899m0 22.5v-.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M637.5 921.5v-1h6v1Zm3-1V913m0 8.5V939"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M645.5 922.5v-42h6v42Zm3-42V864m0 58.5V934"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M654.5 888.5v-8h6v8Zm3-8V861m0 27.5v7.5M662.5 914.5v-24h6v24Zm3-24V875m0 39.5v7.5"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M671.5 914.5v-9h6v9Zm3-9V884m0 30.5V928M679.5 905.5v-9h6v9Zm3-9V890m0 15.5v1.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M688.5 898.5v-6h6v6Zm3-6V862m0 36.5v6.5M696.5 913.5v-17h6v17Zm3-17V887m0 26.5V936M705.5 914.5v-1h6v1Zm3-1V894m0 20.5V928M713.5 927.5v-12h6v12Zm3-12V913m0 14.5V957M722.5 955.5v-30h6v30Zm3-30V921m0 34.5V970M730.5 963.5v-8h6v8Zm3 0V999"
          className="highcharts-point highcharts-point-down"
        />
        <Path
          fill="#1F7A99"
          stroke="#1F7A99"
          d="M739.5 963.5v-11h6v11Zm3-11V917m0 46.5v8.5"
          className="highcharts-point highcharts-point-up"
        />
        <Path
          fill="#FB1044"
          stroke="#FB1044"
          d="M747.5 1009.5v-48h6v48Zm3-48V912m0 97.5v1.5M756.5 1010.5h6Zm3 0"
          className="highcharts-point highcharts-point-down"
        />
      </G>
      <G
        className="highcharts-series highcharts-series-4 highcharts-areaspline-series highcharts-navigator-series"
        clipPath="url(#b)"
        data-z-index={20}
        transform="translate(3 1084)"
      >
        <Path
          fill="url(#c)"
          d="M0 0H764 0Z"
          className="highcharts-area"
          data-z-index={0}
        />
        <Path
          fill="none"
          stroke="#09F"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M0 0H764"
          className="highcharts-graph"
          data-z-index={1}
        />
      </G>
    </G>
    <G className="highcharts-scrollbar" data-z-index={3}>
      <Path
        fill="none"
        stroke="#AAA"
        d="M755.5 1084.5"
        className="highcharts-scrollbar-rifles"
      />
      <Path
        fill="#CCC"
        d="M4 1082v6l-3-3M766 1082v6l3-3"
        className="highcharts-scrollbar-arrow"
      />
    </G>
    <G
      className="highcharts-legend highcharts-no-tooltip"
      data-z-index={7}
      transform="translate(10 25)"
    >
      <Rect
        width={16}
        height={26}
        fill="none"
        className="highcharts-legend-box"
        rx={0}
        ry={0}
      />
      <G
        className="highcharts-legend-item highcharts-candlestick-series highcharts-color-undefined highcharts-series-0"
        data-z-index={1}
      >
        <Path
          fill="#FB1044"
          d="M8 18.999h.001V19H8z"
          className="highcharts-point"
          data-z-index={3}
        />
      </G>
    </G>
    <G
      className="highcharts-axis-labels highcharts-xaxis-labels highcharts-navigator-xaxis"
      data-z-index={7}
    >
      <Text
        x={92.703}
        y={1080}
        style={{
          color: "#464646",
          cursor: "default",
          fontFamily: "Montserrat",
          fill: "#464646",
        }}
      >
        {"31. Jul"}
      </Text>
      <Text
        x={281.873}
        y={1080}
        style={{
          color: "#464646",
          cursor: "default",
          fontFamily: "Montserrat",
          fill: "#464646",
        }}
      >
        {"7. Aug"}
      </Text>
      <Text
        x={471.043}
        y={1080}
        style={{
          color: "#464646",
          cursor: "default",
          fontFamily: "Montserrat",
          fill: "#464646",
        }}
      >
        {"14. Aug"}
      </Text>
      <Text
        x={660.214}
        y={1080}
        style={{
          color: "#464646",
          cursor: "default",
          fontFamily: "Montserrat",
          fill: "#464646",
        }}
      >
        {"21. Aug"}
      </Text>
    </G>
    <G
      className="highcharts-axis-labels highcharts-yaxis-labels"
      data-z-index={7}
    >
      <Text
        x={775}
        y={1012}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"320"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={938}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"321"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={864}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"322"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={790}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"323"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={716}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"324"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={642}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"325"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={568}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"326"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={494}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"327"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={420}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"328"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={346}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"329"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={272}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"330"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={199}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"331"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={125}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"332"}
        </TSpan>
      </Text>
      <Text
        x={775}
        y={51}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"333"}
        </TSpan>
      </Text>
    </G>
    <G
      className="highcharts-axis-labels highcharts-xaxis-labels"
      data-z-index={7}
      textAnchor="middle"
    >
      <Text
        x={100.622}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"19:00"}
        </TSpan>
      </Text>
      <Text
        x={202.489}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"20:00"}
        </TSpan>
      </Text>
      <Text
        x={304.356}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"21:00"}
        </TSpan>
      </Text>
      <Text
        x={406.222}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"22:00"}
        </TSpan>
      </Text>
      <Text
        x={508.089}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"23:00"}
        </TSpan>
      </Text>
      <Text
        x={609.956}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"25.Aug'23"}
        </TSpan>
      </Text>
      <Text
        x={711.822}
        y={1077}
        style={{
          cursor: "default",
          fontFamily: "Montserrat",
        }}
      >
        <TSpan
          style={{
            color: "#464646",
            fill: "#464646",
          }}
        >
          {"01:00"}
        </TSpan>
      </Text>
    </G>
    <G className="highcharts-navigator" data-z-index={8}>
      <Path
        fill="none"
        stroke="rgba(97,97,97,0)"
        d="M3 1084.5h764"
        className="highcharts-navigator-outline"
      />
      <Path
        fill="rgba(237, 237, 237, 0.2)"
        stroke="rgba(70, 70, 70, 0.8)"
        d="M-4.5.5h8v15h-8V.5m3 3.5v8m2-8v8"
        className="highcharts-navigator-handle highcharts-navigator-handle-right"
        data-z-index={6}
        style={{
          cursor: "ew-resize",
        }}
        transform="translate(767 1076)"
      />
      <Path
        fill="rgba(237, 237, 237, 0.2)"
        stroke="rgba(70, 70, 70, 0.8)"
        d="M-4.5.5h8v15h-8V.5m3 3.5v8m2-8v8"
        className="highcharts-navigator-handle highcharts-navigator-handle-left"
        data-z-index={7}
        style={{
          cursor: "ew-resize",
        }}
        transform="translate(739 1076)"
      />
    </G>
  </Svg>
);