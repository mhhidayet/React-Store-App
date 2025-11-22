import AdressForm from "./AdressForm";
import Info from "./Info";
import { Box, Button, Grid, Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const steps = ["Teslimat Bilgileri", "Ödeme", "Sipariş Özeti"];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AdressForm />;
        case 1:
            return <PaymentForm />
        case 2:
            return <Review />
    }
}

export default function CheckoutPage() {
    const [activeStep, setActivesStep] = useState(0);
    const methods = useForm();

    function handlePrevios() {
        setActivesStep(activeStep - 1)
    }
    function handleNext() {
        if (activeStep === 2) {
            // sipariş kayıt 
        } else {
            setActivesStep(activeStep + 1)
        }
    }
    return (
        <FormProvider {...methods}>
            <Paper>
                <Grid container spacing={3}>
                    <Grid size={4} sx={{ p: 3, borderRight: "1px solid,", borderColor: "divider" }}>
                        <Info />
                    </Grid>

                    <Grid size={8} sx={{ p: 3 }}>

                        <Stepper activeStep={activeStep} sx={{ height: 40, mb: 4 }}>
                            {
                                steps.map((label) => (
                                    <Step key={label} sx={{ color: "secondary" }}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Typography variant="h5">Siparişiniz Tamamlandı.</Typography>
                        ) : (
                            <form onSubmit={methods.handleSubmit(handleNext)}>
                                {getStepContent(activeStep)}

                                <Box sx={[{ display: "flex" }, activeStep !== 0 ? { justifyContent: "space-between" } : { justifyContent: "flex-end" },]}>

                                    {activeStep !== 0 && (
                                        <Button onClick={handlePrevios} startIcon={<ChevronLeftRounded />} variant="contained" color="secondary">Geri</Button>
                                    )}
                                    <Button type="submit" startIcon={<ChevronRightRounded />} variant="contained" color="secondary">{activeStep === 2 ? "Siparişi Tamamla " : "İleri"}</Button>
                                </Box>
                            </form>
                        )}
                    </Grid>
                </Grid>
            </Paper >
        </FormProvider>
    )
}