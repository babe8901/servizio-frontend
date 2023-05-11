import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const url = "https://3875-49-32-249-5.ngrok-free.app/api/v1/orders";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <Header />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>_id</TableCell>
                <TableCell align='right'>userId</TableCell>
                <TableCell align='right'>serviceId</TableCell>
                <TableCell align='right'>dateTime</TableCell>
                <TableCell align='right'>delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((order) => (
                <TableRow
                  key={order._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component='th' scope='row'>
                    {order._id}
                  </TableCell>
                  <TableCell align='right'>{order.userId}</TableCell>
                  <TableCell align='right'>{order.serviceId}</TableCell>
                  <TableCell align='right'>{order.dateTime}</TableCell>
                  <TableCell align='right'>
                    <a href='https://3875-49-32-249-5.ngrok-free.app/api/v1/orders'>
                      <FontAwesomeIcon icon={["fad", "trash-alt"]} />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Footer />
    </>
  );
}
