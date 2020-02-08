import axios from 'axios';

const authEndPoint = '';

export function getAuthState(): string|null{
    return localStorage.getItem('authState'); 
}

export function login(userName: string, password: string): boolean {
    localStorage.setItem('authState', 'loggedIn');
    return true;
}

export function logout(): void {
    localStorage.setItem('authState', '');
}