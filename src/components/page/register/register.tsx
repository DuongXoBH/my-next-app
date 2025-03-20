"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/hook-form-schema/login";
import { useEffect, useState } from "react";
import { useFetchRegister } from "@/api-hooks/user";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Card,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  CircularProgress,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const schema = registerSchema;

export interface RegisterForm {
  email: string;
  password: string;
  name: string;
  avatar?: string;
}

export default function Register() {
  const t = useTranslations("Register");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const registerMutation = useFetchRegister();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    await registerMutation.mutate(
      { data },
      {
        onSuccess(data) {
          console.log(data);
          router.push("/login");
        },
      }
    );
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#4285f4",
        background: "linear-gradient(145deg, #4285f4 0%, #5a9eff 100%)",
      }}
    >
      <Card
        sx={{
          p: 4,
          maxWidth: 500,
          minHeight: 660,
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: 8,
          alignItems: "space-between",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ mb: 1, textAlign: "center", fontWeight: 500 }}
        >
          {t("title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
        >
          {t("descreption")}
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
              {t("email-address")}
            </Typography>
            <TextField
              fullWidth
              size="small"
              type="email"
              placeholder="esteban_schiller@gmail.com"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#f8f9fa",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>
              {t("user-name")}
            </Typography>
            <TextField
              fullWidth
              size="small"
              type="text"
              placeholder="Kevin Klein"
              {...register("name")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#f8f9fa",
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {t("password")}
              </Typography>
            </Box>
            <TextField
              fullWidth
              size="small"
              type={showPassword ? "text" : "password"}
              placeholder="123456"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#f8f9fa",
                },
                "& input": {
                  WebkitTextSecurity: showPassword ? "none" : "disc",
                  letterSpacing: showPassword ? "2px" : "4px",
                  fontSize: 16,
                },
              }}
            />
          </Box>

          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
                size="small"
              />
            }
            label={t("check-box")}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={!checked}
            sx={{
              mb: 2,
              py: 1.5,
              bgcolor: "#4285f4",
              "&:hover": {
                bgcolor: "#3367d6",
              },
            }}
          >
            {t("button")}
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" component="span">
              {t("note")}
            </Typography>
            <Link
              href="/login"
              underline="hover"
              sx={{ color: "primary.main", fontSize: "0.875rem", ml: 1 }}
            >
              {t("redirect")}
            </Link>
          </Box>
        </form>
      </Card>
    </Box>
  );
}
