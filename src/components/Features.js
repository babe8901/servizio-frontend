import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Features() {
  const url = "http://localhost:5000/api/v1/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <div>
        {data.map((item) => (
          <div key={item._id}>{item.fname}</div>
        ))}
      </div>
      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>order id</TableCell>
              <TableCell align='right'>user id</TableCell>
              <TableCell align='right'>service id</TableCell>
              <TableCell align='right'>created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((obj, index) => (
              <TableRow
                key={obj._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {obj.index}
                </TableCell>
                <TableCell align='right'>{obj.userId}</TableCell>
                <TableCell align='right'>{obj.serviceId}</TableCell>
                <TableCell align='right'>{obj.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}
      <Footer />
    </>
  );
}
