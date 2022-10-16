import { getStatusText } from '../utils/http-status'
import { Exception } from './Exception'

export class ServiceUnavailableException extends Exception implements Exception {
  constructor(message?: string) {
    super(message || getStatusText(503), 503)
  }
}
