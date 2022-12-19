/* eslint-disable prettier/prettier */
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { GetRecipientNotification } from './get-recipient-notification';

describe('Get recipients Notification', () => {
  it('should be able to get recipients notifications', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
     makeNotification({ recipientId: 'recipient-1' })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' })
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'recipient-2' })
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(expect.arrayContaining([
      expect.objectContaining({ recipientId: 'recipient-1' }),
      expect.objectContaining({ recipientId: 'recipient-1' })
    ]));
  });
});
