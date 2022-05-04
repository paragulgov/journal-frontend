import Notification from './NotificationUtil';

export const ErrorsHandling = (error: any) => {
  if (error?.response) {
    const err = error?.response?.data?.message;

    if (Array.isArray(err)) {
      // err.map(message => {
      //   Notification.showError(message);
      // });
      Notification.showError(err.join('\n'))
    } else {
      Notification.showError(err);
    }
  } else if (error?.request) {
    console.warn(error.request);
  } else {
    console.warn(error?.message);
  }
};
