interface Message {
  text: string;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}

// types/sounds.d.ts

declare module "*.mp3" {
  const content: string;
  export default content;
}