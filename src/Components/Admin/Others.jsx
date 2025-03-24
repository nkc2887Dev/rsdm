import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

import useFetchOthers from "@/lib/use-fetch-others";

const OthersTab = () => {
  const [editOther, setEditOther] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { others, setOthers } = useFetchOthers();

  const handleDeleteOther = async (id) => {
    try {
      await axios.delete(`https://rsdmserver.onrender.com/api/v1/others/${id}`);
      setOthers((prevOthers) => prevOthers.filter((other) => other._id !== id));
    } catch (error) {
      console.error("Error deleting other:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete("https://rsdmserver.onrender.com/api/v1/others");
      setOthers([]);
    } catch (error) {
      console.error("Error deleting all others:", error);
    }
  };

  const handleOpenEditModal = (other) => {
    setEditOther(other);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditOther(null);
    setOpenEditModal(false);
  };

  const handleUpdateOther = async () => {
    if (!editOther) return;

    try {
      await axios.put(
        `https://rsdmserver.onrender.com/api/v1/others/${editOther._id}`,
        editOther,
      );

      setOthers((prevOthers) =>
        prevOthers.map((other) =>
          other._id === editOther._id ? editOther : other,
        ),
      );

      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating other:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Courses
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleDeleteAll}
        sx={{ mb: 2 }}
      >
        Delete All Courses
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Date</TableCell>
              <TableCell>Course Duration</TableCell>
              <TableCell>Course Language</TableCell>
              <TableCell>Programme</TableCell>
              <TableCell>Delivery Mode</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {others.map((other) => (
              <TableRow key={other._id}>
                <TableCell>{other.courseDate}</TableCell>
                <TableCell>{other.courseDuration}</TableCell>
                <TableCell>{other.courseLanguage}</TableCell>
                <TableCell>{other.programme}</TableCell>
                <TableCell>{other.deliveryMode}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenEditModal(other)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteOther(other._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Other Modal */}
      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Course</DialogTitle>
        <DialogContent>
          <TextField
            label="Course Date"
            fullWidth
            value={editOther?.courseDate || ""}
            onChange={(e) =>
              setEditOther({ ...editOther, courseDate: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Course Duration"
            fullWidth
            value={editOther?.courseDuration || ""}
            onChange={(e) =>
              setEditOther({ ...editOther, courseDuration: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Course Language"
            fullWidth
            value={editOther?.courseLanguage || ""}
            onChange={(e) =>
              setEditOther({ ...editOther, courseLanguage: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Programme"
            fullWidth
            value={editOther?.programme || ""}
            onChange={(e) =>
              setEditOther({ ...editOther, programme: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Delivery Mode"
            fullWidth
            value={editOther?.deliveryMode || ""}
            onChange={(e) =>
              setEditOther({ ...editOther, deliveryMode: e.target.value })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleUpdateOther} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OthersTab;
