export interface LoginData {
    email: string,
    password: string
}
export interface LoginResponse {
    message: string,
    user: {
        id: string,
        name: string,
        email: string
    },
    token: string
}
export interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        name: string;
        email: string;
    } | null;
}
export interface User{
    _id: string,
    name: string,
    email: string,
    
}
