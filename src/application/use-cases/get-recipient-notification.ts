/* eslint-disable */
import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";

interface GetRecipientNotificationRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[];
};

@Injectable()
export class GetRecipientNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: GetRecipientNotificationRequest
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;
    const notifications = await this.notificationsRepository.findManyByRecipientId(
      recipientId
    );

    return {
      notifications
    }
  }
}