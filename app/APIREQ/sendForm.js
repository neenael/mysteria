import nodemailer from 'nodemailer';
import QRCode from 'qrcode';

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { name, email, phone } = req.body;

    try {
        // 1. Генерация QR-кода
        const qr = await QRCode.toDataURL(`Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}`);

        // 2. Отправка письма
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
            html: `<h2>Спасибо, ${name}!</h2><p>Вот ваш QR-код:</p><img src="${qr}" />`,
        });

        // 3. Отправка в Google Form
        const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSchr7pA5MQZYwe31Z0UzlmbLeW41R_Y9Fhh5w8GhkDJWbS6pg/formResponse';
        const formData = new URLSearchParams();
        formData.append('entry.210207375', name);   // Имя
        formData.append('entry.1987038883', email);  // Email
        formData.append('entry.1987542734', phone);  // Телефон

        await fetch(formUrl, {
            method: 'POST',
            body: formData,
        });

        res.status(200).json({ message: 'Успешно отправлено!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Ошибка при отправке.' });
    }
}