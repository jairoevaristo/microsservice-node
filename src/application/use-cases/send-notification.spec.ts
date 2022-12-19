/* eslint-disable */
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notification-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send notification', async  () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);

    const { notification } = await sendNotification.execute({
      category: 'Social',
      content: 'Você tem um novo pedido de amizade',
      recipientId: 'example-recipient-id'
    });

    expect(notificationRepository.notifications).toHaveLength(1);
    expect(notificationRepository.notifications[0]).toEqual(notification);
  });
});