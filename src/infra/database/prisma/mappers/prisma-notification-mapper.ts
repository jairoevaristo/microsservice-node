/* eslint-disable */
import { Notification as RawNotification } from "@prisma/client"
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      id: notification.id,
    }
  }

  static toDomain(raw: RawNotification) {
    return new Notification({
      category: raw.category,
      content: new Content(raw.content),
      recipientId: raw.recipientId,
      createdAt: raw.createdAt,
      readAt: raw.readAt,
      canceledAt: raw.canceledAt,
    }, 
    raw.id
  );
  }
}