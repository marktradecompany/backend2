import {Inject, Injectable} from "@nestjs/common";
import {MailerService} from "@nestjs-modules/mailer";
import {Op} from "sequelize";
import {catchError, from} from "rxjs";
import * as nodemailer from 'nodemailer';
import { MailDto } from "./dto/mail.dto";

@Injectable()
export class MailService {
    constructor(private readonly mailService: MailerService){}
  
    sendEmail(data: MailDto): void {
        const {mail, name, surname, phone} = data;

        /**
         * Автоматический ответ юзеру на его почту.
         */
        this.mailService.sendMail({
            to: mail,
            from: 'd.kireenkov@yandex.ru',
            subject: 'Automatic response to requests marktradecompany.com',
            text: name + ', thanks for reaching out. Your request will be processed within one day. We will call you back or write to you as soon as possible.'
        })


        /**
         * Данные, которые юзер ввёл на веб-форме - отправляем себе на почту.
         */
        this.mailService.sendMail({
            to: "d.kireenkov32rus@yandex.ru",
            from: 'd.kireenkov@yandex.ru',
            subject: 'Request from the site marktradecompany.com',
            text: "Request c Attention! On the website marktradecompany.com through the feedback form, you were sent contacts:" + '\n' + 
                    "Фамилия/Имя: " + name + " " + surname + '\n' + 
                    "email: " + mail + '\n' + 
                    "Номер телефона: " + phone
                     
    
        })
    }


}