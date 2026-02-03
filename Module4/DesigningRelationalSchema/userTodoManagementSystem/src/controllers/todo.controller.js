import supabase from "../config/supabaseClient";

const TODOS = "user_mgmt.todos";
const USERS = "user_mgmt.users";

export const addTodo = async (req, res) => {
    
        const { title, description, userID } = req.body;

        if (!title || !userID) {
            return res.status(400).json({ message: "Required fields missing" });
        }

        const { data: user } = await supabase
        .from(USERS)
        .select("id")
        .eq("id", userId)
        .single();

        if (!user) 
            return res.status(44).json({ message: "User not found" });
       const { data, error } = await supabase
       .from(TODOS)
       .insert([{ title, description, user_id: userId }])
       .select();

       if (error) return res.status(500).json({ message: error.message });

         res.status(201).json(data[0]);
};

export const getUsersTodos = async (req,res) => {
    const { userId } = await supabase
    .from(TODOS)
    .select("*")
    .eq("user_id", userID);

    if(error)
        return res.status(500).json({ message: error.message });

    res.json(data);
};

export const updateTodo = async (req,res) => {
    const { todoId } = req.params;

    const { data, error } = await supabase
    .from(TODOS)
    .update(req.body)
    .eq("id", todoId)
    .select();

    if(error)
        return res.status(500).json({ message: error.message });

      if(!data.length)
        return res.status(404).json({ message: "Todo not found" });

    res.json(data[0]);
};

export const deleteTodo = async (req, res) => {
    const { todoId } = req.params;

     const { data, error } = await supabase
    .from(TODOS)
    .delete()
    .eq("id", todoId)
    .select();

      if(error)
        return res.status(500).json({ message: error.message });

      if(!data.length)
        return res.status(404).json({ message: "Todo not found" });

    res.json({ message: "Todo deleted" });
};

