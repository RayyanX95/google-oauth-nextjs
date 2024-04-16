interface User {
  id: string
  name?: string | null
  email?: string | null
  image?: string | null
}
export const usersDB: User[] = []