const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const cors = require('cors')({ origin: true });
admin.initializeApp();

exports.openAiResponse2 = functions.https.onRequest(async (request: any, response: any) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const topic = request.query.topic;

  cors(request, response, async () => {
    try {
      const apiResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content: 'When generating structured HTML content structure it like it was the content of a blog post, not as if it were a stand alone HTML page. Include many varying HTML selectors. Generate structured HTML content telling a story about a specific topic. That topic is: ' + topic + ''
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        },
      );

      const collectionRef = admin.firestore().collection('generated-responses');
      await collectionRef.add({
        approvedForDisplay: false, 
        response: apiResponse.data.choices[0].message.content,
        topic: topic
      });

      response.status(200).json({
        message: 'OpenAI API connection successful.',
        completion: apiResponse.data.choices[0].message.content,
      });
    } catch (error) {
      console.error('Error connecting to OpenAI API:', error);
      response.status(500).send('Error connecting to OpenAI API');
    }
  });
});
