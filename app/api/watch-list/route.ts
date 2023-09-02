import { NextResponse } from "next/server"
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs"

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { watchId, status } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
    
    const watchItem = await prismadb.watchList.create({
      data: {
        status,
        watchId,
        userId
      }
    });
  
    return NextResponse.json(watchItem);
  } catch (error) {
    console.log('watch-list_POST', error)
    throw new NextResponse('Internal error', {status: 500})
  }
}