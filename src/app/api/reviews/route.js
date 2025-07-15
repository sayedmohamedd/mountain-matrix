import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db('mountains'); // عدّل اسم DB لو حبيت
    const collection = db.collection('reviews');

    await collection.insertOne({
      name: body.name,
      comment: body.comment,
      rating: body.rating,
      createdAt: new Date(),
    });

    return Response.json({ message: 'Review saved successfully' });
  } catch (err) {
    console.error('POST /api/reviews error:', err);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
