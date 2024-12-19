type ButtonProps = {
    text: string;
    type: "button" | "submit" | "reset";
}

export function Button({text, type}: ButtonProps) {
    return (
        <button
            type={type}
            className="w-full bg-accent text-background-300 font-bold py-2 px-4 rounded-md hover:bg-accent-dark transition"
        >
            {text}
        </button>
    )
}