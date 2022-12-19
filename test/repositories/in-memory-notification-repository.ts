// eslint-disable-next-line prettier/prettier
import { Notification } from "../../src/application/entities/notification";
import { NotificationRepository } from "../../src/application/repositories/notification-repository";

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(item => item.id === notificationId);

    if (!notification) {
      return null
    }

    return notification;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications
    .filter(item => item.recipientId === recipientId);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications
      .filter(item => item.recipientId === recipientId).length;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      item => item.id === notification.id
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }
  
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}