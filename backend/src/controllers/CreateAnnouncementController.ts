import { Request, Response } from "express";
import { CreateAnnouncementService } from "../services";

class CreateAnnouncementController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;
    const filename = request.file?.filename || null;
    const { title, description, cost, school_level, discipline_id } = request.body;

    const createAnnouncementService = new CreateAnnouncementService();

    const announcement = await createAnnouncementService.execute({
      title,
      description,
      cost,
      school_level,
      image_name: filename,
      user_id,
      discipline_id
    })


    return response.json(announcement);
  }
}

export { CreateAnnouncementController };