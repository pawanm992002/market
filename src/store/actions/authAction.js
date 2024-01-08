import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const loginUser = createAsyncThunk(
  "Auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });

      if (!data?.status) {
        throw data?.msg;
      }
      localStorage.setItem("userData", JSON.stringify(data?.data));
      toast.info(data?.msg);
      return data?.data;
    } catch (err) {
      toast.error(err);
      return rejectWithValue(err);
    }
  }
);
