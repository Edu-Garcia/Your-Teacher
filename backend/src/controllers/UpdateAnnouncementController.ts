import { Request, Response } from "express";
import { UpdateAnnouncementService } from "../services";

class UpdateAnnouncementController {
  async handle(request: Request, response: Response) {
    const filename = request.file ? request.file.filename : ''
    const { id } = request.params
    const { title, description, cost, school_level, discipline_id } = request.body;

    const updateAnnouncementService = new UpdateAnnouncementService();

    const announcement = await updateAnnouncementService.execute({
      id,
      title,
      description,
      cost,
      school_level,
      image_name: filename,
      discipline_id
    })


    return response.json(announcement);
  }
}

export { UpdateAnnouncementController };