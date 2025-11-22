import React from "react";
import { Grid, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

// Telefon maskesi: ref'i doğru iletecek şekilde forwardRef ile sarmalandı
const PhoneMask = React.forwardRef(function PhoneMask(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(000) 000 00 00"  // Türkiye telefon formatı
            inputMode="tel"
            overwrite
            inputRef={ref}          // ref burada doğru iletiliyor
            onAccept={(value) => onChange(value)}
        />
    );
});

export default function AdressForm() {
    const { control, register, formState: { errors } } = useFormContext();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField
                    {...register("firstname", { required: "Firstname zorunlu alan" })}
                    label="Enter firstname"
                    size="small"
                    fullWidth
                    autoFocus
                    sx={{ mb: 2 }}
                    error={!!errors.firstname}
                    helperText={errors.firstname?.message}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    {...register("lastname", { required: "Lastname zorunlu alan" })}
                    label="Enter lastname"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.lastname}
                    helperText={errors.lastname?.message}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <Controller
                    name="phone"
                    control={control}
                    rules={{
                        required: "Telefon zorunlu alan",
                        minLength: { value: 10, message: "Telefon en az 10 karakter olmalı" },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Enter Phone "
                            size="small"
                            fullWidth
                            sx={{ mb: 2 }}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                            InputProps={{
                                inputComponent: PhoneMask,
                            }}
                        />
                    )}
                />
            </Grid>

            <Grid item xs={12} md={6}>
                <TextField
                    {...register("city", { required: "City zorunlu alan" })}
                    label="Enter city"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.city}
                    helperText={errors.city?.message}
                />
            </Grid>

            <Grid item xs={12}>
                <TextField
                    {...register("adressline", { required: "Adressline zorunlu alan" })}
                    label="Enter adressline"
                    size="small"
                    fullWidth
                    sx={{ mb: 2 }}
                    error={!!errors.adressline}
                    helperText={errors.adressline?.message}
                />
            </Grid>
        </Grid>
    );
}
