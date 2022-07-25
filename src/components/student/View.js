import React from "react";
import { orange } from "@material-ui/core/colors";
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
  stuListColor: { backgroundColor: orange[400], color: "white" },
  tableHeadCell: { fontWeight: "bold", color: "white", fontSize: 16 },
});
const View = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [student, setStudent] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getStudent() {
      try {
        const student = await axios.get(`http://localhost:3333/students/${id}`);
        console.log(student.data);
        setStudent(student.data);
      } catch (e) {
        console.log(e);
      }
    }
    getStudent();
  }, [id]);

  console.log(id);

  function handleClick() {
    navigate("/");
  }

  return (
    <div>
      <Box textAlign="center" p={2} className={classes.stuListColor}>
        <Typography variant="h4">Student List</Typography>
      </Box>
      <TableContainer element={<Paper />}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" className={classes.tableHeadCell}>
                ID
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Name
              </TableCell>
              <TableCell align="center" className={classes.tableHeadCell}>
                Email
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{student.id}</TableCell>
              <TableCell align="center">{student.stuname}</TableCell>
              <TableCell align="center">{student.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick}>
          BACK TO HOME
        </Button>
      </Box>
    </div>
  );
};

export default View;
