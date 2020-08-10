import {Request, Response} from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class ClassesController {

    async index(request: Request, response: Response) {
        const filters = request.query;

        if (!filters.subject || !filters.week_day || !filters.time) {
            return response.status(400).json({
                error: 'Missing filters to search classes'
            });
        }

        const timeInMinutes = convertHourToMinutes(filters.time as string);

        const classes = await db('classes')
        .whereExists(function () {
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(filters.week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', filters.subject as string)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

        return response.json(classes)
    }

    async create(request: Request, response: Response): Promise<Response> {

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule,
        } = request.body;
    
        const transaction = await db.transaction();
    
        try {
            const insertedUserIds = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
        
            const user_id = insertedUserIds[0];
        
            const insertedClassesIds = await transaction('classes').insert({
                subject,
                cost,
                user_id,
            });
        
            const class_id = insertedClassesIds[0];
        
            const classSchedule = schedule.map((item: ScheduleItem )=> {
                return {
                    class_id,
                    week_day: item.week_day,
                    from: convertHourToMinutes(item.from),
                    to: convertHourToMinutes(item.to),
                };
            });
        
            await transaction('class_schedule').insert(classSchedule);
        
            await transaction.commit();
        
            return response.status(201).send('ok');
    
        } catch (err) {
            await transaction.rollback();

            console.error(err);
    
            return response.status(400).json({
                error: 'Unexpected error while creating new class'
            });  
        }   
    }
}