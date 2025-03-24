import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { useState } from "react";

import useFetchOthers from "@/lib/use-fetch-others";

import { Button } from "../ui/button";

const VideosTab = () => {
  const { others, updateOther } = useFetchOthers();
  const [editVideo, setEditVideo] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false); // Added for Add Modal
  const [currentOther, setCurrentOther] = useState(null); // Renamed from `other`
  const [newVideo, setNewVideo] = useState({
    videoUrl: "",
    videoThumbnail: "",
  });

  const handleOpenEditModal = (video) => {
    const selectedOther = others.find((other) =>
      other.videos.some((v) => v.videoUrl === video.videoUrl),
    );
    setCurrentOther(selectedOther);
    setEditVideo(video);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setEditVideo(null);
    setOpenEditModal(false);
  };

  const handleOpenAddModal = (other) => {
    setCurrentOther(other);
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setNewVideo({ videoUrl: "", videoThumbnail: "" });
    setOpenAddModal(false);
  };

  const handleAddVideo = async () => {
    if (!newVideo.videoUrl || !newVideo.videoThumbnail) {
      return alert("Please fill out all fields.");
    }

    try {
      const updatedVideos = currentOther?.videos
        ? [...currentOther.videos, { ...newVideo }]
        : [{ ...newVideo }];

      const updatedCourse = {
        ...currentOther,
        videos: updatedVideos,
      };

      // Update the current other
      await updateOther(currentOther._id, updatedCourse);
      handleCloseAddModal();
    } catch (error) {
      console.error("Error adding video:", error);
    }
  };

  const handleUpdateVideo = async () => {
    if (!editVideo || !currentOther || !Array.isArray(currentOther.videos))
      return;

    try {
      const updatedVideos = currentOther.videos.map((v) =>
        v._id === editVideo._id ? editVideo : v,
      );

      const updatedCourse = {
        ...currentOther,
        videos: updatedVideos,
      };

      await updateOther(currentOther._id, updatedCourse);
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  const handleDeleteVideo = async (otherId, videoUrl) => {
    try {
      const course = others.find((other) => other._id === otherId);
      const updatedCourse = {
        ...course,
        videos: course.videos.filter((video) => video.videoUrl !== videoUrl),
      };
      await updateOther(otherId, updatedCourse);
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Videos
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpenAddModal(others[0])}
      >
        Add Video
      </Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Video URL</TableCell>
              <TableCell>Video Thumbnail</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(others) &&
              others.map(
                (other) =>
                  Array.isArray(other.videos) &&
                  other.videos.map((video, index) => (
                    <TableRow key={index}>
                      <TableCell>{video.videoUrl}</TableCell>
                      <TableCell>{video.videoThumbnail}</TableCell>
                      <TableCell>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleOpenEditModal(video)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() =>
                            handleDeleteVideo(other._id, video.videoUrl)
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

      {/* Add Video Modal */}
      <Dialog open={openAddModal} onClose={handleCloseAddModal}>
        <DialogTitle>Add Video</DialogTitle>
        <DialogContent>
          <TextField
            label="Video URL"
            fullWidth
            value={newVideo.videoUrl}
            onChange={(e) =>
              setNewVideo({ ...newVideo, videoUrl: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Video Thumbnail"
            fullWidth
            value={newVideo.videoThumbnail}
            onChange={(e) =>
              setNewVideo({ ...newVideo, videoThumbnail: e.target.value })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddModal}>Cancel</Button>
          <Button onClick={handleAddVideo} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Video Modal */}
      <Dialog open={openEditModal} onClose={handleCloseEditModal}>
        <DialogTitle>Edit Video</DialogTitle>
        <DialogContent>
          <TextField
            label="Video URL"
            fullWidth
            value={editVideo?.videoUrl || ""}
            onChange={(e) =>
              setEditVideo({ ...editVideo, videoUrl: e.target.value })
            }
            margin="dense"
          />
          <TextField
            label="Video Thumbnail"
            fullWidth
            value={editVideo?.videoThumbnail || ""}
            onChange={(e) =>
              setEditVideo({
                ...editVideo,
                videoThumbnail: e.target.value,
              })
            }
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditModal}>Cancel</Button>
          <Button onClick={handleUpdateVideo} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideosTab;
