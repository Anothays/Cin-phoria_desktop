type Statistics = {
  data: string;
};


type EventPayloadMapping = {
  statistic: Statistics
};

interface Window {
  electron: {
    getStaticData: () => void;
  }
};

