import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
export default function Loading() {
    return (
        <Backdrop open={true} invisible={true}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress color="primary" />
                <Typography variant="h4" sx={{ justifyContent: "center", position: "fixed", top: "60%" }} />
            </Box>
        </Backdrop>
    )
}