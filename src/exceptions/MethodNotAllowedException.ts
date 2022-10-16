import { getStatusText } from '../utils/http-status'
import { Exception } from './Exception'

export class MethodNotAllowedException extends Exception implements Exception {
  constructor(message?: string) {
    super(message || getStatusText(405), 405)
  }
}
