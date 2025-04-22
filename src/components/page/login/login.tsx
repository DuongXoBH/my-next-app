"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/hook-form-schema/login";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFetchLogin, useFetchUserApiBySession } from "@/api-hooks/user";
import { userToken } from "@/stores/auth";
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
import { useTranslations } from "next-intl";
import LinkTag from "@/components/common/globals/link-tag";
import LanguageSwitcher from "@/components/common/drawer/header/locale-button";
import { getPathname } from "@/i18n/navigation";

const schema = loginSchema;

export interface LoginForm {
  email: string;
  password: string;
}

export default function Login() {
  const t = useTranslations("admin.Login");
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(token);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const locale = usePathname().split("/")[1];
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
    }
  }, [token]);
  useEffect(() => {
    if (auth?.role === "admin") {
      router.push(
        getPathname({ href: "/admin", locale: locale as "vi" | "en" })
      );
    } else if (auth?.role === "customer") {
      router.push(getPathname({ href: "/", locale: locale as "vi" | "en" }));
    }
  }, [router, locale, auth]);

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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          p: 4,
          maxWidth: 600,
          height: 680,
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
          {t("title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            width: "413px",
            mb: 3,
            textAlign: "center",
            color: "text.secondary",
          }}
        >
          {t("descreption")}
        </Typography>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Box sx={{ mb: 3, width: "100%" }}>
            <Typography
              variant="body2"
              sx={{ mb: 1, fontWeight: 600, width: "100%" }}
            >
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
                color: "rgba(166, 166, 166, 1)",
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
              <Link
                href="#"
                underline="hover"
                sx={{ color: "primary.main", fontSize: "0.875rem" }}
              >
                {t("forget-password")}
              </Link>
            </Box>
            <TextField
              fullWidth
              placeholder="123456"
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
            label={t("remember-password")}
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
            {t("button")}
          </Button>

          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
            }}
          >
            <div className=" w-full flex flex-row justify-center">
              {" "}
              <Typography variant="body2" component="span">
                {t("note")}
              </Typography>
              <LinkTag
                href="/register"
                className="text-sky-600 hover:underline text-[0.875rem] ml-2"
              >
                {t("redirect")}
              </LinkTag>
            </div>
            <LanguageSwitcher />
          </Box>
        </form>
      </Card>
    </Box>
  );
}
