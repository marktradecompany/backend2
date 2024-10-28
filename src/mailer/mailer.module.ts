import {Module} from "@nestjs/common";
import { MailerController } from "./mailer.controller";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailService } from "./mailer.service";

@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: 'smtp.timeweb.ru',
            auth: {
                user: 'cpofficer@marktradecompany.com',
                pass: 'azywwcn198',
            },
        }
    })],
    controllers: [MailerController],
    providers: [MailService]
})
export class MailModule {
}