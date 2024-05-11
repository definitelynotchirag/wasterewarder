import axios from "axios";
import { NextResponse, NextRequest } from "next/server";
import { connect } from "@/dbConfig/dbConfig";


connect();

export async function POST(req:NextRequest, res:NextResponse){
    try {
        const response = await res.json();
        const {userId} = response;
        
    } catch (error:any) {
        NextResponse.json({error:error.message}, {status: 401});
    }
}