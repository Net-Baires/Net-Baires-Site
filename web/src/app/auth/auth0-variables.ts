interface AuthConfig {
    clientID: string;
    domain: string;
    apiUrl: string;
    callbackURL: string;
  }
  
  export const AUTH_CONFIG: AuthConfig = {
    clientID: '{CLIENT_ID}',
    domain: '{DOMAIN}',
    apiUrl: 'http://localhost:3000',
    callbackURL: 'http://localhost:4200/callback'
  };