type User = {
    id: number,
    password: string,
    username: string,
    access: "admin" | "limited",
    name: string,
    email: string
}