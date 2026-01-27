export type HttpStatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export interface HttpError {
  status: HttpStatusCode;
  message: string;
  code?: string;
  issues?: string[];
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
}
