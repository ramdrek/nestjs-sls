import { BadRequestException, PipeTransform } from '@nestjs/common';
import { QuoteStatus } from '../session.model';

export class QuoteStatusValidationPipe implements PipeTransform {

  readonly allowedStatuses = [
    QuoteStatus.OPEN,
    QuoteStatus.IN_PROGRESS,
    QuoteStatus.BOUND
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}