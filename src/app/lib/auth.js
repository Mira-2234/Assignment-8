import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { client } from "@/db"; // your mongodb client

const db = client.db("book")
export const auth = betterAuth({
    database: mongodbAdapter( db,{client}),
});




