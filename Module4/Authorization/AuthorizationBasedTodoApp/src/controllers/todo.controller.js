import supabase from "../config/supabase.config.js";

export const createTodo = async (req, res) => {
    const { title } = req.body;
    const { userId } = req.user;

    const { data, error } = await supabase
    .from("todos")
    .insert([{ title, userId }])
    .select();

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    res.status(201).json(data[0]);
};

export const getTodos = async (req, res) => {
    const { userId } = req.user;

    const { data } = await supabase
    .from("todos")
    .select("*")
    .eq("userId", userId);

    res.json(data);
}

export const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    const { userId } = req.user;

    const { data } = await supabase
    .from("todos")
    .update({ completed })
    .eq("id", id)
    .eq("userId", userId)
    .select();

    if (!data || data.length === 0) {
        return res.status(403).json({ message: "Not allowed" });
    }

    res.json(data[0])
};

export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;

    const { data } = await supabase
    .from("todos")
    .delete()
    .eq("id", id)
    .eq("userId", userId)
    .select()

    if (!data || data.length === 0 ) {
        return res.status(403).json({ message: "Not allowed" });
    }

    res.json({ message: "Todo deleted" });

};
