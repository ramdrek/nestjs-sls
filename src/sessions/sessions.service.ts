import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { QuoteStatus, Session } from './session.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SessionsService {
  private sessions: Session[] = [];

  getAllSessions(): Session[] {
    return this.sessions;
  }

  getSessionById(id: string): Session {
    const found = this.sessions.find(session => session.id === id);

    if (!found) {
      throw new NotFoundException(`Session "${id}" not found`);
    }

    return found;
  }

  updateSessionLandingPage(id, landingPage) {
    const session = this.getSessionById(id);
    session.appInfo.landingPage = landingPage;
    return session;
  }

  deleteSession(id: string): void {
    const found = this.getSessionById(id);
    this.sessions = this.sessions.filter(session => session.id !== found.id);
  }

  createSession(createSessionDto: CreateSessionDto): Session {
    const { appInfo } = createSessionDto;
    console.log(appInfo);

    const session: Session = {
      id: uuidv4(),
      appInfo,
      quoteStatus: QuoteStatus.OPEN
    };

    this.sessions.push(session);
    return session;

  }

  updateSessionStatus(id: string, quoteStatus: QuoteStatus) {
    const session = this.getSessionById(id);
    session.quoteStatus = quoteStatus;
    return session;
  }
}
