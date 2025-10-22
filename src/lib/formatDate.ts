export function formatDate(stringDate: string) {
    const date = new Date(stringDate)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}