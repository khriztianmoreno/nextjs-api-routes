export const apiHelloCode = `function handler(req, res) {
  res.status(200).json({ message: 'Hello 🇨🇴👋🏻' })
}

export default handler
`
export const apiEmojiCode = `import emoji from 'node-emoji';

function handler(req, res) {
  const randomEmoji = emoji.random();
  res.status(200).json(randomEmoji)
}

export default handler

`

export const apiDogCode = `import axios from 'axios'

async function handler(req, res) {
  const apiRoot = "https://api.unsplash.com"
  const accessKey = process.env.ACCESS_KEY

  const collections = \`collections='3816141,1154337,1254279'\`
  const clientId = \`client_id=\${accessKey}\`
  const doggoEndpoint = \`\${apiRoot}/photos/random?\${clientId}&count=${10}&$\{collections}\`

  try {
    const { data } = await axios.get(doggoEndpoint)

    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error);
  }
}

export default handler

`// Language: javascript
