import supabase from "../config/supabaseClient";

const USERS = "user_mgmt.users";

export const createUser = async (req, res) => {
    
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const { data, error } = await supabase
        .from(USERS)
        .insert([
           { name, email, password }
        ])
        .select();

        if (error) {
            if (error.code === "23505") {
                return res.status(409).json({ message: "Email already exists" });
            }
            return res.status(500).json({ message: error.message });
        }

         res.status(201).json(data[0]);
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;

     const { data, error } = await supabase
    .from(USERS)
    .delete()
    .eq("id", id)
    .select();

      if(error)
        return res.status(500).json({ message: error.message });

      if(!data.length)
        return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted" });
};
