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
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

const ContactsTab = () => {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(
        "https://rsdmserver.onrender.com/api/v1/contacts",
      );
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(
        `https://rsdmserver.onrender.com/api/v1/contacts/${id}`,
      );
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      await axios.delete("https://rsdmserver.onrender.com/api/v1/contacts");
      setContacts([]);
    } catch (error) {
      console.error("Error deleting all contacts:", error);
    }
  };

  const handleOpenEditModal = (contact) => {
    setEditContact(contact);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditContact(null);
    setOpenEditModal(false);
  };

  const handleUpdateContact = async () => {
    if (!editContact) return;

    try {
      await axios.put(
        `https://rsdmserver.onrender.com/api/v1/contacts/${editContact._id}`,
        editContact,
      );

      setContacts(
        contacts.map((contact) =>
          contact._id === editContact._id ? editContact : contact,
        ),
      );

      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <Button
        variant="contained"
        color="error"
        onClick={handleDeleteAll}
        sx={{ mb: 2 }}
      >
        Delete All Contacts
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Leads</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact._id}>
                <TableCell>{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.message}</TableCell>
                <TableCell>
                  {format(new Date(contact.createdAt), "dd/MM/yyyy")}
                </TableCell>
                <TableCell>{contact.inquiryFrom}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleOpenEditModal(contact)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteContact(contact._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Contact Modal */}
      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            value={editContact?.name || ""}
            onChange={(e) =>
              setEditContact({ ...editContact, name: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Email"
            fullWidth
            value={editContact?.email || ""}
            onChange={(e) =>
              setEditContact({ ...editContact, email: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Message"
            fullWidth
            value={editContact?.message || ""}
            onChange={(e) =>
              setEditContact({ ...editContact, message: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Inquiry From"
            fullWidth
            value={editContact?.inquiryFrom || ""}
            onChange={(e) =>
              setEditContact({ ...editContact, inquiryFrom: e.target.value })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleUpdateContact} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ContactsTab;
