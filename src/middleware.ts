import { NextRequest, NextResponse } from "next/server";

export const middleware = async (request: NextRequest, params: any) => {
  NextResponse.next();
};

export const config = {
  matcher: "/",
};
