import { Store, iNotification } from 'react-notifications-component';

interface INotificationProps {
  type: iNotification['type'];
  message: string;
  container?: iNotification['container'];
  duration?: number;
}

class NotificationUtil {
  addNotification = (options: iNotification) => {
    const { type, message, container, dismiss, slidingExit, ...rest } = options;

    Store.addNotification({
      message: message,
      type: type,
      insert: 'top',
      container: container,
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true,
        showIcon: true,
        ...dismiss,
      },
      slidingExit: {
        duration: 100,
        timingFunction: 'linear',
        delay: 0,
        ...slidingExit,
      },
      ...rest,
    });
  };

  showNotify = (options: INotificationProps) => {
    const { type, message, container, duration } = options;

    this.addNotification({
      type: type,
      message: message,
      container: container || 'bottom-left',
      dismiss: {
        duration: duration || 5000,
      },
    });
  };

  showError = (errorMessage: string) => {
    this.showNotify({ type: 'danger', message: errorMessage });
  };

  showSuccess = (successMessage: string) => {
    this.showNotify({ type: 'success', message: successMessage });
  };
}

export default new NotificationUtil();
