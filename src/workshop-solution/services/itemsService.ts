import axiosClient from "./axiosClient";
import { IItem } from "../interfaces/IItem";

export const getAllItems = () => axiosClient.get<IItem[]>("/items");
