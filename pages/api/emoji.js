import emoji from 'node-emoji';

function handler(req, res) {
  const randomEmoji = emoji.random();
  res.status(200).json(randomEmoji)
}

export default handler
