import { NextResponse } from "next/server";
import { servicesDetails } from "@/constants/data";

export const GET = () => {
  try {
    return NextResponse.json({
      message: "Data fetched Successfully",
      success: true,
      servicesDetails,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
