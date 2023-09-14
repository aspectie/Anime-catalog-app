import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { watchId: string } }
) {
  try {   
    const { userId } = auth();
    
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const watchRecord = await prismadb.watchList.findFirst({
      where: {
        watchId: Number(params.watchId),
        userId
      }
    });
  
    return NextResponse.json(watchRecord);
  } catch (error) {
    console.log(`watch-list[${params.watchId}]_GET]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PATCH(
  req: Request,
  { params }: { params: { watchId: string } }
) {
  try {   
    const { userId } = auth();

    const body = await req.json();
    
    const { status } = body;
    
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const watchItem = await prismadb.watchList.updateMany({
      where: {
        watchId: Number(params.watchId),
        userId
      },
      data: {
        status
      }
    });
  
    return NextResponse.json(watchItem);
  } catch (error) {
    console.log(`watch-list[${params.watchId}]_PATCH]`, error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function PUT(
  req: Request,
  { params }: { params: { watchId: string } }
) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { status } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const watchRecord = await prismadb.watchList.findFirst({
      where: {
        watchId: Number(params.watchId),
        userId
      }
    });

    if (watchRecord) {
      const watchNewRecord = await prismadb.watchList.update({
        where: {
          id: watchRecord.id
        },
        data: {
          status
        }
      });

      return NextResponse.json(watchNewRecord);
    } else {
      const watchNewRecord = await prismadb.watchList.create({
        data: {
          status,
          watchId: Number(params.watchId),
          userId
        }
      });

      return NextResponse.json(watchNewRecord);
    }    
    
  } catch (error) {
    console.log(`watch-list[${params.watchId}]_PUT`, error)
    throw new NextResponse('Internal error', { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { watchId: string } }
) {
  try {
    const { userId } = auth()

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const watchRecord = await prismadb.watchList.findFirst({
      where: {
        watchId: Number(params.watchId),
        userId
      }
    });

    if (watchRecord) {
      const deleteRecord = await prismadb.watchList.delete({
        where: {
          id: watchRecord.id,
        }
      });

      return NextResponse.json(deleteRecord);
    }
  } catch (error) {
    console.log(`watch-list[${params.watchId}]_DELETE`, error)
    throw new NextResponse('Internal error', {status: 500})
  }
}