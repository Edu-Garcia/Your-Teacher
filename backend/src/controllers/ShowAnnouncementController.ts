import { Request, Response } from "express";
import { ShowAnnouncementService } from "../services";

class ShowAnnouncementController {
  async handle(request: Request, response: Response) {
    const { id } = request.params

    const showAnnouncementService = new ShowAnnouncementService()

    const announcement = await showAnnouncementService.execute(id);

    return response.json(announcement)
  }
}

export { ShowAnnouncementController };