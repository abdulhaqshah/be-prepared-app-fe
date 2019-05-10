 const addNotification = (title, type, message) => {
  this.notificationDOMRef.current.addNotification({
    title,
    message,
    type,
    insert: "top",
    container: "top-center",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: { duration: 300 },
    dismissable: { click: true }
  });
};
export default addNotification;