

type EventPayloadMapping = {
  saveToken: string;
  getToken: string;
  removeToken: void;
};

interface Window {
  electron: object,
  auth: {
    saveToken: (token: string) => void;
    getToken: () => Promise<string>;
    removeToken: () => void;
  },
};

