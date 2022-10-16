import { getStatusText } from '../utils/http-status.ts'
import { Exception } from './exception.ts'

export class MethodNotAllowedException extends Exception implements Exception {
  constructor(message?: string) {
    super(message || getStatusText(405), 405)
  }
}
