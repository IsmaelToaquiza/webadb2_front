import axios from "axios";
import { User } from "@/models/user";

const API_URL = "https://api-gateway-production-9e17.up.railway.app";

export const getAllUsers = async (token: string): Promise<User[]> => {
  const response = await axios.get(`${API_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
