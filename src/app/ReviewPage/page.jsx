"use client"
import React from "react";
import { Box, Typography, Button } from "@mui/material";



const ReviewPage = ({ formData = { step1: {}, step2: {}, step3: {} }, onSubmit }) => {
    const { step1, step2, step3 } = formData;

  return (
    <Box sx={{ width: "75%", marginLeft: "100px", marginTop: "50px" }}>
      <Typography variant="h4" gutterBottom>
        Review Your Information
      </Typography>

      <Typography variant="p" gutterBottom color="red">
        if needed any edit you can go back and edit now*
      </Typography>

      {/* Display Personal Information (Step 1) */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Typography>Name: {step1.username}</Typography>
        <Typography>Email: {step1.email}</Typography>
        <Typography>Phone Number: {step1.phoneNumber}</Typography>
        <Typography>Date of Birth: {step1.dob}</Typography>
      </Box>

      {/* Display Verification Information (Step 2) */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Verification
        </Typography>
        <Typography>Country: {step2.country}</Typography>
        <Typography>Address: {step2.address}</Typography>
        <Typography>ID Type: {step2.idType}</Typography>
        <Typography>Uploaded ID: {step2.govId ? step2.govId[0]?.name : "No file uploaded"}</Typography>
      </Box>

      {/* Display Employment and Bank Information (Step 3) */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Employment and Bank Information
        </Typography>
        <Typography>Employment Type: {step3.employmentType}</Typography>
        <Typography>Company Name: {step3.companyName}</Typography>
        <Typography>Designation: {step3.designation}</Typography>
        <Typography>Bank Account Number: {step3.accountNumber}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>

        <Button
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewPage;
