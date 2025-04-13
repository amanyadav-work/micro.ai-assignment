import { dbConnect } from '@/utils/dbConnect';
import {User} from '@/models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function POST(req) {
    await dbConnect();
    const body = await req.json();
    const { email, password, role } = body;

    let user = await User.findOne({ email });

    if (!user) {
        return Response.json({ message: 'User not found' }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return Response.json({ message: 'Incorrect Password' }, { status: 401 });
    }

    const token = jwt.sign({ email, role }, process.env.JWT_SECRET);
    return Response.json({ message: 'Login successful', jwttoken: token }, { status: 200 });
}
