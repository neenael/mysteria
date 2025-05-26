export async function GET() {
    console.log('✅ Тест GET');
    return Response.json({ ok: true });
}