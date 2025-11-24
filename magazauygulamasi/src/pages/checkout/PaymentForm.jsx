import React from "react";
import { Grid, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

// =======================
// CARD NUMBER MASK
// =======================
const CardNumberMask = React.forwardRef(function CardNumberMask(props, ref) {
    const { onChange, ...other } = props;

    return (
        <IMaskInput
            {...other}
            mask="0000 0000 0000 0000"
            inputRef={ref}
            inputMode="numeric"
            overwrite
            onAccept={(value) => onChange(value)}
        />
    );
});

// =======================
// CVV MASK
// =======================
const CvvMask = React.forwardRef(function CvvMask(props, ref) {
    const { onChange, ...other } = props;

    return (
        <IMaskInput
            {...other}
            mask="000"
            inputRef={ref}
            inputMode="numeric"
            overwrite
            onAccept={(value) => onChange(value)}
        />
    );
});

// =======================
// Date MASK
// =======================

const DateMask = React.forwardRef(function DateMask(props, ref) {
    const { onChange, ...other } = props;

    return (
        <IMaskInput
            {...other}
            mask="00/00"
            inputRef={ref}
            inputMode="numeric"
            overwrite
            onAccept={(value) => onChange(value)}
        />
    );
});



// =======================
// PAYMENT FORM
// =======================
export default function PaymentForm() {
    const { control, register, formState: { errors } } = useFormContext();

    return (
        <Grid container spacing={3}>

            {/* CARD NAME */}
            <Grid item xs={12} md={6}>
                <TextField
                    {...register("cardname", { required: "cardname zorunlu alan" })}
                    label="Enter cardname"
                    size="small"
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                    error={!!errors.cardname}
                    helperText={errors.cardname?.message}
                />
            </Grid>

            {/* CARD NUMBER */}
            <Grid item xs={12} md={6}>
                <Controller
                    name="cardnumber"
                    control={control}
                    rules={{
                        required: "cardnumber zorunlu alan"
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enter cardnumber"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            error={!!errors.cardnumber}
                            helperText={errors.cardnumber?.message}
                            InputProps={{
                                inputComponent: CardNumberMask,
                            }}
                        />
                    )}
                />
            </Grid>

            {/* EXPIRY DATE */}
            <Grid item xs={12} md={6}>
                <Controller
                    name="expirty"
                    control={control}
                    rules={{
                        required: "expirty zorunlu alan"
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enter expirty"
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            error={!!errors.expirty}
                            helperText={errors.expirty?.message}
                            InputProps={{
                                inputComponent: DateMask,
                            }}
                        />
                    )}
                />
            </Grid>

            {/* CVV */}
            <Grid item xs={12} md={6}>
                <Controller
                    name="cvv"
                    control={control}
                    rules={{
                        required: "cvv zorunlu alan"
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enter CVV"
                            size="small"
                            type="password"
                            fullWidth
                            sx={{ mb: 2 }}
                            error={!!errors.cvv}
                            helperText={errors.cvv?.message}
                            InputProps={{
                                inputComponent: CvvMask,
                            }}
                        />
                    )}
                />
            </Grid>
        </Grid>
    );
}
