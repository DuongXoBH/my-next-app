"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/hook-form-schema/login";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchLogin } from "@/api-hooks/user";
import { userToken } from "@/store/user";
import { useAtom } from "jotai";
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
import { toast } from "react-toastify";

const schema = loginSchema;

export interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useAtom(userToken);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const loginMutation = useFetchLogin();

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
  } = useForm<LoginForm>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    await loginMutation.mutate(
      { data },
      {
        onSuccess(data) {
          setToken(data);
        },
      }
    );
    setIsSubmitting(false);
  };
  useEffect(() => {
    if (token) {
      toast("You have logged in");
      router.push("/");
    }
  }, [token, router]);

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
          maxWidth: 400,
          width: "100%",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{ mb: 1, textAlign: "center", fontWeight: 500 }}
        >
          Login to Account
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 3, textAlign: "center", color: "text.secondary" }}
        >
          Please enter your email and password to continue
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 600}}>
              Email address:
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
                color:"rgba(166, 166, 166, 1)",
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
              <Typography variant="body2" sx={{ fontWeight: 600 }}>Password</Typography>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "primary.main", fontSize: "0.875rem" }}
              >
                Forget Password?
              </Link>
            </Box>
            <TextField
              fullWidth
              size="small"
              type={showPassword ? "text" : "password"}
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
            control={<Checkbox size="small" />}
            label="Remember Password"
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{
              mb: 2,
              py: 1.5,
              bgcolor: "#4285f4",
              "&:hover": {
                bgcolor: "#3367d6",
              },
            }}
          >
            Sign In
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Typography variant="body2" component="span">
              Don&apos;t have an account?{" "}
            </Typography>
            <Link
              href="/register"
              underline="hover"
              sx={{ color: "primary.main", fontSize: "0.875rem" }}
            >
              Create Account
            </Link>
          </Box>
        </form>
      </Card>
    </Box>
  );
}
