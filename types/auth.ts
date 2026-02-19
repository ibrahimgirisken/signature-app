export interface AuthResponse{
    token:string;
}

export interface AuthRequest{
    userNameOrEmail:string;
    password:string;
}