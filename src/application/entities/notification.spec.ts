/* eslint-disable prettier/prettier */
import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você tem um novo pedido de amizade'),
      category: 'Social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});

