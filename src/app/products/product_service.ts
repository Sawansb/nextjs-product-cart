import axiosInstance from "../common/axios";

export const getProducts = async () => {
  return await axiosInstance.get("/products").then((res) => res);
};

const productServices = {
  getProducts
}

export default productServices;