export default class AppError extends Error {
  status;
  validation;

  constructor(status, message) {
    super(message);

    this.status = status;
  }
}
