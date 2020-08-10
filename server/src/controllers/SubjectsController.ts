import { Request, Response } from 'express';
import db from '../database/connection';

export default class SubjectsController {
    
    async index(request: Request, response: Response) {
        const subjects = await db('classes').distinct('subject').orderBy('subject');

        const subjectArray = subjects.map(item => item.subject);

        return response.json(subjectArray);
    }
}