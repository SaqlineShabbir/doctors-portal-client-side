import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';
const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch(
      `https://doctors-portal-one.vercel.app/appointments?email=${user.email}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAppointments(data);
      });
  }, [date]);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="Appointments table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Service</TableCell>
              <TableCell align="right">Time</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Payment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.patientName}
                </TableCell>
                <TableCell align="right">{row.serviceName}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">
                  {row.payment ? (
                    'paid'
                  ) : (
                    <Link to={`/dashboard/payment/${row._id}`}>
                      <button>Pay</button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Appointments;
