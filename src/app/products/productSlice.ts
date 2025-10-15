import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "./product.types";
import productServices, { getProducts } from "./product_service";
import { AxiosError } from "axios";

interface ProductsState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  items: [] as Product[],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products",
  async (_, { rejectWithValue }) => {
    try {
      const response = await productServices.getProducts();
      return response.data; // this is what goes to fulfilled
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error fetching products:", err.message);
      return rejectWithValue(err.response?.data || "Failed to fetch products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      });
  },
});

export default productsSlice.reducer;
