import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

export async function POST(request) {
    console.log('✅ API вызван!');

    // Сначала читаем JSON
    let name, email, phone;
    try {
        const body = await request.json();
        ({ name, email, phone } = body);
        console.log('✅ Получены данные формы:', body);
    } catch (error) {
        console.error('❌ Ошибка чтения JSON:', error);
        return Response.json({ message: 'Невозможно прочитать данные формы' }, { status: 400 });
    }

    // Генерация QR-кода
    let qr;
    try {
        qr = await QRCode.toDataURL(`Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`);
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
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Сайт" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: 'Ваш QR-код',
            html: `<h2>Спасибо, ${name}!</h2><p>Вот ваш QR-код:</p><img alt="qr" src="${qr}" />`,
        });

        console.log('✅ Письмо отправлено на:', email);
    } catch (error) {
        console.error('❌ Ошибка отправки письма:', error);
        return Response.json({ message: 'Ошибка отправки письма' }, { status: 500 });
    }

    // Отправка данных в Google Form
    try {
        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSchr7pA5MQZYwe31Z0UzlmbLeW41R_Y9Fhh5w8GhkDJWbS6pg/formResponse';
        const formData = new URLSearchParams();
        formData.append('entry.210207375', name);
        formData.append('entry.1987038883', email);
        formData.append('entry.1987542734', phone);

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
    return Response.json({ message: 'Успешно отправлено!' });
}