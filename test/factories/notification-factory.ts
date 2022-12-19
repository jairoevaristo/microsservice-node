/* eslint-disable */
import { Notification, NotificationData } from "@application/entities/notification";
import { Content } from "@application/entities/content";

type Override = Partial<NotificationData>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'Social',
    content: new Content('Você tem um novo aviso'),
    recipientId: 'test',
    ...override
  })
}