import { NextRequest, NextResponse } from "next/server";
import { FirebaseAdmin } from "../_utils/firebaseAdmin";
import { Builder } from "../_utils/builder";

export async function POST(req: NextRequest) {
    const firebase = FirebaseAdmin.getInstance();

    const { userId } = req.body ?? {} as any;

    const homeConfig = await firebase.firestore().collection('config').doc('test').get();

    if (!homeConfig.exists) return NextResponse.json({ error: { message: 'User not found' } }, { status: 404 })

    const homePage = Builder.home(homeConfig.data());

    return NextResponse.json({
        body: { page: homePage },
        path: req.nextUrl.pathname,
    }, { status: 200 })
}
