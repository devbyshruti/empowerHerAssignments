import supabase from "../config/supabaseClient";

const TABLE = "user_mgmt.users";

export const createUser = async (req, res) => {
    try {
        const { name, email, password, age, role} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Required fields missing" });
        }
        if (age && age < 18 ) {
            return res.status(400).json({ message: "Age must be 18 or above" });
        }

        const { data, error } = await supabase
        .from(TABLE)
        .insert([
           { name, email, password, age, role: role || "user"}
        ])
        .select();

        if (error) {
            if (error.code === "23505") {
                return res.status(409).json({ message: "Email already exists" });
            }
            return res.status(500).json({ message: error.message });
        }

         res.status(201).json({ message: "User created", user: data[0] });
    } catch (err) {
         res.status(500).json({ message: err.message });
    }
};

export const getUsers = async (req,res) => {
    const { data, error } = await supabase
    .from(TABLE)
    .select("id, name, email, age, role, created_at");

    if(error)
        return res.status(500).json({ message: error.message });

    res.json(data);
};

export const getUserById = async (req,res) => {
    const { id } = req.params;

    const { data, error } = await supabase
    .from(TABLE)
    .select("id, name, email, age, role, created_at")
    .eq("id", id)
    .single();

    if(error)
        return res.status(404).json({ message: "User not found" });

    res.json(data);
};

export const updateUser = async (req,res) => {
    const { id } = req.params;

    const { data, error } = await supabase
    .from(TABLE)
    .update(req.body)
    .eq("id", id)
    .select();

    if(error)
        return res.status(500).json({ message: error.message });

      if(!data.length)
        return res.status(404).json({ message: "User not found" });

    res.json({ message: "User updated", user: data[0]});
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

     const { data, error } = await supabase
    .from(TABLE)
    .delete()
    .eq("id", id)
    .select();

      if(error)
        return res.status(500).json({ message: error.message });

      if(!data.length)
        return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
};
