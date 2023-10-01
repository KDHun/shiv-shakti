import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Line,
  Svg,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section1: {
    display:"flex",
    flexDirection:"column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  textcenter: {
    display:"flex",
    flexDirection:"column",
    textAlign: "center",
    width: "550",
    
  },
  textsize10:{
    fontSize: "10",
    marginTop:"4",
  },
  textsize12:{
    fontSize: "12"
  },
  addresstext:
  {
    textAlign: "center",
    fontSize:"10"
  },
  container:{
    gap:50,
    flexDirection: "row",
  }
  
});
const str = ' ';
// Create Document Component
const MyDocument = (props) => (
  <Document style={styles.documnet} id={props.id}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>

        <Text style={styles.textcenter}>Kamalam Webridge Aniyari</Text>
        <Text style={styles.addresstext}>Aniyari Vadivistar Ta. Ranavav Dist. Porbandar</Text>
        <Text style={styles.addresstext}>Porbandar</Text>

        <Svg height="10" width="550">
          <Line x1="0" y1="2" x2="550" y2="2" strokeWidth={2} stroke="rgb(0,0,0)" />
        </Svg>
        <View style={styles.container}> 
          <View style={styles.section1}>
            <Text style={styles.textsize10} >Ticket No. {props.ticketNo}</Text>
            <Text style={styles.textsize10}>Vehicle No: {props.vehicalNo}  </Text>
            <Text style={styles.textsize10}>Charges:  {props.charges} </Text>
          </View>
          <View style={styles.section1}>
            <Text style={styles.textsize10} >Supplier: {props.supplier}</Text>
            <Text style={styles.textsize10}>Recevier: {props.recevier}</Text>
            <Text style={styles.textsize10}>Material: {props.material}</Text>
          </View>
          <View style={styles.section1}>
            <Text style={styles.textsize10}>Challan: {props.challan}</Text>
            <Text style={styles.textsize10}>Address: {props.address}</Text>
            <Text style={styles.textsize10}>Place: {props.place}</Text>
          </View>
        </View>
        <Text> </Text>
        <View style={styles.container}> 
          <View style={styles.section1}>
            <Text style={styles.textsize10}>Gross:{str.repeat(21-props.gross.length)}{props.gross}{str.repeat(3)}Kg </Text>
            <Text style={styles.textsize10}>{str.repeat(4)}Tare:{str.repeat(22-props.tare.length)}{props.tare}{str.repeat(3)}Kg </Text>
            <Text style={styles.textsize10}>{str.repeat(3)}Nett:{str.repeat(22-props.gross.length)}{+props.gross-+props.tare}{str.repeat(3)}Kg </Text>
          </View>
          <View style={styles.section1}>
            <Text style={styles.textsize10}>Date: {props.date} {str.repeat(40-props.date.length)} </Text>
            <Text style={styles.textsize10}>Date: {props.date} {str.repeat(40-props.date.length)} </Text>
            <Text style={styles.textsize10}></Text>
          </View>
          <View style={styles.section1}>
            <Text style={styles.textsize10}>Time:{props.time}</Text>
            <Text style={styles.textsize10}>Time:{props.time}</Text>
            <Text style={styles.textsize10}></Text>
          </View>
        </View>


        <Svg height="10" width="550">
          <Line x1="0" y1="2" x2="550" y2="2" strokeWidth={2} stroke="rgb(0,0,0)" />
        </Svg>



        <Text style={styles.textsize10}>Thanks {str.repeat(140)}Operator Signature</Text>
        <Text style={styles.textsize10}>Our Responsibility ceases ones Vehicle left platform
        </Text>
        <Text style={styles.textsize10}>
            Check the weight before leaving the Weight Bridge{str.repeat(20)}Ph: 9879559882
        </Text>


      </View>
    </Page>
  </Document>
);

export default MyDocument;
