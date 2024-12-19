import {ChangeEvent, FormEvent, useState} from "react";
import {Button} from "../elements/Button.tsx";

type FormData = {
    name: string;
    email: string;
    message: string;
};

type Errors = {
    name?: string;
    email?: string;
    message?: string;
};

export function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = (): Errors => {
        const newErrors: Errors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Valid email is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setSubmitted(true);
            console.log("Form Submitted:", formData);
            // Reset form
            setFormData({name: "", email: "", message: ""});
        }
    };

    return (
        <div className="mx-auto w-full max-w-lg p-6 mb-8 bg-background-300 text-white rounded-lg shadow-xl mt-10">
            <h2 className="text-4xl font-extrabold text-font-light mb-6">
                Contact Us
            </h2>
            {submitted && (
                <p className="text-green-400 text-center mb-4">
                    Thank you for reaching out! We'll get back to you soon.
                </p>
            )}
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 bg-background text-white border ${
                            errors.name ? "border-red-500" : "border-background-100"
                        } rounded-md focus:ring-yellow-400 focus:border-yellow-400`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 bg-background text-white border ${
                            errors.email ? "border-red-500" : "border-background-100"
                        } rounded-md focus:ring-yellow-400 focus:border-yellow-400`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`mt-1 block w-full p-2 bg-background text-white border ${
                            errors.message ? "border-red-500" : "border-background-100"
                        } rounded-md focus:ring-yellow-400 focus:border-yellow-400`}
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                    type={"submit"}
                    text={"Send Message"}
                />
            </form>
        </div>
    );
}