import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductState {
  product: any[];
  category?: any[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: ProductState = {
  product: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getDataCategory = createAsyncThunk<any[], void, { rejectValue: string }>(
  "category",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://sistemtoko.com/public/demo/cat");
      return response.data.aaData;
    } catch (error: any) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);

export const getDataProduct = createAsyncThunk<any[], void, { rejectValue: string }>(
  "product",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/product`);

      return response.data.data;
    } catch (error: any) {
      if (error.response) {
        const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message);
      }
      return thunkAPI.rejectWithValue("An unexpected error occurred");
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    // Get Data Category
    builder.addCase(getDataCategory.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getDataCategory.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.category = action.payload;
    });
    builder.addCase(
      getDataCategory.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Failed to fetch categories";
      }
    );

    // Get Data Product
    builder.addCase(getDataProduct.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getDataProduct.fulfilled, (state, action: PayloadAction<any[]>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.product = action.payload;
    });
    builder.addCase(getDataProduct.rejected, (state, action: PayloadAction<string | undefined>) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload || "Failed to fetch products";
    });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
