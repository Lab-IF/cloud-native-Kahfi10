export async function GET() {
  const users = [
    { id: 1, nama: 'Budi' },
    { id: 2, nama: 'Siti' },
  ];

  return Response.json(users);
}