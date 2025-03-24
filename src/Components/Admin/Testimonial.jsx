import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

import useFetchOthers from "@/lib/use-fetch-others";

import { Button } from "../ui/button";

const TestimonialsTab = () => {
  const { others, updateOther } = useFetchOthers();
  const [editTestimonial, setEditTestimonial] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); // Added for Add Modal
  const [currentOther, setCurrentOther] = useState(null); // Renamed from `other`
  const [newTestimonial, setNewTestimonial] = useState({
    imgUrl: "",
    name: "",
    description: "",
  });

  const handleOpenEditModal = (testimonial) => {
    const selectedOther = others.find((other) =>
      other.testimonials.some((t) => t._id === testimonial._id),
    );
    setCurrentOther(selectedOther);
    setEditTestimonial(testimonial);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditTestimonial(null);
    setOpenEditModal(false);
  };

  const handleOpenAddModal = (other) => {
    setCurrentOther(other);
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setNewTestimonial({ imgUrl: "", name: "", description: "" });
    setOpenAddModal(false);
  };

  const handleAddTestimonial = async () => {
    if (
      !newTestimonial.imgUrl ||
      !newTestimonial.name ||
      !newTestimonial.description
    ) {
      return alert("Please fill out all fields.");
    }

    try {
      const updatedTestimonials = currentOther?.testimonials
        ? [...currentOther.testimonials, { ...newTestimonial }]
        : [{ ...newTestimonial }];

      const updatedCourse = {
        ...currentOther,
        testimonials: updatedTestimonials,
      };

      // Update the current other
      await updateOther(currentOther._id, updatedCourse);
      handleCloseAddModal();
    } catch (error) {
      console.error("Error adding testimonial:", error);
    }
  };

  const handleUpdateTestimonial = async () => {
    if (
      !editTestimonial ||
      !currentOther ||
      !Array.isArray(currentOther.testimonials)
    )
      return;

    try {
      const updatedTestimonials = currentOther.testimonials.map((t) =>
        t._id === editTestimonial._id ? editTestimonial : t,
      );

      const updatedCourse = {
        ...currentOther,
        testimonials: updatedTestimonials,
      };

      await updateOther(currentOther._id, updatedCourse);
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  const handleDeleteTestimonial = async (otherId, testimonialId) => {
    try {
      const course = others.find((other) => other._id === otherId);
      const updatedCourse = {
        ...course,
        testimonials: course.testimonials.filter(
          (testimonial) => testimonial._id !== testimonialId,
        ),
      };
      await updateOther(otherId, updatedCourse);
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenAddModal(others[0])}
      >
        Add Testimonial
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image URL</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(others) &&
              others.map(
                (other) =>
                  Array.isArray(other.testimonials) &&
                  other.testimonials.map((testimonial, index) => (
                    <TableRow key={index}>
                      <TableCell>{testimonial.imgUrl}</TableCell>
                      <TableCell>{testimonial.name}</TableCell>
                      <TableCell>{testimonial.description}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleOpenEditModal(testimonial)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() =>
                            handleDeleteTestimonial(other._id, testimonial._id)
                          }
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  )),
              )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Add Testimonial Modal */}
      <Dialog open={openAddModal} onClose={handleCloseAddModal}>
        <DialogTitle>Add Testimonial</DialogTitle>
        <DialogContent>
          <TextField
            label="Image URL"
            fullWidth
            value={newTestimonial.imgUrl}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, imgUrl: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Name"
            fullWidth
            value={newTestimonial.name}
            onChange={(e) =>
              setNewTestimonial({ ...newTestimonial, name: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Description"
            fullWidth
            value={newTestimonial.description}
            onChange={(e) =>
              setNewTestimonial({
                ...newTestimonial,
                description: e.target.value,
              })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button onClick={handleAddTestimonial} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Testimonial Modal */}
      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Testimonial</DialogTitle>
        <DialogContent>
          <TextField
            label="Image URL"
            fullWidth
            value={editTestimonial?.imgUrl || ""}
            onChange={(e) =>
              setEditTestimonial({ ...editTestimonial, imgUrl: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Name"
            fullWidth
            value={editTestimonial?.name || ""}
            onChange={(e) =>
              setEditTestimonial({ ...editTestimonial, name: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Description"
            fullWidth
            value={editTestimonial?.description || ""}
            onChange={(e) =>
              setEditTestimonial({
                ...editTestimonial,
                description: e.target.value,
              })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleUpdateTestimonial} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TestimonialsTab;
