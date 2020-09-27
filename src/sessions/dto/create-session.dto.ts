import { AppInfo } from '../session.model';
import { IsNotEmpty } from 'class-validator'

export class CreateSessionDto {

  @IsNotEmpty()
  appInfo: AppInfo;
}