import {SignIn} from "@clerk/nextjs";
import {auth, currentUser} from '@clerk/nextjs/server';
import axios from 'axios';

export default function SignInPage(){

    const {userId} = auth();

    if (userId){

    }
    return(<SignIn routing="hash" signUpUrl="/signup"/>)
}