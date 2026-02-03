import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const signup = async (req, res) => {
    try{
        const { name, email, age, location, password } = req.body;

        if (!name || !email || !age || !location || !password) {
            return res.status(400).json({ message: "All fields required" });
        }

        const { data: existing } = await supabase
        .from("users")
        .select("email")
        .eq("email",email)
        .maybeSingle();

        if (existing) {
            return res.status(400).json({
                message: "Email already registered"
            });
        }

            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            const { error } = await supabase.from("users").insert([
                {
                    name,
                    email,
                    age,
                    location,
                    password: hashedPassword
                }
            ]);

            if (error ) throw error;

            res.json({ message: "User registered successfully" });

        
    } catch (err) {
        res.status(500).json({
            message: "Signup failed",
        error: err.message
        });
    }
};

export const getProfile = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ message: "Name required" });
        }

        const { data, error } = await supabase
        .from("users")
        .select("id, name, email, age, location" )
        .eq("name", name)
        .single();
        
        if (error || !data) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.json(data);
        
    } catch (err) {
        res.status(500).json({
            message: "Failed to fetch profile",
            error: err.message
        });
    }
};