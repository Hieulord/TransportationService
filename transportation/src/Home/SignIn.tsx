import * as React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function SignIn() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const requestData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_KEY}/user/sign-in`,
        requestData
      ); // Sử dụng axios instance đã cấu hình

      console.log(response.data);

      // Kiểm tra isAdmin trong cơ sở dữ liệu
      const isAdmin = await checkIsAdmin(response.data.email);

      if (isAdmin === true) {
        navigate("/home"); // Nếu là admin, chuyển hướng đến trang home
      } else {
        navigate("/"); // Nếu không phải admin, chuyển hướng đến trang body
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkIsAdmin = async (email: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_KEY}/user/get-details-by-email`,
        {
          params: {
            email: email,
          },
        }
      );
      return response.data.isAdmin;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
