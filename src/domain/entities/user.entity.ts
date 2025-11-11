
export class User {
    constructor(
        public readonly id: string,
        public readonly email: string,
        public password: string,
    ) {}

    public setPassword(newPassword: string): void {
        this.password = newPassword;
    }
    
    public getPassword(): string {
        return this.password;
    }
}