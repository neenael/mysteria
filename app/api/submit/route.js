import nodemailer from 'nodemailer';
import QRCode from 'qrcode';
import FRONT_PATH from "@/app/APIREQ/frontPath";
import {console} from "next/dist/compiled/@edge-runtime/primitives";
export async function POST(request) {
    console.log('✅ API вызван!');

    // Сначала читаем JSON
    let name, email, phone, event_name, event_id, ticket_id, form_request;

    const date = new Date().toLocaleString('en-GB', {
        timeZone: 'Europe/Berlin', // центральноевропейское время
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    try {
        const body = await request.json();
        ({ name, email, phone, event_name, event_id, ticket_id, form_request } = body);
        console.log('✅ Получены данные формы:', body);
    } catch (error) {
        console.error('❌ Ошибка чтения JSON:', error);
        return Response.json({ message: 'Невозможно прочитать данные формы' }, { status: 400 });
    }


    let qrLink = `${FRONT_PATH}/ticket?event=${event_name}&event_id=${event_id}&name=${name}&email=${email}&phone=${phone}&ticket=${ticket_id}&date=${date}`
    let qr;
    try {
        qr = await QRCode.toDataURL(qrLink);
        console.log('✅ QR-код сгенерирован');
    } catch (error) {
        console.error('❌ Ошибка генерации QR:', error);
        return Response.json({ message: 'Ошибка генерации QR-кода' }, { status: 500 });
    }

    // Отправка Email
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "mysteria.vienna@gmail.com",
                pass: "mpamtpadirpogxam",
            },
        });

        await transporter.sendMail({
            from: `Mysteria Vienna`,
            to: email,
            subject: 'Confirmation of registration',
            html: `
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9; padding: 30px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 40px; font-family: Arial, sans-serif;">
            <tr>
              <td align="center">
                <h2 style="color: #333333;">Thank you, <span style="color: #C20037">${name}!</span></h2>
                <p style="font-size: 16px; color: #555555;">Here is your ticket:</p>
                
                         <div style="margin-top: 20px; padding: 20px; border: 2px dashed #ccc; display: inline-block; border-radius: 15px">
                          <img src="cid:qr-image" alt="QR Code" style="max-width: 200px;" />
                        </div>
                
                        <a href="${qrLink}" style="margin-top: 20px; color: #555555; display: block;">Link to your ticket</a>
    

                <p style="margin-top: 30px; font-size: 14px; color: #888888;">
                  Best regards,<br />Mysteria Team
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `,
            attachments: [{
                filename: 'qr.png',
                content: qr.split("base64,")[1], // обрезаем заголовок data:image/png;base64,
                encoding: 'base64',
                cid: 'qr-image', // это ID, по которому мы вставляем в img
            }]
        });

        console.log('✅ Письмо отправлено на:', email);
    } catch (error) {
        console.error('❌ Ошибка отправки письма:', error);
        return Response.json({ message: 'Ошибка отправки письма' }, { status: 500 });
    }

    // Отправка данных в Google Form
    try {
        const formUrl = form_request.google_forms_link
        const formData = new URLSearchParams();
        formData.append(`entry.${form_request.name_entry_num}`, name);
        formData.append(`entry.${form_request.email_entry_num}`, email);
        formData.append(`entry.${form_request.phone_entry_num}`, phone);
        formData.append(`entry.${form_request.ticketid_entry_num}`, ticket_id);


        const googleRes = await fetch(formUrl, {
            method: 'POST',
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        console.log('✅ Данные отправлены в Google Form. Статус:', googleRes.status);
    } catch (error) {
        console.error('❌ Ошибка отправки в Google Form:', error);
        return Response.json({ message: 'Ошибка отправки данных в Google форму' }, { status: 500 });
    }

    // Всё прошло успешно
    return Response.json({ message: 'Успешно отправлено!', state: 'sent' });
}

