import { GoogleGenAI } from "@google/genai";
import { ProjectData } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;
  private modelId = "gemini-2.5-flash";

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateProjectResponse(query: string, projectContext: ProjectData): Promise<string> {
    try {
      const systemInstruction = `
        You are 'IzlaBot', a professional and helpful Project Manager AI for Izla Technologies.
        You are speaking to the client, 'Acme Corp'.
        
        Your Goal: Answer questions about the current project status based strictly on the provided JSON context.
        
        Project Context:
        ${JSON.stringify(projectContext)}
        
        Guidelines:
        - Be polite, professional, and concise.
        - If the user asks about deadlines, delays, or specific tasks, reference the data.
        - If the user asks something outside the scope of this project, politely decline.
        - Use markdown for formatting (bolding key dates, lists for tasks).
        - If analyzing risk, note that 'upcoming' milestones close to the date might need attention.
      `;

      const response = await this.ai.models.generateContent({
        model: this.modelId,
        contents: [
          {
            role: 'user',
            parts: [{ text: query }]
          }
        ],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.3, // Low temperature for factual accuracy
        }
      });

      return response.text || "I apologize, I couldn't process that request at the moment.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I'm having trouble connecting to the project database right now. Please try again later.";
    }
  }
}

export const geminiService = new GeminiService();