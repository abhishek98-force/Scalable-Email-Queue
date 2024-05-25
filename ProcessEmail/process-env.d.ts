declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        REDIS_PORT: string;
        REDIS_HOST_NAME: string;
        REDIS_PASSWORD: string;
        REDIS_USERNAME: string;
        // add more environment variables and their types here
      }
    }
  }