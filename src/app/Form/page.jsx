"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MainForm1 from "../MainForm1/page";
import MainForm2 from "../MainForm2.jsx/page";
import MainForm3 from "../MainForm3.jsx/page";
import ReviewPage from "../ReviewPage/page";


export default function Form() {
  const [activeStep, setActiveStep] = useState(0);
  const [formCompleted, setFormCompleted] = useState(false); // Track form completion for the current step
  const [formData, setFormData] = useState({
    step1: {}, // Stores the data for Step 1 (including dob)
    step2: {},
    step3: {},
  });


  const steps = [
    "Personal Information",
    "Verification",
    "Employment and Bank Information",
    "Review Data",
  ];

  const handleNext = () => {
    setFormCompleted(false); // Reset form completion for the next step
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setFormCompleted(false); // Reset form completion for the previous step
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Function to save data for the current step
  const saveData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [step]: data,
    }));
    setFormCompleted(true); // Enable the "Next" button after saving data
  };

  return (
    <Box sx={{ width: "75%", marginLeft: "100px", marginTop: "50px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed!
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexDirection: "column", pt: 2 }}>
          {activeStep === 0 && (
            <MainForm1
              defaultValues={formData.step1} // Pass saved step1 data (including dob)
              saveData={(data) => saveData("step1", data)} // Save data when form is submitted
            />
          )}
          {activeStep === 1 && (
            <MainForm2
              defaultValues={formData.step2}
              saveData={(data) => saveData("step2", data)}
            />
          )}
          {activeStep === 2 && (
            <MainForm3
              defaultValues={formData.step3}
              saveData={(data) => saveData("step3", data)}
            />
          )}
          {activeStep === 3 && (
            <ReviewPage
              formData={formData} // Pass form data to ReviewPage
              onSubmit={()=> window.alert("Data Submitted Thank you")}
            />
          )}

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              onClick={handleBack}
              sx={{ mr: 1 }}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext} disabled={!formCompleted}>
              {activeStep === steps.length - 1 ? "Review" : "Next"}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
