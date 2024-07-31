import OpenAI from 'openai';
import { OPENROUTER_KEY } from './constants';

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: OPENROUTER_KEY,
    dangerouslyAllowBrowser: true
});

export default openai