import {Module} from "@nestjs/common";
import { MailerController } from "./mailer.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "./mailer.service";

@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: 'smtp.timeweb.ru',
            auth: {
                user: 'contact@dkireenkov.ru',
                pass: 'WRUY#p4GT7mg',
            },
        }
    })],
    controllers: [MailerController],
    providers: [MailService]
})
export class MailModule {
}