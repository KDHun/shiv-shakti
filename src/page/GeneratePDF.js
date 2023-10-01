import React, { useState } from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import MyDocument from "../components/PDF";
import Input from "../components/UI/Input";
import axios from "axios";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import classes from "./GeneratePDF.module.css";
import { useSelector } from "react-redux";

const GeneratePDF = () => {
  const initialState = {
    ticketNo: "",
    vehicalNo: "GJ",
    supplier: "",
    recevier: "TATA CHEMICAL MITHAPUR",
    material: "LIMESTONE",
    challan: "",
    address: "MITHAPUR",
    place: "ANIYARI",
    gross: "",
    charges: "0",
    tare: "",
    date: new Date().toLocaleDateString("en-GB"),
    time: new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    }),
  };
  const [formData, setFormData] = useState(initialState);

  const ticketNoChangeHandler = (event) => {
    setFormData({ ...formData, ticketNo: event.target.value });
  };

  const vehicalNoChangeHandler = (event) => {
    setFormData({ ...formData, vehicalNo: event.target.value });
  };

  const supplierChangeHandler = (event) => {
    setFormData({ ...formData, supplier: event.target.value });
  };

  const recevierChangeHandler = (event) => {
    setFormData({ ...formData, recevier: event.target.value });
  };

  const materialChangeHandler = (event) => {
    setFormData({ ...formData, material: event.target.value });
  };

  const challanChangeHandler = (event) => {
    setFormData({ ...formData, challan: event.target.value });
  };

  const addressChangeHandler = (event) => {
    setFormData({ ...formData, address: event.target.value });
  };

  const placeChangeHandler = (event) => {
    setFormData({ ...formData, place: event.target.value });
  };

  const grossChangeHandler = (event) => {
    setFormData({ ...formData, gross: event.target.value });
  };
  const chargesChangeHandler = (event) => {
    setFormData({ ...formData, charges: event.target.value });
  };
  const tareChangeHandler = (event) => {
    setFormData({ ...formData, tare: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setFormData({ ...formData, date: event.target.value });
  };

  const timeChangeHandler = (event) => {
    setFormData({ ...formData, time: event.target.value });
  };
  const auth =
    useSelector((state) => state.auth) | localStorage.getItem("Login");

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/addvehicaldata`, formData, {
        headers: {
          authorization: `Barear ${
            auth ? auth.Token : localStorage.getItem("Token")
          }`,
        },
      })
      .then((res) => {
        console.log(res);
        setFormData(initialState);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card>
        <form onSubmit={submitHandler}>
          <div className={classes.inputContainer}>
            <Input
              label="Vehical No"
              input={{
                type: "text",
                id: "vehicalNo",
                value: formData.vehicalNo,
                onChange: vehicalNoChangeHandler,
              }}
            />

            <Input
              label="Supplier"
              input={{
                type: "text",
                id: "supplier",
                value: formData.supplier,
                onChange: supplierChangeHandler,
              }}
            />
            <br />
            <Input
              label="Gross"
              input={{
                type: "text",
                id: "gross",
                value: formData.gross,
                onChange: grossChangeHandler,
              }}
            />

            <Input
              label="Tare"
              input={{
                type: "text",
                id: "tare",
                value: formData.tare,
                onChange: tareChangeHandler,
              }}
            />
            <br />
            <Input
              label="Challan"
              input={{
                type: "text",
                id: "challan",
                value: formData.challan,
                onChange: challanChangeHandler,
              }}
            />

            <Input
              label="Ticket No"
              input={{
                type: "text",
                id: "ticketNo",
                value: formData.ticketNo,
                onChange: ticketNoChangeHandler,
              }}
            />
            <br />

            <Input
              label="Recevier"
              input={{
                type: "text",
                id: "recevier",
                value: formData.recevier,
                onChange: recevierChangeHandler,
              }}
            />
            <Input
              label="Material"
              input={{
                type: "text",
                id: "material",
                value: formData.material,
                onChange: materialChangeHandler,
              }}
            />
            <br />

            <Input
              label="Address"
              input={{
                type: "text",
                id: "address",
                value: formData.address,
                onChange: addressChangeHandler,
              }}
            />

            <Input
              label="Place"
              input={{
                type: "text",
                id: "place",
                value: formData.place,
                onChange: placeChangeHandler,
              }}
            />
            <br />

            <Input
              label="Date"
              input={{
                type: "text",
                id: "date",
                value: formData.date,
                onChange: dateChangeHandler,
              }}
            />

            <Input
              label="Time"
              input={{
                type: "text",
                id: "time",
                value: formData.time,
                onChange: timeChangeHandler,
              }}
            />
            <br />
            <Input
              label="Charges"
              input={{
                type: "text",
                id: "charges",
                value: formData.charges,
                onChange: chargesChangeHandler,
              }}
            />
          </div>
          <br />
          <Button type="submit">Save</Button>
          <Button onClick={() => setFormData(initialState)}>Reset Data</Button>
        </form>
      </Card>
      <PDFDownloadLink
        document={<MyDocument {...formData} />}
        fileName={`${formData.vehicalNo + formData.date}.pdf`}
      >
        {({ loading }) =>
          loading ? (
            <Button>Loading document...</Button>
          ) : (
            <Button>Download now!</Button>
          )
        }
      </PDFDownloadLink>
      <PDFViewer width="100%" height={500}>
        <MyDocument {...formData} />
      </PDFViewer>
    </>
  );
};

export default GeneratePDF;
