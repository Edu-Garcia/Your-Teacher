import { Request, Response } from "express";
import { ListAnnouncementsService } from "../services";

class ListAnnouncementsController {
  async handle(request: Request, response: Response) {
    const listAnnouncementsService = new ListAnnouncementsService();

    const announcements = await listAnnouncementsService.execute();

    return response.json(announcements);
  }
}

export { ListAnnouncementsController };