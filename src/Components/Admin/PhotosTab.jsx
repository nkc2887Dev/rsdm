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
  Input,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

import { useToast } from "@/hooks/use-toast";

const PhotosTab = () => {
  const [photos, setPhotos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newPhoto, setNewPhoto] = useState({ img: "", type: "" });
  const [currentPhoto, setCurrentPhoto] = useState(null);
  const { toast } = useToast();
  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get(
        "https://rsdmserver.onrender.com/api/v1/photos",
      );
      setPhotos(response.data);
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  };

  const handleAddPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append("img", newPhoto.img);
      formData.append("type", newPhoto.type);

      await axios.post(
        "https://rsdmserver.onrender.com/api/v1/photos/create",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      setNewPhoto({ img: "", type: "" });
      setOpenModal(false);
      // toast('Photo added successfully!');
      fetchPhotos();
    } catch (error) {
      console.error("Error adding photo:", error);
      // toast('Failed to add photo.');
    }
  };

  const handleUpdatePhoto = async () => {
    if (!currentPhoto) return;

    try {
      const formData = new FormData();
      if (currentPhoto.img instanceof File) {
        formData.append("img", currentPhoto.img);
      }
      formData.append("type", currentPhoto.type);

      await axios.put(
        `https://rsdmserver.onrender.com/api/v1/photos/${currentPhoto._id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );

      setOpenEditModal(false);
      setCurrentPhoto(null);
      toast({ title: "Photo updated successfully!" });
      fetchPhotos();
    } catch (error) {
      console.error("Error updating photo:", error);
      toast({ title: "Failed to update photo." });
    }
  };

  const handleDeletePhoto = async (id) => {
    try {
      await axios.delete(`https://rsdmserver.onrender.com/api/v1/photos/${id}`);
      toast({ title: "Photo deleted successfully!" });
      fetchPhotos();
    } catch (error) {
      console.error("Error deleting photo:", error);
      toast({ title: "Failed to delete photo." });
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Photos
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenModal(true)}
        sx={{ mb: 2 }}
      >
        Add Photo
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {photos.map((photo) => (
              <TableRow key={photo._id}>
                <TableCell>
                  <img
                    src={photo.img}
                    alt={photo.type}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </TableCell>
                <TableCell>{photo.type}</TableCell>
                <TableCell>
                  {new Date(photo.createdAt).toDateString()}
                </TableCell>
                <TableCell>
                  <Button
                    color="primary"
                    onClick={() => {
                      setCurrentPhoto(photo);
                      setOpenEditModal(true);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    onClick={() => handleDeletePhoto(photo._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Photo Modal */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Add New Photo</DialogTitle>
        <DialogContent id="dialog-description">
          <Input
            type="file"
            fullWidth
            onChange={(e) =>
              setNewPhoto({ ...newPhoto, img: e.target.files[0] })
            }
            margin="dense"
          />
          <Select
            label="Type"
            fullWidth
            value={newPhoto?.type || ""}
            onChange={(e) => setNewPhoto({ ...newPhoto, type: e.target.value })}
            margin="dense"
          >
            <MenuItem value="Recent Placement">Recent Placement</MenuItem>
            <MenuItem value="Top Placement">Top Placement</MenuItem>
            <MenuItem value="Student as Freelancer">
              Student as Freelancer
            </MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenModal(false)}>Cancel</Button>
          <Button onClick={handleAddPhoto}>Add</Button>
        </DialogActions>
      </Dialog>

      {/* Edit Photo Modal */}
      <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <DialogTitle>Edit Photo</DialogTitle>
        <DialogContent>
          <Input
            type="file"
            fullWidth
            onChange={(e) =>
              setCurrentPhoto({ ...currentPhoto, img: e.target.files[0] })
            }
            margin="dense"
          />
          <Select
            label="Type"
            fullWidth
            value={currentPhoto?.type || ""}
            onChange={(e) =>
              setCurrentPhoto({ ...currentPhoto, type: e.target.value })
            }
            margin="dense"
          >
            <MenuItem value="Recent Placement">Recent Placement</MenuItem>
            <MenuItem value="Top Placement">Top Placement</MenuItem>
            <MenuItem value="Student as Freelancer">
              Student as Freelancer
            </MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEditModal(false)}>Cancel</Button>
          <Button onClick={handleUpdatePhoto}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PhotosTab;
