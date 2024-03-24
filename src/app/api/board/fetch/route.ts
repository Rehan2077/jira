import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const boardId = searchParams.get("boardId");
    const skip = searchParams.get("skip");
    const take = searchParams.get("take");

    if (!boardId || !skip || !take) {
      return Response.json(
        { error: { message: "Fields are missing!" } },
        { status: 400 }
      );
    }
    const board = prisma.board.findFirstOrThrow({
      where: {
        id: boardId,
      },
    });

    const boardColumn = prisma.boardColumn.findMany({
      where: { boardId },
    });

    const boardTicket = prisma.boardTicket.findMany({
      where: { boardId },
      skip: Number(skip),
      take: Number(take),
    });

    const data = await Promise.all([board, boardColumn, boardTicket]);

    return Response.json(
      { data: { board: data[0], boardColumn: data[1], boardTicket: data[2] } },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json(
      { error: { message: "Something went wrong!" } },
      { status: 500 }
    );
  }
};
