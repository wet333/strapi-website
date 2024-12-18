export function capitalizeFirstLetter(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function capitalizeWords(text: string): string {
    return text.split(" ").map(word =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}