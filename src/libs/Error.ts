export enum HttpCode {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,
    NO_CONTENT = 204,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
}

export enum Message {
  SOMEThING_WENT_WRONG = "Something went wrong",
  NO_DATA_FOUND = "No data found",
  CREATE_FAILED = "Create failed",
  UPDATE_FAILED = "Update failed",
  
  NO_MEMBER_NICK = "No member with that nick!",
  USED_NICK_PHONE = "Your are inserting already used nick or phone!",
  WRONG_PASSWORD = "Wrong passwrod, please try again!",
  NOT_AUTHENTICATED = "You are not authenticated, please login first!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMEThING_WENT_WRONG,
  }

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;