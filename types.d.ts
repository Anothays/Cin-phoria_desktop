

type EventPayloadMapping = {
  saveToken: { token: string, user: string };
  getToken: Promise<string | null>;
  removeToken: void;
  getUserInfo: Promise<string | null>;
  removeUserInfo: void;
};

interface Window {
  electron: object,
  auth: {
    saveToken: ({ token, user }: { token: string, user: string }) => void;
    getToken: () => Promise<string | null>;
    removeToken: () => void;
    getUserInfo: () => Promise<string | null>;
    removeUserInfo: () => void;
  },
};

