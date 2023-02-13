// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import admin from 'firebase-admin'
import query from 'lib/queryApi';
import { adminDb } from 'firebaseAdmin';

type Data = {
  answer: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  if(!prompt) {
    res.status(400).json({ answer: 'Please provide a prompt' })
    return;
  }

  if (!chatId) {
    res.status(400).json({ answer: 'Please provide a valid chat ID' })
  }

  // ChatGPT Query
  const response = await query(prompt, chatId, model)

  const message: Message = {
    text: response || `The AI was unable to find an answer for that`,
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar: 'https://static.vecteezy.com/system/resources/previews/007/224/792/original/robot-modern-style-vector.jpg'
    },
  };

  await adminDb
  .collection('users')
  .doc(session?.user?.email)
  .collection('chats')
  .doc(chatId)
  .collection('messages')
  .add(message);

  res.status(200).json({ answer: message.text })
}
