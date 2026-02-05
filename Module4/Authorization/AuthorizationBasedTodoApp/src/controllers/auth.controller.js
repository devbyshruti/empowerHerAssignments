import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import supabase from "../config/supabase.config.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password ) {
        return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
        { name, email, password: hashedPassword }
    ]);

    if (error) {
        return res.status(400).json({ message: error.message });
    }
    res.status(201).json({ message: "User registered successfully" });
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    const { data: users } = await supabase
    .from("users")
    .select("*")
    .eq("email", email);

if (!users || users.length === 0 ) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = users[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({ token });
};