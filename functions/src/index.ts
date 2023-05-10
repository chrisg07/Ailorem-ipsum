import * as functions from "firebase-functions";
import { Configuration, OpenAIApi } from "openai";

import * as cors from 'cors';

const corsHandler = cors({ origin: true });


// const DEFAULT_MODEL = "text-davinci-003";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// eslint-disable-next-line max-len
export const openAIHttpFunction = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    const params = request.query;

    if (!params.query) {
      response.send("Please Send Query Parameter");
    }

    const openAPIResponse = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Generate lorem ipsum about little debbie snacks",
      max_tokens: 200,
      temperature: 7,
    }).catch(error => {
      response.status(400).send().json({
        status: 'error',
        message: error.message
      });

    response.send(JSON.stringify(openAPIResponse.data));
  });

});
