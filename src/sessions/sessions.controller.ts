import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { SessionsService } from './sessions.service';
import { LandingPage, QuoteStatus, Session } from './session.model';
import { QuoteStatusValidationPipe } from './pipes/quote-status-validation.pipe';

@Controller('sessions')
export class SessionsController {
  constructor(private sessionsService: SessionsService) {}

  @Get()
  getAllSessions(): Session[] {
    return this.sessionsService.getAllSessions();
  }

  @Get('/:id')
  getSessionById(@Param('id') id: string) {
    return this.sessionsService.getSessionById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createSession(@Body() createSessionDto: CreateSessionDto): Session {
    return this.sessionsService.createSession(createSessionDto);
  }

  @Patch('/:id/landingPage')
  updateSessionLandingPage(
    @Param('id') id: string,
    @Body('landingPage') landingPage: LandingPage
  ): Session {
    return this.sessionsService.updateSessionLandingPage(id, landingPage);
  }

  @Patch('/:id/quoteStatus')
  updateSessionQuoteStatus(
    @Param('id') id: string,
    @Body('quoteStatus', QuoteStatusValidationPipe) quoteStatus: QuoteStatus
  ): Session {
    return this.sessionsService.updateSessionStatus(id, quoteStatus);
  }

  @Delete('/:id')
  deleteSession(@Param('id') id: string) {
    this.sessionsService.deleteSession(id);
  }
}
