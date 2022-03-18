import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { TeachersRepositories } from '../repositories/TeachersRepositories';

export async function ensureTeacher(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request;

  const teachersRepositories = getCustomRepository(TeachersRepositories);

  const teacher = await teachersRepositories.findOne({ user_id });

  if (teacher) {
    return next();
  }

  return response.status(401).json({
    error: "Sem autorização"
  });
}