export function generateReference(): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `REF-2025-${randomNumber}`;
}