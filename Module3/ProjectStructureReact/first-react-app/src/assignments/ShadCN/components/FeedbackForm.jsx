import { use, useState } from "react";
import { Card, CardContent, CardHeader, Cardtitle } from "@components/ui/card"
import { input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { Button } from "@components/ui/button";

export default function FeedbackFrom() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const [submittedData, setsubmittedData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.valuue});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmittedData(formData);
        setFormData({ name: "", email: "", feedback: "" });
    };

    return (
        <Card className="max-w-md mx-auto mb-10">
            <CardHeader>
                <Cardtitle>Feedback Form</Cardtitle>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                <input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                />
                 <input
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                />
                <Textarea
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
                />
                <Button type="submit">Submit</Button>
                </form>

                {submittedData && (
                    <div className="mt-6 text-sm">
                        <p><strong>Name:</strong>{submittedData.name}</p>
                        <p><strong>Email:</strong>{submittedData.email}</p>
                        <p><strong>feedback:</strong>{submittedData.feedback}</p>


                    </div>
                )}
            </CardContent>
        </Card>
    );
}