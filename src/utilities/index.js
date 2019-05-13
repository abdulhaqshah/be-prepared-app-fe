const addNotification = (notificationDOMRef, title, type, message) => {
  notificationDOMRef.current.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: { duration: 1000 },
    dismissable: { click: true }
  });
};
export default addNotification;
