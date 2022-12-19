/* eslint-disable */
import { Injectable } from "@nestjs/common";
import { NotificationRepository } from "../repositories/notification-repository";

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: Number;
};

@Injectable()
export class CountRecipientNotification {
  constructor(
    private notificationsRepository: NotificationRepository
  ) {}

  async execute(
    request: CountRecipientNotificationRequest
  ): Promise<CountRecipientNotificationResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId
    );

    return {
      count
    }
  }
}