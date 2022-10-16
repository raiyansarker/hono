import { getStatusText } from '../utils/http-status'
import { Exception } from './Exception'

export class InternalServerErrorException extends Exception implements Exception {
  constructor(message?: string) {
    super(message || getStatusText(500), 500)
  }
}
